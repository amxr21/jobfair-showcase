import { Link } from "react-router-dom";
import { Ticket, Globe, Mail, ArrowUpRight, ArrowUp, Languages } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { Eyebrow, ButtonLink, PAGE_MAX_W, PAGE_PAD_X } from "./ui/primitives";
import { Reveal } from "./motion/Reveal";
import { Magnetic } from "./motion/Magnetic";
import { DotGrid, CursorGlow } from "./ui/Texture";
import { useDemo } from "./demo/DemoContext";
import { scrollToTarget } from "../lib/lenis";

// GitHub's official mark — lucide-react ships no brand icons, and per the
// icon-sourcing rule a real brand needs its own mark, not a generic stand-in.
function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.9 5.32.9 11.6c0 5.02 3.29 9.28 7.86 10.78.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.21.66.79.55A11.1 11.1 0 0 0 23.1 11.6C23.1 5.32 18.27.5 12 .5Z" />
    </svg>
  );
}

const CONTACT = [
  { Icon: Mail, key: "contactEmailLabel", value: "ammar211080@gmail.com", href: "mailto:ammar211080@gmail.com" },
  { Icon: Globe, key: "contactSiteLabel", value: "amxr.site", href: "https://amxr.site" },
  { Icon: GithubIcon, key: "contactSourceLabel", value: "github.com/amxr21", href: "https://github.com/amxr21" },
];

const DEV_LINKS = [
  { Icon: Globe, href: "https://amxr.site", label: "amxr.site" },
  { Icon: GithubIcon, href: "https://github.com/amxr21", label: "@amxr21" },
  { Icon: Mail, href: "mailto:ammar211080@gmail.com", label: "ammar211080@gmail.com" },
];

