/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Showcase chrome palette — warm paper + deep green ink.
        paper: "#FAFAF7",
        mist: "#F0F3EE",
        ink: {
          DEFAULT: "#101613",
          soft: "#43514A",
          // Darkened from #71807A so body/lead text clears WCAG AA (4.5:1)
          // against both paper (#FAFAF7) and white card backgrounds.
          faint: "#62716A",
        },
        moss: {
          DEFAULT: "#0B1F15",
          soft: "#12291C",
          line: "#22402F",
        },
        accent: "#A6E85C",
        // Portal palette — kept identical to the real dashboard/form apps so
        // every mockup reads as a faithful screenshot.
        primary: "#0E7F41",
        "primary-light": "#E5FFE5",
        "primary-dark": "#0a5f31",
        secondary: "#2959A6",
        "secondary-light": "#E5F0FF",
        surface: "#F3F6FF",
        warning: "#EBC600",
        error: "#CC0000",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRtl: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(14, 127, 65, 0.45)" },
          "70%": { boxShadow: "0 0 0 10px rgba(14, 127, 65, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(14, 127, 65, 0)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 36s) linear infinite",
        "marquee-rtl": "marqueeRtl var(--marquee-duration, 36s) linear infinite",
        "pulse-dot": "pulseDot 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}
