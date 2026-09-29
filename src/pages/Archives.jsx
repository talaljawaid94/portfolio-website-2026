import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import { archives } from "../data/content";
import "./Archives.css";

export default function Archives() {
  return (
    <div className="archives container">
      <section className="archives-hero">
        <Link to="/" className="archives-back">
          ← Back
        </Link>
        <div className="archives-hero-grid">
          <div>
            <h1 className="serif-italic archives-title">Archives</h1>
            <p className="eyebrow">{archives.eyebrow}</p>
          </div>
          <div className="archives-spanning">
            <span>🗓️</span>
            <div>
              <p className="eyebrow">SPANNING</p>
              <p>{archives.spanning}</p>
            </div>
          </div>
        </div>
      </section>

      <p className="archives-intro">{archives.intro}</p>

      <div className="archives-list">
        {archives.projects.map((p, i) => (
          <ArchiveRow key={i} project={p} />
        ))}
      </div>
    </div>
  );
}

function ArchiveRow({ project }) {
  const [ref, active] = useInView({ threshold: 0.5 });
  return (
    <div ref={ref} className={`archive-row ${active ? "active" : ""}`}>
      <div className="archive-preview" style={{ borderColor: project.color }}>
        <span className="archive-link-pill">Link ↗</span>
      </div>
      <div className="archive-meta">
        <span className="archive-dot" style={{ background: project.color }} />
        <span className="mono">{project.title} • {project.tag}</span>
        <span className="mono archive-date">→{project.date}←</span>
      </div>
    </div>
  );
}
