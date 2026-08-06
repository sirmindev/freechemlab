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
    await expect(page.locator('#molar-mass-error')).not.toHaveClass(/hidden/);
    // Result field should not show a numeric value
    const result = await page.locator('#moles-input').inputValue();
    expect(isNaN(parseFloat(result)) || result === '—' || result === '').toBeTruthy();
  });

  test('negative molar mass shows inline error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '-5');
    await setMass(page, '10');
    await expect(page.locator('#molar-mass-error')).not.toHaveClass(/hidden/);
  });

  test('negative mass shows inline error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '-1');
    await expect(page.locator('#mass-error')).not.toHaveClass(/hidden/);
  });

  test('correcting molar mass to valid value clears error and resumes calculation', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '0');
    await setMass(page, '18.015');
    // Error visible
    await expect(page.locator('#molar-mass-error')).not.toHaveClass(/hidden/);
    // Fix it
    await setMolarMass(page, '18.015');
    // Error gone
    await expect(page.locator('#molar-mass-error')).toHaveClass(/hidden/);
    // Calculation resumes
    const result = await page.locator('#moles-input').inputValue();
    expect(parseFloat(result)).toBeCloseTo(1.0, 4);
  });

  test('correcting negative mass clears error', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '-1');
    await expect(page.locator('#mass-error')).not.toHaveClass(/hidden/);
    await setMass(page, '18.015');
    await expect(page.locator('#mass-error')).toHaveClass(/hidden/);
  });
});

// ─── 5. Particle Count ───────────────────────────────────────────────────────

test.describe('Particle count', () => {
  test('1 mol shows ~6.02214 × 10^23 particles', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '18.015'); // → 1 mol
    const text = await page.locator('#particle-count-val').textContent();
    // Should contain 6.02 and 10^23 (or ×10 notation)
    expect(text).toMatch(/6\.0221/);
    expect(text).toMatch(/10/);
    expect(text).toMatch(/23/);
  });

  test('2 mol shows ~1.204 × 10^24 particles', async ({ page }) => {
    await goto(page);
    await setMolarMass(page, '18.015');
    await setMass(page, '36.03'); // → 2 mol
    const text = await page.locator('#particle-count-val').textContent();
    expect(text).toMatch(/10/);
    expect(text).toMatch(/24/);
  });
});

// ─── 6. Browse Panel – Presets ───────────────────────────────────────────────

test.describe('Browse panel – Presets', () => {
  test('panel is hidden on load', async ({ page }) => {
    await goto(page);
    await expect(page.locator('#browse-panel')).toHaveClass(/hidden/);
  });

  test('clicking trigger opens panel', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await expect(page.locator('#browse-panel')).not.toHaveClass(/hidden/);
  });

  test('selecting Water and clicking "Use this molar mass" fills Molar Mass with 18.015 and collapses panel', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.selectOption('#preset-select', '18.015');
    await page.click('#use-preset');
    // Molar Mass field should now show 18.015
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(18.015, 3);
    // Panel should be collapsed
    await expect(page.locator('#browse-panel')).toHaveClass(/hidden/);
  });

  test('selecting Carbon Dioxide fills Molar Mass with 44.01', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await page.selectOption('#preset-select', '44.01');
    await page.click('#use-preset');
    const mmVal = await page.locator('#molar-mass').inputValue();
    expect(parseFloat(mmVal)).toBeCloseTo(44.01, 2);
  });

  test('"Use this molar mass" button is hidden until a compound is selected', async ({ page }) => {
    await goto(page);
    await page.click('#browse-trigger');
    await expect(page.locator('#use-preset')).toHaveClass(/hidden/);
    await page.selectOption('#preset-select', '18.015');
    await expect(page.locator('#use-preset')).not.toHaveClass(/hidden/);
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
    await expect(page.locator('#element-grid')).not.toHaveClass(/hidden/);
    // Should have 62 element cards (full IUPAC/CIAAW 2024 dataset, Tc omitted)
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(62);
  });

  test('H2O formula: 2x Hydrogen + 1x Oxygen = 18.015 g/mol', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);

    // Click Hydrogen card (adds qty 1), then click plus to make it 2
    const hCard = page.locator('#element-grid > div').filter({ hasText: 'H' }).first();
    await hCard.locator('button').first().click(); // info area click → qty 1

    // Now the stepper should appear; click + once more
    await page.locator('#element-grid > div').filter({ hasText: 'H' }).first()
      .locator('button[aria-label]').or(
        page.locator('#element-grid > div').filter({ hasText: 'H' }).first().locator('button').last()
      ).click();

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
    await expect(page.locator('#browse-panel')).toHaveClass(/hidden/);
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

  test('clearing search restores all 62 elements', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'sod');
    await page.fill('#element-search', '');
    const cards = page.locator('#element-grid > div');
    await expect(cards).toHaveCount(62);
  });

  test('no-match query shows empty state message', async ({ page }) => {
    await goto(page);
    await openCustomTab(page);
    await page.fill('#element-search', 'zzz');
    await expect(page.locator('#element-grid-empty')).not.toHaveClass(/hidden/);
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

    // Add one element so steppers appear
    await page.locator('#element-grid > div').first().locator('button').first().click();
    await page.waitForTimeout(100);

    const stepperButtons = page.locator('#element-grid button').filter({ hasText: '+' }).or(
      page.locator('#element-grid button').filter({ hasText: '−' })
    );
    const count = await stepperButtons.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const box = await stepperButtons.nth(i).boundingBox();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});
