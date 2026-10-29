// `inMenu: false` keeps a page out of the header menu. Contact is reached from the
// header's "Get a Quote" button instead, so the menu has no duplicate link.
export const PAGES = [
  { to: '/', nav: 'Home', footer: 'Home', inMenu: true },
  { to: '/about', nav: 'About', footer: 'About & Safety', inMenu: true },
  { to: '/services', nav: 'Services', footer: 'Services & Fleet', inMenu: true },
  { to: '/projects', nav: 'Projects', footer: 'Projects', inMenu: true },
  { to: '/contact', nav: 'Contact', footer: 'Contact', inMenu: false },
];
