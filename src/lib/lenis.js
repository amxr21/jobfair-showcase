import { useEffect } from "react";
import Lenis from "lenis";

// Module-level singleton so route-change scroll resets can reach the active
// instance without prop-drilling.
let instance = null;
export const getLenis = () => instance;

// Smooth scrolling for the whole site. Skipped for users who prefer reduced
// motion, and on touch/coarse-pointer devices — Lenis's JS-driven lerp fights
// native momentum scrolling there and is the main source of mobile scroll jank.
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1 });
    instance = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

// Scrolls to an element (or top) through Lenis when active, with a native
// fallback — used by the router reset and in-page anchor links.
export function scrollToTarget(target, { immediate = false } = {}) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset: target === 0 ? 0 : -96 });
    return;
  }
  if (target === 0) {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
}
