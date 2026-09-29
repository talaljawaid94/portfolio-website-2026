import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { profile, nav, mobileNav } from "../data/content";
import "./Nav.css";

// The hamburger only has anything worth opening once the inner-page links
// (Archives/About/Contact) are back — see SHOW_INNER_PAGES in content.js.
// mobileNav is just [Home] while they're hidden, so hide the button too
// rather than open to a menu with a single link.
const showMenuButton = mobileNav.length > 1;

export default function Nav({ onOpenMenu }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label={`${profile.name} — home`}>
          <Logo size={40} />
        </Link>

        <nav className="nav-links">
          {nav.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-meta">
          <div className="nav-meta-item">
            <span className="eyebrow">Currently</span>
            <span>
              {profile.currentActivity} @{profile.currentCompany}
            </span>
          </div>
          <div className="nav-meta-item">
            <span className="eyebrow">Based in</span>
            <span>{profile.location}</span>
          </div>
        </div>

        {showMenuButton && (
          <button className="nav-menu-btn" onClick={onOpenMenu} aria-label="Open menu">
            ✱
          </button>
        )}
      </div>
    </header>
  );
}
