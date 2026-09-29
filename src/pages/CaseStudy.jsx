import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PointItem from "../components/PointItem";
import useScrollSpy from "../hooks/useScrollSpy";
import { caseStudies, visibleCaseStudies } from "../data/content";
import "./CaseStudy.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "solved", label: "How I Solved It" },
  { id: "key-challenges", label: "Key Challenges" },
  { id: "outcomes", label: "Outcomes" },
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
  // "Next case study" cycles through the visible list only, so a hidden one
  // never gets suggested — falls back to the first visible study if the
  // current one (e.g. viewed directly while hidden) isn't in that list.
  const visibleIndex = visibleCaseStudies.findIndex((cs) => cs.id === study.id);
  const next =
    visibleIndex === -1
      ? visibleCaseStudies[0]
      : visibleCaseStudies[(visibleIndex + 1) % visibleCaseStudies.length];
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
    <div className="case-study container" style={accentStyle}>
      <div className="cs-header">
        <div className="cs-header-left">
          <Link to="/" className="cs-back-btn">← Back</Link>
          <div className="cs-header-content-bottom">
            <div className="cs-project-tag">
              <span className="cs-project-logo">{study.companyInitial ?? study.company[0]}</span>
              <span>{study.company}</span>
            </div>
            <h1 className="cs-heading">{study.title}</h1>
          </div>
        </div>

        <div className="cs-header-right">
          <DetailRow label="ROLE" value={study.meta?.role} />
          <DetailRow label="TEAM" value={study.meta?.team} />
          <DetailRow label="DURATION" value={study.meta?.duration} />
          <DetailRow
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
        </div>

        {study.keyFact && (
          <div className="cs-key-fact-row">
            <span className="cs-key-fact-tag">✱ KEY FACT</span>
            <p className="cs-key-fact-text">{study.keyFact}</p>
          </div>
        )}
      </div>

      <div className="case-study-hero" style={{ background: study.gradient }} />

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
          {study.contributions && (
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

          <CSSection id="overview" title="Overview">
            <p className="case-study-text">{study.overview}</p>
          </CSSection>

          <CSSection id="challenge" title="The Challenge" study={study}>
            {study.challenge?.intro && <p className="case-study-text">{study.challenge.intro}</p>}
            {study.challenge?.points?.length > 0 && (
              <ul className="point-list">
                {study.challenge.points.map((p, i) => (
                  <PointItem key={i} text={p} />
                ))}
              </ul>
            )}
          </CSSection>

          <CSSection id="solved" title="How I Solved It" study={study}>
            <div className="cs-solution-list">
              {study.solutions?.map((s, i) => (
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
          </CSSection>

          <CSSection id="key-challenges" title="Key Challenges" study={study}>
            <div className="cs-challenge-list">
              {study.keyChallenges?.map((k, i) => (
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

          <CSSection id="outcomes" title="Outcomes" study={study}>
            <ul className="point-list">
              {study.outcomes?.map((o, i) => (
                <PointItem key={i} text={o} />
              ))}
            </ul>
          </CSSection>

          <CSSection id="lessons" title="Lessons Learned" study={study}>
            <p className="case-study-text">{study.lessons}</p>
          </CSSection>

          <CSSection id="conclusion" title="Conclusion" study={study}>
            <p className="case-study-text">{study.conclusion}</p>
          </CSSection>

          {next && next.id !== study.id && (
            <Link to={`/case-study/${next.id}`} className="cs-next-card">
              <span className="eyebrow">Next Case Study</span>
              <div className="cs-next-card-body">
                <span className="cs-next-thumb" style={{ background: next.gradient }} />
                <div>
                  <p className="cs-next-title serif">{next.headline ?? next.title}</p>
                  <span className="eyebrow">
                    {next.company} · {next.year}
                  </span>
                </div>
                <span className="cs-next-arrow">→</span>
              </div>
            </Link>
          )}
        </div>
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
      return Boolean(study.challenge?.intro || study.challenge?.points?.length);
    case "solved":
      return Boolean(study.solutions?.length);
    case "key-challenges":
      return Boolean(study.keyChallenges?.length);
    case "outcomes":
      return Boolean(study.outcomes?.length);
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

function DetailRow({ label, value }) {
  return (
    <div className="cs-detail-cell">
      <span className="cs-detail-label mono">{label}</span>
      <span className="cs-detail-value">{value}</span>
    </div>
  );
}
