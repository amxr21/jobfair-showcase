import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";
import { BrowserFrame } from "./mockups/BrowserFrame";
import { ApplicantsMock } from "./mockups/ApplicantsMock";
import { CompaniesMock } from "./mockups/CompaniesMock";
import { EventOpsMock } from "./mockups/EventOpsMock";
import { StatisticsMock } from "./mockups/StatisticsMock";
import { SurveyMock } from "./mockups/SurveyMock";
import { HotspotLayer } from "./Hotspot";
import { EASE } from "./motion/Reveal";

// Tab key → mockup + fake URL + hotspot coordinates (percent of the frame).
// Hotspot copy comes from strings.platform.hotspots so it stays bilingual.
const SCREENS = [
  { key: "applicants", Mock: ApplicantsMock, url: "applicants", spots: [{ x: 34, y: 38 }, { x: 88, y: 56 }, { x: 45, y: 70 }] },
  { key: "companies", Mock: CompaniesMock, url: "companies", spots: [{ x: 66, y: 16 }, { x: 88, y: 16 }, { x: 48, y: 62 }] },
  { key: "eventops", Mock: EventOpsMock, url: "event-ops", spots: [{ x: 38, y: 60 }, { x: 80, y: 55 }, { x: 52, y: 25 }] },
  { key: "statistics", Mock: StatisticsMock, url: "statistics", spots: [{ x: 50, y: 28 }, { x: 48, y: 66 }, { x: 87, y: 80 }] },
  { key: "survey", Mock: SurveyMock, url: "survey-results", spots: [{ x: 55, y: 33 }, { x: 45, y: 66 }, { x: 86, y: 60 }] },
];

export function ScreenExplorer() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const tabs = t("platform.tabs");
  const screen = SCREENS[active];
  const hotspotCopy = t(`platform.hotspots.${screen.key}`);
  const hotspots = screen.spots.map((pos, i) => ({ ...pos, ...hotspotCopy[i] }));

  return (
    <div>
      {/* tab pills */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-8" role="tablist" aria-label={t("platform.explorerTitle")}>
        {tabs.map((label, i) => {
          const selected = i === active;
          return (
            <button
              key={label}
              id={`explorer-tab-${i}`}
              role="tab"
              aria-selected={selected}
              aria-controls="explorer-panel"
              onClick={() => setActive(i)}
              className={`relative px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                selected ? "text-paper" : "text-ink-soft hover:text-ink bg-ink/5 hover:bg-ink/10"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="explorer-tab"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>

      {/* the screen — a scrollable, near-full-height window so the real page
          shows top to bottom instead of being squeezed into a short card */}
      <div
        id="explorer-panel"
        role="tabpanel"
        aria-labelledby={`explorer-tab-${active}`}
        className="relative max-w-7xl mx-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={screen.key}
            initial={reduced ? false : { opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: -14, scale: 0.99, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative"
          >
            <BrowserFrame url={`app.fairflow.demo/${screen.url}`}>
              <screen.Mock />
            </BrowserFrame>
            <HotspotLayer hotspots={hotspots} />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="text-center text-sm text-ink-faint mt-6">{t("common.hotspotHint")}</p>
    </div>
  );
}
