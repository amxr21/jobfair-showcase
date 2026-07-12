import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Counts from 0 up to `value` once scrolled into view. Keeps any non-numeric
// suffix/prefix (e.g. "70+", "100%") intact by parsing the numeric part.
// Thousands separators in the input ("1,284") are preserved in the output.
export function CountUp({ value, duration = 1400, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const raw = String(value);
  const match = raw.replace(/,/g, "").match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : raw;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const grouped = raw.includes(",");

  useEffect(() => {
    if (!inView) return undefined;
    if (reduced) {
      setDisplay(target);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduced]);

  const formatted = grouped
    ? Math.round(display).toLocaleString("en-US")
    : display.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
