import { useEffect, useSyncExternalStore } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import RouteMeta from "./components/RouteMeta";
import CursorDot from "./components/CursorDot";
import Home from "./pages/Home";
import About from "./pages/About";
import Archives from "./pages/Archives";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// True on mouse/trackpad devices (the cursor ring only exists there). Reads
// `false` on the server and during hydration, then the real value, so the
// pre-rendered HTML and the first client render agree.
const FINE_POINTER = "(hover: hover) and (pointer: fine)";
function useFinePointer() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(FINE_POINTER);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(FINE_POINTER).matches,
    () => false
  );
}

export default function App() {
  const hasFinePointer = useFinePointer();

  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      {hasFinePointer && <CursorDot />}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-experiments" element={<Archives />} />
          {/* the page used to live at /archives */}
          <Route path="/archives" element={<Navigate to="/ai-experiments" replace />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
