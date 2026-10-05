import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PointItem from "../components/PointItem";
import BeforeAfter from "../components/BeforeAfter";
import CaseStudyLink from "../components/CaseStudyLink";
import useScrollSpy from "../hooks/useScrollSpy";
import { caseStudies, visibleCaseStudies } from "../data/content";
import "./CaseStudy.css";

// Crops a logo image down to its own visible bounds (`ink`, same shape as
// `testimonials[].ink`: [naturalW, naturalH, inkX, inkY, inkW, inkH`]`) so it
// sits flush-left at a fixed height instead of centered with baked-in
// whitespace on both sides.
const PROJECT_LOGO_HEIGHT = 30;
function projectLogoStyle(ink) {
  const [nw, nh, x, y, w, h] = ink;
  const s = PROJECT_LOGO_HEIGHT / h;
  return {
    "--logo-w": `${nw * s}px`,
    "--logo-h": `${nh * s}px`,
    "--logo-x": `${-x * s}px`,
    "--logo-y": `${-y * s}px`,
    "--logo-ink-w": `${w * s}px`,
  };
}

// Hides the "Role and Contributions" tag row below the header while it's
// being reworked — nothing is deleted, flip this back to `true` to bring it
// back everywhere.
const SHOW_CONTRIBUTIONS = false;

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Overview" },
  { id: "solved", label: "The Challenge" },
  { id: "key-challenges", label: "Key Challenges" },
  { id: "outcomes", label: "My Role" },
  { id: "research", label: "Research" },
  { id: "business-impact", label: "Business Impact" },
  { id: "prioritization", label: "Prioritization" },
  { id: "user-research", label: "User Research" },
  { id: "how-might-we", label: "How might we" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "lessons", label: "Lessons Learned" },
  { id: "conclusion", label: "Conclusion" },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const index = caseStudies.findIndex((cs) => cs.id === slug);
  const study = caseStudies[index];
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  if (!study) {
    return (
      <div className="container case-study-missing">
        <p>Case study not found.</p>
        <Link to="/">← Back home</Link>
      </div>
    );
  }

  const gated = study.locked && study.password && !unlocked;

  const submit = (e) => {
    e.preventDefault();
    if (input === study.password) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (gated) {
    return (
      <div className="container case-study-gate">
        <div className="nda-stamp">CONFIDENTIAL</div>
        <h1 className="serif">
          {study.company}
          <br />
          <span className="serif-italic">{study.title.split(":")[0]}</span>
        </h1>
        <p className="eyebrow">THIS CONTENT IS PROTECTED</p>
        <p className="case-study-gate-sub">Enter the password to view</p>
        <form onSubmit={submit} className="case-study-gate-form">
          <input
            data-clarity-mask="true" // never record what's typed into the password box
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="May the password be with you."
            autoFocus
          />
          <button type="submit" aria-label="Unlock">→</button>
        </form>
        {error && <p className="case-study-gate-error">Not quite — try again.</p>}
      </div>
    );
  }

  return <CaseStudyBody study={study} />;
}

