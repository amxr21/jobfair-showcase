// The company self-service status page — what a participating employer sees:
// live status, assigned booth + QR, banner progress, and access passes.
function MiniQr({ className = "" }) {
  // Deterministic pattern so renders are stable.
  const cells = [1,0,1,1,0,1,0,1, 0,1,0,0,1,0,1,0, 1,0,1,1,0,1,0,1, 1,1,0,1,1,0,1,0, 0,1,1,0,1,1,0,1, 1,0,0,1,0,1,1,0, 0,1,1,0,1,0,1,1, 1,0,1,1,0,1,0,1];
  return (
    <div className={`grid grid-cols-8 gap-[2px] ${className}`}>
      {cells.map((c, i) => (
        <div key={i} className={`rounded-[1px] ${c ? "bg-primary-dark" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

const BANNER_STEPS = ["Not Submitted", "Submitted", "Approved", "Printed", "Placed"];

export function CompanyPortalMock() {
  return (
    <div className="bg-white p-5 md:p-6">
      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary text-xs font-bold flex items-center justify-center">TN</span>
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">TechNova</h3>
            <p className="text-xs text-gray-400">Software · Sharjah · 31 applicants</p>
          </div>
        </div>
        <span className="text-[11px] font-medium bg-green-50 text-green-700 px-2.5 py-1 rounded-full">Attendance confirmed</span>
      </div>

      {/* Overview / Event Day tabs — real CompanyStatus.jsx STATUS_TABS */}
      <div className="flex gap-1 border-b border-gray-100 mb-5">
        {["Overview", "Event Day"].map((t, i) => (
          <div key={t} className={`text-xs font-semibold px-3 py-2 border-b-2 ${i === 1 ? "border-primary text-primary" : "border-transparent text-gray-400"}`}>{t}</div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-3">
        {/* booth card */}
        <div className="rounded-xl border border-gray-100 p-3.5">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">Your booth</span>
          <div className="flex items-center justify-between mt-2">
            <div>
              <div className="text-2xl font-bold text-primary">A2</div>
              <div className="text-[10px] text-gray-400 mt-0.5">Main hall · North wing</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-1.5 w-14 h-14"><MiniQr className="w-full h-full" /></div>
          </div>
        </div>

        {/* banner card */}
        <div className="rounded-xl border border-gray-100 p-3.5">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">Banner & branding</span>
          <div className="mt-2 text-xs text-gray-700 font-medium">Roll-up · 85 × 200 cm</div>
          <div className="flex gap-1 mt-2">
            {BANNER_STEPS.map((s, i) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${i <= 2 ? "bg-primary" : "bg-gray-100"}`} />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[10px] text-primary font-medium">Approved</span>
            <span className="text-[10px] text-gray-400">Print by Oct 12</span>
          </div>
        </div>

        {/* passes card */}
        <div className="rounded-xl border border-gray-100 p-3.5">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">Access passes</span>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-700">2 × Entry</span>
              <span className="text-green-600 text-[10px] font-medium">Issued</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-700">1 × Parking</span>
              <span className="text-gray-400 text-[10px]">Slot P-14 · Gate 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* logistics + settings row */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-gray-100 p-3.5">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">Equipment & logistics</span>
          <div className="mt-2 space-y-1.5">
            {[["Table + 2 chairs", true], ["Power outlet", true], ["55\" screen", false]].map(([item, done]) => (
              <div key={item} className="flex items-center justify-between text-xs">
                <span className="text-gray-700">{item}</span>
                <span className={`text-[10px] font-medium ${done ? "text-green-600" : "text-amber-500"}`}>{done ? "Fulfilled" : "In progress"}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 p-3.5">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">Account</span>
          <div className="mt-2 space-y-1.5 text-xs text-gray-700">
            <div className="flex items-center justify-between">
              <span>Login emails</span>
              <span className="text-[10px] text-gray-400">3 approved</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Post-event survey</span>
              <span className="text-[10px] text-primary font-medium">Fill now →</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Font & text size</span>
              <span className="text-[10px] text-gray-400">Customized</span>
            </div>
          </div>
        </div>
      </div>

      {/* event schedule — real CompanyStatus.jsx "Event Schedule" SectionCard */}
      <div className="mt-3 rounded-xl border border-gray-100 p-3.5">
        <span className="text-[10px] text-gray-400 uppercase tracking-wide">Event schedule</span>
        <div className="mt-2 space-y-2">
          {[["8:30 AM", "Doors open — booth setup"], ["10:00 AM", "Students admitted"], ["1:00 PM", "Lunch break — booths remain staffed"], ["4:30 PM", "Fair closes — teardown"]].map(([time, label]) => (
            <div key={time} className="flex items-center gap-3 text-xs">
              <span className="text-gray-400 font-mono w-16 shrink-0">{time}</span>
              <span className="text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* need help — real CompanyStatus.jsx "Need help?" SectionCard */}
      <div className="mt-3 rounded-xl border border-gray-100 bg-primary/5 p-3.5 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-gray-800">Need help?</span>
          <p className="text-[11px] text-gray-500 mt-0.5">The CASTO team typically replies within a few hours.</p>
        </div>
        <span className="text-[11px] font-semibold text-primary shrink-0">Contact CASTO →</span>
      </div>
    </div>
  );
}
