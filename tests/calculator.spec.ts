import { test, expect, type Page } from '@playwright/test';

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function goto(page: Page) {
  await page.goto('/');
  // Wait for the calculator card to be visible before any assertion
  await page.waitForSelector('#molar-mass');
}

/** Fill molar-mass, trigger input event, wait a tick for recalc */
async function setMolarMass(page: Page, value: string) {
  const el = page.locator('#molar-mass');
  await el.fill(value);
  await el.dispatchEvent('input');
}

async function setMass(page: Page, value: string) {
  const el = page.locator('#mass-input');
  await el.fill(value);
  await el.dispatchEvent('input');
}

async function setMoles(page: Page, value: string) {
  const el = page.locator('#moles-input');
  await el.fill(value);
  await el.dispatchEvent('input');
}

// ─── 1. Direction Toggle ──────────────────────────────────────────────────────

test.describe('Direction toggle', () => {
  test('default mode is g→mol: mass is editable, moles is readonly', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#mass-input')).not.toHaveAttribute('readonly');
    await expect(page.locator('#moles-input')).toHaveAttribute('readonly');
  });

  test('switching to mol→g: moles becomes editable, mass becomes readonly', async ({ page }) => {
    await goto(page);
    await page.click('#toggle-mol-to-g');
    await expect(page.locator('#moles-input')).not.toHaveAttribute('readonly');
    await expect(page.locator('#mass-input')).toHaveAttribute('readonly');
  });

  test('switching back to g→mol restores mass editable, moles readonly', async ({ page }) => {
    await goto(page);
    await page.click('#toggle-mol-to-g');
    await page.click('#toggle-g-to-mol');
    await expect(page.locator('#mass-input')).not.toHaveAttribute('readonly');
    await expect(page.locator('#moles-input')).toHaveAttribute('readonly');
  });
});

// ─── 2. Core Calculation ──────────────────────────────────────────────────────

test.describe('Core calculation', () => {
  test('g→mol: 18.015 g/mol + 18.015 g = 1 mol (shown as 1.000000)', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 5);
  });

  test('mol→g: 18.015 g/mol + 1 mol = 18.015 g (shown as 18.015000)', async ({ page }) => {
    await goto(page);
    await page.click('#toggle-mol-to-g');
    await setMolarMass(page, '18.015');
    await setMoles(page, '1');
    const result = await page.locator('#mass-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(18.015, 4);
  });

  test('result is formatted to 6 decimal places', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    const result = await page.locator('#moles-input').inputValue();
    expect(result).toMatch(/^\d+\.\d{6}$/);
  });
});

// ─── 3. Unit Pills – Conversions ─────────────────────────────────────────────

test.describe('Unit pill conversions', () => {
  // mg → g: 18015 mg = 18.015 g → 1 mol with 18.015 g/mol
  test('mass unit: switching to mg recalculates correctly (18015 mg → 1 mol)', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    // Select mg pill
    await page.locator('.unit-pill-mass[data-unit="mg"]').click();
    await setMass(page, '18015');
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 4);
  });

  // kg: 0.018015 kg = 18.015 g → 1 mol
  test('mass unit: switching to kg recalculates correctly (0.018015 kg → 1 mol)', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await page.locator('.unit-pill-mass[data-unit="kg"]').click();
    await setMass(page, '0.018015');
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 4);
  });

  // Molar mass unit: kg/kmol is numerically identical to g/mol
  test('molar mass unit: kg/kmol gives same result as g/mol (18.015 kg/kmol + 18.015 g → 1 mol)', async ({ page }) => {
    await goto(page);
    await page.locator('.unit-pill-mm[data-unit="kg/kmol"]').click();
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 4);
  });

  // Moles unit: mol→g direction, mmol: 1000 mmol = 1 mol → 18.015 g
  test('moles unit: switching to mmol recalculates correctly (1000 mmol → 18.015 g)', async ({ page }) => {
    await goto(page);
    await page.click('#toggle-mol-to-g');
    await setMolarMass(page, '18.015');
    await page.locator('.unit-pill-moles[data-unit="mmol"]').click();
    await setMoles(page, '1000');
    const result = await page.locator('#mass-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(18.015, 4);
  });
});

