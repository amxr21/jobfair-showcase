import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DemoModal } from "./DemoModal";

// A single shared "Request a demo" modal, opened from anywhere (nav, hero,
// footer) via useDemo().open(). Kept in context so there's exactly one modal
// instance and one piece of open/closed state for the whole app.
const DemoContext = createContext(null);

export function DemoProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({ open: () => setOpen(true), close: () => setOpen(false) }),
    []
  );
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <DemoContext.Provider value={value}>
      {children}
      <DemoModal open={open} onClose={handleClose} />
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used inside DemoProvider");
  return ctx;
}
