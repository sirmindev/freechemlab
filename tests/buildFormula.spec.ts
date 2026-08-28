import { test, expect } from '@playwright/test';
import { buildFormula } from '../src/utils/browseElements';

const q = (entries: Record<string, number>) => new Map(Object.entries(entries));

test.describe('buildFormula – Hill notation for carbon compounds', () => {
  test('glucose: C first, H second, rest alphabetical', () => {
    expect(buildFormula(q({ C: 6, H: 12, O: 6 }))).toBe('C6H12O6');
  });

  test('ethanol', () => {
    expect(buildFormula(q({ C: 2, H: 6, O: 1 }))).toBe('C2H6O');
  });

  test('methane (C with qty 1 keeps no digit)', () => {
    expect(buildFormula(q({ C: 1, H: 4 }))).toBe('CH4');
  });

  test('insertion order of the quantities map does not matter', () => {
    expect(buildFormula(q({ O: 6, H: 12, C: 6 }))).toBe('C6H12O6');
  });

  test('carbon compound with several heavy elements: C, H, then alphabetical', () => {
    // Freon-like CClF3 → C, then Cl, F alphabetically (no H present)
    expect(buildFormula(q({ C: 1, Cl: 1, F: 3 }))).toBe('CClF3');
  });
});

test.describe('buildFormula – no-carbon formulas keep atomic-number order', () => {
  test('water', () => {
    expect(buildFormula(q({ H: 2, O: 1 }))).toBe('H2O');
  });

  test('ammonia', () => {
    expect(buildFormula(q({ N: 1, H: 3 }))).toBe('H3N');
  });

  test('multi-element no-carbon case is unchanged (atomic-number order, not alphabetical Hill)', () => {
    // z order: Na(11) < S(16) < O(8)?  no — O(8) < Na(11) < S(16)
    // so sulfate-ish {Na,S,O} → O, Na, S  (NOT alphabetical "NaO4S" and NOT "O4NaS")
    expect(buildFormula(q({ Na: 2, S: 1, O: 4 }))).toBe('O4Na2S');
    // sodium chloride: z order Na(11) < Cl(17) → "NaCl", the recognisable form
    expect(buildFormula(q({ Na: 1, Cl: 1 }))).toBe('NaCl');
    // sulfuric acid: z order H(1) < O(8) < S(16) → "H2O4S" (unchanged from before)
    expect(buildFormula(q({ H: 2, S: 1, O: 4 }))).toBe('H2O4S');
  });
});
