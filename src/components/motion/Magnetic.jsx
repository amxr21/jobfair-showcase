import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// Subtle magnetic pull for primary CTAs — desktop pointer only, transform
// only, springs back on leave. Strength stays low so it reads as weight,
// not a gimmick.
export function Magnetic({ children, strength = 0.25, className = "" }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 });

  if (reduced) return <div className={className}>{children}</div>;

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
