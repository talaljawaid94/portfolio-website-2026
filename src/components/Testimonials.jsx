import { useState } from "react";
import useInView from "../hooks/useInView";
import { testimonials } from "../data/content";
import "./Testimonials.css";

// Logos are sized by their visible artwork so they read as the same optical
// size: K sets the target (based on the artwork's area, so chunky/square marks
// don't look bigger than long thin wordmarks), BW caps the width, and an
// entry's optional `boost` in content.js nudges one logo up or down.
const BW = 140;
const BH = 56;
const K = 50;
function logoStyle(ink, boost = 1) {
  const [nw, , x, y, w, h] = ink;
  const s = Math.min(BW / w, (K / Math.sqrt(w * h)) * boost, (BH * 1.25) / h);
  return {
    width: `${((nw * s) / BW) * 100}%`,
    left: `${(((BW - w * s) / 2 - x * s) / BW) * 100}%`,
    top: `${(((BH - h * s) / 2 - y * s) / BH) * 100}%`,
  };
}

// Directions the cells wipe in from, cycled per cell (matches the reference).
const DRAW = ["left", "right", "bottom", "left", "left", "right", "left", "top", "right"];

// "Proud to have worked with" — quote card on the left, logo grid on the right.
// Click a logo to swap the quote; logo-only cells (no quote) aren't clickable.
export default function Testimonials() {
  const firstClickable = Math.max(
    0,
    testimonials.findIndex((t) => t.quote)
  );
  const [active, setActive] = useState(firstClickable);
  const [gridRef, inView] = useInView({ threshold: 0.2 });
  const current = testimonials[active];

  return (
    <section className="worked-with">
      <span className="worked-with-tag">PROUD TO HAVE WORKED WITH →</span>

      <div className="worked-with-grid">
        <div className="testimonial-card">
          <p className="testimonial-quote" key={active}>
            {current.quote}
          </p>
          <div className="testimonial-person">
            <span className="person-avatar" />
            <div className="person-info">
              <span className="person-name">{current.name}</span>
              <span className="person-role">{current.role}</span>
            </div>
          </div>
        </div>

        <div ref={gridRef} className={`logos-grid ${inView ? "in-view" : ""}`}>
          {testimonials.map((t, i) => {
            const clickable = Boolean(t.quote);
            const Tag = clickable ? "button" : "div";
            return (
              <Tag
                key={t.company || `empty-${i}`}
                type={clickable ? "button" : undefined}
                className={`logo-cell draw-${DRAW[i % DRAW.length]} ${
                  clickable ? "" : "not-clickable"
                } ${active === i ? "active" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={clickable ? () => setActive(i) : undefined}
              >
                {t.logo && (
                  <span className="logo-box">
                    <img
                      className={t.ink ? "logo-img" : "logo-img fit"}
                      src={t.logo}
                      alt={`${t.company} logo`}
                      style={t.ink ? logoStyle(t.ink, t.boost) : undefined}
                    />
                  </span>
                )}
                {clickable && <span className="cell-asterisk">✳</span>}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