// ─── 4. Validation ───────────────────────────────────────────────────────────

test.describe('Validation', () => {
  test('molar mass = 0 shows inline error and clears result', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '0');
    await setMass(page, '10');
    await expect(page.locator('#molar-mass-error')).toBeVisible();
    // Result field should not show a numeric value
    const result = await page.locator('#moles-input').inputValue();
    expect(isNaN(parseFloat(result)) || result === '—' || result === '').toBeTruthy();
  });

  test('negative molar mass shows inline error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '-5');
    await setMass(page, '10');
    await expect(page.locator('#molar-mass-error')).toBeVisible();
  });

  test('negative mass shows inline error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '-1');
    await expect(page.locator('#mass-error')).toBeVisible();
  });

  test('correcting molar mass to valid value clears error and resumes calculation', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '0');
    await setMass(page, '18.015');
    // Error visible
    await expect(page.locator('#molar-mass-error')).toBeVisible();
    // Fix it
    await setMolarMass(page, '18.015');
    // Error gone
    await expect(page.locator('#molar-mass-error')).toBeHidden();
    // Calculation resumes
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 4);
  });

  test('correcting negative mass clears error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '-1');
    await expect(page.locator('#mass-error')).toBeVisible();
    await setMass(page, '18.015');
    await expect(page.locator('#mass-error')).toBeHidden();
  });
});

// ─── 5. Particle Count ───────────────────────────────────────────────────────

test.describe('Particle count', () => {
  // These assert the complete rendered string, not fragments. The previous
  // version matched /6\.0221/, /10/ and /23/ independently, which passed on
  // "6.02214 × 10^235 particles" — an exponent wrong by 10^212 — because /10/
  // matches the "10" in "10^" and /23/ matches the "23" inside "235".

  test('1 mol shows exactly 6.02214 × 10^23 particles', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015'); // → 1 mol
    // 1 mol × 6.02214076e23 = 6.02214076e23 → toExponential(5) → "6.02214e+23"
    const text = await page.locator('#particle-count-val').textContent();
    expect(text?.trim()).toBe('6.02214 × 10^23 particles');
  });

  test('2 mol shows exactly 1.20443 × 10^24 particles', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '36.03'); // → 2 mol
    // 2 mol × 6.02214076e23 = 1.204428152e24 → toExponential(5) → "1.20443e+24"
    const text = await page.locator('#particle-count-val').textContent();
    expect(text?.trim()).toBe('1.20443 × 10^24 particles');
  });

  test('a computed zero renders "0 particles", not a dash', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    // Produce a real result first. Without this the final assertion could pass
    // from the static markup, which already reads "0 particles" on load — the
    // string has to be one formatParticleCount(0) actually wrote.
    await setMass(page, '18.015');
    expect((await page.locator('#particle-count-val').textContent())?.trim())
      .toBe('6.02214 × 10^23 particles');

    // 0 g is a valid calculation, not an empty field: 0 / 18.015 = 0 mol.
    // This used to render the em-dash while the untouched empty state read
    // "0 particles", so the same logical state had two different renderings.
    await setMass(page, '0');
    const text = await page.locator('#particle-count-val').textContent();
    expect(text?.trim()).toBe('0 particles');
  });
});

// ─── 6. Browse Panel – Presets ───────────────────────────────────────────────

