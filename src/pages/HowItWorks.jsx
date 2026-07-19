import { CalendarClock, FileText, DoorOpen, BarChart3, CheckCircle2, Clock, Activity, Users, Wrench, ArrowUpRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Eyebrow, ButtonLink } from "../components/ui/primitives";
import { useDemo } from "../components/demo/DemoContext";
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

// icons for the three meta chips (duration / signal / owner) — none are
// directional, so they never mirror in RTL.
const META_ICONS = { duration: Clock, metric: Activity, owner: Users };

// screen key (from strings) → how to render it. `bare` screens are standalone
// cards (form/ticket) that bring their own chrome, so they skip the BrowserFrame.
// `wide` marks the real dashboard frames — they carry a sidebar + wide content
// and want the full row to read like the actual app, not a cramped half-column.
const SCREENS = {
  eventops: { url: "event-ops", wide: true, render: () => <EventOpsMock /> },
  companies: { url: "companies", wide: true, render: () => <CompaniesMock /> },
  applicants: { url: "applicants", wide: true, render: () => <ApplicantsMock /> },
  statistics: { url: "statistics", wide: true, render: () => <StatisticsMock /> },
  survey: { url: "survey-results", wide: true, render: () => <SurveyMock /> },
  portal: { url: "company-status", wide: true, render: () => <CompanyPortalMock /> },
  checkin: { url: "student-checkin", wide: true, render: () => <CheckinMock /> },
  form: { bare: true, render: () => <FormMock step={2} /> },
  ticket: { bare: true, render: () => <TicketMock /> },
};

function Screen({ item }) {
  const def = SCREENS[item.screen];
  if (!def) return null;
  // Wide dashboard frames take the whole row so they render at full width,
  // like the real app; narrow "bare" cards stay in their single grid cell.
  const span = def.wide ? "sm:col-span-2" : "";
  return (
    <figure className={`m-0 ${span}`}>
      {def.bare ? (
        <div className="max-w-sm mx-auto">{def.render()}</div>
      ) : (
        <BrowserFrame url={`app.fairflow.demo/${def.url}`}>{def.render()}</BrowserFrame>
      )}
      <figcaption className="mt-3 text-sm text-ink-faint">{item.caption}</figcaption>
    </figure>
  );
}

