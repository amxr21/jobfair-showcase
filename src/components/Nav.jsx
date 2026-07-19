import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Ticket, Languages } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { EASE } from "./motion/Reveal";
import { PAGE_MAX_W, PAGE_PAD_X } from "./ui/primitives";
import { useDemo } from "./demo/DemoContext";

function Brand({ onDark = false }) {
  const { t } = useLang();
  return (
    <Link to="/" className={`flex items-center gap-2.5 font-bold text-lg ${onDark ? "text-paper" : "text-ink"}`}>
      <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
        <Ticket className="w-5 h-5" strokeWidth={2} />
      </span>
      {t("brand")}
    </Link>
  );
}

export function Nav() {
  const { t, toggle, lang } = useLang();
  const { open: openDemoModal } = useDemo();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation and keep body scroll locked while open.
  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Keep keyboard/AT focus out of the page content the overlay covers.
    const main = document.getElementById("main");
    if (main) {
      if (open) main.setAttribute("inert", "");
      else main.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    ["/", t("nav.home")],
    ["/platform", t("nav.platform")],
    ["/how-it-works", t("nav.howItWorks")],
    ["/audiences", t("nav.audiences")],
    ["/story", t("nav.story")],
  ];

  const goToCta = (e) => {
    e.preventDefault();
    setOpen(false);
    openDemoModal();
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${PAGE_MAX_W} mx-auto ${PAGE_PAD_X} pt-3 sm:pt-4`}>
      {/* floating bar — same outer edges as page content (Container) */}
      <div
        className={`flex items-center justify-between rounded-xl border ps-4 pe-2.5 h-16 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-xl border-ink/10 shadow-[0_16px_40px_-16px_rgba(16,22,19,0.25)]"
            : "bg-paper/60 backdrop-blur-md border-ink/5"
        }`}
      >
        <Brand />

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
          {links.map(([to, label]) => {
            const active = loc.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  active ? "text-paper font-semibold" : "text-ink-soft hover:text-ink font-medium"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggle}
            className="inline-flex items-center justify-center w-11 h-11 text-ink-soft hover:text-primary rounded-full transition-colors duration-200"
            aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
          >
            <Languages className="w-[18px] h-[18px]" />
          </button>
          <a
            href="#cta"
            onClick={goToCta}
            className="hidden md:inline-flex items-center rounded-full bg-primary text-white text-sm font-semibold px-5 py-2.5 hover:bg-primary-dark transition-colors duration-200"
          >
            {t("nav.demo")}
          </a>
          <button
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center text-ink hover:bg-ink/5 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-50 bg-moss text-paper flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-5 h-[76px]">
              <Brand onDark />
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center text-paper hover:bg-paper/10 transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.nav
              className="flex-1 flex flex-col justify-center px-8 gap-2"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
              aria-label="Mobile"
            >
              {links.map(([to, label]) => (
                <motion.div
                  key={to}
                  variants={{
                    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                  }}
                >
                  <Link
                    to={to}
                    className={`block type-title text-4xl py-2.5 ${loc.pathname === to ? "text-accent" : "text-paper"}`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="#cta"
                  onClick={goToCta}
                  className="inline-flex items-center justify-center rounded-full bg-accent text-moss font-semibold px-6 py-4"
                >
                  {t("nav.demo")}
                </a>
                <button
                  onClick={() => {
                    toggle();
                    setOpen(false);
                  }}
                  aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
                  className="inline-flex items-center justify-center rounded-full border border-paper/25 text-paper px-6 py-4"
                >
                  <Languages className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
