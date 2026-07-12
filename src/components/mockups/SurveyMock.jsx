import { DashboardSidebar } from "./BrowserFrame";

// Faithful recreation of the Survey Results console: response rate,
// per-question distributions, and the awaiting-response list.
const OPTIONS = [
  ["Very satisfied", 46, "bg-primary"],
  ["Satisfied", 32, "bg-primary/60"],
  ["Neutral", 14, "bg-amber-300"],
  ["Unsatisfied", 8, "bg-red-300"],
];

const AWAITING = ["Meridian", "NorthPeak", "Solvex"];

export function SurveyMock() {
  return (
    <div className="flex bg-white min-h-[560px]">
      <DashboardSidebar active="survey" />
      <div className="flex-1 p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">Survey Results</h3>
            <p className="text-xs text-gray-400">58 of 73 companies responded</p>
          </div>
          <button className="bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg">Export CSV</button>
        </div>

        {/* response rate */}
        <div className="rounded-xl border border-gray-100 p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">Response rate</span>
            <span className="text-xs font-bold text-primary">79%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: "79%" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* per-question breakdown */}
          <div className="md:col-span-2 rounded-xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-600">Q3 — Overall event experience</span>
              <span className="text-[10px] bg-green-50 text-green-700 font-medium px-2 py-0.5 rounded-full">Positive</span>
            </div>
            <div className="space-y-2">
              {OPTIONS.map(([label, pct, color]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 w-24 shrink-0">{label}</span>
                  <div className="flex-1 h-4 rounded bg-gray-50 overflow-hidden">
                    <div className={`h-full rounded ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[10px] text-gray-400 w-7 text-right">{pct}%</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] text-gray-400">
              <span>12 questions · multiple-choice, numeric & open-ended</span>
              <span className="text-primary font-medium">Next question →</span>
            </div>
          </div>

          {/* awaiting response */}
          <div className="rounded-xl border border-gray-100 p-4">
            <span className="text-xs font-medium text-gray-600 block mb-3">Awaiting response</span>
            <div className="space-y-2">
              {AWAITING.map((name) => (
                <div key={name} className="flex items-center justify-between rounded-lg bg-gray-50 px-2.5 py-2">
                  <span className="text-xs text-gray-700">{name}</span>
                  <span className="text-[10px] text-primary font-medium">Remind</span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[10px] text-gray-400">Survey visibility: <span className="text-green-600 font-medium">Public</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
