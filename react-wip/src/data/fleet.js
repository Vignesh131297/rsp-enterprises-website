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
  { key: 'excavators', name: 'Excavators', one: 'an excavator', total: 4, img: 'd1dbc32318c8978c61df1df586899387.jpg', alt: 'Hyundai crawler excavator', fit: 'cover' },
  { key: 'tippers', name: 'Tippers', one: 'a tipper', total: 8, img: 'b9bdd92fb3a9d41ddeaca6e452c89c0e.jpg', alt: 'Tipper truck', fit: 'cover' },
  { key: 'jcb', name: 'Backhoe loaders (JCB)', one: 'a JCB backhoe loader', total: 2, img: '27c5ad43101a0f72718648710f1307ab.jpg', alt: 'Backhoe loader', fit: 'contain' },
  { key: 'tankers', name: 'Water tankers', one: 'a water tanker', total: 5, img: '71160e83f42554a11160c7597f97cc70.jpg', alt: 'Water tanker truck', fit: 'contain' },
  { key: 'ambulances', name: 'Ambulances', one: 'an ambulance', total: 3, img: 'e71ae3c8dfd34415bf345ee6e3781788.jpg', alt: 'Ambulance van', fit: 'contain' },
];
