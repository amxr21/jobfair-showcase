import { useLang } from "../../i18n/LanguageContext";

// An infinite capability strip. Pure CSS transform animation (compositor
// only); the track is duplicated so the loop is seamless. Direction flips
// with the language, and the global reduced-motion rule freezes it.
export function Marquee({ items, className = "", duration = 36 }) {
  const { dir } = useLang();
  const track = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div
        className={`flex w-max items-center gap-0 ${dir === "rtl" ? "animate-marquee-rtl" : "animate-marquee"}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="px-6 md:px-8 text-sm md:text-base font-medium whitespace-nowrap">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
