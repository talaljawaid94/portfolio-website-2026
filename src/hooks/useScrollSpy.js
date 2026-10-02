import { useEffect, useState } from "react";

// Tracks which of the given section ids is currently "active" for a sticky
// table-of-contents that highlights the section you're reading.
//
// This picks the LAST section whose top edge has scrolled past a fixed
// offset from the top of the viewport (matching each section's own
// `scroll-margin-top`). An earlier version used an IntersectionObserver band
// and took whichever section intersected it first — but on a long section
// (e.g. one with a tall image grid) that band could keep overlapping the
// previous, already-scrolled-past section too, so the highlight got stuck
// and never advanced to the next item. Walking sections top-to-bottom like
// this is unambiguous regardless of how tall any one section is.
const ACTIVATION_OFFSET = 120; // px from top of viewport

export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const update = () => {
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return activeId;
}
