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

// ─── 6. Element Tile – Selection Model ───────────────────────────────────────
//
// The element grid's tile/stepper rendering, exercised through the Build custom
// mode panel — the only place it is mounted. These assertions are about the
// shared createElementGrid() component, not about that panel's wiring (which
// section 11 covers), so they only need one instance to run against.

test.describe('Element tile – selection model', () => {
  async function openCustomTab(page: Page) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom', exact: true }).click();
    await page.waitForSelector('#molar-mass-element-grid button', { state: 'visible' });
  }

  const hTile = (page: Page) => page.locator('#molar-mass-element-grid > div[data-symbol="H"]');

  test('unselected tile has no stepper and is not in the formula', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    const tile = hTile(page);
    // No stepper exists until the tile is selected — asserting its absence is
    // the whole point of this test, so it must stay a count-zero check.
    await expect(tile.locator('[data-step]')).toHaveCount(0);
    await expect(tile.locator('button').first()).not.toHaveAttribute('aria-current');
    await expect(page.locator('#molar-mass-custom-mass')).toHaveText('—');
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
    const mass = await page.locator('#molar-mass-custom-mass').textContent();
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
    await expect(page.locator('#molar-mass-custom-mass')).toHaveText('—');
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
    const mass = await page.locator('#molar-mass-custom-mass').textContent();
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
      const g = document.getElementById('molar-mass-element-grid')!;
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

// ─── 7. Element Search Filter ────────────────────────────────────────────────

test.describe('Element search filter', () => {
  async function openCustomTab(page: Page) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom', exact: true }).click();
    await page.waitForSelector('#molar-mass-element-grid > div', { state: 'visible' });
  }

  test('"sod" filters to show only Sodium', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#molar-mass-element-search', 'sod');
    // Only Sodium should be in the grid
    const cards = page.locator('#molar-mass-element-grid > div');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Na');
  });

  test('"iron" filters to show only Iron', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#molar-mass-element-search', 'iron');
    const cards = page.locator('#molar-mass-element-grid > div');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Fe');
  });

  test('clearing search restores all 63 elements', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#molar-mass-element-search', 'sod');
    await page.fill('#molar-mass-element-search', '');
    const cards = page.locator('#molar-mass-element-grid > div');
    await expect(cards).toHaveCount(63);
  });

  test('no-match query shows empty state message', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#molar-mass-element-search', 'zzz');
    await expect(page.locator('#molar-mass-element-grid-empty')).toBeVisible();
  });
});

// ─── 8. Touch Target Sizes (mobile) ──────────────────────────────────────────

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

  test('stepper +/- buttons in the Build custom panel are at least 44px tall', async ({ page }) => {
    await goto(page);
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom', exact: true }).click();
    await page.waitForSelector('#molar-mass-element-grid > div', { state: 'visible' });

    // REQUIRED: the stepper does not exist until the tile is selected, so this
    // click is a prerequisite, not a convenience. Removing it makes the loop
    // below iterate zero elements and pass vacuously.
    await page.locator('#molar-mass-element-grid > div').first().locator('button').first().click();
    await page.waitForTimeout(100);

    const stepperButtons = page.locator('#molar-mass-element-grid > div').first().locator('[data-step]');
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

// ─── 9. Molar Mass Mode Dropdown ────────────────────────────────────────────
// The dropdown itself: its ARIA listbox behaviour, its label, and the "+"
// stepper's visibility. What each selected mode then SHOWS is covered by the
// per-mode state and panel sections below.

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

  // The field is a view onto the active mode's own slot, so switching to an
  // untouched mode shows that mode's EMPTY slot, not the outgoing value. What
  // must hold is that the typed value is preserved rather than destroyed, and
  // comes back intact — covered in depth in the per-mode state section below;
  // kept here as the dropdown-level guarantee.
  test('the mode dropdown preserves the typed Molar Mass and restores it on return', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(1.0, 5);

    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Build custom' }).click();
    await expect(page.locator('#molar-mass')).toHaveValue('');

    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: 'Type in' }).click();
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(1.0, 5);
  });
});

// ─── 10. Molar Mass Per-Mode State ───────────────────────────────────────────
// Each mode owns an independent value slot, and #molar-mass is a view onto
// whichever slot is active. These drive the documented window.molarMassMode
// hook directly rather than going through a panel — the hook is the same entry
// point the panels use, and it can also write a slot for a mode that is not
// active, which no UI path can do.

