// ---- Update every week -------------------------------------------------
// How many of each machine are free this week. Use null for "Ask for this week".
export const AVAILABLE_THIS_WEEK = {
  excavators: null, // out of 4
  tippers: null, // out of 8
  jcb: null, // out of 2
  tankers: null, // out of 5
  ambulances: null, // out of 3
};
export const UPDATED_ON = ''; // e.g. '3 Nov 2026'
// ------------------------------------------------------------------------

export const FLEET = [
  {
    key: 'excavators',
    name: 'Excavators',
    one: 'an excavator',
    total: 4,
    img: 'fleet/excavator.jpg',
    alt: 'Hyundai crawler excavator',
    fit: 'cover',
  },
  {
    key: 'tippers',
    name: 'Tippers',
    one: 'a tipper',
    total: 8,
    img: 'fleet/tipper.jpg',
    alt: 'Tipper truck',
    fit: 'cover',
  },
  {
    key: 'jcb',
    name: 'Backhoe loaders (JCB)',
    one: 'a JCB backhoe loader',
    total: 2,
    img: 'fleet/backhoe-loader.jpg',
    alt: 'Backhoe loader',
    fit: 'contain',
  },
  {
    key: 'tankers',
    name: 'Water tankers',
    one: 'a water tanker',
    total: 5,
    img: 'fleet/water-tanker.jpg',
    alt: 'Water tanker truck',
    fit: 'contain',
  },
  {
    key: 'ambulances',
    name: 'Ambulances',
    one: 'an ambulance',
    total: 3,
    img: 'fleet/ambulance.jpg',
    alt: 'Ambulance van',
    fit: 'contain',
  },
];
