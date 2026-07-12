import { motion } from "framer-motion";
import {
  ClipboardList, Mail, CheckCircle2, Users, LayoutGrid,
  ScanLine, BarChart3, FileSpreadsheet, QrCode, Star, XCircle,
} from "lucide-react";
import { EASE } from "./motion/Reveal";

// A tiny device chrome the stage scenes live inside, so each visual reads as
// a real screen rather than a floating card. Pure divs — no images.
function MiniScreen({ label, children }) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white shadow-[0_24px_60px_-30px_rgba(16,22,19,0.35)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-ink/6 bg-mist/60">
        <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
        <span className="ms-2 text-[11px] font-medium text-ink-faint truncate">{label}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Row({ children, className = "" }) {
  return <div className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${className}`}>{children}</div>;
}

// 1 — Register: a validated three-step form filling in.
function RegisterScene() {
  const steps = ["Personal", "Professional", "Preferences"];
  return (
    <MiniScreen label="app.fairflow.demo/apply">
      <div className="flex items-center gap-1.5 mb-4">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div className={`h-1.5 rounded-full ${i === 0 ? "bg-primary" : "bg-ink/10"}`} />
            <div className="mt-1.5 text-[10px] text-ink-faint">{s}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2.5">
        {[["University ID", "U 22103482", true], ["Major", "Computer Engineering", true], ["CGPA", "3.84", false]].map(([l, v, ok]) => (
          <div key={l}>
            <div className="text-[10px] text-ink-faint mb-1">{l}</div>
            <div className="flex items-center justify-between h-9 rounded-lg border border-ink/10 px-3 text-[12px] text-ink-soft">
              <span className="font-mono">{v}</span>
              {ok && <CheckCircle2 className="w-4 h-4 text-primary" />}
            </div>
          </div>
        ))}
      </div>
    </MiniScreen>
  );
}

// 2 — Invite & confirm: an inbox reminder + the status flipping to Confirmed.
function ConfirmScene() {
  return (
    <MiniScreen label="Company inbox · attendance reminder">
      <div className="rounded-xl border border-ink/8 overflow-hidden">
        <div className="flex items-center gap-2.5 bg-primary/8 px-3.5 py-2.5 border-b border-ink/6">
          <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center"><Mail className="w-4 h-4" /></span>
          <div className="leading-tight">
            <div className="text-[12px] font-semibold text-ink">Please confirm your booth</div>
            <div className="text-[10px] text-ink-faint">FairFlow · to Emirates Talent Co.</div>
          </div>
        </div>
        <div className="p-3.5">
          <motion.div
            initial={{ scale: 0.94, opacity: 0.7 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-white text-[12px] font-semibold px-4 py-2.5"
          >
            <CheckCircle2 className="w-4 h-4" /> Confirm attendance
          </motion.div>
          <div className="mt-3 flex items-center gap-2 text-[11px]">
            <span className="text-ink-faint">Status</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary font-semibold px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Confirmed
            </span>
          </div>
        </div>
      </div>
    </MiniScreen>
  );
}

// 3 — Manage & shortlist: a roster with flag / shortlist / reject actions.
function ManageScene() {
  const rows = [
    ["Sara Ahmed", "Data Science", "shortlist"],
    ["Omar Khalid", "Mechatronics", "flag"],
    ["Fatima Noor", "Business IT", "reject"],
  ];
  const badge = {
    shortlist: ["Shortlisted", "bg-primary/10 text-primary", Star],
    flag: ["Flagged", "bg-warning/15 text-[#9a7d00]", Star],
    reject: ["Rejected", "bg-error/10 text-error", XCircle],
  };
  return (
    <MiniScreen label="app.fairflow.demo/applicants">
      <div className="space-y-2">
        {rows.map(([name, major, kind]) => {
          const [text, cls, Icon] = badge[kind];
          return (
            <Row key={name} className="border border-ink/6">
              <span className="w-8 h-8 rounded-full bg-ink/5 text-ink-soft flex items-center justify-center text-[11px] font-bold">
                {name.split(" ").map((w) => w[0]).join("")}
              </span>
              <div className="flex-1 leading-tight">
                <div className="text-[12px] font-semibold text-ink">{name}</div>
                <div className="text-[10px] text-ink-faint">{major}</div>
              </div>
              <span className={`inline-flex items-center gap-1 rounded-full text-[10px] font-semibold px-2 py-1 ${cls}`}>
                <Icon className="w-3 h-3" /> {text}
              </span>
            </Row>
          );
        })}
      </div>
    </MiniScreen>
  );
}

// 4 — Set up event day: a booth floor map with assigned / reserved / free.
function SetupScene() {
  const cells = [1, 2, 0, 1, 0, 2, 1, 1, 0, 2, 1, 0, 0, 1, 2, 1];
  const fill = ["bg-ink/5", "bg-primary text-white", "bg-warning/30"];
  return (
    <MiniScreen label="app.fairflow.demo/event-ops · floor map">
      <div className="grid grid-cols-4 gap-1.5">
        {cells.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: i * 0.02, ease: EASE }}
            className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-bold ${fill[c]}`}
          >
            {c === 1 ? "B" : ""}
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 text-[10px] text-ink-faint">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-primary" /> Assigned</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-warning/40" /> Reserved</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-ink/10" /> Free</span>
      </div>
    </MiniScreen>
  );
}

// 5 — Check in at the door: QR viewfinder + a "checked in" confirmation.
function CheckinScene() {
  return (
    <MiniScreen label="Student check-in terminal">
      <div className="relative rounded-xl bg-gray-950 aspect-[5/3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-5 border-2 border-white/25 rounded-lg" />
        <motion.div
          className="absolute inset-x-5 h-0.5 bg-primary shadow-[0_0_12px_2px_rgba(14,127,65,0.7)]"
          initial={{ top: "22%" }} animate={{ top: ["22%", "74%", "22%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <QrCode className="w-10 h-10 text-white/40" strokeWidth={1.25} />
      </div>
      <Row className="mt-3 bg-primary/8">
        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
        <div className="leading-tight">
          <div className="text-[12px] font-semibold text-ink">Sara Ahmed checked in</div>
          <div className="text-[10px] text-ink-faint">Logged by Huda · 9:42 AM</div>
        </div>
      </Row>
    </MiniScreen>
  );
}

// 6 — Survey & export: live stat tiles + a CSV export chip.
function ResultsScene() {
  const bars = [52, 68, 61, 84, 73, 90];
  return (
    <MiniScreen label="app.fairflow.demo/statistics">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[["1,284", "Applicants"], ["68", "Companies"], ["91%", "Attendance"]].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-mist/70 px-2.5 py-2 text-center">
            <div className="text-[15px] font-bold text-ink leading-none">{v}</div>
            <div className="text-[9px] text-ink-faint mt-1">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-14 mb-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t bg-primary/60"
            initial={{ height: "12%" }} animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
          />
        ))}
      </div>
      <div className="inline-flex items-center gap-2 rounded-lg border border-primary/25 text-primary text-[11px] font-semibold px-3 py-2">
        <FileSpreadsheet className="w-4 h-4" /> Export fair to CSV
      </div>
    </MiniScreen>
  );
}

const SCENES = [RegisterScene, ConfirmScene, ManageScene, SetupScene, CheckinScene, ResultsScene];
export const STAGE_ICONS = [ClipboardList, Mail, Users, LayoutGrid, ScanLine, BarChart3];

export function JourneyStageVisual({ index }) {
  const Scene = SCENES[index] ?? RegisterScene;
  return <Scene />;
}
