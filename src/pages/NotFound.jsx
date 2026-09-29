import { Link } from "react-router-dom";
import "./NotFound.css";

// Catch-all for any URL that doesn't match a real route (typo, dead link,
// stale bookmark) — App.jsx wires this to path="*".
export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1 className="serif not-found-heading">Page not found</h1>
      <p className="not-found-body">
        The page you're looking for doesn't exist, or the link may be out of date.
      </p>
      <Link to="/" className="btn filled">
        ← Back to home
      </Link>
    </section>
  );
}
