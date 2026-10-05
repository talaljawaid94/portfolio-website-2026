import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { archives } from "../data/content";
import { trackEvent } from "../lib/clarity";
import "./Home.css";
import "./CaseStudy.css";
import "./Archives.css";

export default function Archives() {
  // same "View …" cursor pill as the Home case study cards
  const pillRef = useRef(null);
  const [pillVisible, setPillVisible] = useState(false);

  // hide the site's ring cursor while the pill is showing
  useEffect(() => {
    document.body.classList.toggle("work-pill-active", pillVisible);
    return () => document.body.classList.remove("work-pill-active");
  }, [pillVisible]);

  return (
    <div className="case-study archives">
      <div className="cs-header cs-header--solo">
        <div className="cs-header-left">
          <Link to="/" className="cs-back-btn">← Back</Link>
          <div className="cs-header-content-bottom">
            <div className="cs-project-tag">
              <span className="eyebrow">{archives.eyebrow}</span>
            </div>
            <h1 className="cs-heading">AI Experiments</h1>
          </div>
        </div>
      </div>

      <p className="archives-intro">{archives.intro}</p>

      <div
        className="archives-list"
        onMouseMove={(e) => {
          if (pillRef.current) {
            pillRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
          }
        }}
      >
        <div ref={pillRef} className={`work-cursor-pill ${pillVisible ? "visible" : ""}`}>
          View Experiment
        </div>
        {archives.projects.map((p) => (
          <ArchiveCard key={p.name} project={p} onHover={setPillVisible} />
        ))}
      </div>
    </div>
  );
}

// Same card as the Home case study list (.case-study-card and friends in
// Home.css): colour frame, gradient image, name + year row, title.
function ArchiveCard({ project, onHover }) {
  const Tag = project.url ? "a" : "div";
  const linkProps = project.url ? { href: project.url, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Tag
      className={`case-study-card ${project.url ? "" : "case-study-card--static"}`}
      style={{ "--work-color": project.color, background: project.color }}
      onClick={() => trackEvent(`Experiment card: ${project.name.split(" — ")[0]}`)}
      onMouseEnter={project.url ? () => onHover(true) : undefined}
      onMouseLeave={project.url ? () => onHover(false) : undefined}
      {...linkProps}
    >
      <div
        className={`case-study-image archive-image ${project.images ? "case-study-image--banner" : ""}`}
        style={
          project.images
            ? {
                "--banner-phone": `url("${encodeURI(project.images.phone)}")`,
                "--banner-tablet": `url("${encodeURI(project.images.tablet)}")`,
                "--banner-desktop": `url("${encodeURI(project.images.desktop)}")`,
              }
            : { background: project.gradient }
        }
      />
      <div className="case-study-header">
        <div className="case-study-header-left">
          <span className="case-study-block" />
          <h3 className="case-study-name">{project.name}</h3>
        </div>
        <span className="case-study-year">→ {project.year} ←</span>
      </div>
      <p className="case-study-title">{project.title}</p>
      {project.description && <p className="case-study-title archive-desc">{project.description}</p>}
    </Tag>
  );
}
