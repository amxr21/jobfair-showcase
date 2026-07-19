// The window chrome every dashboard mockup sits inside — traffic-light dots
// plus a fake URL bar, so each recreated screen reads as "a real app window".
// Mockups are faithful recreations of the real (English, LTR) portal, so the
// whole frame is pinned to dir="ltr" even when the site is in Arabic.
export function BrowserFrame({ url = "app.fairflow.demo", children, className = "" }) {
  return (
    <div dir="ltr" className={`rounded-3xl border border-ink/10 bg-white shadow-[0_32px_80px_-32px_rgba(16,22,19,0.35)] overflow-hidden ${className}`}>
      <div className="flex items-center gap-3 px-4 h-10 bg-mist/70 border-b border-ink/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="hidden sm:flex items-center gap-1.5 bg-white border border-ink/8 rounded-md px-3 py-1 text-[11px] text-ink-faint max-w-[250px] w-full justify-center">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a4 4 0 00-4 4v3H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-2V5a4 4 0 00-4-4z" /></svg>
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>
      {children}
    </div>
  );
}

// Real dashboard nav icons — copied 1:1 from apps/dashboard/frontend's
// src/components/Icons.jsx (24x24 viewBox, stroke-based Heroicons-style).
const NAV_ICONS = {
  applicants: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  managers: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  statistics: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  survey: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z",
  settings: "M4 5h16M4 12h16M4 19h16",
};

const NAV_ITEMS = [
  ["applicants", "Applicants"],
  ["managers", "Companies"],
  ["statistics", "Statistics"],
  ["survey", "Survey Results"],
  ["settings", "Event Settings"],
];

// The real portal's left-hand nav: a green "CASTO" wordmark tile, five links
// with 32px icon slots, and one shared pill (bg-[#0E7F41]) that sits behind
// whichever link is active — icon turns white, label turns green + bold.
// Faithful to apps/dashboard/frontend/src/components/{NavBar,PageLink}.jsx.
export function DashboardSidebar({ active = "applicants" }) {
  return (
    <div className="hidden md:flex flex-col w-44 shrink-0 bg-white border-r border-gray-100 p-3 gap-y-6">
      <div className="flex items-center gap-2 px-1">
        <span className="w-8 h-8 rounded-lg bg-[#0E7F41] flex items-center justify-center text-white font-bold text-xs">CO</span>
        <span className="font-bold text-[13px] text-gray-800 leading-tight">CASTO<br/>Office</span>
      </div>

      <nav className="flex flex-col gap-1 relative">
        {NAV_ITEMS.map(([id, label]) => {
          const isActive = id === active;
          return (
            <div key={id} className="relative">
              {isActive && <div className="absolute inset-0 rounded-xl bg-[#0E7F41]" />}
              <div className="relative flex items-center gap-2.5 px-2.5 py-2 rounded-xl">
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                  style={{ color: isActive ? "#ffffff" : "#9ca3af" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={NAV_ICONS[id]} />
                  </svg>
                </span>
                <span
                  className="text-[12px] leading-none"
                  style={{ color: isActive ? "#ffffff" : "#6b7280", fontWeight: isActive ? 600 : 400 }}
                >
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center gap-2 pt-3 border-t border-gray-100">
        <span className="w-7 h-7 rounded-full bg-[#0E7F41] flex items-center justify-center text-[10px] font-bold text-white">CA</span>
        <div className="leading-tight min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-gray-800 truncate">CASTO</span>
            <span className="text-[8px] font-bold uppercase tracking-wide text-[#0E7F41] bg-[#0E7F41]/10 rounded px-1 py-px shrink-0">Admin</span>
          </div>
          <div className="text-[9px] text-gray-400 truncate">casto@sharjah.ac.ae</div>
        </div>
      </div>
    </div>
  );
}