test.describe('Molar Mass per-mode state', () => {
  type Mode = 'type-in' | 'build-custom' | 'compounds';

  /** Write a mode's slot through the exposed hook, as a mode panel would. */
  async function setModeValue(page: Page, mode: Mode, data: unknown) {
    await page.evaluate(
      ({ mode, data }) => (window as any).molarMassMode.set(mode, data),
      { mode, data }
    );
  }

  async function getModeValue(page: Page, mode: Mode) {
    return page.evaluate(
      (mode) => (window as any).molarMassMode.get(mode),
      mode
    );
  }

  /** Switch mode through the real UI, not the hook — that's the path users take. */
  async function pickMode(page: Page, label: string) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: label, exact: true }).click();
  }

  test('Type in: typing updates the stored slot', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '44.01');
    expect(await getModeValue(page, 'type-in')).toEqual({ raw: '44.01' });
  });

  test('Type in: a typed value survives switching away and back', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');

    await pickMode(page, 'Build custom');
    // The field now shows Build custom's (empty) slot, not the typed value
    await expect(page.locator('#molar-mass')).toHaveValue('');

    await pickMode(page, 'Type in');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(await getModeValue(page, 'type-in')).toEqual({ raw: '18.015' });
  });

  test('Build custom: a value set via the hook persists across a mode round-trip and displays', async ({ page }) => {
    await goto(page);
    await setModeValue(page, 'build-custom', {
      quantities: { H: 2, O: 1 },
      formula: 'H2O',
      molarMass: 18.015,
    });

    // Written while inactive — staged silently, field untouched
    await expect(page.locator('#molar-mass')).toHaveValue('');

    await pickMode(page, 'Build custom');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);

    await pickMode(page, 'Type in');
    await pickMode(page, 'Build custom');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(await getModeValue(page, 'build-custom')).toEqual({
      quantities: { H: 2, O: 1 },
      formula: 'H2O',
      molarMass: 18.015,
    });
  });

  test('Compounds: a value set via the hook persists across a mode round-trip and displays', async ({ page }) => {
    await goto(page);
    await setModeValue(page, 'compounds', {
      name: 'Water',
      formula: 'H₂O',
      molarMass: 18.015,
    });

    await pickMode(page, 'Compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);

    await pickMode(page, 'Type in');
    await pickMode(page, 'Compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(await getModeValue(page, 'compounds')).toEqual({
      name: 'Water',
      formula: 'H₂O',
      molarMass: 18.015,
    });
  });

  test('Type in is freely editable; the other two modes are read-only', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', false);

    await pickMode(page, 'Build custom');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);

    await pickMode(page, 'Compounds');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);

    await pickMode(page, 'Type in');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', false);
  });

  test('typing is rejected in a read-only mode and cannot corrupt another slot', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015'); // Type-in slot
    await setModeValue(page, 'compounds', { name: 'Glucose', formula: 'C₆H₁₂O₆', molarMass: 180.16 });

    await pickMode(page, 'Compounds');
    await page.locator('#molar-mass').focus();
    await page.keyboard.type('999');

    // Field unchanged, and neither slot moved
    await expect(page.locator('#molar-mass')).toHaveValue('180.16');
    expect(await getModeValue(page, 'compounds')).toEqual({
      name: 'Glucose', formula: 'C₆H₁₂O₆', molarMass: 180.16,
    });
    expect(await getModeValue(page, 'type-in')).toEqual({ raw: '18.015' });
  });

  test('switching modes never clears any other mode\'s stored state', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '12.011');
    await setModeValue(page, 'build-custom', { quantities: { C: 1 }, formula: 'C', molarMass: 12.011 });
    await setModeValue(page, 'compounds', { name: 'Ethanol', formula: 'C₂H₅OH', molarMass: 46.07 });

    // Cycle through every mode twice
    for (let i = 0; i < 2; i++) {
      await pickMode(page, 'Build custom');
      await pickMode(page, 'Compounds');
      await pickMode(page, 'Type in');
    }

    expect(await getModeValue(page, 'type-in')).toEqual({ raw: '12.011' });
    expect(await getModeValue(page, 'build-custom')).toEqual({
      quantities: { C: 1 }, formula: 'C', molarMass: 12.011,
    });
    expect(await getModeValue(page, 'compounds')).toEqual({
      name: 'Ethanol', formula: 'C₂H₅OH', molarMass: 46.07,
    });
  });

  test('an untouched mode shows the placeholder, not the previous mode\'s value', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await pickMode(page, 'Compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('');
    // Placeholder is what's actually rendered in an empty read-only field
    await expect(page.locator('#molar-mass')).toHaveAttribute('placeholder', 'e.g. 18.02');
    expect(await getModeValue(page, 'compounds')).toEqual({
      name: null, formula: null, molarMass: null,
    });
  });

  test('a read-only mode input stays in the accessibility tree: enabled, focusable, labelled', async ({ page }) => {
    await goto(page);
    await setModeValue(page, 'build-custom', { quantities: { C: 1 }, formula: 'C', molarMass: 12.011 });
    await pickMode(page, 'Build custom');

    const input = page.locator('#molar-mass');
    // readOnly, explicitly NOT disabled — a disabled input leaves the tab
    // order and is skipped by some screen readers, and this value is real
    // content a non-typing user still needs to read.
    await expect(input).toHaveJSProperty('readOnly', true);
    await expect(input).toHaveJSProperty('disabled', false);
    await expect(input).toBeEnabled();
    await expect(input).toHaveAccessibleName(/Molar Mass/i);

    // Still reachable by focus
    await input.focus();
    await expect(input).toBeFocused();
  });

  test('the displayed value swaps in the same tick as the mode — no stale frame', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setModeValue(page, 'compounds', { name: 'Glucose', formula: 'C₆H₁₂O₆', molarMass: 180.16 });

    await page.click('#molar-mass-mode-trigger');
    // Read the label and the value from the SAME evaluate, immediately after
    // the click resolves: if the input lagged the mode by a frame, these two
    // would disagree here.
    const [label, value] = await page.evaluate(() => {
      const opts = [...document.querySelectorAll('#molar-mass-mode-listbox [role="option"]')] as HTMLElement[];
      opts.find(o => o.textContent === 'Compounds')!.click();
      return [
        document.getElementById('molar-mass-mode-label')!.textContent,
        (document.getElementById('molar-mass') as HTMLInputElement).value,
      ];
    });
    expect(label).toBe('Compounds');
    expect(value).toBe('180.16');
  });

  test('switching to a mode recalculates against that mode\'s molar mass', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015');
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(1.0, 5);

    // 36.03 g/mol against the same 18.015 g of mass → 0.5 mol
    await setModeValue(page, 'build-custom', { quantities: { H: 4, O: 2 }, formula: 'H4O2', molarMass: 36.03 });
    await pickMode(page, 'Build custom');
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(0.5, 5);

    // ...and back to the typed value
    await pickMode(page, 'Type in');
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(1.0, 5);
  });

  test('setModeValue on the ACTIVE mode updates the field immediately', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('');

    await setModeValue(page, 'compounds', { name: 'Ammonia', formula: 'NH₃', molarMass: 17.031 });
    await expect(page.locator('#molar-mass')).toHaveValue('17.031');
  });
});

