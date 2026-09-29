import { profile } from "../data/content";
import "./Footer.css";

// Hides the socials + Download Resume row below the banner while it's being
// reworked — nothing is deleted, flip this back to `true` to bring it back.
const SHOW_LINKS_ROW = false;

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta">
        <div className="footer-cta-left">
          <p className="eyebrow">Have Something in Mind?</p>
          <h2 className="serif footer-heading">Let's Talk</h2>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className="footer-icon-grid" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="footer-arrow" />
          ))}
        </div>
      </div>

      {SHOW_LINKS_ROW && (
        <div className="footer-bottom">
          <div className="footer-socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
          <a className="btn filled" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            ↓ Download Resume
          </a>
        </div>
      )}

      <div className="footer-credit">
        <span className="footer-credit-item">
          Designed in{" "}
          <img className="footer-credit-logo" src="/icons/figma.svg" alt="Figma" />{" "}
          Figma and coded with{" "}
          <img className="footer-credit-logo" src="/icons/claude.svg" alt="Claude" />{" "}
          Claude.
        </span>
        <span>
          Made over a cup of <span role="img" aria-label="tea">🍵</span> and alot of sleepless{" "}
          <span role="img" aria-label="moon">🌖</span>
        </span>
      </div>
    </footer>
  );
}
