import { DashboardSidebar } from "./BrowserFrame";

// Faithful to apps/dashboard/frontend's real Applicants table: columns are
// #, Name, University ID, Nationality, CGPA, Major, CV, Status — and status
// values/colors come 1:1 from components/StatusBadge.jsx.
const APPLICANTS = [
  ["1", "AO", "Ammar Obad", "U 22105176", "UAE", "3.9", "Computer Engineering", "Confirmed"],
  ["2", "LH", "Layla Hassan", "U 21098234", "Jordan", "3.7", "Business Administration", "Registered"],
  ["3", "OK", "Omar Khalid", "U 22110987", "Egypt", "3.4", "Mechanical Engineering", "Pending"],
  ["4", "SA", "Sara Ahmed", "U 22103482", "UAE", "3.8", "Data Science", "Registered"],
  ["5", "MJ", "Mohammed Jassim", "U 20087651", "Oman", "3.2", "Finance", "Canceled"],
  ["6", "FN", "Fatima Noor", "U 22119043", "UAE", "3.6", "Architecture", "Confirmed"],
  ["7", "YA", "Yousef Al Ali", "U 22114532", "UAE", "3.5", "Civil Engineering", "Registered"],
  ["8", "RM", "Reem Mansour", "U 21076590", "Lebanon", "3.85", "Marketing", "Confirmed"],
  ["9", "HK", "Hamdan Khoury", "U 22108871", "UAE", "3.1", "Information Technology", "Pending"],
  ["10", "NA", "Nour Al Amin", "U 22112204", "Syria", "3.65", "Graphic Design", "Registered"],
  ["11", "TB", "Talal Bin Rashid", "U 22101987", "UAE", "3.45", "Electrical Engineering", "Confirmed"],
  ["12", "MZ", "Maya Ziyad", "U 21099120", "Palestine", "3.92", "Pharmacy", "Registered"],
  ["13", "KA", "Khalid Al Suwaidi", "U 22117744", "UAE", "2.95", "Business Administration", "Pending"],
  ["14", "DH", "Dana Haddad", "U 22105590", "Jordan", "3.55", "Interior Design", "Confirmed"],
  ["15", "SR", "Saeed Al Rashidi", "U 20091203", "UAE", "3.3", "Mechanical Engineering", "Registered"],
];

const STATUS_STYLES = {
  Confirmed: "bg-[#E5F0FF] text-[#0066CC]",
  Registered: "bg-[#E5FFE5] text-[#0E7F41]",
  Pending: "bg-[#FFFACD] text-[#EBC600]",
  Canceled: "bg-[#FFE5E5] text-[#CC0000]",
};

export function ApplicantsMock() {
  return (
    <div className="flex bg-white">
      <DashboardSidebar active="applicants" />
      <div className="flex-1 p-4 md:p-5 bg-[#F3F6FF]/40">
        {/* header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-[15px] text-gray-900">Applicants</h3>
            <p className="text-[11px] text-gray-400">1,284 total &middot; page 1 of 26</p>
          </div>
          <div className="flex gap-2">
            <div className="hidden sm:flex items-center gap-1.5 border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-[11px] text-gray-400 w-40">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              Search applicants…
            </div>
            <button className="bg-[#0E7F41] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg">Filters</button>
          </div>
        </div>

        {/* filter chips — real filter dimensions from the applicants page */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Major: Engineering", "CGPA ≥ 3.5", "Has CV", "Nationality: UAE"].map((f) => (
            <span key={f} className="text-[10px] bg-[#0E7F41]/10 text-[#0E7F41] px-2 py-0.5 rounded-full font-medium">{f}</span>
          ))}
        </div>

        {/* table */}
        <div className="rounded-lg border border-gray-100 bg-white overflow-hidden">
          <div className="grid grid-cols-12 gap-1 bg-gray-50 text-[10px] font-semibold text-gray-500 px-3 py-2">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2 hidden md:block">University ID</div>
            <div className="col-span-1 hidden lg:block">CGPA</div>
            <div className="col-span-3 hidden sm:block">Major</div>
            <div className="col-span-9 sm:col-span-2 text-right">Status</div>
          </div>
          {APPLICANTS.map(([n, initials, name, uid, , cgpa, major, status]) => (
            <div key={n} className="grid grid-cols-12 gap-1 items-center px-3 py-2 border-t border-gray-50 text-[12px]">
              <div className="col-span-1 text-gray-400 text-[11px]">{n}</div>
              <div className="col-span-3 flex items-center gap-1.5 min-w-0">
                <span className="w-6 h-6 rounded-full bg-[#0E7F41]/10 text-[#0E7F41] text-[9px] font-bold flex items-center justify-center shrink-0">{initials}</span>
                <span className="text-gray-800 truncate">{name}</span>
              </div>
              <div className="col-span-2 hidden md:block text-gray-500 text-[11px] font-mono">{uid}</div>
              <div className="col-span-1 hidden lg:block text-gray-500 text-[11px]">{cgpa}</div>
              <div className="col-span-3 hidden sm:block text-gray-500 text-[11px] truncate">{major}</div>
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
