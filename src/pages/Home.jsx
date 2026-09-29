import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BracketWord from "../components/BracketWord";
import OdometerNumber from "../components/OdometerNumber";
import Marquee from "../components/Marquee";
import Logo from "../components/Logo";
import Testimonials from "../components/Testimonials";
import {
  heroContent,
  homeStats,
  quickStats,
  intentions,
  skills,
  visibleCaseStudies,
  profile,
} from "../data/content";
import "./Home.css";

// Hero grid layout: 16 columns x 8 rows. Each block is a merged range of cells.
const HERO_COLS = 16;
const HERO_ROWS = 8;
const HERO_BLOCKS = {
  text: { col: 1, colSpan: 8, row: 2, rowSpan: 6 },
  logo: { col: 12, colSpan: 2, row: 2, rowSpan: 3 },
  teaser: { col: 12, colSpan: 4, row: 6, rowSpan: 2 },
};

const blockStyle = ({ col, colSpan, row, rowSpan }) => ({
  gridColumn: `${col} / span ${colSpan}`,
  gridRow: `${row} / span ${rowSpan}`,
});

const HERO_FILLER_CELLS = [];
for (let row = 1; row <= HERO_ROWS; row++) {
  for (let col = 1; col <= HERO_COLS; col++) {
    const covered = Object.values(HERO_BLOCKS).some(
      (b) => col >= b.col && col < b.col + b.colSpan && row >= b.row && row < b.row + b.rowSpan
    );
    if (!covered) HERO_FILLER_CELLS.push({ col, row });
  }
}

