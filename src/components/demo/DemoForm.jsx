import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap, Building2, Sparkles, CalendarRange, HelpCircle,
  CheckCircle2, Check, ArrowLeft, ArrowRight, X,
  ShieldCheck, Users2, ScanLine, BarChart3, Languages, ClipboardList,
} from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";
import { EASE } from "../motion/Reveal";

// The steps in play. Every step id maps to a render branch below.
const STEPS = ["eventType", "scale", "audiences", "timeline", "about", "details", "confirm"];

const EVENT_TYPE_ICONS = {
  university: GraduationCap, expo: Building2, drive: Sparkles, multi: CalendarRange, other: HelpCircle,
};
const AUDIENCE_ICONS = {
  organizers: ShieldCheck, companies: Building2, students: GraduationCap, volunteers: Users2,
};
const FEATURE_ICONS = {
  applicants: ClipboardList, companies: Building2, eventops: Users2,
  checkin: ScanLine, stats: BarChart3, bilingual: Languages,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = {
  eventType: "", companies: "", attendees: "",
  audiences: [], timeline: "",
  name: "", email: "", organization: "", role: "", eventName: "",
  features: [], message: "", consent: false,
};

export function DemoForm({ onClose }) {
  const { t, dir } = useLang();
  const reduced = useReducedMotion();
  const Back = dir === "rtl" ? ArrowRight : ArrowLeft;

  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const step = STEPS[stepIndex];
  const total = STEPS.length;
  const set = (patch) => setData((d) => ({ ...d, ...patch }));

  const goTo = (i, dirn) => { setDirection(dirn); setStepIndex(i); };
  const advance = () => goTo(Math.min(stepIndex + 1, total - 1), 1);
  const goBack = () => goTo(Math.max(stepIndex - 1, 0), -1);

  // Auto-advance a step after a single-select tap, like the reference form.
  const selectAndAdvance = (patch) => {
    set(patch);
    setErrors({});
    setTimeout(advance, 160);
  };

  const toggleIn = (key, value) =>
    set({ [key]: data[key].includes(value) ? data[key].filter((v) => v !== value) : [...data[key], value] });

  function validateAbout() {
    const e = {};
    if (!data.name.trim()) e.name = t("demo.required");
    if (!data.email.trim()) e.email = t("demo.required");
    else if (!EMAIL_RE.test(data.email.trim())) e.email = t("demo.invalidEmail");
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (step === "about" && !validateAbout()) return;
    advance();
  }

  async function onSubmit(e) {
    e.preventDefault();
    // Showcase form — no backend. Simulate a short send, then celebrate.
    setSending(true);
    await new Promise((r) => setTimeout(r, 650));
    setSending(false);
    setSubmitted(true);
  }

  // Auto-dismiss the success screen.
  useEffect(() => {
    if (!submitted) return undefined;
    const id = setTimeout(() => onClose(), 4200);
    return () => clearTimeout(id);
  }, [submitted, onClose]);

  if (submitted) return <SuccessScreen />;

  const slide = {
    initial: reduced ? { opacity: 0 } : { opacity: 0, x: direction * 40 },
    animate: { opacity: 1, x: 0 },
    exit: reduced ? { opacity: 0 } : { opacity: 0, x: direction * -40, transition: { duration: 0.18 } },
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col max-h-[88vh]">
      {/* progress bar */}
      <div className="h-1 bg-ink/8 shrink-0">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${((stepIndex + 1) / total) * 100}%` }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </div>

      {/* header row */}
      <div className="flex items-center justify-between px-6 sm:px-7 pt-4 pb-1 shrink-0">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-faint">
          {t("demo.stepLabel")} {stepIndex + 1} / {total}
        </span>
        <div className="flex items-center gap-4">
          {stepIndex > 0 && (
            <button type="button" onClick={goBack}
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-ink-soft hover:text-ink transition-colors">
              <Back className="w-3.5 h-3.5" /> {t("demo.back")}
            </button>
          )}
          <button type="button" onClick={onClose} aria-label={t("demo.close")}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-ink-soft hover:bg-ink/5 hover:text-ink transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* animated step body */}
      <div className="px-6 sm:px-7 pb-7 pt-3 overflow-y-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={step} {...slide} transition={{ duration: 0.32, ease: EASE }} className="flex flex-col gap-5">

            {step === "eventType" && (
              <StepBody s="eventType">
                <div className="flex flex-col gap-2">
                  {Object.keys(t("demo.steps.eventType.options")).map((k) => (
                    <OptionCard key={k} Icon={EVENT_TYPE_ICONS[k]} label={t(`demo.steps.eventType.options.${k}`)}
                      selected={data.eventType === k} onClick={() => selectAndAdvance({ eventType: k })} />
                  ))}
                </div>
              </StepBody>
            )}

            {step === "scale" && (
              <StepBody s="scale">
                <BucketRow label={t("demo.steps.scale.companiesLabel")}
                  buckets={t("demo.steps.scale.companyBuckets")} value={data.companies}
                  onPick={(v) => set({ companies: data.companies === v ? "" : v })} />
                <BucketRow label={t("demo.steps.scale.attendeesLabel")}
                  buckets={t("demo.steps.scale.attendeeBuckets")} value={data.attendees}
                  onPick={(v) => set({ attendees: data.attendees === v ? "" : v })} />
                <NextBtn onClick={goNext} label={t("demo.next")} dir={dir} />
              </StepBody>
            )}

            {step === "audiences" && (
              <StepBody s="audiences">
                <div className="flex flex-col gap-2">
                  {Object.keys(t("demo.steps.audiences.options")).map((k) => (
                    <CheckCard key={k} Icon={AUDIENCE_ICONS[k]} label={t(`demo.steps.audiences.options.${k}`)}
                      checked={data.audiences.includes(k)} onClick={() => toggleIn("audiences", k)} />
                  ))}
                </div>
                <NextBtn onClick={goNext} label={t("demo.next")} dir={dir} />
              </StepBody>
            )}

            {step === "timeline" && (
              <StepBody s="timeline">
                <div className="flex flex-col gap-2">
                  {Object.keys(t("demo.steps.timeline.options")).map((k) => (
                    <OptionCard key={k} Icon={CalendarRange} label={t(`demo.steps.timeline.options.${k}`)}
                      selected={data.timeline === k} onClick={() => selectAndAdvance({ timeline: k })} />
                  ))}
                </div>
              </StepBody>
            )}

            {step === "about" && (
              <StepBody s="about">
                <TextField id="name" label={t("demo.fields.name")} placeholder={t("demo.placeholders.name")}
                  value={data.name} onChange={(v) => set({ name: v })} error={errors.name} required autoComplete="name" />
                <TextField id="email" type="email" label={t("demo.fields.email")} placeholder={t("demo.placeholders.email")}
                  value={data.email} onChange={(v) => set({ email: v })} error={errors.email} required autoComplete="email" />
                <TextField id="organization" label={t("demo.fields.organization")} placeholder={t("demo.placeholders.organization")}
                  value={data.organization} onChange={(v) => set({ organization: v })} optional optionalText={t("demo.optional")} autoComplete="organization" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField id="role" label={t("demo.fields.role")} placeholder={t("demo.placeholders.role")}
                    value={data.role} onChange={(v) => set({ role: v })} optional optionalText={t("demo.optional")} />
                  <TextField id="eventName" label={t("demo.fields.eventName")} placeholder={t("demo.placeholders.eventName")}
                    value={data.eventName} onChange={(v) => set({ eventName: v })} optional optionalText={t("demo.optional")} />
                </div>
                <NextBtn onClick={goNext} label={t("demo.next")} dir={dir} />
              </StepBody>
            )}

            {step === "details" && (
              <StepBody s="details">
                <div className="flex flex-col gap-2">
                  <FieldLabel>{t("demo.steps.details.featuresLabel")}</FieldLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(t("demo.steps.details.featureOptions")).map((k) => (
                      <PillCard key={k} Icon={FEATURE_ICONS[k]} label={t(`demo.steps.details.featureOptions.${k}`)}
                        selected={data.features.includes(k)} onClick={() => toggleIn("features", k)} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel>{t("demo.fields.message")} <span className="text-ink-faint font-normal normal-case">· {t("demo.optional")}</span></FieldLabel>
                  <textarea rows={3} value={data.message} onChange={(e) => set({ message: e.target.value })}
                    placeholder={t("demo.placeholders.message")}
                    className="w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint/60 resize-none outline-none transition-colors focus:border-primary" />
                </div>
                <NextBtn onClick={goNext} label={t("demo.next")} dir={dir} />
              </StepBody>
            )}

            {step === "confirm" && (
              <StepBody s="confirm">
                <Summary data={data} t={t} />
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input type="checkbox" checked={data.consent} onChange={(e) => set({ consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-primary shrink-0" />
                  <span className="type-body text-[13px] text-ink-faint leading-snug">{t("demo.consent")}</span>
                </label>
                <button type="submit" disabled={!data.consent || sending}
                  className="w-full h-12 rounded-full bg-ink text-paper font-semibold text-[15px] transition-colors hover:bg-primary disabled:opacity-40 disabled:hover:bg-ink">
                  {sending ? t("demo.sending") : t("demo.submit")}
                </button>
              </StepBody>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </form>
  );
}

/* ── step scaffolding ── */

function StepBody({ s, children }) {
  const { t } = useLang();
  return (
    <>
      <div>
        <h2 className="type-title text-xl text-ink">{t(`demo.steps.${s}.title`)}</h2>
        <p className="type-body text-[14px] text-ink-faint mt-1">{t(`demo.steps.${s}.sub`)}</p>
      </div>
      {children}
    </>
  );
}

function FieldLabel({ children }) {
  return <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-soft">{children}</span>;
}

/* ── controls (all custom — no native selects) ── */

function OptionCard({ Icon, label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      className={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl border text-start transition-all duration-200 ${
        selected ? "border-primary bg-primary text-white" : "border-ink/10 bg-white text-ink hover:border-primary/40"
      }`}>
      <span className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${selected ? "bg-white/15" : "bg-primary/10 text-primary"}`}>
        {Icon && <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />}
      </span>
      <span className="font-semibold text-[15px]">{label}</span>
    </button>
  );
}

function CheckCard({ Icon, label, checked, onClick }) {
  return (
    <button type="button" onClick={onClick} role="checkbox" aria-checked={checked}
      className={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl border text-start transition-all duration-200 ${
        checked ? "border-primary bg-primary/5" : "border-ink/10 bg-white hover:border-primary/40"
      }`}>
      <span className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center ${checked ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
        {Icon && <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />}
      </span>
      <span className="flex-1 font-semibold text-[15px] text-ink">{label}</span>
      <span className={`w-5 h-5 shrink-0 rounded-md border flex items-center justify-center transition-colors ${checked ? "bg-primary border-primary text-white" : "border-ink/20"}`}>
        {checked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
      </span>
    </button>
  );
}

function PillCard({ Icon, label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      className={`flex items-center gap-2 px-3.5 py-3 rounded-xl border text-start text-[13px] font-semibold transition-all duration-200 ${
        selected ? "border-primary bg-primary/8 text-primary" : "border-ink/10 bg-white text-ink-soft hover:border-primary/40"
      }`}>
      {Icon && <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />}
      <span className="truncate">{label}</span>
    </button>
  );
}

function BucketRow({ label, buckets, value, onPick }) {
  return (
    <div className="flex flex-col gap-2">
      <FieldLabel>{label}</FieldLabel>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {buckets.map((b) => (
          <button key={b} type="button" onClick={() => onPick(b)} aria-pressed={value === b}
            className={`px-3 py-2.5 rounded-xl border text-center text-[13px] font-semibold transition-all duration-200 ${
              value === b ? "border-primary bg-primary text-white" : "border-ink/10 bg-white text-ink-soft hover:border-primary/40"
            }`}>
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

function TextField({ id, label, placeholder, value, onChange, error, required, optional, optionalText, type = "text", autoComplete }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-widest text-ink-soft">
        {label}{required && <span className="text-primary"> *</span>}
        {optional && <span className="text-ink-faint font-normal normal-case tracking-normal"> · {optionalText}</span>}
      </label>
      <input
        id={id} type={type} value={value} placeholder={placeholder} autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)} aria-invalid={!!error}
        className={`w-full h-11 rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-ink-faint/60 outline-none transition-colors ${
          error ? "border-error focus:border-error" : "border-ink/12 focus:border-primary"
        }`}
      />
      {error && <span className="text-[12px] text-error">{error}</span>}
    </div>
  );
}

function NextBtn({ onClick, label, dir }) {
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <button type="button" onClick={onClick}
      className="group w-full h-12 rounded-full bg-ink text-paper font-semibold text-[15px] inline-flex items-center justify-center gap-2 transition-colors hover:bg-primary mt-1">
      {label}
      <Arrow className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </button>
  );
}

/* ── confirm summary ── */

function Summary({ data, t }) {
  const dash = t("demo.none");
  const rows = useMemo(() => {
    // val-guarded lookup: only translate when a value was actually picked, so
    // an empty selection falls through to the em-dash rather than a raw key.
    const label = (path, val) => (val ? t(path) : "");
    const audienceNames = data.audiences.map((k) => t(`demo.steps.audiences.options.${k}`)).join("، ");
    const featureNames = data.features.map((k) => t(`demo.steps.details.featureOptions.${k}`)).join("، ");
    const scale = [data.companies, data.attendees].filter(Boolean).join(" · ");
    return [
      [t("demo.fields.eventType"), label(`demo.steps.eventType.options.${data.eventType}`, data.eventType) || dash],
      [t("demo.fields.scale"), scale || dash],
      [t("demo.fields.audiences"), audienceNames || dash],
      [t("demo.fields.timeline"), label(`demo.steps.timeline.options.${data.timeline}`, data.timeline) || dash],
      [t("demo.fields.name"), data.name || dash],
      [t("demo.fields.email"), data.email || dash],
      data.organization && [t("demo.fields.organization"), data.organization],
      data.eventName && [t("demo.fields.eventName"), data.eventName],
      featureNames && [t("demo.fields.features"), featureNames],
      data.message && [t("demo.fields.message"), data.message],
    ].filter(Boolean);
  }, [data, t, dash]);

  return (
    <div className="rounded-2xl border border-ink/10 bg-white overflow-hidden divide-y divide-ink/8">
      {rows.map(([k, v]) => (
        <div key={k} className="flex gap-4 px-4 py-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-faint shrink-0 w-28 pt-0.5">{k}</span>
          <span className="text-[14px] text-ink flex-1">{v}</span>
        </div>
      ))}
    </div>
  );
}

/* ── success ── */

function SuccessScreen() {
  const { t } = useLang();
  return (
    <div className="flex flex-col items-center gap-4 text-center px-8 py-16">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center"
      >
        <CheckCircle2 className="w-8 h-8" strokeWidth={2} />
      </motion.div>
      <h2 className="type-title text-2xl text-ink">{t("demo.successHeading")}</h2>
      <p className="type-body text-[15px] text-ink-faint max-w-sm">{t("demo.successSub")}</p>
      <p className="text-[11px] uppercase tracking-widest text-ink-faint/60 mt-1">{t("demo.closing")}</p>
    </div>
  );
}
