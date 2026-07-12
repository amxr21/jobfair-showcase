import { createContext, useContext, useEffect, useState } from "react";
import { strings } from "./strings";

const LanguageContext = createContext(null);

// Bilingual EN/AR with RTL. `t("path.to.key")` reads from the current
// language's dictionary; `dir` and the <html> attributes flip for Arabic.
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== "undefined") return localStorage.getItem("ff-lang") || "en";
    return "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("ff-lang", lang);
  }, [lang, dir]);

  const t = (path) => {
    const parts = path.split(".");
    let node = strings[lang];
    for (const p of parts) {
      node = node?.[p];
      if (node === undefined) {
        // fall back to English, then to the raw key
        let en = strings.en;
        for (const q of parts) en = en?.[q];
        return en ?? path;
      }
    }
    return node;
  };

  const toggle = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