// The compact top-of-page overview: all four phases previewed on one line,
// linked by a progress rail. Purely a wayfinding aid before the detail below.
function OverviewStrip({ phases, phaseLabel }) {
  return (
    <div className="relative">
      {/* connecting rail behind the nodes */}
      <div
        className="absolute top-6 inset-x-6 h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"
        aria-hidden="true"
      />
      <ol className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-4">
        {phases.map((phase, i) => {
          const Icon = PHASE_ICONS[i];
          return (
            <li key={phase.key} className="flex flex-col items-center text-center px-2">
              <span className="w-12 h-12 rounded-2xl bg-white border border-primary/20 text-primary flex items-center justify-center shadow-[0_10px_24px_-14px_rgba(14,127,65,0.5)]">
                <Icon className="w-5 h-5" strokeWidth={1.75} />
              </span>
              <span className="mt-3 text-[11px] font-bold uppercase tracking-wide text-primary/70">
                {phaseLabel} {i + 1}
              </span>
              <span className="mt-1 type-title text-base text-ink">{phase.title}</span>
              {phase.meta?.duration && (
                <span className="mt-1 text-[13px] text-ink-faint"><bdi>{phase.meta.duration}</bdi></span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// The illustrated stat row inside each phase — duration / key signal / owner.
function MetaChips({ meta, labels }) {
  if (!meta) return null;
  const rows = [
    { k: "duration", v: meta.duration },
    { k: "metric", v: meta.metric },
    { k: "owner", v: meta.owner },
  ].filter((r) => r.v);
  return (
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {rows.map(({ k, v }) => {
        const Icon = META_ICONS[k];
        return (
          <div
            key={k}
            className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white/70 px-4 py-3"
          >
            <span className="w-9 h-9 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="w-4 h-4" strokeWidth={1.75} />
            </span>
            <span className="min-w-0">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">{labels[k]}</dt>
              <dd className="type-title text-[15px] text-ink truncate"><bdi>{v}</bdi></dd>
            </span>
          </div>
        );
      })}
    </dl>
  );
}

// The "under the hood" callout — one detail per phase, so readers who want the
// mechanism get it without bloating the main copy.
function DetailCallout({ detail, label }) {
  if (!detail) return null;
  return (
    <div className="mt-6 rounded-2xl border-s-2 border-primary/40 bg-primary/[0.04] ps-5 pe-4 py-4">
      <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-primary/80">
        <Wrench className="w-3.5 h-3.5" strokeWidth={2} />
        {detail.title || label}
      </p>
      <p className="mt-2 type-body text-[15px] text-ink-soft">{detail.body}</p>
    </div>
  );
}

function Phase({ phase, index, total, phaseLabel, metaLabels, detailLabel }) {
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

          {/* at-a-glance meta: duration / signal / owner */}
          <MetaChips meta={phase.meta} labels={metaLabels} />

          {/* what happens */}
          <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
            {phase.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[15px] text-ink-soft">
                <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>

          {/* the mechanism detail */}
          <DetailCallout detail={phase.detail} label={detailLabel} />
        </Reveal>

        {/* the screens touched in this phase — allowed to break out past the
            reading column on large screens so the dashboards read at a
            realistic, wide size rather than a cramped half-column. */}
        <Reveal delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2 lg:-me-8 xl:-me-20">
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
  const { open: openDemo } = useDemo();
  const phases = t("howItWorks.phases");
  const phaseLabel = t("howItWorks.phaseLabel");
  const metaLabels = t("howItWorks.metaLabels");
  const detailLabel = t("howItWorks.detailLabel");

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

      {/* compact four-phase overview before the detailed timeline */}
      <Container className="pb-10 md:pb-14">
        <Reveal>
          <div className="rounded-4xl border border-ink/8 bg-white/60 px-5 py-8 md:px-10 md:py-10">
            <div className="text-center mb-8">
              <Eyebrow>{t("howItWorks.overviewEyebrow")}</Eyebrow>
              <h2 className="type-title mt-3 text-xl md:text-2xl text-ink">{t("howItWorks.overviewTitle")}</h2>
            </div>
            <OverviewStrip phases={phases} phaseLabel={phaseLabel} />
          </div>
        </Reveal>
      </Container>

      <Container className="py-6 md:py-10 pb-24">
        {phases.map((phase, i) => (
          <Phase
            key={phase.key}
            phase={phase}
            index={i}
            total={phases.length}
            phaseLabel={phaseLabel}
            metaLabels={metaLabels}
            detailLabel={detailLabel}
          />
        ))}
      </Container>

      {/* closing recap + CTA so the page lands instead of stopping */}
      <Container className="pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl md:rounded-5xl bg-moss text-paper px-6 py-14 md:px-16 md:py-20 text-center">
            <Eyebrow tone="dark">{t("howItWorks.outroEyebrow")}</Eyebrow>
            <h2 className="type-title mt-4 text-3xl md:text-5xl text-paper max-w-3xl mx-auto">
              {t("howItWorks.outroTitle")}
            </h2>
            <p className="type-lead mt-5 max-w-2xl mx-auto text-lg text-paper/70">{t("howItWorks.outroSub")}</p>
            <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openDemo}
                className="group inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-4 text-base bg-accent text-moss hover:bg-paper transition-colors duration-200"
              >
                {t("howItWorks.outroPrimary")}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <ButtonLink to="/platform" variant="outlineDark" arrow={false}>
                {t("howItWorks.outroSecondary")}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
