// Rough basement excavation estimate. Rules of thumb only, not RSP's quoted rates.
export const SOILS = {
  soil: { label: 'Soil', bulk: 1.25, rate: 450 },
  soft: { label: 'Soft rock', bulk: 1.35, rate: 200 },
  hard: { label: 'Hard rock', bulk: 1.5, rate: 90 },
};

const SQFT_TO_M2 = 0.0929;
const LEVEL_DEPTH_M = 3.5;
const RAFT_DEPTH_M = 1;
const TIPPER_LOAD_M3 = 16;
const LOADS_PER_TIPPER_PER_DAY = 8;

export function estimateBasement({ area, levels, soil }) {
  const s = SOILS[soil];
  const depth = levels * LEVEL_DEPTH_M + RAFT_DEPTH_M;
  const volume = Math.round(area * SQFT_TO_M2 * depth);
  const loads = Math.ceil((volume * s.bulk) / TIPPER_LOAD_M3);
  const excavators = volume < 4000 ? 1 : volume < 12000 ? 2 : volume < 25000 ? 3 : 4;
  const tippers = Math.min(8, excavators * 2);
  const days = Math.max(
    Math.ceil(volume / (s.rate * excavators)),
    Math.ceil(loads / (tippers * LOADS_PER_TIPPER_PER_DAY)),
  );
  return { depth, volume, loads, excavators, tippers, days, needsShoring: levels >= 2 };
}

export const formatIN = (n) => n.toLocaleString('en-IN');
