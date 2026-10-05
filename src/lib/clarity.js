// Microsoft Clarity (session recordings + heatmaps). Loads the standard
// Clarity tag, but only in a production build, so local dev never sends data.
//
// The project ID isn't a secret (it ends up in the page source). It's set here;
// VITE_CLARITY_PROJECT_ID can override it (e.g. a different project for a
// preview deploy), and setting it to an empty string turns Clarity off.
// Clarity follows client-side route changes on its own, so no per-route calls
// are needed.
const CLARITY_PROJECT_ID = "yt0w6audr8";

export function initClarity() {
  const id = import.meta.env.VITE_CLARITY_PROJECT_ID ?? CLARITY_PROJECT_ID;
  if (!import.meta.env.PROD || !id || !/^[a-z0-9]+$/i.test(id)) return;
  if (window.clarity) return; // already loaded (e.g. HMR / double init)

  window.clarity = function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(script);
}

// Records a named custom event in Clarity (Dashboard → Smart events / Filters →
// Custom events), e.g. which case study card was clicked and from where. A
// no-op until Clarity has loaded (dev, or a build without a project ID).
export function trackEvent(name) {
  if (typeof window.clarity === "function") window.clarity("event", name);
}