test.describe('Browse panel – Presets', () => {
  test('panel is hidden on load', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#browse-panel')).toBeHidden();
  });

  test('clicking trigger opens panel', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await expect(page.locator('#browse-panel')).toBeVisible();
  });

  test('selecting Water from the listbox fills Molar Mass with 18.015 and collapses panel', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();
    await page.getByRole('option', { name: /^Water/ }).click();
    // Molar Mass field should now show 18.015
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(18.015, 3);
    // Panel should be collapsed
    await expect(page.locator('#browse-panel')).toBeHidden();
  });

  test('selecting Carbon Dioxide fills Molar Mass with 44.01', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await page.getByRole('option', { name: /^Carbon Dioxide/ }).click();
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(44.01, 2);
  });

  test('trigger shows the last-picked compound (not the placeholder) after selection, in sync with its accessible name', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await page.getByRole('option', { name: /^Water/ }).click();

    // Visible label reflects the pick — shorter than the option row's own
    // text (which also carries "— <mass> g/mol"), since Molar Mass itself
    // already shows that once filled. Checked via text content rather than
    // accessible name here: selecting also collapses #browse-panel (hidden),
    // and a hidden element has no accessible name to check yet — that's
    // covered below once the panel is reopened.
    await expect(page.locator('#preset-trigger')).toHaveText('Water (H₂O)');

    // Reopening pre-highlights the same compound rather than starting over,
    // and — now that the trigger is visible again — its accessible name
    // (aria-labelledby="preset-label preset-trigger-label") tracks the same
    // text automatically, not just the visible label.
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-trigger')).toHaveAccessibleName(/Water \(H₂O\)/);
    const waterOption = page.getByRole('option', { name: /^Water/ });
    const waterId = await waterOption.getAttribute('id');
    await expect(page.locator('#preset-trigger')).toHaveAttribute('aria-activedescendant', waterId!);
    await expect(waterOption).toHaveAttribute('aria-selected', 'true');

    // A second selection replaces the label, not stacks onto it.
    await page.getByRole('option', { name: /^Carbon Dioxide/ }).click();
    await expect(page.locator('#preset-trigger')).toHaveText('Carbon Dioxide (CO₂)');
  });

  test('listbox is closed until the trigger is clicked, and shows a placeholder', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await expect(page.locator('#preset-listbox')).toBeHidden();
    await expect(page.locator('#preset-trigger')).toHaveText('Select a compound…');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();
  });

  test('keyboard flow: Enter opens the listbox, arrows move, Enter selects', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.locator('#preset-trigger').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#preset-listbox')).toBeVisible();
    // First option (Water) is highlighted on open
    await expect(page.locator('#preset-trigger')).toHaveAttribute('aria-activedescendant', 'preset-option-0');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#preset-trigger')).toHaveAttribute('aria-activedescendant', 'preset-option-1');
    await page.keyboard.press('Enter');
    // Table Salt (index 1) — 58.44 g/mol
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(58.44, 2);
    await expect(page.locator('#browse-panel')).toBeHidden();
  });

  test('Escape closes the listbox without selecting', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#preset-listbox')).toBeHidden();
    await expect(page.locator('#preset-trigger')).toHaveAttribute('aria-expanded', 'false');
    // Panel itself stays open — only the listbox closed
    await expect(page.locator('#browse-panel')).toBeVisible();
  });

  test('clicking outside the listbox closes it', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();
    await page.mouse.click(10, 10);
    await expect(page.locator('#preset-listbox')).toBeHidden();
  });

  // Regression test: mouse hover over an option produced no visual feedback
  // at all — option elements were built with no `hover:` class and no
  // mouse/pointer listener of any kind, so nothing updated on mouseover.
  // Uses a real `hover()` (mousemove-driven), not a click or keyboard path,
  // since that's specifically what was broken.
  test('hovering an option highlights it (bg-surface-2) and updates aria-activedescendant', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();

    const target = page.getByRole('option', { name: /^Nitric Acid/ });
    const targetId = await target.getAttribute('id');
    await target.hover();

    await expect(target).toHaveClass(/bg-surface-2/);
    await expect(page.locator('#preset-trigger')).toHaveAttribute('aria-activedescendant', targetId!);

    // Moving to a different option moves the highlight, not just adds to it.
    const other = page.getByRole('option', { name: /^Water/ });
    await other.hover();
    await expect(target).not.toHaveClass(/bg-surface-2/);
    await expect(other).toHaveClass(/bg-surface-2/);
  });

  // Regression test for a real bug: #browse-panel (an ancestor of the
  // listbox, several levels up) carries overflow-hidden for its own rounded
  // corners. An earlier version of the listbox was `position: absolute`,
  // whose containing block sat *inside* that clipping box, so the popup
  // rendered but was cut off after ~1 option. `toBeVisible()`/`boundingBox()`
  // on the listbox container itself did NOT catch this — Playwright's
  // visibility check doesn't account for a clipping ancestor, only for the
  // element's own display/visibility/opacity and whether it has a non-empty
  // layout box. Catching it for real requires checking the popup renders at
  // its intended full size, and that content far from the trigger is
  // actually painted and hit-testable at its own coordinates — not just
  // that it has a computed bounding box.
  test('listbox is not clipped by an ancestor: it renders at full height and the last option is reachable and hit-testable', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');

    const listbox = page.locator('#preset-listbox');
    await expect(listbox).toBeVisible();
    await expect(page.locator('#preset-listbox [role="option"]')).toHaveCount(20);

    // Under the old bug the popup was clipped to ~1 row instead of its
    // intended max-h-72 (288px) — a box height this close to that cap is
    // direct evidence it's rendering at full size, not truncated by an
    // ancestor's overflow:hidden.
    const box = (await listbox.boundingBox())!;
    expect(box.height).toBeGreaterThan(250);

    // The definitive check: scroll to and hit-test the last option's own
    // center point. If an ancestor were still clipping the popup, this
    // coordinate would either paint whatever sits behind the clip (e.g.
    // #browse-panel or the page background) or nothing at all — not the
    // option itself.
    const lastOption = page.getByRole('option', { name: /^Copper\(II\) Sulfate/ });
    await lastOption.scrollIntoViewIfNeeded();
    const optionId = await lastOption.getAttribute('id');
    const optBox = (await lastOption.boundingBox())!;
    const cx = optBox.x + optBox.width / 2;
    const cy = optBox.y + optBox.height / 2;
    const isHitTestable = await page.evaluate(
      ({ x, y, id }) => {
        const el = document.elementFromPoint(x, y);
        return !!el && (el.id === id || !!el.closest(`#${CSS.escape(id!)}`));
      },
      { x: cx, y: cy, id: optionId }
    );
    expect(isHitTestable).toBe(true);

    // Selecting that last, previously-clipped option still works end to end.
    await lastOption.click();
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(159.602, 2);
  });

  test('listbox stays open and repositions (rather than closing) when the page scrolls or resizes', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-presets');
    await page.click('#preset-trigger');
    await expect(page.locator('#preset-listbox')).toBeVisible();

    // Dispatched directly rather than relying on the page actually having
    // scrollable overflow at this viewport size — what matters here is that
    // a scroll/resize tick doesn't close the popup (it used to: closing on
    // scroll raced with the Browse Elements panel's own open-time
    // smooth-scroll animation and could close a listbox the instant it
    // opened — see the handlePresetViewportChange comment).
    await page.evaluate(() => window.dispatchEvent(new Event('scroll')));
    await expect(page.locator('#preset-listbox')).toBeVisible();

    await page.evaluate(() => window.dispatchEvent(new Event('resize')));
    await expect(page.locator('#preset-listbox')).toBeVisible();
  });
});

