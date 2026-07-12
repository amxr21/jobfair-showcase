import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, User, GraduationCap, Sparkles, Ticket, Search } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Band, PAGE_MAX_W, PAGE_PAD_X, Eyebrow, Card } from "../components/ui/primitives";
import { Reveal, EASE } from "../components/motion/Reveal";
import { useAutoAdvance } from "../hooks/useAutoAdvance";
import { BrowserFrame } from "../components/mockups/BrowserFrame";
import { EventOpsMock } from "../components/mockups/EventOpsMock";
import { CompanyPortalMock } from "../components/mockups/CompanyPortalMock";
import { CheckinMock } from "../components/mockups/CheckinMock";
import { FormMock, TicketMock } from "../components/mockups/FormMock";
import { scrollToTarget } from "../lib/lenis";

const SECTION_IDS = ["organizers", "companies", "students", "volunteers"];
const STEP_ICONS = [User, GraduationCap, Sparkles];

// Sticky anchor pills under the floating nav; the active section is tracked
// with an IntersectionObserver.
function SubNav() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const labels = t("audiences.subnav");
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[86px] z-30 flex justify-center px-3">
      <div className="inline-flex gap-1 rounded-full bg-paper/85 backdrop-blur-xl border border-ink/10 p-1.5 shadow-[0_12px_32px_-16px_rgba(16,22,19,0.25)] overflow-x-auto max-w-full">
        {labels.map((label, i) => {
          const id = SECTION_IDS[i];
          const selected = active === id;
          return (
            <button
              key={id}
              onClick={() => scrollToTarget(`#${id}`)}
              className={`relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selected ? "text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="subnav-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PointList({ points }) {
  return (
    <ul className="mt-7 space-y-3">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-primary" /> {p}
        </li>
      ))}
    </ul>
  );
}

// Text sits centered above, the mockup runs full-width below — a real
// dashboard screen reads as a wide desktop screenshot, not a card squeezed
// into half of a two-column grid.
function AudienceSection({ id, data, media }) {
  return (
    <section id={id} className="scroll-mt-36">
      <div className="py-16 md:py-24">
        <Container>
          <Reveal className="max-w-2xl mx-auto text-center mb-10">
            <Eyebrow>{data.tag}</Eyebrow>
            <h2 className="type-title mt-4 text-3xl md:text-[2.75rem] text-ink">{data.title}</h2>
            <p className="type-lead mt-4 text-lg text-ink-faint">{data.sub}</p>
            {data.points && <PointList points={data.points} />}
          </Reveal>
        </Container>
        {/* same page column as everything else (PAGE_MAX_W) */}
        <Reveal delay={0.1} className={`${PAGE_MAX_W} mx-auto ${PAGE_PAD_X}`}>
          {media}
        </Reveal>
      </div>
    </section>
  );
}

// The student journey: an auto-advancing 3-step form walkthrough + ticket/
// lookup. The step list cycles on a timer (pausing on hover / offscreen /
// reduced motion) and any step can be tapped to jump to it.
function StudentsSection() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const data = t("audiences.students");
  const { active, select, containerProps } = useAutoAdvance(data.steps.length, { interval: 4600 });

  return (
    <section id="students" className="scroll-mt-36 py-10">
      <Band className="bg-mist px-6 md:px-14 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <Eyebrow>{data.tag}</Eyebrow>
          <h2 className="type-title mt-4 text-3xl md:text-[2.75rem] text-ink">{data.title}</h2>
          <p className="type-lead mt-4 text-lg text-ink-faint">{data.sub}</p>
        </div>

        <div {...containerProps} className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-3">
            {data.steps.map((s, i) => {
              const n = i + 1;
              const Icon = STEP_ICONS[i];
              const selected = active === i;
              return (
                <div key={s.label}>
                  <button
                    onClick={() => select(i)}
                    aria-pressed={selected}
                    className={`w-full text-start flex gap-4 p-5 rounded-3xl border transition-all duration-300 ${
                      selected ? "border-primary/40 bg-white shadow-[0_16px_40px_-20px_rgba(14,127,65,0.35)]" : "border-transparent bg-white/50 hover:bg-white"
                    }`}
                  >
                    <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${selected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="font-bold text-ink">{n}. {s.label}</div>
                      <div className="type-body text-[15px] text-ink-faint mt-1">{s.desc}</div>
                    </div>
                  </button>
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
                </div>
              );
            })}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <FormMock step={active + 1} />
          </motion.div>
        </div>

        {/* ticket + lookup */}
        <div className="relative grid lg:grid-cols-2 gap-10 items-center mt-16 md:mt-24">
          <Reveal>
            <Eyebrow>{data.ticketTitle}</Eyebrow>
            <h3 className="type-title mt-4 text-2xl md:text-3xl text-ink">{data.ticketTitle}</h3>
            <p className="type-lead mt-3 text-lg text-ink-faint">{data.ticketDesc}</p>

            <Card className="mt-8 p-6 bg-white" hover={false}>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Search className="w-5 h-5" />
                <h4 className="font-bold text-ink">{data.lookupTitle}</h4>
              </div>
              <p className="type-body text-[15px] text-ink-faint">{data.lookupDesc}</p>
              <div className="mt-4 flex gap-2" dir="ltr">
                <div className="flex-1 h-12 rounded-xl border border-ink/10 flex items-center px-3.5 text-ink-faint text-sm font-mono tracking-widest">U 2210••••</div>
                <div className="h-12 px-5 rounded-xl bg-primary text-white text-sm font-semibold flex items-center gap-2"><Ticket className="w-4 h-4" /> Get ticket</div>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <TicketMock />
          </Reveal>
        </div>
      </Band>
    </section>
  );
}

export function Audiences() {
  const { t } = useLang();

  return (
    <>
      <section className="pt-40 md:pt-52 pb-10">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>{t("audiences.heroEyebrow")}</Eyebrow>
            <h1 className="type-display mt-6 text-4xl sm:text-5xl md:text-7xl text-ink max-w-4xl mx-auto">{t("audiences.heroTitle")}</h1>
            <p className="type-lead mt-6 max-w-2xl mx-auto text-lg text-ink-faint">{t("audiences.heroSub")}</p>
          </Reveal>
        </Container>
      </section>

      <SubNav />

      <AudienceSection
        id="organizers"
        data={t("audiences.organizers")}
        media={
          <BrowserFrame url="app.fairflow.demo/event-ops">
            <EventOpsMock />
          </BrowserFrame>
        }
      />

      <AudienceSection
        id="companies"
        data={t("audiences.companies")}
        media={
          <BrowserFrame url="app.fairflow.demo/company-status">
            <CompanyPortalMock />
          </BrowserFrame>
        }
      />

      <StudentsSection />

      <AudienceSection
        id="volunteers"
        data={t("audiences.volunteers")}
        media={
          <BrowserFrame url="app.fairflow.demo/student-checkin">
            <CheckinMock />
          </BrowserFrame>
        }
      />
    </>
  );
}
