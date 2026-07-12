import { ScanLine, CheckCircle2 } from "lucide-react";

// The code-gated volunteer check-in terminal: QR viewfinder, manual
// fallback, and the per-volunteer activity feed.
const RECENT = [
  ["Sara Ahmed", "U 22103482", "9:42 AM"],
  ["Omar Khalid", "U 2198221", "9:41 AM"],
  ["Fatima Noor", "U 22110034", "9:39 AM"],
];

// Faithful to apps/dashboard/frontend's real StudentCheckin.jsx: a full-
// screen terminal over a dimmed career-fair photo (approximated here with a
// green gradient wash), a white card with a solid #0E7F41 header banner, the
// QR scanner viewfinder, manual fallback, and "Checked in by you today" log.
export function CheckinMock() {
  return (
    <div className="relative min-h-[820px] flex items-center justify-center p-6 md:p-10" style={{ background: "linear-gradient(135deg, #0E7F41f2, #0a5f31f2), radial-gradient(circle at 30% 20%, #1a3d2a, #0b2418)" }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* green header banner — matches real bg-[#0E7F41] header */}
        <div className="bg-[#0E7F41] px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Huda Al Marzooqi</p>
            <p className="text-white/70 text-[11px]">Student attendance check-in</p>
          </div>
          <span className="text-white/70 hover:text-white text-xs font-medium">Log out</span>
        </div>

        <div className="p-5 flex flex-col gap-3">
          {/* manual fallback */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium text-gray-500">University ID</span>
              <span className="text-[10px] font-medium text-blue-600">Switch to camera</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 rounded-lg border border-gray-200 px-3 flex items-center text-[12px] text-gray-400 font-mono tracking-wider">U 2210••••</div>
              <div className="h-10 px-4 rounded-lg bg-[#0E7F41] text-white text-[12px] font-semibold flex items-center">Check in</div>
            </div>
          </div>

          {/* scanner viewfinder */}
          <div className="relative rounded-lg bg-gray-950 aspect-[4/3] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-6 border-2 border-white/25 rounded-xl" />
            <div className="absolute inset-x-6 top-1/2 h-0.5 bg-[#0E7F41]/80 shadow-[0_0_12px_2px_rgba(14,127,65,0.7)]" />
            <ScanLine className="w-10 h-10 text-white/40" strokeWidth={1.25} />
          </div>

          {/* last scan result */}
          <div className="rounded-lg bg-gray-50 p-3 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#0E7F41] shrink-0" />
            <div className="leading-tight">
              <div className="text-xs font-semibold text-gray-800">Sara Ahmed checked in</div>
              <div className="text-[10px] text-gray-500">Data Science · CGPA 3.8</div>
            </div>
          </div>

          {/* activity feed */}
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-500 mb-2">Checked in by you today ({RECENT.length})</p>
            <div className="flex flex-col gap-1.5">
              {RECENT.map(([name, id, time]) => (
                <div key={id} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs font-medium text-gray-700 truncate">{name}</p>
                  <span className="text-gray-400 font-mono text-[10px] shrink-0">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
