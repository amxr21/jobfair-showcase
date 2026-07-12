import { DashboardSidebar } from "./BrowserFrame";

// Faithful to apps/dashboard/frontend's real Managers table: columns are
// #, Company Name, Email, Reps, City, Sector, Apps, Status — same
// StatusBadge colors used by the applicants table (Confirmed/Pending/Canceled).
const COMPANIES = [
  ["1", "Acme Corp", "hr@acmecorp.com", "2", "Dubai", "Technology", "42", "Confirmed"],
  ["2", "TechNova", "careers@technova.io", "1", "Sharjah", "Software", "31", "Confirmed"],
  ["3", "Zephyr Labs", "info@zephyrlabs.ae", "1", "Abu Dhabi", "Research", "18", "Pending"],
  ["4", "BlueRiver", "talent@blueriver.com", "3", "Dubai", "Finance", "27", "Confirmed"],
  ["5", "Meridian", "hr@meridian-grp.com", "1", "Sharjah", "Consulting", "9", "Canceled"],
  ["6", "Vertex Group", "jobs@vertexgroup.ae", "2", "Ajman", "Engineering", "36", "Confirmed"],
  ["7", "NorthPeak", "careers@northpeak.ae", "1", "Dubai", "Logistics", "22", "Confirmed"],
  ["8", "Solvex", "hr@solvex.io", "2", "Sharjah", "Software", "15", "Pending"],
  ["9", "Falcon Energy", "talent@falconenergy.ae", "1", "Abu Dhabi", "Energy", "11", "Confirmed"],
  ["10", "Crestline", "jobs@crestline.com", "1", "Dubai", "Retail", "8", "Registered"],
  ["11", "Orion Systems", "hr@orionsys.ae", "2", "Sharjah", "Technology", "29", "Confirmed"],
  ["12", "Palmwood", "careers@palmwood.com", "1", "Ajman", "Real Estate", "14", "Pending"],
  ["13", "Ateeq Holdings", "jobs@ateeqholdings.ae", "3", "Dubai", "Construction", "33", "Confirmed"],
  ["14", "Skyline Media", "talent@skylinemedia.ae", "1", "Sharjah", "Media", "19", "Registered"],
];

const STATUS_STYLES = {
  Confirmed: "bg-[#E5F0FF] text-[#0066CC]",
  Registered: "bg-[#E5FFE5] text-[#0E7F41]",
  Pending: "bg-[#FFFACD] text-[#EBC600]",
  Canceled: "bg-[#FFE5E5] text-[#CC0000]",
};

export function CompaniesMock() {
  return (
    <div className="flex bg-white">
      <DashboardSidebar active="managers" />
      <div className="flex-1 p-4 md:p-5 bg-[#F3F6FF]/40">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-[15px] text-gray-900">Companies</h3>
            <p className="text-[11px] text-gray-400">73 registered &middot; 61 confirmed</p>
          </div>
          <div className="flex gap-2">
            <button className="hidden sm:block border border-gray-200 bg-white text-gray-600 text-[11px] font-semibold px-3 py-1.5 rounded-lg">Send reminders</button>
            <button className="bg-[#0E7F41] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg">Import Excel</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Status: Confirmed", "Sector: Tech", "Has applicants"].map((f) => (
            <span key={f} className="text-[10px] bg-[#0E7F41]/10 text-[#0E7F41] px-2 py-0.5 rounded-full font-medium">{f}</span>
          ))}
        </div>

        <div className="rounded-lg border border-gray-100 bg-white overflow-hidden">
          <div className="grid grid-cols-12 gap-1 bg-gray-50 text-[10px] font-semibold text-gray-500 px-3 py-2">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Company</div>
            <div className="col-span-2 hidden lg:block">Reps</div>
            <div className="col-span-2 hidden md:block">City</div>
            <div className="col-span-2 hidden sm:block">Sector</div>
            <div className="col-span-9 sm:col-span-2 text-right">Status</div>
          </div>
          {COMPANIES.map(([n, name, email, reps, city, sector, apps, status]) => (
            <div key={n} className="grid grid-cols-12 gap-1 items-center px-3 py-2 border-t border-gray-50 text-[12px]">
              <div className="col-span-1 text-gray-400 text-[11px]">{n}</div>
              <div className="col-span-3 flex items-center gap-1.5 min-w-0">
                <span className="w-6 h-6 rounded-lg bg-[#2959A6]/10 text-[#2959A6] text-[9px] font-bold flex items-center justify-center shrink-0">
                  {name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
                <div className="leading-tight min-w-0">
                  <div className="text-gray-800 truncate">{name}</div>
                  <div className="text-[10px] text-gray-400 truncate hidden xl:block">{apps} apps &middot; {email}</div>
                </div>
              </div>
              <div className="col-span-2 hidden lg:block text-gray-500 text-[11px]">{reps}</div>
              <div className="col-span-2 hidden md:block text-gray-500 text-[11px]">{city}</div>
              <div className="col-span-2 hidden sm:block text-gray-500 text-[11px]">{sector}</div>
              <div className="col-span-9 sm:col-span-2 text-right">
                <span className={`inline-flex text-[9px] font-semibold px-1.5 py-0.5 rounded ${STATUS_STYLES[status]}`}>{status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