function CaseStudyBody({ study }) {
  // The cards at the end list every OTHER visible case study, starting with
  // the next one in the cycle, so a hidden study is never suggested. If the
  // current one (e.g. viewed directly while hidden) isn't in the visible list,
  // all visible studies are shown.
  const visibleIndex = visibleCaseStudies.findIndex((cs) => cs.id === study.id);
  const otherStudies =
    visibleIndex === -1
      ? visibleCaseStudies
      : [...visibleCaseStudies.slice(visibleIndex + 1), ...visibleCaseStudies.slice(0, visibleIndex)];
  const availableSections = SECTIONS.filter((s) => sectionHasContent(study, s.id));
  const activeId = useScrollSpy(availableSections.map((s) => s.id));
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const accentStyle = {
    "--case-heading": study.accent?.heading ?? "var(--accent-blue)",
    "--case-quotation": study.accent?.quote ?? "var(--accent-gold)",
    "--case-points": study.accent?.points ?? "var(--accent-gold)",
  };

  return (
    <div className="case-study" style={accentStyle}>
      <div className="cs-header">
        <div className="cs-header-left">
          <Link to="/" className="cs-back-btn">← Back</Link>
          <div className="cs-header-content-bottom">
            <div className="cs-project-tag">
              {study.logo && study.logoInk ? (
                // white-fill logo, shown bare on the navy panel — no badge/label
                // needed. Cropped to its own ink bounds so it sits flush-left,
                // aligned with the title below, instead of centered with padding.
                <span className="cs-project-logo-standalone-wrap" style={projectLogoStyle(study.logoInk)}>
                  <img src={study.logo} alt={study.company} className="cs-project-logo-standalone" />
                </span>
              ) : study.logo ? (
                <img src={study.logo} alt={study.company} className="cs-project-logo-plain" />
              ) : (
                <>
                  <span className="cs-project-logo">{study.companyInitial ?? study.company[0]}</span>
                  <span>{study.company}</span>
                </>
              )}
            </div>
            <h1 className="cs-heading">{study.title}</h1>
          </div>
        </div>

        <div className="cs-header-right">
          <DetailRow icon="design" label="ROLE" value={study.meta?.role} />
          <DetailRow icon="Users" label="TEAM" value={study.meta?.team} />
          <DetailRow icon="calendar" label="DURATION" value={study.meta?.duration} />
          {!study.meta?.hideLiveProject && (
            <DetailRow
              icon="flag"
              label="LIVE PROJECT"
              value={
                study.meta?.liveUrl ? (
                  <a href={study.meta.liveUrl} target="_blank" rel="noreferrer" className="cs-visit-link">
                    Visit ↗
                  </a>
                ) : (
                  "—"
                )
              }
            />
          )}
        </div>

        {study.keyFact && (
          <div className="cs-key-fact-row">
            <span className="cs-key-fact-tag">✱ KEY FACT</span>
            <p className="cs-key-fact-text">{study.keyFact}</p>
          </div>
        )}
      </div>

      <div className="cs-body-layout">
        <nav className="cs-toc">
          <ul>
            {availableSections.map((s) => (
              <li key={s.id} className={activeId === s.id ? "active" : ""}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cs-content">
          {SHOW_CONTRIBUTIONS && study.contributions && (
            <div className="cs-contributions">
              <p className="eyebrow">Role and Contributions</p>
              <div className="cs-tag-list">
                {study.contributions.map((c) => (
                  <span key={c} className="cs-tag-pill">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {study.overview && (
            <CSSection id="overview" title="Overview">
              <p className="case-study-text">{study.overview}</p>
            </CSSection>
          )}

          <CSSection id="challenge" title="Overview" study={study}>
            {study.challenge?.intro && <p className="case-study-text">{study.challenge.intro}</p>}
            {study.challenge?.highlights?.length > 0 && (
              <div className="cs-challenge-boxes">
                {study.challenge.highlights.map((h, i) => (
                  <div className="cs-challenge-box" key={i}>
                    <span className="cs-challenge-box-icon" style={{ "--icon": `url(/icons/${h.icon}.svg)` }} />
                    <p className="cs-challenge-box-text">{h.text}</p>
                  </div>
                ))}
              </div>
            )}
            {study.challenge?.points?.length > 0 && (
              <ul className="point-list">
                {study.challenge.points.map((p, i) => (
                  <PointItem key={i} text={p} />
                ))}
              </ul>
            )}
          </CSSection>

          <CSSection id="solved" title="The Challenge" study={study}>
            {study.solutionsIntro && <p className="case-study-text">{study.solutionsIntro}</p>}
            {study.impactStats?.length > 0 && (
              <div className="cs-impact-stats">
                {study.impactStats.map((s) => (
                  <div className="cs-impact-stat" key={s.label}>
                    <span className="cs-impact-stat-icon" style={{ "--icon": `url(/icons/${s.icon}.svg)` }} />
                    <p className="eyebrow">{s.label}</p>
                    <p className="cs-impact-stat-value serif">{s.value}</p>
                  </div>
                ))}
              </div>
            )}
            {study.solutionsClosing && <p className="case-study-text">{study.solutionsClosing}</p>}
            {study.solutions?.length > 0 && (
              <div className="cs-solution-list">
                {study.solutions.map((s, i) => (
                  <div className="cs-solution-item" key={s.heading}>
                    <span className="cs-solution-number mono">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="serif">{s.heading}</h3>
                      <p className="case-study-text">{s.body}</p>
                      {s.points?.length > 0 && (
                        <ul className="point-list">
                          {s.points.map((p, j) => (
                            <PointItem key={j} text={p} />
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CSSection>

          {study.keyChallenges?.length > 0 && (
            <CSSection id="key-challenges" title="Key Challenges" study={study}>
              <div className="cs-challenge-list">
                {study.keyChallenges.map((k, i) => (
                  <div className="cs-challenge-item" key={i}>
                    <p className="cs-challenge-problem">{k.problem}</p>
                    <p className="cs-challenge-solution">
                      <span className="cs-challenge-arrow">→</span>
                      {k.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CSSection>
          )}

          <CSSection id="outcomes" title="My Role" study={study}>
            {study.myRole ? (
              <p className="case-study-text">{study.myRole}</p>
            ) : (
              <ul className="point-list">
                {study.outcomes?.map((o, i) => (
                  <PointItem key={i} text={o} />
                ))}
              </ul>
            )}
            {study.myRoleGrid?.length > 0 && (
              <div className="cs-role-grid">
                {study.myRoleGrid.map((r) => (
                  <div className="cs-role-row" key={r.heading}>
                    <span className="cs-role-icon" style={{ "--icon": `url(/icons/${r.icon}.svg)` }} />
                    <div>
                      <h3 className="cs-role-heading">{r.heading}</h3>
                      <p className="cs-role-body">{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CSSection>

          {(study.researchImages?.length > 0 || study.research) && (
            <CSSection id="research" title="Research" study={study}>
              {study.research && <p className="case-study-text">{study.research}</p>}
              {study.researchImages?.length > 0 && (
                <>
                  {study.researchImages[2] && (
                    <img
                      className="cs-image-placeholder cs-image-placeholder--full"
                      src={study.researchImages[2].src}
                      alt={study.researchImages[2].alt}
                    />
                  )}
                  <div className="cs-image-row cs-image-row--3">
                    {[study.researchImages[0], study.researchImages[1], study.researchImages[3]].map((img, i) =>
                      img ? (
                        <img key={img.src} className="cs-image-placeholder" src={img.src} alt={img.alt} />
                      ) : (
                        <div key={`empty-${i}`} className="cs-image-placeholder cs-image-placeholder--empty">
                          IMAGE PLACEHOLDER
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {study.researchClosing && (
                <p className="case-study-text">
                  {study.researchClosing.before}
                  <span className="cs-highlight-gold">{study.researchClosing.highlight}</span>
                  {study.researchClosing.after}
                </p>
              )}
            </CSSection>
          )}

          {(study.businessImpactHeadline || study.businessImpactImage) && (
            <CSSection id="business-impact" title="Business Impact" study={study}>
              {study.businessImpactHeadline && (
                <p className="cs-impact-headline">{study.businessImpactHeadline}</p>
              )}
              {study.businessImpactImage && (
                <img
                  className="cs-image-placeholder cs-image-placeholder--full"
                  src={study.businessImpactImage.src}
                  alt={study.businessImpactImage.alt}
                />
              )}
              {study.businessImpactClosing && (
                <p className="case-study-text">{study.businessImpactClosing}</p>
              )}
              {study.businessImpactHeadline2 && (
                <p className="cs-impact-headline">{study.businessImpactHeadline2}</p>
              )}
              {study.businessImpactClosing2 && (
                <p className="case-study-text">{study.businessImpactClosing2}</p>
              )}
            </CSSection>
          )}

          {(study.prioritizationIntro ||
            study.prioritizationEvaluation ||
            study.prioritizationRadarImage ||
            study.prioritizationResult) && (
            <CSSection id="prioritization" title="Prioritization" study={study}>
              {study.prioritizationIntro && <p className="case-study-text">{study.prioritizationIntro}</p>}
              <div className="cs-prioritization-layout">
                {study.prioritizationEvaluation && (
                  <PrioritizationColumn {...study.prioritizationEvaluation} />
                )}
                {study.prioritizationRadarImage && (
                  <img
                    className="cs-radar-image"
                    src={study.prioritizationRadarImage.src}
                    alt={study.prioritizationRadarImage.alt}
                  />
                )}
                {study.prioritizationResult && <PrioritizationColumn {...study.prioritizationResult} />}
              </div>
              {study.prioritizationLead && <p className="case-study-text">{study.prioritizationLead}</p>}
            </CSSection>
          )}

          {study.userResearch && (
            <CSSection id="user-research" title="User Research" study={study}>
              <UserResearch {...study.userResearch} />
            </CSSection>
          )}

          {study.howMightWe && (
            <section id="how-might-we" className="cs-block">
              <div className="cs-hmw">
                <div className="cs-hmw-tag">
                  <span className="cs-hmw-tag-icon" aria-hidden="true">
                    &ldquo;
                  </span>
                  <h2 className="eyebrow cs-hmw-tag-label">How might we</h2>
                </div>
                <p className="cs-hmw-text">{study.howMightWe}</p>
              </div>
            </section>
          )}

          {study.solutionSection && (
            <CSSection id="solution" title="Solution" study={study}>
              {study.solutionSection.heading && (
                <h3 className="cs-solution-heading">{study.solutionSection.heading}</h3>
              )}
              {study.solutionSection.body?.map((p) => (
                <p className="case-study-text" key={p}>
                  {p}
                </p>
              ))}
              {study.solutionSection.compare && <BeforeAfter {...study.solutionSection.compare} />}
              {study.solutionSection.features?.length > 0 && (
                <SolutionScroll features={study.solutionSection.features} />
              )}
            </CSSection>
          )}

          {study.impactSection && (
            <CSSection id="impact" title="Impact" study={study}>
              {study.impactSection.body && <p className="case-study-text">{study.impactSection.body}</p>}
              <ImpactGrid metrics={study.impactSection.metrics} />
            </CSSection>
          )}

          {study.lessons && (
            <CSSection id="lessons" title="Lessons Learned" study={study}>
              <p className="case-study-text">{study.lessons}</p>
            </CSSection>
          )}

          {study.conclusion && (
            <CSSection id="conclusion" title="Conclusion" study={study}>
              <p className="case-study-text">{study.conclusion}</p>
            </CSSection>
          )}
        </div>
      </div>

      {/* outside .cs-body-layout on purpose: the sticky side menu ends with that
          grid, so it scrolls away once the last section is done */}
      <div className="cs-next-cards">
        {otherStudies.map((cs) => (
          <CaseStudyLink key={cs.id} study={cs} className="cs-next-card">
            <div className="cs-next-card-body">
              <div>
                <span className="eyebrow cs-next-meta">
                  {cs.company} · {cs.year}
                </span>
                <p className="cs-next-title serif">{cs.headline ?? cs.title}</p>
              </div>
              <span className="cs-next-thumb" style={{ background: cs.gradient }} />
            </div>
          </CaseStudyLink>
        ))}
      </div>

      <a href="#top" className={`cs-fab ${showFab ? "visible" : ""}`} aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}

function sectionHasContent(study, id) {
  switch (id) {
    case "overview":
      return Boolean(study.overview);
    case "challenge":
      return Boolean(
        study.challenge?.intro || study.challenge?.points?.length || study.challenge?.highlights?.length
      );
    case "solved":
      return Boolean(study.solutionsIntro || study.impactStats?.length || study.solutions?.length);
    case "key-challenges":
      return Boolean(study.keyChallenges?.length);
    case "outcomes":
      return Boolean(study.myRole || study.outcomes?.length);
    case "research":
      return Boolean(study.researchImages?.length || study.research || study.researchClosing);
    case "business-impact":
      return Boolean(study.businessImpactHeadline || study.businessImpactImage);
    case "prioritization":
      return Boolean(
        study.prioritizationIntro ||
          study.prioritizationEvaluation ||
          study.prioritizationRadarImage ||
          study.prioritizationResult
      );
    case "user-research":
      return Boolean(study.userResearch);
    case "how-might-we":
      return Boolean(study.howMightWe);
    case "solution":
      return Boolean(study.solutionSection);
    case "impact":
      return Boolean(study.impactSection);
    case "lessons":
      return Boolean(study.lessons);
    case "conclusion":
      return Boolean(study.conclusion);
    default:
      return false;
  }
}

function CSSection({ id, title, children }) {
  return (
    <section id={id} className="cs-block">
      <h2 className="eyebrow cs-block-heading">{title}</h2>
      {children}
    </section>
  );
}

// Left/right text column flanking the Prioritization radar chart — a label
// plus a bullet list, reused for both the evaluation criteria and the
// winning area's reasoning.
function PrioritizationColumn({ label, points, theme }) {
  return (
    <div className={`cs-prioritization-column cs-prioritization-column--${theme}`}>
      <p className="cs-prioritization-column-label">{label}</p>
      <ul className="point-list">
        {points.map((p, i) => (
          <PointItem key={i} text={p} />
        ))}
      </ul>
    </div>
  );
}

// User Research layout: heading + intro, a questions card beside a "what this
// caused / root cause" card, then a full-width design-insight card.
function UserResearch({
  heading,
  intro,
  questionsTitle,
  questions,
  causedLabel,
  caused,
  rootCauseLabel,
  rootCause,
  insightLabel,
  insight,
}) {
  return (
    <div className="cs-ur">
      {heading && <h3 className="cs-ur-heading">{heading}</h3>}
      {intro && <p className="cs-ur-intro">{intro}</p>}

      <div className="cs-ur-grid">
        {questions?.length > 0 && (
          <div className="cs-ur-card">
            {questionsTitle && <p className="cs-ur-card-title">{questionsTitle}</p>}
            <div className="cs-ur-questions">
              {questions.map((q, i) => (
                <div className="cs-ur-question" key={q.heading}>
                  <span className="cs-ur-number mono">{i + 1}</span>
                  <div>
                    <p className="cs-ur-question-title">{q.heading}</p>
                    <p className="cs-ur-question-body">{q.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(caused?.length > 0 || rootCause) && (
          <div className="cs-ur-card">
            {caused?.length > 0 && (
              <>
                {causedLabel && <h4 className="eyebrow cs-ur-label">{causedLabel}</h4>}
                <ul className="cs-ur-bullets">
                  {caused.map((c) => (
                    <li key={c.text}>
                      <span className="cs-ur-dot" style={{ background: c.color }} />
                      {c.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {rootCause && (
              <div className="cs-ur-root">
                {rootCauseLabel && <h4 className="eyebrow cs-ur-label">{rootCauseLabel}</h4>}
                <p className="cs-ur-root-text">{rootCause}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {insight && (
        <div className="cs-ur-card cs-ur-card--insight">
          {insightLabel && <h4 className="eyebrow cs-ur-label">{insightLabel}</h4>}
          <p className="cs-ur-insight-text">{insight}</p>
        </div>
      )}
    </div>
  );
}

// Scroll-driven walkthrough: one sticky phone cycles through each step's screen
// as that step's copy crosses a thin band at the middle of the viewport (same
// mechanic as the reference's sticky-phone section). On narrow containers the
// phone un-sticks and each step shows its own screen inline instead.
function SolutionScroll({ features }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [features.length]);

  return (
    <div className="cs-scroll-wrap">
      <div className="cs-scroll">
        <div className="cs-scroll-sticky" aria-hidden="true">
          <div className="cs-scroll-phone">
            {features.map((f, i) =>
              f.image ? (
                <img
                  key={f.number}
                  className={i === active ? "on" : ""}
                  src={f.image.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              ) : null
            )}
          </div>
        </div>

        <div className="cs-scroll-steps">
          {features.map((f, i) => (
            <div
              key={f.number}
              ref={(el) => (stepRefs.current[i] = el)}
              data-i={i}
              className={`cs-scroll-step ${i === active ? "act" : ""}`}
            >
              {f.image ? (
                <img
                  className="cs-scroll-step-phone"
                  src={f.image.src}
                  alt={f.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="cs-scroll-step-phone cs-scroll-step-phone--empty">MOBILE SCREEN</div>
              )}
              <h4 className="eyebrow cs-feature-label">
                {f.number} &mdash; {f.label}
              </h4>
              <h3 className="cs-feature-heading">{f.heading}</h3>
              {f.body?.map((p) => (
                <p className="case-study-text" key={p}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Impact grid: same merged-cell technique as the Home page's "intentions"
// block — a 16-column grid of square cells where content blocks span several
// tracks and every leftover 1x1 track is a bare cell, so all strokes are the
// same by construction.
const IMPACT_COLS = 16;
const IMPACT_ROWS = 8;
// Rows 1 and 8 are bare filler rows, like Home's intentions grid.
const IMPACT_BLOCKS = {
  metrics: [
    { col: 1, colSpan: 8, row: 2, rowSpan: 3 },
    { col: 9, colSpan: 8, row: 2, rowSpan: 3 },
    { col: 1, colSpan: 8, row: 5, rowSpan: 3 },
    { col: 9, colSpan: 8, row: 5, rowSpan: 3 },
  ],
};
const impactBlockStyle = ({ col, colSpan, row, rowSpan }) => ({
  gridColumn: `${col} / span ${colSpan}`,
  gridRow: `${row} / span ${rowSpan}`,
});
const IMPACT_FILLER_CELLS = [];
for (let row = 1; row <= IMPACT_ROWS; row++) {
  for (let col = 1; col <= IMPACT_COLS; col++) {
    const covered = IMPACT_BLOCKS.metrics.some(
      (b) => col >= b.col && col < b.col + b.colSpan && row >= b.row && row < b.row + b.rowSpan
    );
    if (!covered) IMPACT_FILLER_CELLS.push({ col, row });
  }
}

function ImpactGrid({ metrics = [] }) {
  return (
    <div className="cs-impgrid-wrap">
      <div className="cs-impgrid">
        {IMPACT_FILLER_CELLS.map(({ col, row }) => (
          <span
            key={`${col}-${row}`}
            className="cs-impgrid-cell"
            style={{ gridColumn: col, gridRow: row }}
            aria-hidden="true"
          />
        ))}

        {metrics.slice(0, IMPACT_BLOCKS.metrics.length).map((m, i) => (
          <div
            key={m.label}
            className="cs-impgrid-block cs-impgrid-metric"
            style={impactBlockStyle(IMPACT_BLOCKS.metrics[i])}
          >
            <h4 className="eyebrow cs-impgrid-label">{m.label}</h4>
            <p className="cs-impgrid-value">{m.value}</p>
            <p className="cs-impgrid-desc">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="cs-detail-cell">
      <div className="cs-detail-icon-label">
        <span className="cs-detail-icon" style={{ "--icon": `url(/icons/${icon}.svg)` }} />
        <span className="cs-detail-label mono">{label}</span>
      </div>
      <span className="cs-detail-value">{value}</span>
    </div>
  );
}
