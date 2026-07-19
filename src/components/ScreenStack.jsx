import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BrowserFrame } from "./mockups/BrowserFrame";
import { ApplicantsMock } from "./mockups/ApplicantsMock";
import { CompaniesMock } from "./mockups/CompaniesMock";
import { EventOpsMock } from "./mockups/EventOpsMock";
import { StatisticsMock } from "./mockups/StatisticsMock";
import { useLang } from "../i18n/LanguageContext";

const SCREENS = [
  { url: "applicants", Mock: ApplicantsMock, label: { en: "Applicants", ar: "المتقدّمون" } },
  { url: "companies", Mock: CompaniesMock, label: { en: "Companies", ar: "الشركات" } },
  { url: "event-ops", Mock: EventOpsMock, label: { en: "Event Ops", ar: "عمليات المعرض" } },
  { url: "statistics", Mock: StatisticsMock, label: { en: "Statistics", ar: "الإحصاءات" } },
];

// One card in the deck. As overall scroll progresses through its slice, the
// card rises into view, settles pinned, then scales down + dims slightly as
// the next card comes over it — the classic scroll-stacked deck feel.
// Transform/opacity only, so it stays on the compositor.
function Card({ screen, index, total, progress }) {
  const isLast = index === total - 1;
  const seg = 1 / total;
  const start = index * seg;
  const enterEnd = Math.min(start + seg * 0.6, 1);
  // Cover window: when the next card slides over this one. The last card is
  // never covered, so it gets an inert-but-valid range near the very end
  // (useTransform requires increasing keyframes within [0,1]).
  const coverStart = isLast ? 0.99 : start + seg;
  const coverEnd = isLast ? 1 : Math.min(start + seg + seg * 0.9, 1);

  const y = useTransform(progress, [start, enterEnd], [index === 0 ? 0 : 90, 0]);
  const opacity = useTransform(progress, [start, enterEnd], [index === 0 ? 1 : 0, 1]);
  const scale = useTransform(progress, [coverStart, coverEnd], isLast ? [1, 1] : [1, 0.94]);
  const dim = useTransform(progress, [coverStart, coverEnd], isLast ? [0, 0] : [0, 0.14]);

  return (
    <motion.div
      style={{ y, opacity, scale, zIndex: index }}
      className="absolute inset-0 flex items-start justify-center"
    >
      <div className="relative w-full max-w-7xl">
        <BrowserFrame url={`app.fairflow.demo/${screen.url}`}>
          <screen.Mock />
        </BrowserFrame>
        {/* darkening veil as it gets covered */}
        <motion.div style={{ opacity: dim }} className="absolute inset-0 rounded-3xl bg-moss pointer-events-none" />
      </div>
    </motion.div>
  );
}

// Extracted so the useTransform hook isn't called inside a .map() loop.
function LabelChip({ label, index, total, progress }) {
  const seg = 1 / total;
  const opacity = useTransform(
    progress,
    [index * seg, index * seg + seg * 0.5, (index + 1) * seg],
    [index === 0 ? 1 : 0.35, 1, index === total - 1 ? 1 : 0.35]
  );
  return (
    <motion.span style={{ opacity }} className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-primary/10 text-primary">
      {label}
    </motion.span>
  );
}

export function ScreenStack() {
  const { lang } = useLang();
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Reduced motion: a simple static column instead of the pinned deck.
  if (reduced) {
    return (
      <div className="space-y-10 px-5 max-w-7xl mx-auto">
        {SCREENS.map((s) => (
          <BrowserFrame key={s.url} url={`app.fairflow.demo/${s.url}`}>
            <s.Mock />
          </BrowserFrame>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" style={{ height: `${SCREENS.length * 100}svh` }}>
      <div className="sticky top-0 h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <div className="mb-6 flex items-center gap-2">
          {SCREENS.map((s, i) => (
            <LabelChip key={s.url} label={s.label[lang] || s.label.en} index={i} total={SCREENS.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="relative w-full px-5" style={{ height: "min(560px, 68vh)" }}>
          {SCREENS.map((screen, i) => (
            <Card key={screen.url} screen={screen} index={i} total={SCREENS.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}
