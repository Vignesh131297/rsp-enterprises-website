import { describe, expect, it } from 'vitest';
import { estimateBasement } from './planner';

describe('estimateBasement', () => {
  it('estimates a typical 2-level basement in soil', () => {
    expect(estimateBasement({ area: 6000, levels: 2, soil: 'soil' })).toEqual({
      depth: 8,
      volume: 4459,
      loads: 349,
      excavators: 2,
      tippers: 4,
      days: 11,
      needsShoring: true,
    });
  });

  it('slows down in hard rock and caps the fleet at 4 excavators and 8 tippers', () => {
    const est = estimateBasement({ area: 60000, levels: 3, soil: 'hard' });
    expect(est.excavators).toBe(4);
    expect(est.tippers).toBe(8);
    expect(est.days).toBeGreaterThan(100);
  });

  it('does not advise shoring for a single level', () => {
    expect(estimateBasement({ area: 2000, levels: 1, soil: 'soil' }).needsShoring).toBe(false);
  });
});
