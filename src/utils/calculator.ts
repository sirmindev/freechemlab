/**
 * Pure chemistry conversion functions for Mole & Grams-to-Moles calculation.
 */

/**
 * Calculates moles (n) from mass in grams (m) and molar mass in g/mol (M).
 * Formula: n = m / M
 */
export function calculateMoles(mass: number, molarMass: number): number {
  if (isNaN(mass) || isNaN(molarMass) || molarMass <= 0 || mass < 0) {
    return 0;
  }
  return mass / molarMass;
}

/**
 * Calculates mass in grams (m) from moles (n) and molar mass in g/mol (M).
 * Formula: m = n * M
 */
export function calculateMass(moles: number, molarMass: number): number {
  if (isNaN(moles) || isNaN(molarMass) || molarMass <= 0 || moles < 0) {
    return 0;
  }
  return moles * molarMass;
}

/**
 * Formats numeric result cleanly to up to maxDecimals places without unnecessary trailing zeros.
 */
export function formatResult(value: number, maxDecimals: number = 4): string {
  if (isNaN(value) || value <= 0) return '0';
  const factor = Math.pow(10, maxDecimals);
  const rounded = Math.round((value + Number.EPSILON) * factor) / factor;
  return String(rounded);
}
