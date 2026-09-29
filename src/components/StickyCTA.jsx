import { useEffect, useState } from "react";
import { profile } from "../data/content";
import "./StickyCTA.css";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "visible" : ""}`}>
      <span className="sticky-cta-text">Peeked your Interest? Let's Talk</span>
      <div className="sticky-cta-actions">
        <a className="sticky-cta-btn" href={`mailto:${profile.email}`}>
          👋 Drop a Hi!
        </a>
        {/* resumeUrl is a Google Drive share link, not a direct file, so
            `download` is ignored cross-origin — open it in a new tab instead
            of navigating away from the site. */}
        <a
          className="sticky-cta-btn filled"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          ↓ Download Resume
        </a>
      </div>
    </div>
  );
}
