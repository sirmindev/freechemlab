import { calculateMoles, calculateMass } from './calculator';

export type MolarMassUnit = 'g/mol' | 'kg/kmol';
export type MassUnit = 'g' | 'mg' | 'kg' | 'ng' | 'ug' | 'dag';
export type MolesUnit = 'mol' | 'mmol' | 'umol' | 'nmol' | 'pmol';

// Conversion factors to convert from specified unit to canonical base unit (g, mol, g/mol)
export const MASS_TO_GRAMS: Record<MassUnit, number> = {
  g: 1,
  mg: 0.001,
  kg: 1000,
  ng: 1e-9,
  ug: 1e-6,
  dag: 10,
};

export const MOLES_TO_MOLES: Record<MolesUnit, number> = {
  mol: 1,
  mmol: 0.001,
  umol: 1e-6,
  nmol: 1e-9,
  pmol: 1e-12,
};

export const MOLAR_MASS_TO_GMOL: Record<MolarMassUnit, number> = {
  'g/mol': 1,
  'kg/kmol': 1, // 1 kg/kmol = 1000g / 1000mol = 1 g/mol
};

/**
 * Converts mass in given unit to grams.
 */
export function toBaseMass(val: number, unit: MassUnit): number {
  const factor = MASS_TO_GRAMS[unit] ?? 1;
  return val * factor;
}

/**
 * Converts mass in grams to target unit.
 */
export function fromBaseMass(grams: number, unit: MassUnit): number {
  const factor = MASS_TO_GRAMS[unit] ?? 1;
  return grams / factor;
}

/**
 * Converts moles in given unit to moles.
 */
export function toBaseMoles(val: number, unit: MolesUnit): number {
  const factor = MOLES_TO_MOLES[unit] ?? 1;
  return val * factor;
}

/**
 * Converts moles in base unit (mol) to target unit.
 */
export function fromBaseMoles(moles: number, unit: MolesUnit): number {
  const factor = MOLES_TO_MOLES[unit] ?? 1;
  return moles / factor;
}

/**
 * Converts molar mass in given unit to g/mol.
 */
export function toBaseMolarMass(val: number, unit: MolarMassUnit): number {
  const factor = MOLAR_MASS_TO_GMOL[unit] ?? 1;
  return val * factor;
}

/**
 * High-level conversion helper: calculates moles output in requested unit.
 */
export function calculateMolesWithUnits(
  massVal: number,
  massUnit: MassUnit,
  molarMassVal: number,
  molarMassUnit: MolarMassUnit,
  outputMolesUnit: MolesUnit
): number {
  const massInGrams = toBaseMass(massVal, massUnit);
  const molarMassInGmol = toBaseMolarMass(molarMassVal, molarMassUnit);
  const molesInMol = calculateMoles(massInGrams, molarMassInGmol);
  return fromBaseMoles(molesInMol, outputMolesUnit);
}

/**
 * High-level conversion helper: calculates mass output in requested unit.
 */
export function calculateMassWithUnits(
  molesVal: number,
  molesUnit: MolesUnit,
  molarMassVal: number,
  molarMassUnit: MolarMassUnit,
  outputMassUnit: MassUnit
): number {
  const molesInMol = toBaseMoles(molesVal, molesUnit);
  const molarMassInGmol = toBaseMolarMass(molarMassVal, molarMassUnit);
  const massInGrams = calculateMass(molesInMol, molarMassInGmol);
  return fromBaseMass(massInGrams, outputMassUnit);
}

/**
 * Formats a calculated numeric result strictly to 6 decimal places for display.
 */
export function format6Decimals(value: number): string {
  if (isNaN(value) || value <= 0) return '0.000000';
  return value.toFixed(6);
}

export const AVOGADRO_CONSTANT = 6.02214076e23;

/**
 * Calculates particle count given moles (in base unit 'mol').
 * Formula: particles = moles * N_A
 */
export function calculateParticles(molesInMol: number): number {
  if (isNaN(molesInMol) || molesInMol <= 0) return 0;
  return molesInMol * AVOGADRO_CONSTANT;
}

/**
 * Formats particle count into scientific notation, e.g. "6.02214 × 10^23 particles".
 */
export function formatParticleCount(particles: number): string {
  if (isNaN(particles) || particles <= 0) return '—';
  const expString = particles.toExponential(5);
  const [mantissa, exponent] = expString.split('e');
  const expNum = parseInt(exponent, 10);
  return `${mantissa} \u00D7 10^${expNum} particles`;
}

