import { CalendarClock, FileText, DoorOpen, BarChart3, CheckCircle2 } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Eyebrow } from "../components/ui/primitives";
import { Reveal } from "../components/motion/Reveal";
import { BrowserFrame } from "../components/mockups/BrowserFrame";
import { ApplicantsMock } from "../components/mockups/ApplicantsMock";
import { CompaniesMock } from "../components/mockups/CompaniesMock";
import { EventOpsMock } from "../components/mockups/EventOpsMock";
import { StatisticsMock } from "../components/mockups/StatisticsMock";
import { SurveyMock } from "../components/mockups/SurveyMock";
import { CompanyPortalMock } from "../components/mockups/CompanyPortalMock";
import { FormMock, TicketMock } from "../components/mockups/FormMock";
import { CheckinMock } from "../components/mockups/CheckinMock";

// A timeline, not a role picker — the page reads top-to-bottom through the four
// phases of an actual fair. Audiences answers "who + why"; this answers "when".
// Each phase's copy lives in strings.howItWorks.phases so it stays bilingual;
// the phase icon and its screens are wired here by the `screen` keys.
const PHASE_ICONS = [CalendarClock, FileText, DoorOpen, BarChart3];

// screen key (from strings) → how to render it. `bare` screens are standalone
// cards (form/ticket) that bring their own chrome, so they skip the BrowserFrame.
const SCREENS = {
  eventops: { url: "event-ops", render: () => <EventOpsMock /> },
  companies: { url: "companies", render: () => <CompaniesMock /> },
  applicants: { url: "applicants", render: () => <ApplicantsMock /> },
  statistics: { url: "statistics", render: () => <StatisticsMock /> },
  survey: { url: "survey-results", render: () => <SurveyMock /> },
  portal: { url: "company-status", render: () => <CompanyPortalMock /> },
  form: { bare: true, render: () => <FormMock step={2} /> },
  ticket: { bare: true, render: () => <TicketMock /> },
  checkin: { url: "student-checkin", render: () => <CheckinMock /> },
};

function Screen({ item }) {
  const def = SCREENS[item.screen];
  if (!def) return null;
  return (
    <figure className="m-0">
      {def.bare ? def.render() : <BrowserFrame url={`app.fairflow.demo/${def.url}`}>{def.render()}</BrowserFrame>}
      <figcaption className="mt-3 text-sm text-ink-faint">{item.caption}</figcaption>
    </figure>
  );
}

function Phase({ phase, index, total, phaseLabel }) {
  const Icon = PHASE_ICONS[index];
  const n = index + 1;
  const last = index === total - 1;

  return (
    <div className="relative grid grid-cols-[auto,1fr] gap-x-5 sm:gap-x-8">
      {/* timeline spine + node */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">
          <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_12px_28px_-12px_rgba(14,127,65,0.6)]">
            <Icon className="w-5 h-5" strokeWidth={1.75} />
          </span>
          <span className="mt-2 text-[11px] font-bold uppercase tracking-wide text-primary/70">
            {phaseLabel} {n}
          </span>
        </div>
        {!last && <span className="flex-1 w-px my-2 bg-gradient-to-b from-primary/40 to-ink/10" aria-hidden="true" />}
      </div>

      {/* phase content */}
      <div className={last ? "pb-0" : "pb-16 md:pb-24"}>
        <Reveal>
          <Eyebrow>{phase.tag}</Eyebrow>
          <h2 className="type-title mt-3 text-2xl md:text-4xl text-ink">{phase.title}</h2>
          <p className="type-lead mt-3 max-w-2xl text-lg text-ink-faint">{phase.sub}</p>

          {/* who's involved in this phase */}
          <div className="mt-5 flex flex-wrap gap-2">
            {phase.who.map((w) => (
              <span
                key={w}
                className="text-[13px] font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary"
              >
                {w}
              </span>
            ))}
          </div>

          {/* what happens */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
            {phase.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[15px] text-ink-soft">
                <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* the screens touched in this phase */}
        <Reveal delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2">
          {phase.screens.map((s) => (
            <Screen key={s.screen} item={s} />
          ))}
        </Reveal>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLang();
  const phases = t("howItWorks.phases");
  const phaseLabel = t("howItWorks.phaseLabel");

  return (
    <>
      <section className="pt-40 md:pt-52 pb-8">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>{t("howItWorks.heroEyebrow")}</Eyebrow>
            <h1 className="type-display mt-6 text-4xl sm:text-5xl md:text-7xl text-ink max-w-4xl mx-auto">
              {t("howItWorks.heroTitle")}
            </h1>
            <p className="type-lead mt-6 max-w-2xl mx-auto text-lg text-ink-faint">{t("howItWorks.heroSub")}</p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-10 md:py-16 pb-24">
        {phases.map((phase, i) => (
          <Phase key={phase.key} phase={phase} index={i} total={phases.length} phaseLabel={phaseLabel} />
        ))}
      </Container>
    </>
  );
}
