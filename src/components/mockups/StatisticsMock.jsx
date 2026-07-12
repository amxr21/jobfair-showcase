import { DashboardSidebar } from "./BrowserFrame";

// Faithful to apps/dashboard/frontend's real Statistics page: the sliding
// Overview/Advanced Analytics toggle, a #F3F6FF band with 4 stat tiles, two
// PieChartElement donuts + a gender donut, a full-width bar chart, and the
// bottom "Top Company / Top Field / Top Major / Avg GPA / Capacity" row.
const BARS = [60, 85, 45, 92, 70, 100, 55];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function Donut({ segments, center, sub }) {
  const stops = [];
  let acc = 0;
  segments.forEach(([, pct, color]) => {
    stops.push(`${color} ${acc}% ${acc + pct}%`);
    acc += pct;
  });
  return (
    <div className="relative w-32 h-32 shrink-0">
      <div className="w-32 h-32 rounded-full" style={{ background: `conic-gradient(${stops.join(", ")})` }} />
      <div className="absolute inset-[16px] bg-white rounded-full flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-gray-900">{center}</span>
        <span className="text-[10px] text-gray-400">{sub}</span>
      </div>
    </div>
  );
}

export function StatisticsMock() {
  return (
    <div className="flex bg-white min-h-[560px]">
      <DashboardSidebar active="statistics" />
      <div className="flex-1 p-4 md:p-5 bg-[#F3F6FF]/40">
        {/* sliding view toggle — real component is Overview / Advanced Analytics */}
        <div className="flex justify-end mb-3">
          <div className="relative grid grid-cols-2 bg-white rounded-lg p-0.5 shadow-sm border border-gray-200 w-44">
            <div className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-md bg-[#0E7F41]" />
            <span className="relative z-10 text-center py-1 text-[11px] font-semibold text-white">Overview</span>
            <span className="relative z-10 text-center py-1 text-[11px] font-medium text-gray-500">Advanced</span>
          </div>
        </div>

        {/* stat tiles row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {[["1,284", "Students"], ["73", "Companies"], ["918", "Seekers"], ["41", "Fields"]].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-white border border-gray-100 p-2.5">
              <div className="text-lg font-bold text-[#0E7F41]">{v}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <div className="rounded-lg border border-gray-100 bg-white p-3 flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium text-gray-600 self-start">Number of</span>
            <Donut segments={[["Confirmed", 62, "#0E7F41"], ["Registered", 100, "#E5FFE5"]]} center="1.2k" sub="students" />
          </div>
          <div className="rounded-lg border border-gray-100 bg-white p-3 flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium text-gray-600 self-start">Companies By</span>
            <Donut segments={[["Confirmed", 70, "#2959A6"], ["Pending", 100, "#E5F0FF"]]} center="73" sub="companies" />
          </div>
          <div className="rounded-lg border border-gray-100 bg-white p-3 flex flex-col items-center gap-2">
            <span className="text-[10px] font-medium text-gray-600 self-start">Applicants By Gender</span>
            <Donut segments={[["Male", 58, "#0066CC"], ["Female", 100, "#EC4899"]]} center="1.2k" sub="applicants" />
          </div>
        </div>

        {/* full-width bar chart */}
        <div className="rounded-lg border border-gray-100 bg-white p-4 mb-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium text-gray-600">Daily check-ins</span>
            <span className="text-[9px] text-gray-400">This week</span>
          </div>
          <div className="flex items-end justify-between gap-2 h-64">
            {BARS.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div className="w-full rounded-t-sm bg-[#0E7F41]/80" style={{ height: `${h}%` }} />
                <span className="text-[9px] text-gray-400">{DAYS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom stat row — TopStatistic tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {[["Top Company", "Applications", "Acme Corp"], ["Top Field", "Companies", "Tech"], ["Top Major", "Students", "Comp. Eng"], ["Avg GPA", "Applicants", "3.42"], ["Capacity", "Max", "86%"]].map(([t, s, v]) => (
            <div key={t} className="rounded-lg bg-white border border-gray-100 p-2">
              <div className="text-[9px] text-gray-400">{t}</div>
              <div className="text-xs font-bold text-gray-800 mt-0.5">{v}</div>
              <div className="text-[8px] text-gray-400">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