// ─── 7. Browse Panel – Build Custom ──────────────────────────────────────────

test.describe('Browse panel – Build custom', () => {
  async function openCustomTab(page: Page) {
    await page.click('#browse-trigger');
    await page.click('#tab-custom');
    // Wait for element grid to render
    await page.waitForSelector('#element-grid button', { state: 'visible' });
  }

  test('switching to Build custom tab shows element grid', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await expect(page.locator('#element-grid')).toBeVisible();
    // Should have 63 element cards (full IUPAC/CIAAW 2024 dataset, Tc omitted)
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(63);
  });

  test('H2O formula: 2x Hydrogen + 1x Oxygen = 18.015 g/mol', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    // Click Hydrogen card (adds qty 1), then click plus to make it 2
    const hCard = page.locator('#element-grid > div').filter({ hasText: 'H' }).first();
    await hCard.locator('button').first().click(); // info area click → qty 1

    // The body click above mounted the stepper; + is only reachable after it
    await hCard.locator('[data-step="plus"]').click();

    // Click Oxygen card
    const oCard = page.locator('#element-grid > div').filter({ hasText: 'Oxygen' }).first();
    await oCard.locator('button').first().click();

    // Check formula bar shows ~18.015
    const massText = await page.locator('#custom-molar-mass-val').textContent();
    const massNum = parseFloat(massText?.replace(/[^\d.]/g, '') ?? 'NaN');
    expect(massNum).toBeCloseTo(18.015, 2);
  });

  test('"Use this molar mass" applies custom molar mass and collapses panel', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    // Add 1x Carbon
    const cCard = page.locator('#element-grid > div').filter({ hasText: 'Carbon' }).first();
    await cCard.locator('button').first().click();

    // Apply
    await page.click('#use-custom');

    // Molar mass should now be ~12.011
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(12.011, 2);
    // Panel collapsed
    await expect(page.locator('#browse-panel')).toBeHidden();
  });
});

