import { Link } from "react-router-dom";

// A link to a case study, used by the Home page (card grid + hero teaser) and
// the "more case studies" cards at the end of each case study page. It opens
// the study's inner /case-study/:id page — except when `useExternalPreview` is
// set, where the inner write-up isn't ready yet and it opens `meta.liveUrl`
// (the Figma prototype) in a new tab instead. Remove that flag per study once
// its page is ready, and it goes back to routing internally on its own.
// `underNda` studies render as a plain <div> instead (no link at all).
export default function CaseStudyLink({ study, className, style, children, ...rest }) {
  // Under NDA: render the same card but as a plain, non-interactive block —
  // nothing to click, no inner page to continue to.
  if (study.underNda) {
    return (
      <div className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }
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
