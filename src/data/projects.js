// To add a project, add a line here. Leave img empty to show the "Site photos coming soon" tile.
export const PROJECTS = [
  {
    name: 'Embassy Greenshore',
    type: 'SITE WORKS',
    place: 'Bangalore',
    status: 'Ongoing',
    img: 'projects/embassy-greenshore.jpg',
    alt: 'Survey team setting out levels at Embassy Greenshore',
  },
  {
    name: 'Embassy Varde II',
    type: 'EXCAVATION',
    place: 'Bangalore',
    status: 'Ongoing',
    img: 'projects/embassy-varde-2.jpg',
    alt: 'Excavator and tippers working a deep cut at Embassy Varde II',
  },
  {
    name: 'Hical Technologies',
    type: 'EXCAVATION',
    place: 'Hosur, Tamil Nadu',
    status: 'Ongoing',
    img: 'projects/hical-technologies.jpg',
    alt: 'Excavator loading broken rock into a tipper at Hical Technologies',
  },
  {
    name: 'Ascent Circuits',
    type: 'ROCK EXCAVATION',
    place: 'Sultanpet, Hosur, Tamil Nadu',
    status: 'Ongoing',
    img: 'projects/ascent-circuits.jpg',
    alt: 'Excavators and tippers on rocky ground at Ascent Circuits',
  },
  {
    name: 'Embassy East Avenue',
    type: 'EXCAVATION',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/embassy-east-avenue.jpg',
    alt: 'Excavation and rock work at Embassy East Avenue',
  },
  {
    name: 'Embassy Varde I',
    type: 'BULK EXCAVATION',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/embassy-varde-1.jpg',
    alt: 'Deep cut in red earth at Embassy Varde I',
  },
  { name: 'Embassy Paradiso', type: 'PLOTTED DEVELOPMENT', place: 'Bangalore', status: 'Completed', img: '', alt: '' },
  { name: 'HSK Logistics (Maple Tree)', type: 'SITE WORKS', place: 'Bangalore', status: 'Completed', img: '', alt: '' },
  {
    name: 'Adarsh RMZ Drain Works',
    type: 'CIVIL · DRAINS',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/adarsh-rmz-drain.jpg',
    alt: 'Reinforcement for a concrete drain',
  },
  {
    name: 'RMZ Underpass',
    type: 'CIVIL · UNDERPASS',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/rmz-underpass.jpg',
    alt: 'Finished lit underpass',
  },
  {
    name: 'UrbanUp – G+3',
    type: 'BUILDING',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/urbanup-g3.jpg',
    alt: 'Corridor finishing work in UrbanUp building',
  },
  {
    name: 'Private PG Building G+5',
    type: 'BUILDING',
    place: 'Bangalore',
    status: 'Completed',
    img: 'projects/private-pg-building.jpg',
    alt: 'G+5 PG building with scaffolding',
  },
  {
    name: 'Glowwell – Compound Wall',
    type: 'CIVIL · WALLS',
    place: 'Chennai',
    status: 'Completed',
    img: 'projects/glowwell-compound-wall.jpg',
    alt: 'Concrete block compound wall',
  },
  {
    name: 'Tuticorin Airport',
    type: 'PAVEMENT WORKS',
    place: 'Tuticorin, Tamil Nadu',
    status: 'Completed',
    img: 'projects/tuticorin-airport.jpg',
    alt: 'Concrete paving on the airport runway area',
  },
  {
    name: 'Private Buildings',
    type: 'RESIDENTIAL',
    place: 'Bangalore & Tamil Nadu',
    status: 'Completed',
    img: 'projects/private-buildings.jpg',
    alt: 'Completed private house',
  },
];

// Map pins: x/y are real longitude/latitude scaled to the map box (77.0–80.6°E, 13.4–8.4°N).
export const CITIES = [
  {
    id: 'blr',
    name: 'Bangalore',
    x: 16.4,
    y: 8.6,
    size: 44,
    pin: 'translate(-50%, -50%)',
    label: 'translate(-50%, calc(-100% - 30px))',
  },
  {
    id: 'hos',
    name: 'Hosur',
    x: 23.1,
    y: 13.2,
    size: 40,
    pin: 'translate(calc(-50% + 8px), calc(-50% + 8px))',
    label: 'translate(36px, calc(-50% + 8px))',
  },
  {
    id: 'che',
    name: 'Chennai',
    x: 90.8,
    y: 6.4,
    size: 40,
    pin: 'translate(-50%, -50%)',
    label: 'translate(-50%, 28px)',
  },
  {
    id: 'tut',
    name: 'Tuticorin',
    x: 31.4,
    y: 92.8,
    size: 40,
    pin: 'translate(-50%, -50%)',
    label: 'translate(30px, -50%)',
  },
];

export const cityOf = (project) =>
  project.place.includes('Hosur')
    ? 'hos'
    : project.place.includes('Chennai')
      ? 'che'
      : project.place.includes('Tuticorin')
        ? 'tut'
        : 'blr';
