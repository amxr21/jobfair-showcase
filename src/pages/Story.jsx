import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, X, GraduationCap, Briefcase, Users2, Plus, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Band, SectionHeading, Eyebrow, Card } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem, EASE } from "../components/motion/Reveal";
import { CountUp } from "../components/motion/CountUp";

const USE_ICONS = [GraduationCap, Briefcase, Users2];

function Origin() {
  const { t } = useLang();
  const stats = t("story.originStats");
  return (
    <Container className="py-16 md:py-24">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
        <Reveal>
          <Eyebrow>{t("story.originEyebrow")}</Eyebrow>
          <h2 className="type-title mt-4 text-3xl md:text-[2.75rem] text-ink">{t("story.originTitle")}</h2>
          <p className="type-lead mt-6 text-lg text-ink-soft">{t("story.originBody1")}</p>
          <p className="type-lead mt-4 text-lg text-ink-soft">{t("story.originBody2")}</p>
        </Reveal>
        <RevealGroup className="flex lg:flex-col justify-between gap-8 lg:border-s lg:border-ink/10 lg:ps-12 self-center flex-wrap">
          {stats.map((s) => (
            <RevealItem key={s.l}>
              <div className="type-display text-5xl md:text-6xl text-primary">
                <CountUp value={s.v} />
              </div>
              <div className="text-sm text-ink-faint mt-2">{s.l}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Container>
  );
}

function BeforeAfter() {
  const { t } = useLang();
  return (
    <Container className="pb-16 md:pb-24">
      <SectionHeading eyebrow={t("story.baEyebrow")} title={t("story.baTitle")} className="mb-12" />
      <div className="grid md:grid-cols-2 gap-4">
        <Reveal>
          <div className="h-full rounded-4xl border border-ink/8 bg-mist p-8 md:p-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-ink/8 text-ink-soft mb-6">
              <X className="w-3.5 h-3.5" /> {t("story.beforeTitle")}
            </span>
            <ul className="space-y-3.5">
              {t("story.beforeItems").map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-ink-faint">
                  <X className="w-4 h-4 mt-1 shrink-0 text-ink/25" /> {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="h-full rounded-4xl bg-moss p-8 md:p-10 relative overflow-visible">
            <div className="absolute -top-16 -end-16 w-64 h-64 rounded-full bg-primary/30 blur-[80px] -z-10" />
            <span className="relative inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-accent text-moss mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" /> {t("story.afterTitle")}
            </span>
            <ul className="relative space-y-3.5">
              {t("story.afterItems").map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-paper/85">
                  <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-accent" /> {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}

// Numbered editorial rows.
function Principles() {
  const { t } = useLang();
  const items = t("story.principles");
  return (
    <Container className="pb-16 md:pb-24">
      <SectionHeading eyebrow={t("story.principlesEyebrow")} title={t("story.principlesTitle")} align="start" className="mb-10" />
      <div className="border-t border-ink/10">
        {items.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05}>
            <div className="group grid md:grid-cols-[80px_1fr_1.4fr] gap-2 md:gap-8 py-7 md:py-9 border-b border-ink/10 items-baseline">
              <span className="text-sm font-bold text-ink/25 group-hover:text-primary transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="type-title text-xl md:text-2xl text-ink transition-transform duration-300 ease-out group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">
                {p.t}
              </h3>
              <p className="type-body text-ink-faint">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

// Numbered roadmap teaser — same editorial-row language as Principles, so
// it reads as more of the same story rather than a bolted-on footer widget.
function Roadmap() {
  const { t } = useLang();
  const items = t("story.roadmapItems");
  return (
    <Container className="pb-16 md:pb-24">
      <SectionHeading eyebrow={t("story.roadmapEyebrow")} title={t("story.roadmapTitle")} align="start" className="mb-10" />
      <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.06}>
        {items.map((item, i) => (
          <RevealItem key={item}>
            <div className="h-full rounded-3xl border border-ink/8 p-6 flex items-start gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </span>
              <p className="type-body text-[15px] text-ink-soft pt-1">{item}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}

function UseCases() {
  const { t } = useLang();
  const cases = t("story.cases");
  return (
    <section id="use-cases" className="scroll-mt-28 py-6">
      <Band className="bg-mist px-6 md:px-14 py-16 md:py-24">
        <SectionHeading eyebrow={t("story.casesEyebrow")} title={t("story.casesTitle")} sub={t("story.casesSub")} className="mb-14" />
        <RevealGroup className="grid md:grid-cols-3 gap-4">
          {cases.map((c, i) => {
            const Icon = USE_ICONS[i];
            return (
              <RevealItem key={c.t}>
                <Card className="h-full p-8 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="type-title text-lg text-ink mb-2">{c.t}</h3>
                  <p className="type-body text-[15px] text-ink-faint">{c.d}</p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>
    </section>
  );
}

// Custom accordion — buttons + animated height, no native <details>.
function Faq() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const items = t("story.faq");
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28">
      <Container className="py-16 md:py-24 !max-w-3xl">
        <SectionHeading eyebrow={t("story.faqEyebrow")} title={t("story.faqTitle")} className="mb-12" />
        <div className="space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Card key={f.q} className="overflow-hidden" hover={false}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-start px-6 py-5"
                >
                  <span className="font-bold text-ink">{f.q}</span>
                  <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-primary text-white" : "bg-ink/5 text-ink-soft"}`}>
                    <Plus className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="type-body px-6 pb-6 text-ink-faint">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function Story() {
  const { t } = useLang();
  return (
    <>
      <section className="pt-40 md:pt-52 pb-4">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>{t("story.heroEyebrow")}</Eyebrow>
            <h1 className="type-display mt-6 text-4xl sm:text-5xl md:text-7xl text-ink max-w-4xl mx-auto">{t("story.heroTitle")}</h1>
            <p className="type-lead mt-6 max-w-2xl mx-auto text-lg text-ink-faint">{t("story.heroSub")}</p>
          </Reveal>
        </Container>
      </section>
      <Origin />
      <BeforeAfter />
      <Principles />
      <Roadmap />
      <UseCases />
      <Faq />
    </>
  );
}
