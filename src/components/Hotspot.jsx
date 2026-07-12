import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { EASE } from "./motion/Reveal";

// Pulsing annotation dots layered over a mockup. One is open at a time;
// clicking toggles, Escape or an outside click closes. Coordinates are
// percentages of the mockup box. `flip` anchors the tooltip to the other
// side for dots near the edge.
export function HotspotLayer({ hotspots, className = "" }) {
  const [active, setActive] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    const onPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <div ref={rootRef} className={`absolute inset-0 pointer-events-none ${className}`} dir="ltr">
      {hotspots.map((h, i) => {
        const open = active === i;
        return (
          <div
            key={i}
            className="absolute pointer-events-auto"
            style={{ left: `${h.x}%`, top: `${h.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <button
              type="button"
              onClick={() => setActive(open ? null : i)}
              aria-expanded={open}
              aria-label={h.t}
              className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                open ? "bg-ink text-paper" : "bg-primary text-white animate-pulse-dot"
              }`}
            >
              <Plus className={`w-4 h-4 transition-transform duration-300 ease-out ${open ? "rotate-45" : ""}`} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.16 } }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={`absolute z-20 w-60 rounded-2xl bg-ink text-paper p-4 shadow-2xl ${
                    h.y > 55 ? "bottom-9" : "top-9"
                  } ${h.x > 55 ? "right-0" : "left-0"}`}
                  dir="auto"
                >
                  <div className="text-sm font-bold">{h.t}</div>
                  <p className="text-[13px] leading-relaxed text-paper/70 mt-1">{h.d}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
