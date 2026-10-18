import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { caseStudies } from "../data/content";

// Sets the page <title>, description, canonical URL, social-share tags and
// robots directive for the current route. The site is a single-page app, so
// without this every URL would share the one title/description in index.html.
// Google runs JavaScript before indexing, so it sees these per-page values.
// (Link previews on LinkedIn/WhatsApp/Slack don't run JavaScript — they still
// get index.html's defaults until pages are pre-rendered at build time.)
const SITE = "https://talaljawaid.design";

const HOME = {
  title: "Talal Jawaid | Product Designer in Dubai",
  description:
    "Product designer with 8+ years of experience across banking, SaaS, lifestyle and AI. Based in Dubai. Case studies and AI experiments.",
};

const AI_EXPERIMENTS = {
  title: "AI Experiments | Talal Jawaid",
  description:
    "Practical AI experiments by Talal Jawaid: Papyr, a PDF editor that never sees your files; Katana, a scroll-driven Three.js experience; and Jungle Survival, a browser survival game.",
};

// A case study page is only worth indexing when it has real, public content:
// not password-protected / under NDA, not hidden, and not just a placeholder
// page whose card links out to a Figma prototype instead.
const isIndexable = (s) => !s.locked && !s.hidden && !s.underNda && !s.useExternalPreview;

function metaFor(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return { ...HOME, path };
  if (path === "/ai-experiments") return { ...AI_EXPERIMENTS, path };

  const match = path.match(/^\/case-study\/([^/]+)$/);
  if (match) {
    const study = caseStudies.find((s) => s.id === match[1]);
    if (study && isIndexable(study)) {
      return {
        title: study.seo?.title ?? `${study.company} case study | Talal Jawaid`,
        description: study.seo?.description ?? study.title,
        path,
      };
    }
  }

  // /about (not linked from the nav yet), password/NDA case studies, the
  // /archives redirect and the 404 page: keep them out of search results.
  return { ...HOME, path, noindex: true };
}

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
