// Images live in public/img and are served under the site's base path (see vite.config.js).
export const img = (file) => `${import.meta.env.BASE_URL}img/${file}`;