// Floating footer — two separate cards, same outer edges as every other
// section (PAGE_MAX_W): the CTA (the footer's one textured/glowing moment)
// and, with a real gap below it, the site map + contact + developer credit.
export function Footer() {
  const { t, toggle, lang } = useLang();
  const { open: openDemo } = useDemo();
  const year = new Date().getFullYear();

  const cols = [
    {
      title: t("footer.product"),
      links: [
        ["/platform", t("footer.links.platform")],
        ["/platform#modules", t("footer.links.modules")],
        ["/platform#screens", t("footer.links.screens")],
      ],
    },
    {
      title: t("footer.audiencesCol"),
      links: [
        ["/audiences#organizers", t("footer.links.organizers")],
        ["/audiences#companies", t("footer.links.companies")],
        ["/audiences#students", t("footer.links.students")],
        ["/audiences#volunteers", t("footer.links.volunteers")],
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        ["/story", t("footer.links.story")],
        ["/story#use-cases", t("footer.links.useCases")],
        ["/story#faq", t("footer.links.faq")],
      ],
    },
  ];

  return (
    <footer className="relative pb-3 sm:pb-5 pt-10 space-y-4 sm:space-y-5 overflow-hidden">
      {/* Full-bleed background image behind the whole footer (both cards) —
          placeholder, swap the URL for a real image later. Pinned to the
          bottom edge and dimmed under a moss wash so text stays legible. */}
      <img
        src="https://picsum.photos/seed/fairflow-footer/1920/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-moss/90 -z-10" />

      {/* Card 1 — the CTA */}
      <div className={`relative ${PAGE_MAX_W} mx-auto ${PAGE_PAD_X}`}>
        <div id="cta" className="relative rounded-4xl md:rounded-5xl bg-moss text-paper overflow-hidden px-6 md:px-16 pt-16 md:pt-24 pb-14 md:pb-20 text-center scroll-mt-24">
          <DotGrid opacity={0.45} />
          <CursorGlow color="rgba(166,232,92,0.14)" size={560} />
          <div className="absolute -top-40 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
          <Reveal className="relative">
            <Eyebrow tone="dark">{t("footer.ctaEyebrow")}</Eyebrow>
            <h2 className="type-display mt-5 text-4xl sm:text-5xl md:text-6xl max-w-3xl mx-auto text-paper">
              {t("footer.ctaTitle")}
            </h2>
            <p className="type-lead mt-6 max-w-xl mx-auto text-paper/60 text-lg">{t("footer.ctaSub")}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Magnetic>
                <button
                  type="button"
                  onClick={openDemo}
                  className="group inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-4 text-base bg-accent text-moss hover:bg-paper transition-colors duration-200"
                >
                  {t("footer.ctaButton")}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>
              <ButtonLink to="/platform" variant="outlineDark" arrow={false}>
                {t("footer.ctaSecondary")}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Card 2 — site map + contact + developer credit. Same moss/[0.04] card
          style used elsewhere; the footer-wide background image shows only in
          the gap between the two cards, not inside them. */}
      <div className={`relative ${PAGE_MAX_W} mx-auto ${PAGE_PAD_X}`}>
        <div className="rounded-4xl md:rounded-5xl bg-moss text-paper overflow-hidden px-6 md:px-16 py-12 md:py-16">
          {/* top: brand + link columns */}
          <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.1fr]">
            <div>
              <Link to="/" className="flex items-center gap-2.5 font-bold text-paper text-lg">
                <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Ticket className="w-5 h-5" strokeWidth={2} />
                </span>
                {t("brand")}
              </Link>
              <p className="type-body mt-4 text-sm text-paper/50 max-w-xs">{t("footer.tagline")}</p>
              {/* language toggle */}
              <button
                onClick={toggle}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/15 hover:border-paper/40 px-4 py-2 text-xs font-medium text-paper/70 hover:text-paper transition-colors"
              >
                <Languages className="w-4 h-4" />
                {t("footer.langLabel")}: {lang === "en" ? "English" : "العربية"}
              </button>
            </div>

            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="text-paper font-semibold text-sm mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map(([to, label]) => (
                    <li key={label}>
                      <Link to={to} className="text-sm text-paper/50 hover:text-paper transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get started column — the demo trigger + contact link */}
            <div>
              <h3 className="text-paper font-semibold text-sm mb-4">{t("footer.getStarted")}</h3>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={openDemo} className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-paper font-medium transition-colors duration-200">
                    {t("footer.links.demo")} <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </li>
                <li>
                  <a href="#footer-contact" className="text-sm text-paper/50 hover:text-paper transition-colors duration-200">
                    {t("footer.links.contact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* contact strip */}
          <div id="footer-contact" className="scroll-mt-24 mt-12 pt-10 border-t border-paper/10 grid gap-8 md:grid-cols-[1fr_1.1fr] items-start">
            <div>
              <Eyebrow tone="dark">{t("footer.contactEyebrow")}</Eyebrow>
              <h3 className="type-title mt-3 text-2xl text-paper">{t("footer.contactTitle")}</h3>
              <p className="type-body mt-3 text-sm text-paper/55 max-w-md">{t("footer.contactSub")}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {CONTACT.map(({ Icon, key, value, href }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-paper/10 bg-paper/[0.04] hover:border-accent/40 hover:bg-paper/[0.07] p-4 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-accent mb-3" />
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-paper/40">{t(`footer.${key}`)}</div>
                  <div className="mt-0.5 text-[13px] text-paper/80 group-hover:text-paper break-all transition-colors flex items-center gap-1">
                    {value}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* developer credit */}
          <div className="relative mt-10 pt-6 border-t border-paper/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-paper/40">{t("footer.devEyebrow")}</span>
              <p className="mt-1 text-paper text-[13px]">
                <span className="font-semibold">{t("footer.devName")}</span>
                <span className="text-paper/50"> — {t("footer.devRole")}</span>
              </p>
              <p className="type-body text-xs text-paper/50 mt-0.5 max-w-md">{t("footer.devBlurb")}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {DEV_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-paper/5 hover:bg-primary min-w-9 min-h-9 px-2.5 py-1.5 text-[11px] font-medium text-paper/70 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-3 h-3" />
                  <span className="hidden sm:inline" aria-hidden="true">{label}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -ms-1 group-hover:opacity-100 group-hover:ms-0 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* bottom bar: rights + legal + back to top */}
          <div className="relative mt-8 pt-7 border-t border-paper/10 flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
            <p className="text-xs text-paper/50 max-w-2xl">{t("footer.rights")}</p>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs text-paper/40 hidden sm:inline">{t("footer.privacy")}</span>
              <span className="text-xs text-paper/40 hidden sm:inline">{t("footer.terms")}</span>
              <span className="text-xs text-paper/50">© {year} {t("brand")}</span>
              <button
                onClick={() => scrollToTarget(0)}
                className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 hover:border-paper/40 px-3 py-1.5 text-[11px] font-medium text-paper/70 hover:text-paper transition-colors"
                aria-label={t("footer.backToTop")}
              >
                <ArrowUp className="w-3.5 h-3.5" /> {t("footer.backToTop")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
