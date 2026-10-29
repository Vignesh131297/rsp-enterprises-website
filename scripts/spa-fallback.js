// GitHub Pages has no SPA routing. Serving index.html as 404.html lets deep links
// such as /rsp-enterprises-website/projects load the app instead of a GitHub error page.
import { copyFileSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');
console.log('spa-fallback: dist/404.html written');
