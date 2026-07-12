import { DashboardSidebar } from "./BrowserFrame";

// Faithful to apps/dashboard/frontend's real EventOperations page: the
// "Viewing as" team switcher, the real 9-tab OPERATIONS_TABS bar (Venue &
// Booths, Banners & Branding, Special Requirements, Equipment & Logistics,
// Delegate List, Attendance, Manage Staff, Schedule, Access Passes), and the
// Venue & Booths tab's floor map (center island / outer ring booths).
const TABS = ["Venue & Booths", "Banners & Branding", "Special Requirements", "Equipment & Logistics", "Delegate List", "Attendance", "Manage Staff", "Schedule", "Access Passes"];
const TEAM = [["R", "Rana"], ["H", "Huda"], ["K", "Khalid"]];

function FloorMap() {
  const booths = [
    "assigned", "assigned", "reserved", "available", "assigned", "available",
    "assigned", "reserved", "assigned", "assigned", "available", "assigned",
    "available", "assigned", "assigned", "reserved",
  ];
  const color = {
    assigned: "bg-[#0E7F41] text-white",
    reserved: "bg-amber-100 text-amber-700 border border-amber-300",
    available: "bg-gray-100 text-gray-400 border border-gray-200",
  };
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100">
      <div className="bg-[#0E7F41] px-3 py-2.5">
        <h4 className="text-sm font-bold text-white">Floor Map</h4>
        <p className="text-[10px] text-white/80 mt-0.5">Click a booth to manage its assignment</p>
      </div>
      <div className="p-3 bg-white">
        <div className="grid grid-cols-8 gap-1.5">
          {booths.map((s, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md text-[9px] font-semibold flex items-center justify-center transition-transform duration-150 ease-out hover:scale-110 cursor-default ${color[s]}`}
              title={s === "assigned" ? "Assigned" : s === "reserved" ? "Reserved" : "Available"}
            >
              {String.fromCharCode(65 + Math.floor(i / 8))}{(i % 8) + 1}
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-3 text-[10px] text-gray-500">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#0E7F41]" /> Assigned</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-200" /> Reserved</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-gray-200" /> Available</span>
        </div>
      </div>
    </div>
  );
}

export function EventOpsMock() {
  return (
    <div className="flex bg-white min-h-[560px]">
      <DashboardSidebar active="settings" />
      <div className="flex-1 p-4 md:p-5 bg-[#F3F6FF]/40">
        <h3 className="font-bold text-[15px] text-gray-900 mb-3">Event Operations</h3>

        {/* viewing-as team switcher */}
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide">Viewing as</span>
          {TEAM.map(([initial, name], i) => (
            <span key={name} className={`flex items-center gap-1 rounded-full pl-0.5 pr-2 py-0.5 text-[10px] font-semibold border ${i === 0 ? "bg-[#0E7F41] text-white border-[#0E7F41]" : "bg-white text-gray-600 border-gray-200"}`}>
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${i === 0 ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"}`}>{initial}</span>
              {name}
            </span>
          ))}
        </div>

        {/* real 9-tab bar */}
        <div className="flex bg-white border border-gray-200 rounded-lg p-1 gap-1 mb-3 overflow-x-auto">
          {TABS.map((t, i) => (
            <div key={t} className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap ${i === 0 ? "text-white bg-[#0E7F41]" : "text-gray-500"}`}>{t}</div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FloorMap />

          {/* banner progress steppers */}
          <div>
            <span className="text-[10px] font-semibold text-gray-600 block mb-2">Banner &amp; branding status</span>
            <div className="space-y-2">
              {[["Acme Corp", 4], ["TechNova", 2], ["Zephyr Labs", 5], ["BlueRiver", 3]].map(([name, step]) => (
                <div key={name} className="rounded-lg border border-gray-100 bg-white p-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] text-gray-700">{name}</span>
                    <span className="text-[9px] text-gray-400">{["Not submitted", "Submitted", "Approved", "Printed", "Placed"][step - 1]}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= step ? "bg-[#0E7F41]" : "bg-gray-100"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
