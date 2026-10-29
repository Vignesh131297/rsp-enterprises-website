# RSP Enterprises – website

Website for RSP Enterprises (excavation, shoring, rock breaking, demolition and building & land development, Bangalore – Hosur, since 2000).

Built with **React 19**, **React Router 7** and **Vite**. Tested with Vitest and Testing Library. Every push to `main` runs the tests, builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

Live: https://vignesh131297.github.io/rsp-enterprises-website/

The earlier plain HTML/CSS/JS version is kept as the git tag `static-v1`.

## Run it locally

```bash
npm install
npm run dev      # local dev server with hot reload
npm test         # run the tests
npm run build    # production build into dist/
```

## Project layout

| Path | What it is |
|---|---|
| `src/pages/` | One component per page: Home, About, Services, Projects, Contact, NotFound |
| `src/components/` | Header, Footer, Layout, Marquees and the interactive parts: RockBreaker, BasementPlanner, ProjectGrid, RockToReadySlider, ProjectMap, FleetBoard, ContactPanel |
| `src/data/` | Content that changes: `contact.js`, `projects.js`, `fleet.js`, `pages.js` |
| `src/lib/planner.js` | Basement Planner calculations |
| `src/styles/global.css` | Base styles, animations and interactive-state classes |
| `public/img/` | All images |

## Common updates

- **Fleet availability:** edit `AVAILABLE_THIS_WEEK` and `UPDATED_ON` in `src/data/fleet.js`. Use `null` to show "Ask for this week".
- **Projects:** edit `PROJECTS` in `src/data/projects.js`. Leave `img` empty to show the "Site photos coming soon" tile.
- **Phone numbers and emails:** `src/data/contact.js`.

## Hosting somewhere else

The site is built for the GitHub Pages sub-path `/rsp-enterprises-website/`. To host it at the root of a domain (for example www.rspenterprises.net), build with `BASE_PATH=/ npm run build` and upload the `dist/` folder. The host should serve `index.html` for unknown paths (single-page app); `dist/404.html` already does this on GitHub Pages.

The enquiry form currently opens WhatsApp with the visitor's details (there is no backend). Sending it by email needs a form service or a small API on the chosen host.

## Contact used on the site

R. Saravanaperumal · +91 99010 39765 · +91 95245 80969 · sales@rspenterprises.net · rspenterprises2013@gmail.com
No. 17, Diya Bhavan, 4th Main, Annapoorneshwari Layout, Near Mother Theresa School, Varanasi, Bangalore – 560036 · GSTIN 29BWOPS8261A2Z1