// ─── 7b. Element Tile – Selection Model ──────────────────────────────────────

test.describe('Element tile – selection model', () => {
  async function openCustomTab(page: Page) {
    await page.click('#browse-trigger');
    await page.click('#tab-custom');
    await page.waitForSelector('#element-grid button', { state: 'visible' });
  }

  const hTile = (page: Page) => page.locator('#element-grid > div[data-symbol="H"]');

  test('unselected tile has no stepper and is not in the formula', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    // No stepper exists until the tile is selected — asserting its absence is
    // the whole point of this test, so it must stay a count-zero check.
    await expect(tile.locator('[data-step]')).toHaveCount(0);
    await expect(tile.locator('button').first()).not.toHaveAttribute('aria-current');
    await expect(page.locator('#custom-molar-mass-val')).toHaveText('—');
  });

  test('clicking the tile body reveals the stepper at 1 and selects', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    await expect(tile.locator('[data-step]')).toHaveCount(0);

    await tile.locator('button').first().click();

    // The stepper is mounted by the select action, starting at 1
    await expect(tile.locator('[data-step]')).toHaveCount(2);
    await expect(tile.getByText('1', { exact: true })).toBeVisible();
    await expect(tile.locator('button').first()).toHaveAttribute('aria-current', 'true');
    const mass = await page.locator('#custom-molar-mass-val').textContent();
    expect(parseFloat(mass?.replace(/[^\d.]/g, '') ?? 'NaN')).toBeCloseTo(1.008, 2);
  });

  test('minus at a count of 1 deselects and removes the stepper', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    await tile.locator('button').first().click(); // selected, count 1
    await expect(tile.locator('button').first()).toHaveAttribute('aria-current', 'true');

    await tile.locator('[data-step="minus"]').click();

    // Stepper gone, tile back to its default appearance, out of the formula
    await expect(tile.locator('[data-step]')).toHaveCount(0);
    await expect(tile.locator('button').first()).not.toHaveAttribute('aria-current');
    // Move off the tile first: clicking leaves the pointer on it, and the tile
    // hover state would legitimately report hairline-tertiary instead of hairline.
    // Edge is box-shadow:inset, not border (see DESIGN.md) — assert on boxShadow.
    await page.mouse.move(0, 0);
    await expect
      .poll(() => tile.evaluate(n => getComputedStyle(n).boxShadow))
      .toContain('rgb(229, 226, 218) 0px 0px 0px 1px inset');
    await expect(page.locator('#custom-molar-mass-val')).toHaveText('—');
  });

  test('minus at 2 or above decrements and stays selected', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    // The stepper only exists after selecting, so + is reachable only here
    await tile.locator('button').first().click(); // selected, count 1
    await tile.locator('[data-step="plus"]').click(); // count 2
    await tile.locator('[data-step="minus"]').click(); // back to 1

    await expect(tile.locator('[data-step]')).toHaveCount(2);
    await expect(tile.locator('button').first()).toHaveAttribute('aria-current', 'true');
    const mass = await page.locator('#custom-molar-mass-val').textContent();
    expect(parseFloat(mass?.replace(/[^\d.]/g, '') ?? 'NaN')).toBeCloseTo(1.008, 2);
  });

  test('hovering an unselected tile strengthens its edge, without a fill', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    // Edge is box-shadow:inset, not border (see DESIGN.md) — assert on boxShadow.
    const tile = hTile(page);
    await expect
      .poll(() => tile.evaluate(n => getComputedStyle(n).boxShadow))
      .toContain('rgb(229, 226, 218) 0px 0px 0px 1px inset'); // hairline

    await tile.hover();

    await expect
      .poll(() => tile.evaluate(n => getComputedStyle(n).boxShadow))
      .toContain('rgb(196, 192, 178) 0px 0px 0px 1px inset'); // hairline-tertiary
    // Hover is edge-only — no fill, same as the selected state
    expect(await tile.evaluate(n => getComputedStyle(n).backgroundColor)).toBe('rgb(255, 255, 255)');

    // A selected tile must NOT fall back to the neutral hover edge
    await tile.locator('button').first().click();
    await tile.hover();
    await expect
      .poll(() => tile.evaluate(n => getComputedStyle(n).boxShadow))
      .toContain('rgb(2, 97, 62) 0px 0px 0px 1px inset'); // primary, still
  });

  // Both buttons must hover identically — same fill, same shape, same size.
  for (const kind of ['plus', 'minus'] as const) {
    test(`hovering ${kind} fills a 24px surface-4 circle`, async ({ page }) => {
      await goto(page);
      await openCustomTab(page);

      const tile = hTile(page);
      await tile.locator('button').first().click(); // stepper only exists once selected

      const box = tile.locator(`[data-step="${kind}"] > span`);
      expect(await box.evaluate(n => getComputedStyle(n).backgroundColor)).toBe('rgba(0, 0, 0, 0)');

      await tile.locator(`[data-step="${kind}"]`).hover();

      await expect
        .poll(() => box.evaluate(n => getComputedStyle(n).backgroundColor))
        .toBe('rgb(232, 230, 223)'); // surface-4 — the same for both buttons
      expect(await box.evaluate(n => getComputedStyle(n).borderRadius)).toBe('50%');
      const rect = await box.boundingBox();
      expect(rect?.width).toBe(24);
      expect(rect?.height).toBe(24);
    });
  }

  test('+ and − glyphs are built identically and sit dead-centre', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    await tile.locator('button').first().click();

    const geom = await tile.evaluate(n => ['minus', 'plus'].map(k => {
      const btn = n.querySelector(`[data-step="${k}"]`)!;
      const circle = btn.querySelector('span')!.getBoundingClientRect();
      const svg = btn.querySelector('svg')!;
      const r = svg.getBoundingClientRect();
      const p = svg.querySelector('path')!.getBoundingClientRect();
      return {
        viewBox: svg.getAttribute('viewBox'),
        svgBox: [+r.width.toFixed(2), +r.height.toFixed(2)],
        dx: +((p.x + p.width / 2) - (circle.x + circle.width / 2)).toFixed(2),
        dy: +((p.y + p.height / 2) - (circle.y + circle.height / 2)).toFixed(2),
      };
    }));
    const [minus, plus] = geom;

    // Same coordinate system and same rendered box — a mismatched viewBox is
    // what previously clipped the minus stroke to 1.28px against the plus's 1.5px.
    expect(minus.viewBox).toBe(plus.viewBox);
    expect(minus.svgBox).toEqual(plus.svgBox);
    // Both centred in their circle, and centred the same way as each other
    for (const g of geom) {
      expect(Math.abs(g.dx)).toBeLessThanOrEqual(0.5);
      expect(Math.abs(g.dy)).toBeLessThanOrEqual(0.5);
    }
  });

  test('the stepper has no container border or fill of its own', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    await tile.locator('button').first().click();

    const stepper = tile.locator('[data-step="minus"]').locator('..');
    const s = await stepper.evaluate(n => {
      const c = getComputedStyle(n);
      return { border: c.borderTopWidth, bg: c.backgroundColor, padding: c.padding };
    });
    expect(s.border).toBe('0px');
    expect(s.bg).toBe('rgba(0, 0, 0, 0)');
    expect(s.padding).toBe('0px');
  });

  test('grid columns and gaps resolve to whole pixels', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const geo = await page.evaluate(() => {
      const g = document.getElementById('element-grid')!;
      const tiles = [...g.querySelectorAll('div[data-symbol]')];
      const cs = getComputedStyle(g);
      return {
        widths: [...new Set(tiles.map(t => t.getBoundingClientRect().width))],
        startFractions: [...new Set(tiles.map(t => +(t.getBoundingClientRect().x % 1).toFixed(4)))],
        columnGap: parseFloat(cs.columnGap),
      };
    });

    // One uniform column width, and it is a whole pixel
    expect(geo.widths).toHaveLength(1);
    expect(Number.isInteger(geo.widths[0])).toBe(true);
    // Wide enough that the longest name still fits with the stepper mounted
    expect(geo.widths[0]).toBeGreaterThanOrEqual(222);
    // Every column starts on the same pixel boundary. This is the assertion
    // that matters: `1fr` gave each column a different sub-pixel remainder
    // (.3281 / .6563 / .9844), so identical controls antialiased differently
    // from column to column.
    expect(geo.startFractions).toHaveLength(1);
    expect(Number.isInteger(geo.columnGap)).toBe(true);
  });

  test('selected state is edge-only — background does not change', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    // Edge is box-shadow:inset, not border (see DESIGN.md) — assert on boxShadow.
    const tile = hTile(page);
    const bgBefore = await tile.evaluate(n => getComputedStyle(n).backgroundColor);
    const edgeBefore = await tile.evaluate(n => getComputedStyle(n).boxShadow);

    await tile.locator('button').first().click();

    // Poll past the 150ms color transition
    await expect
      .poll(() => tile.evaluate(n => getComputedStyle(n).boxShadow))
      .toContain('rgb(2, 97, 62) 0px 0px 0px 1px inset');
    const bgAfter = await tile.evaluate(n => getComputedStyle(n).backgroundColor);

    // Background is untouched white in both states
    expect(bgBefore).toBe('rgb(255, 255, 255)');
    expect(bgAfter).toBe('rgb(255, 255, 255)');
    // Only the edge moves, hairline -> primary green
    expect(edgeBefore).toContain('rgb(229, 226, 218) 0px 0px 0px 1px inset');
  });
});

