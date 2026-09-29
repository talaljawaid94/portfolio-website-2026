import useInView from "../hooks/useInView";
import BracketWord from "../components/BracketWord";
import OdometerNumber from "../components/OdometerNumber";
import {
  aboutHero,
  timeline,
  aboutStats,
  homeStats,
  aboutSpanning,
  aboutBio,
  photoStrip,
  profile,
} from "../data/content";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <section className="about-hero container">
        <div className="about-hero-text">
          <h1 className="serif">
            <span className="serif-italic">{aboutHero.eyebrowBlue}</span>
            <br />
            {aboutHero.eyebrowWhite}
          </h1>
          <p className="about-quote">{aboutHero.quote}</p>
        </div>
        <div className="about-portrait">
          <span>{profile.initials}</span>
        </div>
      </section>

      <section className="about-timeline container">
        <h2 className="serif section-heading">
          Thriving for over <span className="serif-italic">6+ years</span> in the industry
        </h2>
        <div className="timeline">
          {timeline.map((t, i) => (
            <TimelineRow key={i} item={t} />
          ))}
        </div>
      </section>

      <section className="about-measuring container">
        <h2 className="serif section-heading">Measuring success since day ONE</h2>
        <div className="measuring-grid">
          <div className="measuring-years">
            <p className="serif">{aboutSpanning.from}</p>
            <span>↓</span>
            <p className="serif">{aboutSpanning.to}</p>
          </div>
          {aboutStats.map((s) => (
            <div className="measuring-stat" key={s.label}>
              <p className="eyebrow measuring-stat-label">
                <span aria-hidden="true">{s.icon}</span>
                {s.label.split("\n").map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </p>
              <p className="measuring-stat-value">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="about-odometer">
          {homeStats.map((s) => (
            <div className="about-odometer-row" key={s.label}>
              <OdometerNumber value={s.value} className="about-odometer-value serif" />
              <p className="eyebrow about-odometer-label">
                {s.label.split("\n").map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-strip">
        {photoStrip.map((p, i) => (
          <div className="photo-strip-item" key={i}>
            {p.caption && <span className="photo-strip-caption">{p.caption}</span>}
          </div>
        ))}
      </section>

      <section className="about-bio container">
        <div className="about-bio-card">
          <h2 className="serif">
            {aboutBio.eyebrow} <BracketWord>{aboutBio.highlightWord}</BracketWord>
            <span className="spec-tag">{aboutBio.spec}</span>
          </h2>
          <p className="about-bio-body">{aboutBio.body}</p>
        </div>
      </section>
    </div>
  );
}

function TimelineRow({ item }) {
  const [ref, active] = useInView({ threshold: 0.6 });
  return (
    <div ref={ref} className={`timeline-row ${active ? "active" : ""}`}>
      <span className="timeline-checkbox" />
      <div className="timeline-role">
        <span className="eyebrow">{item.role} @</span>
        <p className="serif">{item.company}</p>
      </div>
      <span className="mono timeline-dates">{item.dates}</span>
    </div>
  );
}
