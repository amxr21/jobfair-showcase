import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Drives a stages-based section that steps to the next item on a timer.
//
// - Pauses while the pointer is over the section (hover), while the tab is
//   hidden, and while the section is scrolled out of view.
// - A manual pick (via `select`) restarts the countdown from that step, so
//   tapping a stage never fights the timer.
// - Fully inert under prefers-reduced-motion: it parks on the first step and
//   never advances on its own; `select` still works for manual control.
//
// Returns { active, select, containerProps } — spread containerProps on the
// element whose hover should pause the cycle.
export function useAutoAdvance(count, { interval = 4200 } = {}) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useRef(true);

  const select = useCallback((i) => {
    // Re-seed `active` so the effect below restarts its timer from here.
    setActive(((i % count) + count) % count);
  }, [count]);

  // Pause when the section leaves the viewport — no point cycling offscreen.
  // threshold:0 (any sliver counts) because the observed element is often
  // taller than the viewport; a 0.25 ratio would never be reached and the
  // section would sit forever "out of view" and never auto-advance.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => { inView.current = entry.isIntersecting; },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || count <= 1) return undefined;
    const id = setInterval(() => {
      if (document.hidden || !inView.current) return;
      setActive((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [reduced, paused, count, interval, active]);

  const containerProps = {
    ref,
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  };

  return { active, select, containerProps, reduced };
}
