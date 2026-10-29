# RSP Enterprises – website

Website for RSP Enterprises (excavation, shoring, rock breaking, demolition and building & land development, Bangalore – Hosur, since 2000).

Built with **React 19**, **React Router 7** and **Vite**. Checked with ESLint and Prettier and tested with Vitest and Testing Library. Every push to `main` runs lint, format check and tests, builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`; nothing is published if a check fails.

Live: https://vignesh131297.github.io/rsp-enterprises-website/

The earlier plain HTML/CSS/JS version is kept as the git tag `static-v1`.

## Run it locally

```bash
npm install
npm run dev           # local dev server with hot reload
npm test              # run the tests
npm run lint          # ESLint
npm run format        # format all files with Prettier
npm run build         # production build into dist/
```

## Project layout

| Path                    | What it is                                                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/pages/`            | One component per page: Home, About, Services, Projects, Contact, NotFound                                                                                                                           |
| `src/components/`       | Layout, Header, Footer, Marquees, HeroImage, ClientMarquee, ClientGrid and the interactive parts: RockBreaker, BasementPlanner, ProjectGrid, RockToReadySlider, ProjectMap, FleetBoard, ContactPanel |
| `src/data/`             | Content that changes: `contact.js`, `clients.js`, `projects.js`, `fleet.js`, `pages.js`                                                                                                              |
| `src/lib/`              | `planner.js` (Basement Planner maths), `assets.js` (image paths), `usePageTitle.js`                                                                                                                  |
| `src/styles/global.css` | Base styles, shared UI classes (`eyebrow`, `section-title`, `btn`, `chip`…), animations and interactive-state classes                                                                                |
| `public/img/`           | Images by type: `brand/`, `hero/`, `clients/`, `projects/`, `fleet/`, `site/`                                                                                                                        |

## Common updates

- **Fleet availability:** edit `AVAILABLE_THIS_WEEK` and `UPDATED_ON` in `src/data/fleet.js`. Use `null` to show "Ask for this week".
- **Projects:** edit `PROJECTS` in `src/data/projects.js`. Leave `img` empty to show the "Site photos coming soon" tile.
- **Client logos:** add the logo to `public/img/clients/` and a line to `src/data/clients.js`.
- **Phone numbers and emails:** `src/data/contact.js`.
- **Header photos:** `public/img/hero/<page>-<width>.jpg`, used through `<HeroImage name="<page>" widths={[…]} />`.

## Hosting somewhere else

The site is built for the GitHub Pages sub-path `/rsp-enterprises-website/`. To host it at the root of a domain (for example www.rspenterprises.net), build with `BASE_PATH=/ npm run build` and upload the `dist/` folder. The host should serve `index.html` for unknown paths (single-page app); `dist/404.html` already does this on GitHub Pages.

## Enquiries: email and WhatsApp

The quote form emails each enquiry to pm@rspenterprises.net automatically (through EmailJS, no server needed) and gives the visitor a one-tap WhatsApp button with the same text. Setup steps and the template are in [`email-templates/README.md`](email-templates/README.md). Until the three `EMAILJS_*` repository variables are set, the form offers WhatsApp only.

## Contact used on the site

R. Saravanaperumal · +91 99010 39765 · +91 95245 80969 · pm@rspenterprises.net · rspenterprises2013@gmail.com
No. 17, Diya Bhavan, 4th Main, Annapoorneshwari Layout, Near Mother Theresa School, Varanasi, Bangalore – 560036 · GSTIN 29BWOPS8261A2Z1
