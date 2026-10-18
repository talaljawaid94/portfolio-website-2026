import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, metaFor } from "../lib/routeMeta";

// Sets the page <title>, description, canonical URL, social-share tags and
// robots directive for the current route as the visitor navigates. (The same
// values are also baked into each page's static HTML at build time, see
// scripts/prerender.mjs; this keeps them correct for in-app navigation.)
function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaTag = (key, name) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, name);
  return el;
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, path, noindex } = metaFor(pathname);
    const url = `${SITE}${path === "/" ? "/" : path}`;

    document.title = title;
    setTag('meta[name="description"]', metaTag("name", "description"), "content", description);
    setTag('meta[name="robots"]', metaTag("name", "robots"), "content", noindex ? "noindex, follow" : "index, follow");
    setTag('meta[property="og:title"]', metaTag("property", "og:title"), "content", title);
    setTag('meta[property="og:description"]', metaTag("property", "og:description"), "content", description);
    setTag('meta[property="og:url"]', metaTag("property", "og:url"), "content", url);
    setTag('meta[name="twitter:title"]', metaTag("name", "twitter:title"), "content", title);
    setTag('meta[name="twitter:description"]', metaTag("name", "twitter:description"), "content", description);

    // canonical: its own URL for indexable pages, none for noindex pages
    const existing = document.head.querySelector('link[rel="canonical"]');
    if (noindex) {
      existing?.remove();
    } else {
      setTag('link[rel="canonical"]', () => {
        const el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        return el;
      }, "href", url);
    }
  }, [pathname]);

  return null;
}
