import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { getLenis } from "../lib/lenis";

// Drives a stages section from scroll position instead of a timer: as the
// section scrolls through the viewport, the active step advances 0 → count-1.
//
// The target element (spread `stepsProps.ref`) should be TALLER than the
// viewport so there's scroll distance to map across — give it, say,
// `count * 90vh` of height and pin the visual with `position: sticky`. The
// active index is derived from how far the element's top has travelled past
// a reference line near the top of the viewport.
//
// - `select(i)` scrolls to the point where step i becomes active, so tapping a
//   stage still jumps to it (and scroll then keeps it in sync).
// - Under prefers-reduced-motion it parks on step 0 and never moves on scroll;
//   `select` still lets the user step manually.
//
// Returns { active, select, sectionRef }.
export function useScrollSteps(count) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (reduced || count <= 1) return undefined;
    const el = sectionRef.current;
    if (!el) return undefined;

    let raf = null;
    const compute = () => {
      raf = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Total scrollable distance while the section passes the viewport.
      // We start counting when the section top hits ~35% down the viewport
      // and finish as its bottom approaches the same line.
      const startLine = vh * 0.35;
      const scrolled = startLine - rect.top;
      const distance = rect.height - vh * 0.7;
      const progress = distance > 0 ? scrolled / distance : 0;
      const clamped = Math.min(Math.max(progress, 0), 0.9999);
      const next = Math.floor(clamped * count);
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [reduced, count]);

  // Clicking a stage scrolls to the position where it becomes active, so the
  // scroll-driven index and the pick stay consistent.
  const select = (i) => {
    const el = sectionRef.current;
    if (!el) {
      setActive(i);
      return;
    }
    if (reduced || count <= 1) {
      setActive(i);
      return;
    }
    const vh = window.innerHeight;
    const distance = el.offsetHeight - vh * 0.7;
    const startLine = vh * 0.35;
    // Aim slightly past the step's start boundary so it lands firmly on step i.
    const target = (i + 0.5) / count;
    const elTop = el.getBoundingClientRect().top + window.scrollY;
    const y = elTop - startLine + target * distance;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return { active, select, sectionRef };
}
