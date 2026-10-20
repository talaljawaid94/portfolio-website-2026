import { useEffect, useState } from "react";

// Which banner crop applies: "phone" (<768px), "tablet" (768–1279px) or
// "desktop" (>=1280px). Same breakpoints as the card image breakpoints
// (see CardImage.jsx / Home.css), for cards that need to pick one <video> source
// in JS instead of a CSS background-image.
const TABLET = "(min-width: 768px)";
const DESKTOP = "(min-width: 1280px)";

const read = () => {
  if (typeof window === "undefined" || !window.matchMedia) return "desktop";
  if (window.matchMedia(DESKTOP).matches) return "desktop";
  if (window.matchMedia(TABLET).matches) return "tablet";
  return "phone";
};

// Returns null on the server and on the first client render (so pre-rendered
// HTML and hydration agree), then the real key once mounted.
export default function useBannerBreakpoint() {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const lists = [window.matchMedia(TABLET), window.matchMedia(DESKTOP)];
    const update = () => setKey(read());
    update();
    lists.forEach((l) => l.addEventListener("change", update));
    return () => lists.forEach((l) => l.removeEventListener("change", update));
  }, []);
  return key;
}
