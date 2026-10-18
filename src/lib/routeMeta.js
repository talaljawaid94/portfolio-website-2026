import { caseStudies } from "../data/content";

// Per-route SEO values (title, description, canonical path, index or not).
// Shared by RouteMeta.jsx (updates the tags in the browser on navigation) and
// the build-time pre-render (scripts/prerender.mjs bakes them into each page's
// static HTML, so crawlers and link previews see them without running JS).
export const SITE = "https://talaljawaid.design";

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

export function metaFor(pathname) {
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
