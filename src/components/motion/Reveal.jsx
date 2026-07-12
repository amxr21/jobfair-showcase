import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";

// One easing for every enter across the site — a fast-out settle.
export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 28, className = "", once = true }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-90px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className = "", stagger = 0.07, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-70px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", y = 24 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Word-by-word rising headline for hero moments only — not a general reveal.
export function RisingWords({ text, className = "", delay = 0, as: Tag = "span" }) {
  const reduced = useReducedMotion();
  const words = String(text).split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={reduced ? false : { y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: delay + i * 0.055, ease: EASE }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// Gentle scroll parallax for media/decoration — never body text. Transform
// only, direction-agnostic (vertical), disabled under reduced motion.
export function Parallax({ children, className = "", distance = 60 }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={reduced ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}

// Slides in from the inline-start side — flips automatically in RTL.
export function SlideIn({ children, className = "", delay = 0, distance = 36, once = true }) {
  const reduced = useReducedMotion();
  const { dir } = useLang();
  const x = dir === "rtl" ? distance : -distance;
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
