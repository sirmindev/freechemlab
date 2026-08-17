export interface Preset {
  name: string;
  formula: string;
  molarMass: number; // g/mol, verified IUPAC values
  group: string; // section heading in the Presets picker (display order below)
}

/** Section order for the Presets picker. Not alphabetical — matches the original optgroup order. */
export const PRESET_GROUP_ORDER = ['Common', 'Acids & Bases', 'Salts & Oxides'];

export interface Element {
  z: number;         // atomic number
  symbol: string;
  name: string;
  atomicWeight: number; // g/mol, IUPAC/CIAAW 2024 standard atomic weight
}

/** Twenty common compound presets with exact molar masses (g/mol). */
export const PRESETS: Preset[] = [
  // ── Original 5 (unchanged) ──────────────────────────────────────────────
  { name: 'Water',            formula: 'H₂O',       molarMass: 18.015 , group: 'Common' },
  { name: 'Table Salt',       formula: 'NaCl',       molarMass: 58.44  , group: 'Common' },
  { name: 'Carbon Dioxide',   formula: 'CO₂',        molarMass: 44.01  , group: 'Common' },
  { name: 'Glucose',          formula: 'C₆H₁₂O₆',   molarMass: 180.16 , group: 'Common' },
  { name: 'Ethanol',          formula: 'C₂H₅OH',     molarMass: 46.07  , group: 'Common' },
  // ── 15 additions ────────────────────────────────────────────────────────
  { name: 'Ammonia',                   formula: 'NH₃',       molarMass: 17.031 , group: 'Common' },
  { name: 'Methane',                   formula: 'CH₄',       molarMass: 16.043 , group: 'Common' },
  { name: 'Sulfuric Acid',             formula: 'H₂SO₄',     molarMass: 98.072 , group: 'Acids & Bases' },
  { name: 'Sodium Bicarbonate',        formula: 'NaHCO₃',    molarMass: 84.006 , group: 'Salts & Oxides' },
  { name: 'Calcium Carbonate',         formula: 'CaCO₃',     molarMass: 100.086, group: 'Salts & Oxides' },
  { name: 'Sodium Hydroxide',          formula: 'NaOH',      molarMass: 39.997 , group: 'Acids & Bases' },
  { name: 'Hydrochloric Acid',         formula: 'HCl',       molarMass: 36.458 , group: 'Acids & Bases' },
  { name: 'Acetic Acid',               formula: 'CH₃COOH',   molarMass: 60.052 , group: 'Acids & Bases' },
  { name: 'Potassium Permanganate',    formula: 'KMnO₄',     molarMass: 158.032, group: 'Salts & Oxides' },
  { name: 'Magnesium Sulfate',         formula: 'MgSO₄',     molarMass: 120.361, group: 'Salts & Oxides' },
  { name: 'Nitric Acid',               formula: 'HNO₃',      molarMass: 63.012 , group: 'Acids & Bases' },
  { name: 'Ammonium Nitrate',          formula: 'NH₄NO₃',    molarMass: 80.043 , group: 'Salts & Oxides' },
  { name: 'Aluminum Oxide',            formula: 'Al₂O₃',     molarMass: 101.961, group: 'Salts & Oxides' },
  { name: 'Iron(III) Oxide',           formula: 'Fe₂O₃',     molarMass: 159.687, group: 'Salts & Oxides' },
  { name: 'Copper(II) Sulfate',        formula: 'CuSO₄',     molarMass: 159.602, group: 'Salts & Oxides' },
];


/**
 * Standard atomic weights, IUPAC/CIAAW 2024 revision (Atomic Weights 2021 report).
 * Source: https://www.ciaaw.org/abridged-atomic-weights.htm
 * Values are reproduced verbatim — do not alter.
 * Elements with no standard atomic weight (no stable isotope) are omitted (e.g. Tc z=43).
 */
