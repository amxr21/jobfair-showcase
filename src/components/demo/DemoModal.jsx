import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";
import { EASE } from "../motion/Reveal";
import { DemoForm } from "./DemoForm";

// Portal-rendered modal shell: dimmed backdrop + a scrollable centered panel.
// Enter/exit animate with framer-motion (the ServiceFormModal reference used
// GSAP; this project already standardizes on framer-motion). Handles body
// scroll-lock, Escape-to-close, backdrop-click-to-close, and focus.
export function DemoModal({ open, onClose }) {
  const reduced = useReducedMotion();
  const { dir } = useLang();
  const panelRef = useRef(null);
  const lastFocused = useRef(null);

  // Escape to close.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Body scroll lock + remember/restore focus.
  useEffect(() => {
    if (!open) return undefined;
    lastFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";
    // Move focus into the dialog for keyboard/AT users.
    const id = setTimeout(() => panelRef.current?.focus(), 40);
    return () => {
      clearTimeout(id);
      document.body.style.overflow = "";
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="demo-overlay"
          dir={dir}
          className="fixed inset-0 z-[9990] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.22 } }}
          transition={{ duration: 0.25, ease: EASE }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* backdrop */}
          <div className="fixed inset-0 bg-moss/70 backdrop-blur-sm" aria-hidden="true" />

          {/* panel */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Request a demo"
            className="relative z-10 w-full max-w-xl my-auto bg-paper rounded-4xl border border-ink/10 shadow-[0_40px_120px_-30px_rgba(11,31,21,0.6)] outline-none overflow-hidden"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.2 } }}
            transition={{ duration: 0.38, ease: EASE }}
          >
            <DemoForm onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
