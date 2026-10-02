import { useEffect, useRef, useState } from "react";
import "./BeforeAfter.css";

const clamp = (n) => Math.max(0, Math.min(100, n));

// Before/after phone slider with annotation lists on either side. Move the
// mouse over the phone (or drag on touch, or use the arrow keys) to reveal the
// "after" image; the notes and phone fade in once scrolled into view.
export default function BeforeAfter({
  before,
  after,
  beforeNotes = [],
  afterNotes = [],
  beforeLabel = "Before",
  afterLabel = "After",
  hint = "drag ⇆ to reveal the redesign",
}) {
  const rootRef = useRef(null);
  const frameRef = useRef(null);
  const dragging = useRef(false);
  const [x, setX] = useState(50);
  const [visible, setVisible] = useState(false);

  const setFromClientX = (clientX) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect || !rect.width) return;
    setX(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  useEffect(() => {
    const move = (e) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 15 : 5;
    if (e.key === "ArrowLeft") setX((v) => clamp(v - step));
    else if (e.key === "ArrowRight") setX((v) => clamp(v + step));
    else if (e.key === "Home") setX(0);
    else if (e.key === "End") setX(100);
    else return;
    e.preventDefault();
  };

  return (
    <div className="ba-wrap">
      <div ref={rootRef} className={`ba ${visible ? "go" : ""}`}>
        <Notes side="l" notes={beforeNotes} />

        <div className="ba-center">
          <div
            ref={frameRef}
            className="ba-frame"
            role="slider"
            tabIndex={0}
            aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(x)}
            onPointerDown={(e) => {
              dragging.current = true;
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (!dragging.current && e.pointerType === "mouse") setFromClientX(e.clientX);
            }}
            onKeyDown={onKeyDown}
          >
            {before && <img className="ba-img" src={before.src} alt={before.alt} draggable={false} />}
            {after && (
              <img
                className="ba-img ba-after"
                src={after.src}
                alt={after.alt}
                draggable={false}
                style={{ clipPath: `inset(1px 1px 1px ${x}%)` }}
              />
            )}
            <span className="ba-lbl ba-lbl-l">{beforeLabel}</span>
            <span className="ba-lbl ba-lbl-r">{afterLabel}</span>
            <span className="ba-handle" style={{ left: `${x}%` }} />
          </div>
          {hint && <p className="ba-hint">{hint}</p>}
        </div>

        <Notes side="r" notes={afterNotes} />
      </div>
    </div>
  );
}

// Text wrapped in {curly braces} is shown in the lime serif-italic highlight
// (same style as .cs-highlight-gold used elsewhere in the case study).
function renderNote(text) {
  return text.split(/(\{[^}]+\})/).map((part, i) =>
    part.startsWith("{") ? (
      <span key={i} className="cs-highlight-gold">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}

function Notes({ side, notes }) {
  return (
    <ul className={`ba-notes ba-notes--${side}`}>
      {notes.map((text) => (
        <li key={text}>
          {side === "l" ? (
            <>
              <span className="ba-note-text">{renderNote(text)}</span>
              <span className="ba-note-line" />
              <span className="ba-note-bar" />
            </>
          ) : (
            <>
              <span className="ba-note-bar" />
              <span className="ba-note-line" />
              <span className="ba-note-text">{renderNote(text)}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