export const SEED_ELEMENTS: Element[] = [
  { z: 1,  symbol: "H",  name: "Hydrogen",     atomicWeight: 1.0080  },
  { z: 2,  symbol: "He", name: "Helium",        atomicWeight: 4.0026  },
  { z: 3,  symbol: "Li", name: "Lithium",       atomicWeight: 6.94    },
  { z: 4,  symbol: "Be", name: "Beryllium",     atomicWeight: 9.0122  },
  { z: 5,  symbol: "B",  name: "Boron",         atomicWeight: 10.81   },
  { z: 6,  symbol: "C",  name: "Carbon",        atomicWeight: 12.011  },
  { z: 7,  symbol: "N",  name: "Nitrogen",      atomicWeight: 14.007  },
  { z: 8,  symbol: "O",  name: "Oxygen",        atomicWeight: 15.999  },
  { z: 9,  symbol: "F",  name: "Fluorine",      atomicWeight: 18.998  },
  { z: 10, symbol: "Ne", name: "Neon",          atomicWeight: 20.180  },
  { z: 11, symbol: "Na", name: "Sodium",        atomicWeight: 22.990  },
  { z: 12, symbol: "Mg", name: "Magnesium",     atomicWeight: 24.305  },
  { z: 13, symbol: "Al", name: "Aluminium",     atomicWeight: 26.982  },
  { z: 14, symbol: "Si", name: "Silicon",       atomicWeight: 28.085  },
  { z: 15, symbol: "P",  name: "Phosphorus",    atomicWeight: 30.974  },
  { z: 16, symbol: "S",  name: "Sulfur",        atomicWeight: 32.06   },
  { z: 17, symbol: "Cl", name: "Chlorine",      atomicWeight: 35.45   },
  { z: 18, symbol: "Ar", name: "Argon",         atomicWeight: 39.95   },
  { z: 19, symbol: "K",  name: "Potassium",     atomicWeight: 39.098  },
  { z: 20, symbol: "Ca", name: "Calcium",       atomicWeight: 40.078  },
  { z: 21, symbol: "Sc", name: "Scandium",      atomicWeight: 44.956  },
  { z: 22, symbol: "Ti", name: "Titanium",      atomicWeight: 47.867  },
  { z: 23, symbol: "V",  name: "Vanadium",      atomicWeight: 50.942  },
  { z: 24, symbol: "Cr", name: "Chromium",      atomicWeight: 51.996  },
  { z: 25, symbol: "Mn", name: "Manganese",     atomicWeight: 54.938  },
  { z: 26, symbol: "Fe", name: "Iron",          atomicWeight: 55.845  },
  { z: 27, symbol: "Co", name: "Cobalt",        atomicWeight: 58.933  },
  { z: 28, symbol: "Ni", name: "Nickel",        atomicWeight: 58.693  },
  { z: 29, symbol: "Cu", name: "Copper",        atomicWeight: 63.546  },
  { z: 30, symbol: "Zn", name: "Zinc",          atomicWeight: 65.38   },
  { z: 31, symbol: "Ga", name: "Gallium",       atomicWeight: 69.723  },
  { z: 32, symbol: "Ge", name: "Germanium",     atomicWeight: 72.630  },
  { z: 33, symbol: "As", name: "Arsenic",       atomicWeight: 74.922  },
  { z: 34, symbol: "Se", name: "Selenium",      atomicWeight: 78.971  },
  { z: 35, symbol: "Br", name: "Bromine",       atomicWeight: 79.904  },
  { z: 36, symbol: "Kr", name: "Krypton",       atomicWeight: 83.798  },
  { z: 37, symbol: "Rb", name: "Rubidium",      atomicWeight: 85.468  },
  { z: 38, symbol: "Sr", name: "Strontium",     atomicWeight: 87.62   },
  { z: 39, symbol: "Y",  name: "Yttrium",       atomicWeight: 88.906  },
  { z: 40, symbol: "Zr", name: "Zirconium",     atomicWeight: 91.222  },
  { z: 41, symbol: "Nb", name: "Niobium",       atomicWeight: 92.906  },
  { z: 42, symbol: "Mo", name: "Molybdenum",    atomicWeight: 95.95   },
  // z: 43 Technetium omitted — no standard atomic weight (no stable isotope)
  { z: 44, symbol: "Ru", name: "Ruthenium",     atomicWeight: 101.07  },
  { z: 45, symbol: "Rh", name: "Rhodium",       atomicWeight: 102.91  },
  { z: 46, symbol: "Pd", name: "Palladium",     atomicWeight: 106.42  },
  { z: 47, symbol: "Ag", name: "Silver",        atomicWeight: 107.87  },
  { z: 48, symbol: "Cd", name: "Cadmium",       atomicWeight: 112.41  },
  { z: 49, symbol: "In", name: "Indium",        atomicWeight: 114.82  },
  { z: 50, symbol: "Sn", name: "Tin",           atomicWeight: 118.71  },
  { z: 51, symbol: "Sb", name: "Antimony",      atomicWeight: 121.76  },
  { z: 52, symbol: "Te", name: "Tellurium",     atomicWeight: 127.60  },
  { z: 53, symbol: "I",  name: "Iodine",        atomicWeight: 126.90  },
  { z: 54, symbol: "Xe", name: "Xenon",         atomicWeight: 131.29  },
  { z: 55, symbol: "Cs", name: "Caesium",       atomicWeight: 132.91  },
  { z: 56, symbol: "Ba", name: "Barium",        atomicWeight: 137.33  },
  { z: 57, symbol: "La", name: "Lanthanum",     atomicWeight: 138.91  },
  { z: 58, symbol: "Ce", name: "Cerium",        atomicWeight: 140.12  },
  { z: 60, symbol: "Nd", name: "Neodymium",     atomicWeight: 144.24  },
  { z: 64, symbol: "Gd", name: "Gadolinium",    atomicWeight: 157.25  },
  { z: 71, symbol: "Lu", name: "Lutetium",      atomicWeight: 174.97  },
  { z: 90, symbol: "Th", name: "Thorium",       atomicWeight: 232.04  },
  { z: 91, symbol: "Pa", name: "Protactinium",  atomicWeight: 231.04  },
  { z: 92, symbol: "U",  name: "Uranium",       atomicWeight: 238.03  },
];

/**
 * Builds a chemical formula string from a map of element symbol → quantity.
 * Elements are ordered by atomic number (z), matching SEED_ELEMENTS order.
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
