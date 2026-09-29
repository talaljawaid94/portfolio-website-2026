import { useEffect, useRef } from "react";
import "./CursorDot.css";

// Small ring that follows the pointer and grows over anything clickable.
// Only mounted on fine-pointer (mouse/trackpad) devices — see App.jsx.
export default function CursorDot() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.opacity = "1";
    };

    const isInteractive = (el) => el.closest("a, button, .interactive");

    const over = (e) => {
      if (isInteractive(e.target)) dot.classList.add("cursor-dot--active");
    };
    const out = (e) => {
      if (isInteractive(e.target)) dot.classList.remove("cursor-dot--active");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{ left: "-100px", top: "-100px", opacity: 0 }}
      aria-hidden="true"
    />
  );
}
