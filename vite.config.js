import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /rsp-enterprises-website/.
// When hosting on a domain root (e.g. www.rspenterprises.net), build with BASE_PATH=/.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/rsp-enterprises-website/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
