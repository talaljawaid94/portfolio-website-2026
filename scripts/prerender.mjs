// Build-time pre-rendering. Run after `vite build` (client, into dist/) and
// `vite build --ssr src/entry-server.jsx --outDir dist-ssr`. For every route
// it renders the React app to HTML and writes it as a static file with that
// page's own <title>, description, canonical, robots and share tags, so
// Google's first pass and link previews (LinkedIn, WhatsApp, Slack, iMessage)
// see real content without running JavaScript. The browser then hydrates it.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = path.resolve("dist");
const SSR_ENTRY = path.resolve("dist-ssr/entry-server.js");

const { render, routes, metaFor, NOT_FOUND_PATH } = await import(pathToFileURL(SSR_ENTRY).href);
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const SITE = "https://talaljawaid.design";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// replace a whole <meta name|property="x" ...> tag, failing loudly if the
// template no longer has it (so a template edit can't silently drop a tag)
function setMeta(html, attr, name, content) {
  const re = new RegExp(`<meta\\s+${attr}="${name}"[^>]*>`);
  if (!re.test(html)) throw new Error(`prerender: <meta ${attr}="${name}"> not found in dist/index.html`);
  return html.replace(re, `<meta ${attr}="${name}" content="${esc(content)}" />`);
}

function buildPage(url) {
  const { title, description, path: p, noindex } = metaFor(url);
  const pageUrl = `${SITE}${p === "/" ? "/" : p}`;

  let html = template;
  if (!/<title>[\s\S]*?<\/title>/.test(html)) throw new Error("prerender: <title> not found");
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "robots", noindex ? "noindex, follow" : "index, follow");
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", pageUrl);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  if (!noindex) html = html.replace("</head>", `    <link rel="canonical" href="${pageUrl}" />\n  </head>`);

  const app = render(url);
  if (!html.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> not found');
  return html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const url of routes) {
  const file = url === "/" ? path.join(DIST, "index.html") : path.join(DIST, url, "index.html");
  write(file, buildPage(url));
  console.log(`prerendered ${url.padEnd(34)} -> ${path.relative(process.cwd(), file)}`);
}

// served by the host (with a real 404 status) for any address that isn't a page
write(path.join(DIST, "404.html"), buildPage(NOT_FOUND_PATH));
console.log(`prerendered 404 page${" ".repeat(18)} -> dist/404.html`);
