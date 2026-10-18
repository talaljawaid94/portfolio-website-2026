import { useEffect, useState } from "react";
import { loaderGreetings } from "../data/content";
import "./SiteLoader.css";

const COLS = 4;
const ROWS = 2;
const CELLS = Array.from({ length: COLS * ROWS }, (_, i) => i);
const CYCLE_MS = 220;
const HIDE_AT = loaderGreetings.length * CYCLE_MS;
const GONE_AT = HIDE_AT + 1400;

// Full-screen grid-cell wipe shown once per page load, cycling through a
// few "hello"s before settling on the last one and wiping away — mirrors
// the reference site's intro loader.
export default function SiteLoader() {
  const [hide, setHide] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  // starts "not gone" on the server and on the first client render so they
  // match; a visitor who already saw the loader this session has it hidden
  // before first paint by the inline script in index.html (html.loader-seen)
  // and is switched to "gone" right after mount.
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = Boolean(sessionStorage.getItem("loader-seen"));
    } catch {
      // storage unavailable (private mode etc.): just show the loader
    }
    if (seen) {
      setGone(true);
      return;
    }

    const cycle = setInterval(() => {
      setGreetingIndex((i) => Math.min(i + 1, loaderGreetings.length - 1));
    }, CYCLE_MS);

    const hideTimer = setTimeout(() => {
      clearInterval(cycle);
      setHide(true);
    }, HIDE_AT);

    const goneTimer = setTimeout(() => {
      setGone(true);
      try {
        sessionStorage.setItem("loader-seen", "1");
      } catch {
        // ignore
      }
    }, GONE_AT);

    return () => {
      clearInterval(cycle);
      clearTimeout(hideTimer);
      clearTimeout(goneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <div className={`site-loader ${hide ? "hide" : ""}`} aria-hidden="true">
      <div className="site-loader-grid">
        {CELLS.map((i) => (
          <span
            key={i}
            className="site-loader-cell"
            style={{ transitionDelay: `${(i % COLS) * 90 + Math.floor(i / COLS) * 180}ms` }}
          />
        ))}
      </div>
      <div className="site-loader-greeting serif-italic">{loaderGreetings[greetingIndex]}</div>
    </div>
  );
}