// ─── 8. Element Search Filter ────────────────────────────────────────────────

test.describe('Element search filter', () => {
  async function openCustomTab(page: Page) {
    await page.click('#browse-trigger');
    await page.click('#tab-custom');
    await page.waitForSelector('#element-grid > div', { state: 'visible' });
  }

  test('"sod" filters to show only Sodium', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'sod');
    // Only Sodium should be in the grid
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Na');
  });

  test('"iron" filters to show only Iron', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'iron');
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Fe');
  });

  test('clearing search restores all 63 elements', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'sod');
    await page.fill('#element-search', '');
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(63);
  });

  test('no-match query shows empty state message', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'zzz');
    await expect(page.locator('#element-grid-empty')).toBeVisible();
  });
});

// ─── 9. Touch Target Sizes (mobile) ──────────────────────────────────────────

test.describe('Touch targets – 44px minimum', () => {
  test.use({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro
  });

  test('all unit pills on mobile are at least 44px tall', async ({ page }) => {
    await goto(page);
    const pills = page.locator('.unit-pill-mm, .unit-pill-mass, .unit-pill-moles');
    const count = await pills.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const box = await pills.nth(i).boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('stepper +/- buttons in Browse custom tab are at least 44px tall', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.click('#tab-custom');
    await page.waitForSelector('#element-grid > div', { state: 'visible' });

    // REQUIRED: the stepper does not exist until the tile is selected, so this
    // click is a prerequisite, not a convenience. Removing it makes the loop
    // below iterate zero elements and pass vacuously.
    await page.locator('#element-grid > div').first().locator('button').first().click();
    await page.waitForTimeout(100);

    const stepperButtons = page.locator('#element-grid > div').first().locator('[data-step]');
    const count = await stepperButtons.count();
    expect(count).toBe(2);
    for (let i = 0; i < count; i++) {
      const box = await stepperButtons.nth(i).boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});

// ─── 10. Molar Mass Mode Dropdown ────────────────────────────────────────────
// Stage 1 of the mode-selector rebuild: dropdown shell + mode-switching state
// only. "Build custom"/"Compounds" don't wire up their panels yet (stages
// 3-4), so these tests cover the dropdown itself, not what a selected mode
// does beyond updating its own label and the "+" stepper's visibility.

test.describe('Molar Mass mode dropdown', () => {
  test('default mode is "Type in" on load, and the "+" button is visible', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Type in');
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#molar-mass-stepper')).toBeVisible();
    await expect(page.locator('#molar-mass-step-up')).toBeVisible();
  });

  test('clicking the trigger opens the listbox with all three options', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
    await page.click('#molar-mass-mode-trigger');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeVisible();
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-expanded', 'true');
    const options = page.locator('#molar-mass-mode-listbox [role="option"]');
    await expect(options).toHaveCount(3);
    await expect(options.nth(0)).toHaveText('Type in');
    await expect(options.nth(1)).toHaveText('Build custom');
    await expect(options.nth(2)).toHaveText('Compounds');
  });

  test('clicking the trigger again closes the listbox', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeVisible();
    await page.click('#molar-mass-mode-trigger');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking outside the listbox closes it', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeVisible();
    await page.mouse.click(10, 10);
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
  });

  test('keyboard flow: ArrowDown opens and highlights, ArrowDown again moves, Enter selects', async ({ page }) => {
    await goto(page);
    await page.locator('#molar-mass-mode-trigger').focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeVisible();
    // "Type in" (the current selection) is highlighted first
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-activedescendant', 'molar-mass-mode-option-0');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-activedescendant', 'molar-mass-mode-option-1');
    await page.keyboard.press('Enter');
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Build custom');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
  });

  test('ArrowUp moves the highlight backward', async ({ page }) => {
    await goto(page);
    await page.locator('#molar-mass-mode-trigger').focus();
    await page.keyboard.press('ArrowDown'); // open, highlight index 0
    await page.keyboard.press('ArrowDown'); // index 1
    await page.keyboard.press('ArrowUp'); // back to index 0
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-activedescendant', 'molar-mass-mode-option-0');
  });

  test('Escape closes the listbox without changing the selected mode', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.keyboard.press('ArrowDown'); // highlight "Build custom"
    await page.keyboard.press('Escape');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Type in');
  });

  test('selecting "Build custom" updates the label and hides the "+" button', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom' }).click();
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Build custom');
    await expect(page.locator('#molar-mass-mode-listbox')).toBeHidden();
    await expect(page.locator('#molar-mass-stepper')).toBeHidden();
  });

  test('selecting "Compounds" updates the label and hides the "+" button', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Compounds' }).click();
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Compounds');
    await expect(page.locator('#molar-mass-stepper')).toBeHidden();
  });

  test('switching back to "Type in" restores the label and reveals the "+" button', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Compounds' }).click();
    await expect(page.locator('#molar-mass-stepper')).toBeHidden();

    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Type in' }).click();
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Type in');
    await expect(page.locator('#molar-mass-stepper')).toBeVisible();
  });

  test('reopening the listbox pre-highlights the currently selected mode', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Compounds' }).click();

    await page.click('#molar-mass-mode-trigger');
    await expect(page.locator('#molar-mass-mode-trigger')).toHaveAttribute('aria-activedescendant', 'molar-mass-mode-option-2');
    await expect(page.getByRole('option', { name: 'Compounds' })).toHaveAttribute('aria-selected', 'true');
  });

  test('the mode dropdown does not disturb the Molar Mass value or calculation', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom' }).click();
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(18.015, 3);
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 5);
  });
});
