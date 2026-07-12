import { User, GraduationCap, Sparkles, Check } from "lucide-react";

// A faithful mini-recreation of the student application wizard: green side
// panel with the per-step icon, form fields, and the step it's on. `step`
// (1|2|3) selects which stage renders, so the walkthrough section can show
// each one.
const META = {
  1: { Icon: User, title: "Personal Information" },
  2: { Icon: GraduationCap, title: "Professional Information" },
  3: { Icon: Sparkles, title: "Preferences (Optional)" },
};

function Field({ label, value, placeholder, valid }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-gray-500">{label}</span>
      <div className={`h-7 rounded-md border px-2 flex items-center text-[11px] ${valid ? "border-primary text-gray-800" : "border-gray-300 text-gray-400"}`}>
        {value || placeholder}
      </div>
    </div>
  );
}

export function FormMock({ step = 1 }) {
  const { Icon, title } = META[step];
  return (
    <div dir="ltr" className="flex flex-col md:flex-row gap-4 bg-white rounded-3xl border border-ink/10 shadow-[0_32px_80px_-32px_rgba(16,22,19,0.35)] p-4 min-h-[300px]">
      {/* green side panel */}
      <div className="relative md:w-1/3 bg-primary rounded-2xl p-5 text-white overflow-hidden shrink-0">
        <div className="absolute -bottom-8 -right-6 w-32 h-32 rounded-full bg-white/5" />
        <div className="w-11 h-11 rounded-xl border border-white/40 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h4 className="text-lg font-bold leading-tight">{title}</h4>
        {/* step progress */}
        <div className="flex md:flex-col gap-1.5 mt-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-1 md:h-6 md:w-1 rounded-full flex-1 md:flex-none ${s <= step ? "bg-white" : "bg-white/25"}`} />
          ))}
        </div>
      </div>

      {/* fields */}
      <div className="flex-1">
        {step === 1 && (
          <div className="grid grid-cols-2 gap-2.5">
            <Field label="First Name" value="Ammar" valid />
            <Field label="Last Name" value="Obad" valid />
            <Field label="University ID" value="U 22105176" valid />
            <Field label="Date of Birth" value="Mar 10, 2000" valid />
            <Field label="Email" value="ammar@uos.ac.ae" valid />
            <Field label="Mobile" value="05X XXX XXXX" valid />
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-2 gap-2.5">
            <Field label="Study Program" value="Bachelor" valid />
            <Field label="College" value="Engineering" valid />
            <div className="col-span-2">
              <span className="text-[10px] text-gray-500">Technical Skills</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {["JavaScript", "Python", "React", "SQL"].map((s) => (
                  <span key={s} className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded">{s}</span>
                ))}
              </div>
            </div>
            <Field label="CGPA" value="3.9" valid />
            <Field label="Expected Grad." value="Jun 2026" valid />
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-2 gap-2.5">
            <div className="col-span-2">
              <span className="text-[10px] text-gray-500">Field Interest</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {["Software Dev", "AI / ML", "Data Science"].map((s) => (
                  <span key={s} className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded">{s}</span>
                ))}
              </div>
            </div>
            <Field label="Preferred City" value="Sharjah" valid />
            <Field label="Availability" value="Immediately" valid />
            <div className="col-span-2 flex flex-wrap gap-1.5 mt-1">
              {["Full-time", "Internship"].map((t) => (
                <span key={t} className="bg-secondary text-white text-[10px] px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <div className="w-8 h-8 rounded-md border border-gray-200" />
          {step < 3
            ? <div className="w-8 h-8 rounded-md border border-gray-200" />
            : <div className="bg-primary text-white text-xs font-medium px-4 py-2 rounded-md flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Submit</div>}
        </div>
      </div>
    </div>
  );
}

// Deterministic pattern so the fake QR is stable across renders.
const QR_CELLS = [
  1,1,1,0,1,0,1,1, 1,0,0,1,0,1,0,1, 1,0,1,1,1,0,0,1, 0,1,0,0,1,1,1,0,
  1,1,0,1,0,0,1,1, 0,0,1,0,1,1,0,1, 1,0,1,1,0,1,0,0, 1,1,0,0,1,0,1,1,
];

// The QR ticket result mock.
export function TicketMock() {
  return (
    <div dir="ltr" className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl overflow-hidden p-6 text-white flex flex-col sm:flex-row items-center gap-6 shadow-[0_32px_80px_-32px_rgba(16,22,19,0.4)]">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-7 h-7" strokeWidth={2} />
          <h4 className="text-2xl font-bold">You're all set!</h4>
        </div>
        <p className="text-white/85 text-sm max-w-xs">Bring your QR ticket to the entrance on event day.</p>
      </div>
      <div className="relative bg-white rounded-xl p-3 shrink-0">
        <div className="w-28 h-28 grid grid-cols-8 gap-0.5">
          {QR_CELLS.map((c, i) => (
            <div key={i} className={`rounded-[1px] ${c ? "bg-primary-dark" : "bg-transparent"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