// ─── 11. Molar Mass "Build custom" panel ─────────────────────────────────────
// The element picker mounted under the Molar Mass field: this section covers the
// panel's own wiring — overlay geometry, slot writes, restore-on-return — while
// section 6 covers the grid component it hosts. There is no confirm STEP: the
// field is a live view onto the build-custom slot, so every tile click lands
// in it. The panel does hold a "Use this molar mass" button, but its only job
// is closing the panel deliberately — see section 13 for that and every other
// dismiss path.

test.describe('Molar Mass Build custom panel', () => {
  const PANEL = '#molar-mass-build-panel';
  const GRID = '#molar-mass-element-grid';

  async function pickMode(page: Page, label: string) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: label, exact: true }).click();
  }

  function tile(page: Page, symbol: string) {
    return page.locator(`${GRID} [data-symbol="${symbol}"]`);
  }

  /** Click a tile's body — the select action, which reveals its stepper at 1. */
  async function selectElement(page: Page, symbol: string) {
    await tile(page, symbol).getByRole('button').first().click();
  }

  async function stepElement(page: Page, symbol: string, dir: 'plus' | 'minus', times = 1) {
    const btn = tile(page, symbol).locator(`[data-step="${dir}"]`);
    for (let i = 0; i < times; i++) await btn.click();
  }

  /** Build H₂O in the panel: 2 × H (1.0080) + 1 × O (15.999) = 18.015 g/mol. */
  async function buildWater(page: Page) {
    await selectElement(page, 'H');
    await stepElement(page, 'H', 'plus');
    await selectElement(page, 'O');
  }

  async function getBuildCustom(page: Page) {
    return page.evaluate(() => (window as any).molarMassMode.get('build-custom'));
  }

  test('the panel is hidden until Build custom is the active mode', async ({ page }) => {
    await goto(page);
    await expect(page.locator(PANEL)).toBeHidden();

    await pickMode(page, 'Build custom');
    await expect(page.locator(PANEL)).toBeVisible();

    await pickMode(page, 'Compounds');
    await expect(page.locator(PANEL)).toBeHidden();

    await pickMode(page, 'Type in');
    await expect(page.locator(PANEL)).toBeHidden();
  });

  test('the panel renders the full element catalogue with a working search', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await expect(tile(page, 'H')).toBeVisible();
    await expect(tile(page, 'U')).toBeAttached();
    // The whole dataset, not a prefix of it: 63 element cards (full
    // IUPAC/CIAAW 2024 seed set, Tc omitted).
    await expect(page.locator(`${GRID} > div`)).toHaveCount(63);

    await page.locator('#molar-mass-element-search').fill('oxy');
    await expect(page.locator(`${GRID} [data-symbol]`)).toHaveCount(1);
    await expect(tile(page, 'O')).toBeVisible();

    await page.locator('#molar-mass-element-search').fill('zzzz');
    await expect(page.locator('#molar-mass-element-grid-empty')).toBeVisible();
  });

  test('selecting elements writes the build-custom slot and shows the mass in the field', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await buildWater(page);

    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(await getBuildCustom(page)).toEqual({
      quantities: { H: 2, O: 1 },
      formula: 'H2O',
      molarMass: 18.015,
    });
    await expect(page.locator('#molar-mass-custom-formula')).toHaveText('H2O');
    await expect(page.locator('#molar-mass-custom-mass')).toHaveText('18.015 g/mol');
  });

  test('the Molar Mass readout restores the trailing zeros the slot drops', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await selectElement(page, 'Ne'); // 20.18 — stored as a Number, so 20.18
    await expect(page.locator('#molar-mass-custom-mass')).toHaveText('20.180 g/mol');
    // The field itself shows the stored number, unpadded
    await expect(page.locator('#molar-mass')).toHaveValue('20.18');
  });

  test('the panel is an overlay: card-wide, flush under the field, out of flow', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 805 });

    const heightBefore = await page.evaluate(() => document.documentElement.scrollHeight);
    await pickMode(page, 'Build custom');

    const geom = await page.evaluate(() => {
      const panel = document.getElementById('molar-mass-build-panel')!;
      const wrap = document.getElementById('molar-mass-mode-wrapper')!;
      const row = document.querySelector('.field-row')!;
      const p = panel.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      const r = row.getBoundingClientRect();
      return {
        position: getComputedStyle(panel).position,
        // Left edge flush with the Molar Mass control...
        leftDelta: Math.round(p.left - w.left),
        // ...and the same inset mirrored on the right, so the panel spans the
        // card's content box rather than either half of it
        rightDelta: Math.round((r.right - p.right) - (w.left - r.left)),
        topDelta: Math.round(p.top - w.bottom),
        docHeight: document.documentElement.scrollHeight,
      };
    });

    expect(geom.position).toBe('fixed');
    expect(geom.leftDelta).toBe(0);
    expect(geom.rightDelta).toBe(0);
    expect(geom.topDelta).toBe(0);
    // Out of flow: opening it must not grow the document
    expect(geom.docHeight).toBe(heightBefore);
    // It overlays what follows the field — the unit pills are still laid out
    // where they were, but the panel is what a click at their centre would hit.
    const covered = await page.evaluate(() => {
      const pill = document.querySelector('#molar-mass-units button')!.getBoundingClientRect();
      const hit = document.elementFromPoint(pill.left + pill.width / 2, pill.top + pill.height / 2);
      return document.getElementById('molar-mass-build-panel')!.contains(hit);
    });
    expect(covered).toBe(true);
  });

  test('the grid stays 3-up in the panel at desktop widths', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 805 });
    await pickMode(page, 'Build custom');
    // The panel is inset to the field card's content box, so GRID_TARGET_COL is
    // tuned to that width (232) rather than to the card's full span.
    const cols = await page.evaluate(() =>
      getComputedStyle(document.getElementById('molar-mass-element-grid')!)
        .gridTemplateColumns.trim().split(/\s+/).length
    );
    expect(cols).toBe(3);
  });

  test('the panel tracks the field when the page scrolls', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 600 });
    await pickMode(page, 'Build custom');

    await page.evaluate(() => window.scrollBy(0, 200));
    await expect.poll(async () => page.evaluate(() => {
      const p = document.getElementById('molar-mass-build-panel')!.getBoundingClientRect();
      const w = document.getElementById('molar-mass-mode-wrapper')!.getBoundingClientRect();
      return Math.round(p.top - w.bottom);
    })).toBe(0);
  });

  test('the field tracks every step live — nothing has to be committed', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');

    // "Use this molar mass" exists in this panel (see section 13), but only
    // as a close action — nothing in the panel withholds a value pending a
    // commit step; the field moves on each click, before that button is ever
    // touched.
    await selectElement(page, 'O');
    await expect(page.locator('#molar-mass')).toHaveValue('15.999');

    await selectElement(page, 'H');
    await expect(page.locator('#molar-mass')).toHaveValue('17.007'); // 15.999 + 1.008

    await stepElement(page, 'H', 'plus');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');

    await stepElement(page, 'H', 'minus');
    await expect(page.locator('#molar-mass')).toHaveValue('17.007');
  });

  test('the built molar mass drives the calculation', async ({ page }) => {
    await goto(page);
    await setMass(page, '36.03');
    await pickMode(page, 'Build custom');
    await buildWater(page);
    // 36.03 g ÷ 18.015 g/mol = 2 mol
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(2.0, 5);
  });

  test('leaving and returning restores the exact tile selection and counts', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await buildWater(page);
    await stepElement(page, 'O', 'plus', 2); // O 1 → 3, giving H2O3: both counts
                                             // differ, so a restore that reset
                                             // either to 1 would show up here

    await pickMode(page, 'Type in');
    await expect(page.locator(PANEL)).toBeHidden();

    await pickMode(page, 'Build custom');
    await expect(page.locator(PANEL)).toBeVisible();
    // Steppers only exist on selected tiles, and their count is the quantity
    await expect(tile(page, 'H').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'O').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'C').locator('[data-step="plus"]')).toHaveCount(0);
    await expect(tile(page, 'H').getByRole('button').first()).toHaveAttribute('aria-current', 'true');

    expect(await getBuildCustom(page)).toEqual({
      quantities: { H: 2, O: 3 },
      formula: 'H2O3',
      molarMass: 50.013, // 2 × 1.0080 + 3 × 15.999
    });
    await expect(page.locator('#molar-mass')).toHaveValue('50.013');
  });

  test('deselecting everything empties the slot and clears the field', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await selectElement(page, 'H');
    await expect(page.locator('#molar-mass')).toHaveValue('1.008');

    await stepElement(page, 'H', 'minus'); // 1 → deselected
    await expect(page.locator('#molar-mass')).toHaveValue('');
    await expect(page.locator('#molar-mass-custom-formula')).toHaveText('—');
    await expect(page.locator('#molar-mass-custom-mass')).toHaveText('—');
    expect(await getBuildCustom(page)).toEqual({
      quantities: null, formula: null, molarMass: null,
    });
  });

  // The grid instance is never torn down, so it would keep showing its own last
  // selection across a hide/show on its own — which makes "switch away and back"
  // alone too weak to prove where the restore comes from. Overwriting the slot
  // while the mode is INACTIVE separates the two: only a panel that reloads from
  // the slot can show the new selection here.
  test('returning to the mode restores from the slot, not from the grid\'s own leftovers', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await buildWater(page);

    await pickMode(page, 'Type in');
    await page.evaluate(() => (window as any).molarMassMode.set('build-custom', {
      quantities: { H: 3, N: 1 },
      formula: 'H3N',
      molarMass: 17.031,
    }));

    await pickMode(page, 'Build custom');
    await expect(tile(page, 'N').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'H').locator('span.text-center')).toHaveText('3');
    // Oxygen was in the panel's own leftover selection but not in the slot
    await expect(tile(page, 'O').locator('[data-step="plus"]')).toHaveCount(0);
    await expect(page.locator('#molar-mass')).toHaveValue('17.031');
    await expect(page.locator('#molar-mass-custom-formula')).toHaveText('H3N');
  });

  test('a slot written through the hook repaints the panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await page.evaluate(() => (window as any).molarMassMode.set('build-custom', {
      quantities: { C: 6, H: 12, O: 6 },
      formula: 'C6H12O6',
      molarMass: 180.156,
    }));

    await expect(tile(page, 'C').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'H').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'O').locator('[data-step="plus"]')).toBeVisible();
    await expect(page.locator('#molar-mass')).toHaveValue('180.156');
    await expect(page.locator('#molar-mass-custom-formula')).toHaveText('C6H12O6');
  });
});

