import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

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

// A tileable soft-noise data-URI (fractal turbulence). Adds the faintest grain
// so large flat paper areas read as a real surface, not dead pixels. Inlined
// as an SVG so there's no network request and the CSP stays happy.
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// One page-wide ambient backdrop, mounted once behind everything (fixed,
// -z-10, pointer-events-none). It gives the whole site depth: two slowly
// drifting brand-tinted auras, a faint dot grid, a top vignette, and a
// whisper of grain — all showing through the transparent gaps between the
// opaque section bands. Transform-only motion, inert under reduced motion.
export function PageBackground() {
  const reduced = useReducedMotion();

  // Shared drift transition — long, eased, alternating, so the auras breathe
  // rather than loop visibly. Disabled entirely when reduced motion is on.
  const drift = (extra) => (reduced ? {} : { ...extra, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" });

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base wash — a very soft vertical gradient instead of flat paper, so
          the page reads as a lit surface rather than a single colour fill */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #F4F7F1 0%, #FAFAF7 40%, #F1F5EE 100%)" }}
      />

      {/* dot grid across the whole page (light-surface tuned) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(16,22,19,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 110% 90% at 50% 25%, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 110% 90% at 50% 25%, black 45%, transparent 95%)",
        }}
      />

      {/* drifting brand auras — the main source of depth */}
      <motion.div
        className="absolute -top-48 -start-40 w-[48rem] h-[48rem] rounded-full bg-primary/[0.13] blur-[120px]"
        initial={false}
        animate={reduced ? {} : { x: [0, 80, 0], y: [0, 60, 0] }}
        transition={drift({ duration: 26 })}
      />
      <motion.div
        className="absolute top-[28%] -end-56 w-[44rem] h-[44rem] rounded-full bg-accent/[0.18] blur-[130px]"
        initial={false}
        animate={reduced ? {} : { x: [0, -70, 0], y: [0, 90, 0] }}
        transition={drift({ duration: 32 })}
      />
      <motion.div
        className="absolute bottom-[-6rem] start-1/4 w-[42rem] h-[42rem] rounded-full bg-primary/[0.09] blur-[140px]"
        initial={false}
        animate={reduced ? {} : { x: [0, 60, 0], y: [0, -70, 0] }}
        transition={drift({ duration: 38 })}
      />
      <motion.div
        className="absolute top-1/2 start-1/2 w-[36rem] h-[36rem] rounded-full bg-secondary/[0.06] blur-[150px]"
        initial={false}
        animate={reduced ? {} : { x: [0, -50, 0], y: [0, 40, 0] }}
        transition={drift({ duration: 44 })}
      />

      {/* soft top vignette so the nav has something to sit against */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(11,31,21,0.06), transparent 20%)" }}
      />

      {/* whisper of grain */}
      <div
        className="absolute inset-0 opacity-[0.6] mix-blend-multiply"
        style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
      />
    </div>
  );
}
