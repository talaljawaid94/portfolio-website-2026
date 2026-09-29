import { Link } from "react-router-dom";
import { mobileNav } from "../data/content";
import "./MobileMenu.css";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu-backdrop ${open ? "open" : ""}`}>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <button className="mobile-menu-close" onClick={onClose}>
            <span className="mobile-menu-close-box" /> CLOSE
          </button>
        </div>
        <nav className="mobile-menu-links">
          {mobileNav.map((item) => (
            <Link key={item.label} to={item.to} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