// ─── 12. Molar Mass "Compounds" panel ────────────────────────────────────────
// The compound picker mounted under the Molar Mass field: createPresetListbox()
// with no combobox trigger around it — no collapsed row, so the panel element
// IS the focusable listbox. Selecting writes the compounds slot and
// setModeValue() does the rest — the panel stays open across a pick, so the
// user can browse or compare more than one compound (see section 13, which
// covers open/close across both mode panels).

test.describe('Molar Mass Compounds panel', () => {
  const PANEL = '#molar-mass-compounds-panel';

  async function pickMode(page: Page, label: string) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: label, exact: true }).click();
  }

  function option(page: Page, namePattern: RegExp) {
    return page.locator(`${PANEL} [role="option"]`).filter({ hasText: namePattern });
  }

  async function getCompounds(page: Page) {
    return page.evaluate(() => (window as any).molarMassMode.get('compounds'));
  }

  test('the panel is hidden until Compounds is the active mode', async ({ page }) => {
    await goto(page);
    await expect(page.locator(PANEL)).toBeHidden();

    await pickMode(page, 'Compounds');
    await expect(page.locator(PANEL)).toBeVisible();

    await pickMode(page, 'Build custom');
    await expect(page.locator(PANEL)).toBeHidden();
    await expect(page.locator('#molar-mass-build-panel')).toBeVisible();

    await pickMode(page, 'Type in');
    await expect(page.locator(PANEL)).toBeHidden();
  });

  test('the panel renders all three groups and the full compound list', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');

    const groups = page.locator(`${PANEL} [role="group"]`);
    await expect(groups).toHaveCount(3);
    await expect(groups.nth(0)).toHaveAttribute('aria-label', 'Common');
    await expect(groups.nth(1)).toHaveAttribute('aria-label', 'Acids & Bases');
    await expect(groups.nth(2)).toHaveAttribute('aria-label', 'Salts & Oxides');
    // Headings are decorative — the group is already named by aria-label
    await expect(groups.nth(0).locator('[aria-hidden="true"]').first()).toHaveText('Common');

    await expect(page.locator(`${PANEL} [role="option"]`)).toHaveCount(20);
    await expect(option(page, /^Water/)).toHaveText('Water (H₂O) — 18.015 g/mol');
  });

  // Every option id in the document has to be unique, because
  // aria-activedescendant resolves by id — a duplicate leaves the reference
  // ambiguous and the AT following the wrong element. Two separate listboxes
  // are live here (the mode dropdown and this panel), each namespacing its own
  // option ids via its own prefix, so this sweeps the whole document rather
  // than just this panel.
  test('option ids are unique across every listbox in the document', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    const { dupes, total } = await page.evaluate(() => {
      const seen = new Set<string>();
      const dup: string[] = [];
      const all = document.querySelectorAll('[role="option"][id]');
      all.forEach((el) => {
        if (seen.has(el.id)) dup.push(el.id);
        seen.add(el.id);
      });
      return { dupes: dup, total: all.length };
    });
    expect(dupes).toEqual([]);
    // 20 compounds + 3 modes — proves the sweep above actually had both
    // listboxes to compare, rather than passing on an empty document.
    expect(total).toBe(23);
    await expect(page.locator('#molar-mass-compound-option-0')).toHaveCount(1);
    await expect(page.locator('#molar-mass-mode-option-0')).toHaveCount(1);
  });

  test('clicking a compound writes the slot and fills the read-only field', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Glucose/).click();

    await expect(page.locator('#molar-mass')).toHaveValue('180.16');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);
    expect(await getCompounds(page)).toEqual({
      name: 'Glucose', formula: 'C₆H₁₂O₆', molarMass: 180.16,
    });
    // Single click, no confirm step — and the panel stays open: picking a
    // compound and dismissing the list are different actions. See section 13
    // for the dismiss paths (toggle-click, click-outside — not this).
    await expect(page.locator(PANEL)).toBeVisible();
    await expect(option(page, /^Glucose/)).toHaveAttribute('aria-selected', 'true');
  });

  test('the picked compound drives the calculation', async ({ page }) => {
    await goto(page);
    await setMass(page, '36.03');
    await pickMode(page, 'Compounds');
    await option(page, /^Water/).click();
    // 36.03 g ÷ 18.015 g/mol = 2 mol
    expect(parseFloat(await page.locator('#moles-input').inputValue())).toBeCloseTo(2.0, 5);
  });

  test('keyboard: arrow to a compound and Enter selects it', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    // Park the pointer off the list: hover shares the same highlight as the
    // keyboard, and picking the mode leaves the cursor sitting over a row.
    await page.mouse.move(5, 5);
    await page.locator(PANEL).focus();
    // Opens highlighted on option 0; two downs lands on Carbon Dioxide
    await expect(page.locator(PANEL)).toHaveAttribute('aria-activedescendant', 'molar-mass-compound-option-0');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator(PANEL)).toHaveAttribute('aria-activedescendant', 'molar-mass-compound-option-2');
    await page.keyboard.press('Enter');

    await expect(page.locator('#molar-mass')).toHaveValue('44.01');
    expect(await getCompounds(page)).toEqual({
      name: 'Carbon Dioxide', formula: 'CO₂', molarMass: 44.01,
    });
  });

  test('leaving and returning restores the picked compound', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Ethanol/).click();

    await pickMode(page, 'Type in');
    await expect(page.locator(PANEL)).toBeHidden();

    await pickMode(page, 'Compounds');
    // Park the pointer off the list before asserting the highlight: reopening
    // leaves the real cursor sitting wherever the dropdown's "Compounds"
    // option was, which can land over a DIFFERENT row of this (differently
    // laid out) panel underneath and fire a genuine hover — same reasoning as
    // the keyboard-select test above, pre-existing and unrelated to auto-close.
    await page.mouse.move(5, 5);
    await expect(option(page, /^Ethanol/)).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');
    // The highlight lands on the restored selection, not back at option 0
    await expect(page.locator(PANEL)).toHaveAttribute('aria-activedescendant', 'molar-mass-compound-option-4');
  });

  // The same trap the Build-custom panel has: the picker instance is never torn
  // down, so it would keep its own selectedIndex across a hide/show regardless
  // of where the restore reads from. Overwriting the slot while the mode is
  // INACTIVE is what separates "restored from the store" from "never lost it".
  test('returning restores from the slot, not from the picker\'s own leftovers', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Ethanol/).click();

    await pickMode(page, 'Type in');
    await page.evaluate(() => (window as any).molarMassMode.set('compounds', {
      name: 'Ammonia', formula: 'NH₃', molarMass: 17.031,
    }));

    await pickMode(page, 'Compounds');
    await expect(option(page, /^Ammonia/)).toHaveAttribute('aria-selected', 'true');
    await expect(option(page, /^Ethanol/)).toHaveAttribute('aria-selected', 'false');
    await expect(page.locator('#molar-mass')).toHaveValue('17.031');
  });

  test('the panel is an overlay on the same geometry as Build custom', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 805 });

    const heightBefore = await page.evaluate(() => document.documentElement.scrollHeight);
    await pickMode(page, 'Compounds');

    const geom = await page.evaluate(() => {
      const panel = document.getElementById('molar-mass-compounds-panel')!;
      const wrap = document.getElementById('molar-mass-mode-wrapper')!;
      const row = document.querySelector('.field-row')!;
      const p = panel.getBoundingClientRect();
      const w = wrap.getBoundingClientRect();
      const r = row.getBoundingClientRect();
      return {
        position: getComputedStyle(panel).position,
        leftDelta: Math.round(p.left - w.left),
        rightDelta: Math.round((r.right - p.right) - (w.left - r.left)),
        topDelta: Math.round(p.top - w.bottom),
        width: Math.round(p.width),
        docHeight: document.documentElement.scrollHeight,
      };
    });

    expect(geom.position).toBe('fixed');
    expect(geom.leftDelta).toBe(0);
    expect(geom.rightDelta).toBe(0);
    expect(geom.topDelta).toBe(0);
    expect(geom.docHeight).toBe(heightBefore);

    // Identical box to the Build custom panel — same slot, one shared positioner
    await pickMode(page, 'Build custom');
    const buildWidth = await page.evaluate(() =>
      Math.round(document.getElementById('molar-mass-build-panel')!.getBoundingClientRect().width)
    );
    expect(geom.width).toBe(buildWidth);
  });

  test('the mode listbox layers above the panel', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 805 });
    await pickMode(page, 'Compounds');

    const z = await page.evaluate(() => ({
      panel: getComputedStyle(document.getElementById('molar-mass-compounds-panel')!).zIndex,
      modeListbox: getComputedStyle(document.getElementById('molar-mass-mode-listbox')!).zIndex,
    }));
    expect(Number(z.panel)).toBeLessThan(Number(z.modeListbox));

    // ...and it really does draw over it: the mode dropdown's own options are
    // what a click would hit where the two overlap.
    await page.click('#molar-mass-mode-trigger');
    const hitsListbox = await page.evaluate(() => {
      const opt = document.querySelector('#molar-mass-mode-listbox [role="option"]')!.getBoundingClientRect();
      const hit = document.elementFromPoint(opt.left + opt.width / 2, opt.top + opt.height / 2);
      return document.getElementById('molar-mass-mode-listbox')!.contains(hit);
    });
    expect(hitsListbox).toBe(true);
  });

  test('the panel tracks the field when the page scrolls', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1100, height: 600 });
    await pickMode(page, 'Compounds');

    await page.evaluate(() => window.scrollBy(0, 200));
    await expect.poll(async () => page.evaluate(() => {
      const p = document.getElementById('molar-mass-compounds-panel')!.getBoundingClientRect();
      const w = document.getElementById('molar-mass-mode-wrapper')!.getBoundingClientRect();
      return Math.round(p.top - w.bottom);
    })).toBe(0);
  });

  // Mouse hover shares the "active" highlight with keyboard nav, and moves
  // aria-activedescendant with it — one state, not a second visual-only one.
  // Uses a real hover() (mousemove-driven), not a click or a keypress, since a
  // missing pointer listener is exactly what this guards against: the option
  // elements carry no `hover:` class, so nothing paints without the JS.
  test('hovering an option highlights it and moves aria-activedescendant', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');

    const target = option(page, /^Nitric Acid/);
    const targetId = await target.getAttribute('id');
    await target.hover();

    await expect(target).toHaveClass(/bg-surface-2/);
    await expect(page.locator(PANEL)).toHaveAttribute('aria-activedescendant', targetId!);

    // Moving to a different option moves the highlight, not just adds to it.
    const other = option(page, /^Ammonia/);
    await other.hover();
    await expect(target).not.toHaveClass(/bg-surface-2/);
    await expect(other).toHaveClass(/bg-surface-2/);
  });

  // The panel is an out-of-flow overlay anchored under a field inside a card
  // that clips its own rounded corners. `toBeVisible()`/`boundingBox()` do NOT
  // catch a clipping ancestor — Playwright's visibility check only looks at the
  // element's own display/visibility/opacity and whether it has a non-empty
  // layout box. Catching it for real means checking the panel renders at its
  // intended full height AND that content far from the anchor is actually
  // painted and hit-testable at its own coordinates.
  test('the panel is not clipped: full height, and the last option is hit-testable', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');

    const panel = page.locator(PANEL);
    await expect(panel).toBeVisible();

    // max-h-72 is 288px; a box this close to the cap is direct evidence the
    // panel is rendering at full size rather than truncated by an ancestor.
    const box = (await panel.boundingBox())!;
    expect(box.height).toBeGreaterThan(250);

    // The definitive check: hit-test the LAST option's own centre point. Under
    // a clip this coordinate would paint whatever sits behind it — the card, or
    // the page background — rather than the option.
    const lastOption = option(page, /^Copper\(II\) Sulfate/);
    await lastOption.scrollIntoViewIfNeeded();
    const optionId = await lastOption.getAttribute('id');
    const optBox = (await lastOption.boundingBox())!;
    const isHitTestable = await page.evaluate(
      ({ x, y, id }) => {
        const el = document.elementFromPoint(x, y);
        return !!el && (el.id === id || !!el.closest(`#${CSS.escape(id!)}`));
      },
      { x: optBox.x + optBox.width / 2, y: optBox.y + optBox.height / 2, id: optionId }
    );
    expect(isHitTestable).toBe(true);

    // And selecting that last, furthest option still works end to end.
    await lastOption.click();
    await expect(page.locator('#molar-mass')).toHaveValue('159.602');
  });
});

