import { useEffect, useRef } from "react";

// A subtle dot-grid texture for dark surfaces (footer, moss bands). Pure CSS
// radial-gradient tile — no images, no JS, dirt cheap to paint.
export function DotGrid({ className = "", opacity = 0.5 }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(250,250,247,0.5) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        opacity,
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
      }}
    />
  );
}

// A soft radial glow that eases toward the pointer as it moves over the
// surface — desktop/fine-pointer only, transform-free (just background-
// position, cheap to repaint), and inert under reduced motion. Sits behind
// content (pointer-events-none) so it never intercepts clicks.
export function CursorGlow({ className = "", color = "rgba(166,232,92,0.16)", size = 640 }) {
  const ref = useRef(null);
  const pos = useRef({ x: 50, y: 30 });
  const target = useRef({ x: 50, y: 30 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      target.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      el.style.setProperty("--glow-x", `${pos.current.x}%`);
      el.style.setProperty("--glow-y", `${pos.current.y}%`);
      raf.current = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    raf.current = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--glow-x, 50%) var(--glow-y, 30%), ${color}, transparent 70%)`,
      }}
    />
  );
}