// The card grid and the hero teaser both open a study's inner
// /case-study/:id page — except when `useExternalPreview` is set, where the
// inner write-up isn't ready yet and this opens `meta.liveUrl` (the Figma
// prototype) in a new tab instead. Remove that flag per study once its page
// is ready, and this goes back to routing internally on its own.
function CaseStudyLink({ study, className, style, children, ...rest }) {
  if (study.useExternalPreview && study.meta?.liveUrl) {
    return (
      <a
        href={study.meta.liveUrl}
        target="_blank"
        rel="noreferrer"
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={`/case-study/${study.id}`} className={className} style={style} {...rest}>
      {children}
    </Link>
  );
}

// Intentions grid: 16 columns x 8 rows (row 1 and row 8 are bare filler rows), same technique as the hero grid.
const INTENT_ROWS = 8;
const INTENT_BLOCKS = {
  text: { col: 1, colSpan: 8, row: 2, rowSpan: 6 },
  stats: [
    { col: 10, colSpan: 3, row: 2, rowSpan: 3 },
    { col: 13, colSpan: 3, row: 2, rowSpan: 3 },
    { col: 10, colSpan: 3, row: 5, rowSpan: 3 },
    { col: 13, colSpan: 3, row: 5, rowSpan: 3 },
  ],
};
const INTENT_FILLER_CELLS = [];
for (let row = 1; row <= INTENT_ROWS; row++) {
  for (let col = 1; col <= HERO_COLS; col++) {
    const covered = [INTENT_BLOCKS.text, ...INTENT_BLOCKS.stats].some(
      (b) => col >= b.col && col < b.col + b.colSpan && row >= b.row && row < b.row + b.rowSpan
    );
    if (!covered) INTENT_FILLER_CELLS.push({ col, row });
  }
}

export default function Home() {
  const highlightRef = useRef(null);
  const [highlightSize, setHighlightSize] = useState("");

  // live "W × H" readout on the highlighted phrase, like a design-tool selection
  useEffect(() => {
    const el = highlightRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setHighlightSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pillRef = useRef(null);
  const [pillVisible, setPillVisible] = useState(false);

  // hide the site's ring cursor while the "View Case Study" pill is showing
  useEffect(() => {
    document.body.classList.toggle("work-pill-active", pillVisible);
    return () => document.body.classList.remove("work-pill-active");
  }, [pillVisible]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-grid-wrap">
          {/* One shared 16x8 grid: the three blocks are grid items spanning
              several tracks (see HERO_BLOCKS); every track they don't cover
              is rendered as a bare 1x1 cell. */}
          <div className="hero-grid">
            {HERO_FILLER_CELLS.map(({ col, row }) => (
              <span key={`${col}-${row}`} className="hero-cell" style={{ gridColumn: col, gridRow: row }} />
            ))}

            <div className="hero-block content-cell" style={blockStyle(HERO_BLOCKS.text)}>
              <span className="pill">
                <span className="dot" />
                {profile.availableForWork ? "Available for Work" : "Not currently available"}
              </span>

              <h1 className="hero-headline serif">
                <span className="hero-headline-line">
                  {heroContent.headline[0]}{" "}
                  <BracketWord>{heroContent.highlightWord}</BracketWord>
                </span>
                <span className="hero-headline-line">
                  {heroContent.headline[1]}{" "}
                  <span className="serif-italic">{heroContent.headlineItalicInline}</span>
                </span>
                <span className="hero-headline-line serif-italic">
                  {heroContent.headlineItalicNext}
                </span>
              </h1>

              <p className="hero-intro">
                <span className="hero-intro-line">
                  {heroContent.introBefore}
                  <span className="hero-name">{heroContent.introName}</span>
                  {heroContent.introAfter}{" "}
                </span>
                {heroContent.introLines.map((line) => (
                  <span key={line} className="hero-intro-line">
                    {line}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div className="hero-block logo-card" style={blockStyle(HERO_BLOCKS.logo)}>
              <Logo size={90} />
            </div>

            {visibleCaseStudies[0] && (
              <CaseStudyLink
                study={visibleCaseStudies[0]}
                className="hero-block case-study-card-mini"
                style={blockStyle(HERO_BLOCKS.teaser)}
              >
                <span className="cs-thumb" style={{ background: visibleCaseStudies[0].gradient }} />
                <div className="cs-info">
                  <span className="eyebrow cs-tag">
                    <span
                      className="dot cs-tag-dot"
                      style={{ background: "var(--accent-blue)", boxShadow: "none" }}
                    />
                    RECENTLY ADDED
                  </span>
                  <p className="cs-title-mini">{visibleCaseStudies[0].title}</p>
                </div>
              </CaseStudyLink>
            )}
          </div>
        </div>
      </section>

      <section className="case-studies">
        <h2 className="serif section-heading">Case Studies with Results</h2>
        <p className="section-sub">
          <span className="section-sub-line">
            Product challenges where I shaped direction, aligned teams and turned messy systems{" "}
          </span>
          <span className="section-sub-line">
            into experiences that delivered measurable customer and business outcomes.
          </span>
        </p>

        <div
          className="case-studies-list"
          onMouseMove={(e) => {
            if (pillRef.current) {
              pillRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
          }}
        >
          <div ref={pillRef} className={`work-cursor-pill ${pillVisible ? "visible" : ""}`}>
            View Case Study
          </div>

          {visibleCaseStudies.map((cs) => (
            <CaseStudyLink
              study={cs}
              key={cs.id}
              className="case-study-card"
              style={{ "--work-color": cs.color, background: cs.color }}
              onMouseEnter={() => setPillVisible(true)}
              onMouseLeave={() => setPillVisible(false)}
            >
              {cs.locked && (
                <span className="case-study-lock">
                  <span className="lock-icon" />
                </span>
              )}
              <div
                className={`case-study-image ${cs.images ? "case-study-image--banner" : ""}`}
                style={
                  cs.images
                    ? // One purpose-cropped image per breakpoint (see the media
                      // queries in Home.css), each sized to that breakpoint's own
                      // box aspect, so `cover` never has to crop out real content.
                      {
                        "--banner-phone": `url(${cs.images.phone})`,
                        "--banner-tablet": `url(${cs.images.tablet})`,
                        "--banner-desktop": `url(${cs.images.desktop})`,
                      }
                    : { background: cs.gradient }
                }
              >
                {cs.headline && <p className="case-study-headline serif-italic">{cs.headline}</p>}
              </div>
              <div className="case-study-header">
                <div className="case-study-header-left">
                  <span className="case-study-block" />
                  <h3 className="case-study-name">{cs.company}</h3>
                </div>
                <span className="case-study-year">→ {cs.year} ←</span>
              </div>
              <p className="case-study-title">{cs.title}</p>
            </CaseStudyLink>
          ))}
        </div>
      </section>

      <section className="intentions">
        <div className="hero-grid-wrap">
          <div className="hero-grid intent-grid">
            {INTENT_FILLER_CELLS.map(({ col, row }) => (
              <span key={`${col}-${row}`} className="hero-cell" style={{ gridColumn: col, gridRow: row }} />
            ))}

            <div className="hero-block intent-text" style={blockStyle(INTENT_BLOCKS.text)}>
              <p className="eyebrow">{intentions.eyebrow}</p>
              <h2 className="serif intent-heading">
                {intentions.headingBefore}{" "}
                <span className="intent-highlight-wrap">
                  <span className="bracket-word intent-highlight" ref={highlightRef}>
                    <span className="serif-italic">{intentions.headingHighlight}</span>
                  </span>
                  {highlightSize && <span className="intent-spec">{highlightSize}</span>}
                </span>
              </h2>
              <div className="intentions-body">
                {intentions.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>

            {quickStats.map((s, i) => (
              <div key={s.label} className="hero-block intent-stat" style={blockStyle(INTENT_BLOCKS.stats[i])}>
                <span className="intent-stat-icon" style={{ "--icon": `url(/icons/${s.icon}.svg)` }} />
                <p className="eyebrow">{s.label}</p>
                <p className="intent-stat-value serif">
                  {s.currency && <span className="intent-stat-currency" style={{ "--icon": `url(/icons/${s.currency}.svg)` }} />}
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {homeStats.length > 0 && (
      <section className="home-odometer container">
        {homeStats.map((s) => (
          <div className="home-odometer-row" key={s.label}>
            <OdometerNumber value={s.value} className="home-odometer-value serif" />
            <p className="eyebrow home-odometer-label">
              {s.label.split("\n").map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          </div>
        ))}
      </section>
      )}

      <section className="skills-marquee">
        <Marquee items={skills.slice(0, Math.ceil(skills.length / 2))} duration={40} />
        <Marquee items={skills.slice(Math.ceil(skills.length / 2))} duration={36} reverse />
      </section>

      <Testimonials />
    </div>
  );
}