// ─── 13. Molar Mass mode panels – dismissal ──────────────────────────────────
// Panel visibility is fully decoupled from activeMolarMassMode: closing a
// panel flips ONE per-mode flag (buildCustomPanelOpen / compoundsPanelOpen)
// and nothing else. activeMolarMassMode — and so #molar-mass's value, the
// trigger's label, and the field's readOnly state — changes ONLY from an
// explicit dropdown pick, never as a side effect of a panel closing. An
// earlier revision routed every close through switching back to Type in,
// which meant the field legitimately started showing Type in's own (often
// empty) slot right after a close — indistinguishable from data loss even
// though the mode's real data was untouched underneath. That's the bug this
// architecture fixes; see the two regression tests below.
//
// The two panels no longer share one set of close rules — each has its own:
//   - Build custom: the ONLY way to close it is its own "Use this molar
//     mass" button. Escape, click-outside, and toggle-click (re-picking
//     "Build custom" from the dropdown while it's already active) are all
//     explicitly NOT close paths — several tile picks in a row is this
//     panel's normal flow, and any of the three firing on a stray
//     click/keypress would cut it short uninvited. Toggle-click still
//     reopens the panel if it's currently closed, since re-picking an
//     already-active mode has to do SOMETHING.
//   - Compounds: toggle-click and click-outside both close it (and, like
//     Build custom, toggle-click reopens it if already closed). Escape does
//     NOT close it. Selecting a compound does NOT close it either — that
//     was tried (auto-close-on-pick) and reverted, since it prevented
//     comparing two compounds without reopening the list in between; picking
//     a compound and dismissing the list are different actions now.
// State persistence is not re-proven per path: every path that closes a
// panel only ever flips that mode's own flag (never the slot), so one
// close-then-reopen round trip per mode below is enough to confirm the
// paths are wired to that flag correctly.

