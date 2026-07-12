import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck, Building2, GraduationCap, UsersRound,
  ArrowRight, ArrowLeft, Database, QrCode, Radio, Lock, FileSpreadsheet, ListChecks,
} from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Band, SectionHeading, Eyebrow, ButtonLink, Card } from "../components/ui/primitives";
import { RevealGroup, RevealItem, RisingWords, EASE } from "../components/motion/Reveal";
import { CountUp } from "../components/motion/CountUp";
import { Marquee } from "../components/motion/Marquee";
import { Magnetic } from "../components/motion/Magnetic";
import { ScreenStack } from "../components/ScreenStack";
import { JourneyStageVisual, STAGE_ICONS } from "../components/JourneyStageVisual";
import { useAutoAdvance } from "../hooks/useAutoAdvance";
import { useDemo } from "../components/demo/DemoContext";

const STAT_VALUES = ["70+", "1,284", "12", "4"];
const AUDIENCE_ICONS = [ShieldCheck, Building2, GraduationCap, UsersRound];
const AUDIENCE_ANCHORS = ["organizers", "companies", "students", "volunteers"];
const BENTO_ICONS = [Database, QrCode, Radio, Lock, FileSpreadsheet, ListChecks];

function Hero() {
  const { t } = useLang();
  const { open } = useDemo();
  const openDemo = (e) => {
    e.preventDefault();
    open();
  };

  return (
    <section className="relative pt-40 md:pt-52 pb-14 overflow-hidden">
      {/* ambient gradient blobs */}
      <div className="absolute top-10 -start-32 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute top-48 -end-32 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-3xl -z-10" />

      <Container className="text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
          <Eyebrow>{t("home.heroEyebrow")}</Eyebrow>
        </motion.div>

        <h1 className="type-display mt-7 text-5xl sm:text-6xl md:text-[5.25rem] text-ink">
          <RisingWords text={t("home.heroTitle1")} delay={0.1} />
          <span className="block text-primary">
            <RisingWords text={t("home.heroTitle2")} delay={0.32} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="type-lead mt-8 max-w-2xl mx-auto text-lg md:text-xl text-ink-faint"
        >
          {t("home.heroSub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Magnetic>
            <ButtonLink href="#cta" onClick={openDemo} variant="primary" className="!px-8 !py-4 text-base">
              {t("home.heroCtaPrimary")}
            </ButtonLink>
          </Magnetic>
          <ButtonLink to="/platform" variant="ghost" arrow={false}>{t("home.heroCtaSecondary")}</ButtonLink>
        </motion.div>
      </Container>

      {/* capability marquee */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.8 }}
        className="mt-16 md:mt-24 border-y border-ink/8 py-5 text-ink-soft"
      >
        <Marquee items={t("home.marquee")} />
      </motion.div>
    </section>
  );
}

function Screens() {
  const { t } = useLang();
  return (
    <section>
      <Container>
        <SectionHeading
          eyebrow={t("home.screensEyebrow")}
          title={t("home.screensTitle")}
          sub={t("home.screensSub")}
          className="mb-4"
        />
      </Container>
      <ScreenStack />
    </section>
  );
}

// The end-to-end flow as an auto-advancing stepper: a vertical list of the
// six real stages on one side, a live mini-screen for the active stage on the
// other. It cycles on a timer (pausing on hover / offscreen / reduced motion)
// and any stage can be tapped to jump straight to it.
function Journey() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const steps = t("home.steps");
  const { active, select, containerProps } = useAutoAdvance(steps.length, { interval: 4600 });

  return (
    <section className="py-10">
      <Band className="bg-mist px-6 md:px-14 py-16 md:py-24">
        <SectionHeading eyebrow={t("home.journeyEyebrow")} title={t("home.journeyTitle")} sub={t("home.journeySub")} className="mb-4" />
        <p className="text-center text-sm text-ink-faint mb-12 md:mb-14">{t("home.journeyHint")}</p>

        <div {...containerProps} className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start">
          {/* stage list */}
          <ol className="space-y-2.5">
            {steps.map((s, i) => {
              const Icon = STAGE_ICONS[i];
              const selected = active === i;
              return (
                <li key={s.k}>
                  <button
                    onClick={() => select(i)}
                    aria-pressed={selected}
                    className={`group relative w-full text-start flex gap-4 p-4 md:p-5 rounded-3xl border transition-all duration-300 ${
                      selected
                        ? "border-primary/40 bg-white shadow-[0_16px_40px_-22px_rgba(14,127,65,0.4)]"
                        : "border-transparent bg-white/40 hover:bg-white/80"
                    }`}
                  >
                    <div className={`relative w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${selected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                      <span className={`absolute -top-1.5 -end-1.5 w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center transition-colors duration-300 ${selected ? "bg-ink text-paper" : "bg-white text-ink-soft border border-ink/10"}`}>{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-ink">{s.k}</div>
                      <div className="type-body text-[15px] text-ink-faint mt-1">{s.t}</div>
                    </div>
                  </button>
                  {/* progress bar under the active stage — its fill duration
                      matches the auto-advance interval as a visual countdown */}
                  {selected && !reduced && (
                    <div className="mx-5 mt-1 h-0.5 rounded-full bg-ink/8 overflow-hidden">
                      <motion.div
                        key={active}
                        className="h-full bg-primary/60"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4.6, ease: "linear" }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* live stage visual — sticky on desktop so it stays centered as the
              list scrolls past */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -12, transition: { duration: 0.2 } }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <JourneyStageVisual index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Band>
    </section>
  );
}

function AudienceCards() {
  const { t, dir } = useLang();
  const cards = t("home.audienceCards");
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow={t("home.audiencesEyebrow")} title={t("home.audiencesTitle")} sub={t("home.audiencesSub")} className="mb-14" />
      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => {
          const Icon = AUDIENCE_ICONS[i];
          return (
            <RevealItem key={c.name} className="h-full">
              <Link to={`/audiences#${AUDIENCE_ANCHORS[i]}`} className="group block h-full">
                <Card className="h-full p-7 flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="type-title text-xl text-ink mb-2">{c.name}</h3>
                  <p className="type-body text-[15px] text-ink-faint flex-1">{c.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {c.cta}
                    <Arrow className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </Card>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}

function Stats() {
  const { t } = useLang();
  const labels = t("home.statLabels");
  return (
    <section className="py-6">
      <Band className="relative bg-moss py-16 md:py-20 px-6">
        {/* Glow sits behind the card and bleeds past its edges — the band
            itself stays a flat moss surface, no texture, so it reads as its
            own distinct block rather than a continuation of the footer. */}
        <div className="absolute -bottom-24 start-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/25 blur-[110px] -z-10" />
        <RevealGroup className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
          {STAT_VALUES.map((v, i) => (
            <RevealItem key={labels[i]} className="text-center">
              <div className="type-display text-4xl md:text-6xl text-paper">
                <CountUp value={v} />
              </div>
              <div className="text-sm text-paper/50 mt-2.5">{labels[i]}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>
    </section>
  );
}

// A mini decorative visual for select bento tiles — pure divs, no images.
function BentoVisual({ kind }) {
  const reduced = useReducedMotion();
  if (kind === "qr") {
    const cells = [1,0,1,1,0,1,1,0, 0,1,0,1,1,0,0,1, 1,1,0,0,1,0,1,1, 0,1,1,0,1,1,0,1];
    return (
      <div className="mt-5 grid grid-cols-8 gap-1 w-28">
        {cells.map((c, i) => (
          <div key={i} className={`aspect-square rounded-[2px] ${c ? "bg-primary/70" : "bg-primary/10"}`} />
        ))}
      </div>
    );
  }
  if (kind === "live") {
    return (
      <div className="mt-5 flex items-end gap-1.5 h-14">
        {[35, 55, 42, 70, 58, 85, 66, 92].map((h, i) => (
          <motion.div
            key={i}
            className="w-3.5 rounded-t bg-primary/60"
            initial={reduced ? { height: `${h}%` } : { height: "12%" }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
          />
        ))}
      </div>
    );
  }
  return null;
}

function Bento() {
  const { t } = useLang();
  const tiles = t("home.bento");
  const visuals = [null, "qr", "live", null, null, null];
  return (
    <Container className="py-16 md:py-24">
      <SectionHeading eyebrow={t("home.bentoEyebrow")} title={t("home.bentoTitle")} sub={t("home.bentoSub")} className="mb-14" />
      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06}>
        {tiles.map((tile, i) => {
          const Icon = BENTO_ICONS[i];
          return (
            <RevealItem key={tile.t} className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}>
              <Card className={`h-full p-7 ${i === 0 ? "!bg-primary text-white !border-primary" : ""}`} hover={i !== 0}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${i === 0 ? "bg-white/15 text-white" : "bg-primary/10 text-primary"}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className={`type-title text-lg mb-2 ${i === 0 ? "text-white" : "text-ink"}`}>{tile.t}</h3>
                <p className={`type-body text-[15px] ${i === 0 ? "text-white/80" : "text-ink-faint"}`}>{tile.d}</p>
                <BentoVisual kind={visuals[i]} />
              </Card>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Screens />
      <Journey />
      <AudienceCards />
      <Stats />
      <Bento />
    </>
  );
}
