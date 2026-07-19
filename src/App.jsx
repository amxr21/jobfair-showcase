import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { HowItWorks } from "./pages/HowItWorks";
import { Audiences } from "./pages/Audiences";
import { Story } from "./pages/Story";
import { useLang } from "./i18n/LanguageContext";
import { useSmoothScroll, scrollToTarget } from "./lib/lenis";
import { EASE } from "./components/motion/Reveal";
import { DemoProvider } from "./components/demo/DemoContext";
import { PageBackground, MagneticDots } from "./components/ui/Texture";

// Handles in-page anchors (…#modules) after route transitions settle.
// Top-of-page resets happen in onExitComplete below so the outgoing page
// finishes its fade before the jump.
function HashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return undefined;
    const id = setTimeout(() => scrollToTarget(hash), 420);
    return () => clearTimeout(id);
  }, [pathname, hash]);
  return null;
}

// Shared enter/exit wrapper for every route.
function PageShell({ children }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -10, transition: { duration: 0.22, ease: [0.7, 0, 0.84, 0] } }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { dir } = useLang();
  const location = useLocation();
  useSmoothScroll();

  return (
    <DemoProvider>
      <div dir={dir} className="min-h-screen bg-paper text-ink overflow-x-clip">
        <PageBackground />
        {/* dots pattern layered over the paper base, behind all content */}
        <MagneticDots />
        <Nav />
        <HashScroll />
        <main id="main" className="relative z-10">
          <AnimatePresence mode="wait" onExitComplete={() => scrollToTarget(0, { immediate: true })}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageShell><Home /></PageShell>} />
              <Route path="/platform" element={<PageShell><Platform /></PageShell>} />
              <Route path="/how-it-works" element={<PageShell><HowItWorks /></PageShell>} />
              <Route path="/audiences" element={<PageShell><Audiences /></PageShell>} />
              <Route path="/story" element={<PageShell><Story /></PageShell>} />
              {/* legacy paths from the previous site structure */}
              <Route path="/students" element={<Navigate to="/audiences" replace />} />
              <Route path="/about" element={<Navigate to="/story" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </DemoProvider>
  );
}
