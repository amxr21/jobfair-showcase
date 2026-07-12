import {
  CheckCircle2, MapPin, Megaphone, ListChecks, Boxes, IdCard, ScanLine,
  Users2, CalendarDays, KeyRound, FileDown, ClipboardCheck, Users,
  ShieldCheck, History, FileCheck2, DoorOpen, CopyX, FileSpreadsheet,
  Fingerprint, Lock, Database,
} from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Container, Band, SectionHeading, Eyebrow, Card } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/motion/Reveal";
import { ScreenExplorer } from "../components/ScreenExplorer";
import { BrowserFrame } from "../components/mockups/BrowserFrame";
import { ApplicantsMock } from "../components/mockups/ApplicantsMock";
import { CompaniesMock } from "../components/mockups/CompaniesMock";
import { EventOpsMock } from "../components/mockups/EventOpsMock";
import { SurveyMock } from "../components/mockups/SurveyMock";
import { CompanyPortalMock } from "../components/mockups/CompanyPortalMock";

const SCREEN_MOCKS = [ApplicantsMock, CompaniesMock, EventOpsMock, SurveyMock];
const SCREEN_URLS = ["applicants", "companies", "event-ops", "survey-results"];
const MODULE_ICONS = [MapPin, Megaphone, ListChecks, Boxes, IdCard, ScanLine, Users2, CalendarDays, KeyRound, FileDown, ClipboardCheck, Users];
const TRUST_ICONS = [ShieldCheck, History, FileCheck2, DoorOpen, CopyX, FileSpreadsheet, Fingerprint, Lock, Database];

// Text sits above, the mockup runs full-width below — a real dashboard
// screen reads as a wide desktop screenshot, not a card squeezed into half
// of a two-column grid.
function ScreenRow({ screen, Mock, url }) {
  return (
    <div>
      <Reveal className="max-w-2xl mx-auto text-center mb-10">
        <Eyebrow>{screen.eyebrow}</Eyebrow>
        <h3 className="type-title mt-4 text-2xl md:text-4xl text-ink">{screen.title}</h3>
        <p className="type-lead mt-4 text-lg text-ink-faint">{screen.desc}</p>
        <ul className="mt-7 grid sm:grid-cols-2 gap-3 text-start">
          {screen.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[15px] text-ink-soft">
              <CheckCircle2 className="w-4 h-4 mt-1 shrink-0 text-primary" /> {b}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <BrowserFrame url={`app.fairflow.demo/${url}`}>
          <Mock />
        </BrowserFrame>
      </Reveal>
    </div>
  );
}

function Modules() {
  const { t } = useLang();
  const modules = t("platform.modules");
  return (
    <section id="modules" className="scroll-mt-24 py-10">
      <Band className="bg-mist px-6 md:px-14 py-16 md:py-24">
        <SectionHeading eyebrow={t("platform.modulesEyebrow")} title={t("platform.modulesTitle")} sub={t("platform.modulesSub")} className="mb-14" />
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.04}>
          {modules.map((m, i) => {
            const Icon = MODULE_ICONS[i];
            return (
              <RevealItem key={m.t}>
                <Card className="group h-full p-6 relative overflow-hidden">
                  <span className="absolute top-5 end-6 text-[13px] font-bold text-ink/15 group-hover:text-primary/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="type-title text-base text-ink mb-1.5">{m.t}</h3>
                  <p className="type-body text-sm text-ink-faint">{m.d}</p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>
    </section>
  );
}

function SelfService() {
  const { t } = useLang();
  const cards = t("platform.selfCards");
  return (
    <Container className="py-16 md:py-24">
      <Reveal className="max-w-2xl mx-auto text-center mb-10">
        <Eyebrow>{t("platform.selfEyebrow")}</Eyebrow>
        <h2 className="type-title mt-4 text-3xl md:text-[2.75rem] text-ink">{t("platform.selfTitle")}</h2>
        <p className="type-lead mt-4 text-lg text-ink-faint">{t("platform.selfSub")}</p>
      </Reveal>
      <Reveal delay={0.1} className="mb-14">
        <BrowserFrame url="app.fairflow.demo/company-status">
          <CompanyPortalMock />
        </BrowserFrame>
      </Reveal>
      <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
        {cards.map((c) => (
          <RevealItem key={c.t}>
            <Card className="h-full p-6">
              <h3 className="type-title text-base text-ink mb-1.5">{c.t}</h3>
              <p className="type-body text-sm text-ink-faint">{c.d}</p>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}

function Trust() {
  const { t } = useLang();
  const items = t("platform.trust");
  return (
    <section className="py-6 pb-16">
      <Band className="relative bg-moss px-6 md:px-14 py-16 md:py-24">
        <div className="absolute -top-32 end-0 w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[110px] -z-10" />
        <SectionHeading tone="dark" eyebrow={t("platform.trustEyebrow")} title={t("platform.trustTitle")} sub={t("platform.trustSub")} className="mb-14 relative" />
        <RevealGroup className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
          {items.map((item, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <RevealItem key={item.t}>
                <div className="h-full rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 transition-colors duration-300 hover:border-accent/40">
                  <Icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="type-title text-base text-paper mb-1.5">{item.t}</h3>
                  <p className="type-body text-sm text-paper/55">{item.d}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>
    </section>
  );
}

export function Platform() {
  const { t } = useLang();
  const screens = t("platform.screens");

  return (
    <>
      <section className="pt-40 md:pt-52 pb-10">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>{t("platform.heroEyebrow")}</Eyebrow>
            <h1 className="type-display mt-6 text-4xl sm:text-5xl md:text-7xl text-ink max-w-4xl mx-auto">{t("platform.heroTitle")}</h1>
            <p className="type-lead mt-6 max-w-2xl mx-auto text-lg text-ink-faint">{t("platform.heroSub")}</p>
          </Reveal>
        </Container>
      </section>

      {/* interactive explorer */}
      <section id="screens" className="scroll-mt-28">
        <Container className="py-10 md:py-16">
          <SectionHeading eyebrow={t("platform.explorerEyebrow")} title={t("platform.explorerTitle")} sub={t("platform.explorerSub")} className="mb-10" />
          <ScreenExplorer />
        </Container>
      </section>

      {/* deep dives — same page column as everything else (PAGE_MAX_W) */}
      <Container className="py-16 md:py-24 space-y-24 md:space-y-36">
        {screens.map((screen, i) => (
          <ScreenRow key={screen.eyebrow} screen={screen} Mock={SCREEN_MOCKS[i]} url={SCREEN_URLS[i]} />
        ))}
      </Container>

      <Modules />
      <SelfService />
      <Trust />
    </>
  );
}
