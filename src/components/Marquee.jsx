import "./Marquee.css";

// Duplicates its content so the CSS animation can loop seamlessly from
// -50% back to 0. Stack a few of these at different `duration`s for the
// layered-parallax marquee effect.
export default function Marquee({ items, duration = 30, reverse = false, className = "" }) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className="marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span className="marquee-item" key={i}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
