export interface Preset {
  name: string;
  formula: string;
  molarMass: number; // g/mol, verified IUPAC values
}

export interface Element {
  symbol: string;
  name: string;
  atomicWeight: number; // g/mol, IUPAC standard values
}

/** Five common compound presets with exact molar masses (g/mol). */
export const PRESETS: Preset[] = [
  { name: 'Water', formula: 'H₂O', molarMass: 18.015 },
  { name: 'Table Salt', formula: 'NaCl', molarMass: 58.44 },
  { name: 'Carbon Dioxide', formula: 'CO₂', molarMass: 44.01 },
  { name: 'Glucose', formula: 'C₆H₁₂O₆', molarMass: 180.16 },
  { name: 'Ethanol', formula: 'C₂H₅OH', molarMass: 46.07 },
];

/** Seed set of 10 elements with IUPAC standard atomic weights (g/mol). */
export const SEED_ELEMENTS: Element[] = [
  { symbol: 'H',  name: 'Hydrogen',   atomicWeight: 1.008 },
  { symbol: 'C',  name: 'Carbon',     atomicWeight: 12.011 },
  { symbol: 'N',  name: 'Nitrogen',   atomicWeight: 14.007 },
  { symbol: 'O',  name: 'Oxygen',     atomicWeight: 15.999 },
  { symbol: 'Na', name: 'Sodium',     atomicWeight: 22.990 },
  { symbol: 'Cl', name: 'Chlorine',   atomicWeight: 35.45 },
  { symbol: 'Ca', name: 'Calcium',    atomicWeight: 40.078 },
  { symbol: 'Fe', name: 'Iron',       atomicWeight: 55.845 },
  { symbol: 'S',  name: 'Sulfur',     atomicWeight: 32.06 },
  { symbol: 'P',  name: 'Phosphorus', atomicWeight: 30.974 },
];

/**
 * Builds a chemical formula string from a map of element symbol → quantity.
 * Elements are ordered by their index in SEED_ELEMENTS.
 */
export function buildFormula(quantities: Map<string, number>): string {
  return SEED_ELEMENTS
    .filter(el => (quantities.get(el.symbol) ?? 0) > 0)
    .map(el => {
      const qty = quantities.get(el.symbol)!;
      return qty === 1 ? el.symbol : `${el.symbol}${qty}`;
    })
    .join('');
}

/**
 * Computes total molar mass from element quantities.
 */
export function computeCustomMolarMass(quantities: Map<string, number>): number {
  return SEED_ELEMENTS.reduce((sum, el) => {
    return sum + (quantities.get(el.symbol) ?? 0) * el.atomicWeight;
  }, 0);
}