test.describe('Molar Mass mode panels – dismissal', () => {
  const BUILD_PANEL = '#molar-mass-build-panel';
  const COMPOUNDS_PANEL = '#molar-mass-compounds-panel';

  async function pickMode(page: Page, label: string) {
    await page.click('#molar-mass-mode-trigger');
    await page.getByRole('option', { name: label, exact: true }).click();
  }

  function tile(page: Page, symbol: string) {
    return page.locator(`${BUILD_PANEL} [data-symbol="${symbol}"]`);
  }

  async function selectElement(page: Page, symbol: string) {
    await tile(page, symbol).getByRole('button').first().click();
  }

  function option(page: Page, namePattern: RegExp) {
    return page.locator(`${COMPOUNDS_PANEL} [role="option"]`).filter({ hasText: namePattern });
  }

  async function getBuildCustom(page: Page) {
    return page.evaluate(() => (window as any).molarMassMode.get('build-custom'));
  }

  async function getCompounds(page: Page) {
    return page.evaluate(() => (window as any).molarMassMode.get('compounds'));
  }

  // The panel's own content (search + grid + readout + button) can exceed a
  // short viewport, and the panel doesn't grow the document to compensate
  // (see the "overlays, not in-flow blocks" note in DESIGN.md) — the panel
  // now caps its own height and scrolls #molar-mass-build-panel-scroll
  // internally instead, keeping the button pinned and reachable at any
  // viewport height (see the short-viewport test below). TALL is used in the
  // tests below anyway: they aren't testing that behavior, and a viewport
  // with obviously enough room keeps them from having to think about it.
  const TALL = { width: 1280, height: 1000 };

  // ── Build custom: "Use this molar mass" is the ONLY close path ──

  test('"Use this molar mass" closes the Build custom panel without resetting the mode', async ({ page }) => {
    await goto(page);
    await page.setViewportSize(TALL);
    await pickMode(page, 'Build custom');
    await selectElement(page, 'O');
    await expect(page.locator('#molar-mass')).toHaveValue('15.999');

    await page.click('#molar-mass-build-panel-use');

    await expect(page.locator(BUILD_PANEL)).toBeHidden();
    // The bug this architecture fixes: closing must NOT re-point the field at
    // a different mode's slot. Trigger label, active mode, field value, and
    // readOnly all keep reflecting Build custom — nothing about the panel
    // closing should be visible in any of them except the panel itself.
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Build custom');
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
    await expect(page.locator('#molar-mass')).toHaveValue('15.999');
    await expect(page.locator('#molar-mass')).toHaveJSProperty('readOnly', true);
  });

  // The literal regression test from the bug report.
  test('"Use this molar mass": build a formula, close, and reopening shows the exact same tile selection', async ({ page }) => {
    await goto(page);
    await page.setViewportSize(TALL);
    await pickMode(page, 'Build custom');
    await selectElement(page, 'O');
    await selectElement(page, 'H');
    await tile(page, 'H').locator('[data-step="plus"]').click(); // 2 H
    const before = await getBuildCustom(page);
    expect(before).toEqual({ quantities: { O: 1, H: 2 }, formula: 'H2O', molarMass: 18.015 });

    await page.click('#molar-mass-build-panel-use');
    await expect(page.locator(BUILD_PANEL)).toBeHidden();
    // The slot itself, checked BEFORE reopening — not just what repaints once
    // a reopen forces a repaint from it.
    expect(await getBuildCustom(page)).toEqual(before);
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');

    await pickMode(page, 'Build custom');
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    expect(await getBuildCustom(page)).toEqual(before);
    await expect(tile(page, 'O').locator('[data-step="plus"]')).toBeVisible();
    await expect(tile(page, 'H').getByText('2', { exact: true })).toBeVisible();
  });

  test('clicking outside the Build custom panel does NOT close it', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');

    await page.locator('#mass-input').click();

    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  test('Escape does NOT close the Build custom panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await page.locator('#molar-mass-element-search').focus();

    await page.keyboard.press('Escape');

    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  test('re-picking "Build custom" from the dropdown while it is open does NOT close it', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');
    await expect(page.locator(BUILD_PANEL)).toBeVisible();

    await pickMode(page, 'Build custom'); // same option, already open

    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  test('once closed via the button, re-picking "Build custom" from the dropdown reopens it', async ({ page }) => {
    await goto(page);
    await page.setViewportSize(TALL);
    await pickMode(page, 'Build custom');
    await selectElement(page, 'O');
    await page.click('#molar-mass-build-panel-use');
    await expect(page.locator(BUILD_PANEL)).toBeHidden();

    await pickMode(page, 'Build custom'); // same option — closed, so this reopens

    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
    await expect(page.locator('#molar-mass')).toHaveValue('15.999');
    await expect(tile(page, 'O').locator('[data-step="plus"]')).toBeVisible();
  });

  test('the Build custom panel stays open across several element picks in a row', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');

    await selectElement(page, 'C');
    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    await tile(page, 'C').locator('[data-step="plus"]').click();
    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    await selectElement(page, 'H');
    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  test('typing in the element search box does not close the Build custom panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Build custom');

    await page.locator('#molar-mass-element-search').fill('oxy');
    await page.locator('#molar-mass-element-search').press('o');

    await expect(page.locator(BUILD_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  // At a short viewport the panel's natural content height (up to ~560px)
  // doesn't fit below the control, and the button is the ONLY way to close
  // the panel — this is the regression test for that: the button must stay
  // visible and clickable without the test itself resizing the window mid-
  // way to work around it. astro-dev-toolbar is a dev-server-only overlay
  // (not present in a production build — see `npx astro build`'s output)
  // that also pins itself to the bottom of the viewport and, at this height,
  // sits over the same area; it's a test-environment artifact of running
  // against `astro dev`, not part of the app, so it's removed here rather
  // than worked around in app code.
  test('"Use this molar mass" stays visible and clickable at a short (768px) viewport', async ({ page }) => {
    await goto(page);
    await page.setViewportSize({ width: 1280, height: 768 });
    await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
    await pickMode(page, 'Build custom');
    await selectElement(page, 'O');

    const button = page.locator('#molar-mass-build-panel-use');
    await expect(button).toBeVisible();
    await expect(button).toBeInViewport();
    await button.click();

    await expect(page.locator(BUILD_PANEL)).toBeHidden();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('build-custom');
  });

  // ── Compounds: toggle-click and click-outside close it; Escape and a pick don't ──

  // The literal regression test from the bug report.
  test('selecting a compound does not close the Compounds panel, and the value fills correctly', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');

    await option(page, /^Water/).click();

    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    await expect(page.locator('#molar-mass')).toHaveValue('18.015');
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Compounds');
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
    expect(await getCompounds(page)).toEqual({ name: 'Water', formula: 'H₂O', molarMass: 18.015 });
    await expect(option(page, /^Water/)).toHaveAttribute('aria-selected', 'true');
  });

  test('the panel stays open to pick a second, different compound without reopening anything', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Water/).click();

    await option(page, /^Ethanol/).click();

    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');
    expect(await getCompounds(page)).toEqual({ name: 'Ethanol', formula: 'C₂H₅OH', molarMass: 46.07 });
    await expect(option(page, /^Ethanol/)).toHaveAttribute('aria-selected', 'true');
    await expect(option(page, /^Water/)).toHaveAttribute('aria-selected', 'false');
  });

  test('toggle-click closes the Compounds panel and preserves the selected value on reopen', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Ethanol/).click();

    await pickMode(page, 'Compounds'); // toggle-click: open -> closes

    await expect(page.locator(COMPOUNDS_PANEL)).toBeHidden();
    // Closing must not re-point the field — same rule as Build custom.
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Compounds');
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');

    await pickMode(page, 'Compounds'); // toggle-click again: closed -> reopens
    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');
    await expect(option(page, /^Ethanol/)).toHaveAttribute('aria-selected', 'true');
  });

  test('click-outside closes the Compounds panel and preserves the selected value on reopen', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await option(page, /^Ethanol/).click();

    await page.locator('#mass-input').click();

    await expect(page.locator(COMPOUNDS_PANEL)).toBeHidden();
    await expect(page.locator('#molar-mass-mode-label')).toHaveText('Compounds');
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');

    // Mode never left 'compounds' (click-outside doesn't switch it), so the
    // only way back is toggle-click, same as after any other Compounds close.
    await pickMode(page, 'Compounds');
    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    await expect(option(page, /^Ethanol/)).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('#molar-mass')).toHaveValue('46.07');
  });

  test('Escape does NOT close the Compounds panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await page.locator(COMPOUNDS_PANEL).focus();

    await page.keyboard.press('Escape');

    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
  });

  test('clicking the mode trigger while the Compounds panel is open opens the dropdown instead of closing the panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');

    await page.click('#molar-mass-mode-trigger');

    await expect(page.locator('#molar-mass-mode-listbox')).toBeVisible();
    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
  });

  test('arrowing through Compounds options does not close the panel', async ({ page }) => {
    await goto(page);
    await pickMode(page, 'Compounds');
    await page.locator(COMPOUNDS_PANEL).focus();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');

    await expect(page.locator(COMPOUNDS_PANEL)).toBeVisible();
    expect(await page.evaluate(() => (window as any).molarMassMode.getActiveMode())).toBe('compounds');
  });
});
