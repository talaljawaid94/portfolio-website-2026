import { useState } from "react";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import SiteLoader from "./SiteLoader";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SiteLoader />
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
