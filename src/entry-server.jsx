import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { caseStudies } from "./data/content";
import { metaFor } from "./lib/routeMeta";

// Server entry used only at build time by scripts/prerender.mjs, which turns
// each route below into a static HTML file (so crawlers and link previews get
// real content without running JavaScript). Not used by the dev server.

// Every route that exists in App.jsx. A new page must be listed here to be
// pre-rendered (anything missing gets the 404 page from the host).
export const routes = [
  "/",
  "/about",
  "/ai-experiments",
  ...caseStudies.map((s) => `/case-study/${s.id}`),
];

// An address no route matches: renders the NotFound page for 404.html.
export const NOT_FOUND_PATH = "/page-not-found";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export { metaFor };
