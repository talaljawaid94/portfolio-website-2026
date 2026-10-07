# Portfolio Website

A React + Vite single-page portfolio (product design case studies, about, AI experiments).

## Editing content

Almost everything on the site — your name, role, stats, case studies, timeline,
bio, social links, loader greetings — lives in one file:

```
src/data/content.js
```

Edit that file and the whole site updates; you shouldn't need to touch
component code for day-to-day content changes.

Before going live, also update the placeholders in:
- `index.html` — page `<title>`, meta description, `og:`/`twitter:` tags, and
  the `https://YOUR-DOMAIN.com/` URLs
- `public/robots.txt` and `public/sitemap.xml` — same `YOUR-DOMAIN.com` swap
- `public/favicon.svg` — currently the site's own logo mark; replace if you
  want a different icon

Design tokens (colors, fonts, spacing) are in `src/styles/base.css`.

## Local development

```bash
npm install
npm run dev       # start the dev server
npm run lint      # oxlint
npm run build     # production build -> dist/
npm run preview   # serve the dist/ build locally to sanity-check it
```

## Deploying

This is a client-side-routed app (react-router: `/`, `/about`, `/ai-experiments`,
`/case-study/:slug`), so whatever host you use must fall back to
`index.html` for unknown paths — otherwise a direct link to `/about` or a
page refresh on it will 404. The fallback config for the common options is
already included in this repo:

**Vercel** — `vercel.json` (rewrites everything to `/index.html`). Push to a
git repo, import it in Vercel, done — framework preset "Vite" is
auto-detected.

**Netlify** — `public/_redirects` (copied into the build automatically).
Either drag-and-drop the `dist/` folder in the Netlify dashboard, or connect
the git repo with build command `npm run build` and publish directory
`dist`.

**Plain Apache / cPanel / shared hosting ("upload via FTP")** —
`public/.htaccess` (copied into `dist/` automatically) handles the SPA
fallback and asset caching, provided `mod_rewrite` is enabled (it is on
almost all shared hosting). Steps:
1. `npm run build`
2. Upload the **contents** of `dist/` (not the folder itself) to your
   domain's web root (often `public_html/`) via FTP/SFTP or your host's file
   manager.
3. Make sure `.htaccess` made it across — some FTP clients hide dotfiles by
   default, so enable "show hidden files" before uploading.

**GitHub Pages** doesn't support the same rewrite trick; if you go that
route, ask for a small config change first (it needs a `404.html` fallback
approach instead).

## Project structure

```
src/
  data/content.js   ← edit this for copy/content changes
  components/       ← Nav, Footer, mobile menu, loader, odometer counters, marquee, etc.
  pages/            ← Home, About, Archives, CaseStudy
  styles/base.css   ← design tokens (colors, fonts, spacing)
```
