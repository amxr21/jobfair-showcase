import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

// The one page width used everywhere — nav, footer, section content, and
// every full-bleed "band" card all resolve to these same outer edges so the
// whole page reads as one column, not a stack of differently-sized pieces.
export const PAGE_MAX_W = "max-w-7xl";
export const PAGE_PAD_X = "px-5 md:px-8";

export const Container = ({ className = "", children }) => (
  <div className={`w-full ${PAGE_MAX_W} mx-auto ${PAGE_PAD_X} ${className}`}>{children}</div>
);

// A full-bleed rounded "band" (Journey, Modules, Stats, Trust, etc.) — the
// colored card that breaks out of the plain page background. Its wrapper
// carries the *same* max-w-6xl + px-5 md:px-8 as Container, so the card's
// visible edges land exactly under the body copy above/below it; the
// rounded/colored surface itself is the inner div, sized by className
// (padding, background, rounding) per caller.
export const Band = ({ className = "", children, as: Tag = "div" }) => (
  <Tag className={`w-full ${PAGE_MAX_W} mx-auto ${PAGE_PAD_X}`}>
    <div className={`rounded-4xl md:rounded-5xl ${className}`}>{children}</div>
  </Tag>
);

// Small uppercase label that opens most sections.
export const Eyebrow = ({ children, tone = "light" }) => (
  <span
    className={`inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-wide uppercase ${
      tone === "dark" ? "text-accent" : "text-primary"
    }`}
  >
    <span className={`w-1.5 h-1.5 rounded-full ${tone === "dark" ? "bg-accent" : "bg-primary"}`} />
    {children}
  </span>
);

export const SectionHeading = ({ eyebrow, title, sub, align = "center", tone = "light", className = "" }) => (
  <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <h2 className={`type-title mt-4 text-3xl md:text-[2.75rem] ${tone === "dark" ? "text-paper" : "text-ink"}`}>
      {title}
    </h2>
    {sub && (
      <p className={`type-lead mt-4 text-lg ${tone === "dark" ? "text-paper/60" : "text-ink-faint"}`}>{sub}</p>
    )}
  </div>
);

// The one button. Arrow flips with the language and slides on hover.
export function ButtonLink({ to, href, children, variant = "primary", className = "", arrow = true, onClick }) {
  const { dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const base =
    "group inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3.5 text-[15px] transition-colors duration-200";
  const styles = {
    primary: "bg-ink text-paper hover:bg-primary",
    brand: "bg-primary text-white hover:bg-primary-dark",
    ghost: "border border-ink/15 text-ink hover:border-ink/40 bg-transparent",
    light: "bg-paper text-ink hover:bg-accent",
    onDark: "bg-accent text-moss hover:bg-paper",
    outlineDark: "border border-paper/25 text-paper hover:bg-paper/10",
  };
  const inner = (
    <>
      {children}
      {arrow && (
        <Arrow
          className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
        />
      )}
    </>
  );
  const cls = `${base} ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} onClick={onClick}>{inner}</Link>;
  return <a href={href} className={cls} onClick={onClick}>{inner}</a>;
}

// Rounded surface used by cards throughout — one radius, one border rule.
// Background defaults to white but callers can override via className;
// it's placed first so a later `bg-*` in className always wins the cascade.
export const Card = ({ className = "", children, hover = true }) => (
  <div
    className={`bg-white rounded-3xl border border-ink/8 ${
      hover ? "transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_20px_60px_-24px_rgba(16,22,19,0.18)]" : ""
    } ${className}`}
  >
    {children}
  </div>
);
