// All bilingual copy for the showcase. EN + AR, mirrored key structure.
// Mockup screens intentionally stay in English — they are faithful
// recreations of the real portal's interface.
export const strings = {
  en: {
    brand: "FairFlow",
    nav: { home: "Home", platform: "Platform", howItWorks: "How it works", audiences: "Audiences", story: "Story", demo: "Request a demo" },
    langLabel: "العربية",

    common: {
      requestDemo: "Request a demo",
      explorePlatform: "Explore the platform",
      scrollHint: "Scroll",
      tryIt: "Click around — it's interactive",
      hotspotHint: "Tap the pulsing dots to see what each part does",
    },

    home: {
      heroEyebrow: "Career-fair operations, end to end",
      heroTitle1: "Run the fair.",
      heroTitle2: "Not the paperwork.",
      heroSub: "One platform for organizers, companies, students, and door staff — from the first application to QR check-in, booth logistics, and live analytics. Everything in one calm, connected place.",
      heroCtaPrimary: "Request a demo",
      heroCtaSecondary: "Explore the platform",

      marquee: ["QR check-in", "Booth floor map", "Live statistics", "Applicant shortlists", "Banner tracking", "Delegate badges", "Post-event survey", "Bulk Excel import", "Access passes", "Activity log"],

      screensEyebrow: "The real screens",
      screensTitle: "Four consoles, one system",
      screensSub: "Faithful recreations of the screens your team works in every day — keep scrolling to walk through them.",

      journeyEyebrow: "The whole journey",
      journeyTitle: "Six stages, one platform",
      journeySub: "From the first sign-up to the final CSV export, every stage of a real fair lives in the same system — no hand-offs, no re-keying.",
      journeyHint: "Scroll to move through the stages — or tap any to jump to it",
      steps: [
        { k: "Register", t: "Students apply through a validated three-step form; companies sign up with representatives, sector, and open positions. Similar company names are flagged before a duplicate is ever created." },
        { k: "Invite & confirm", t: "Organizers bulk-send reminder emails; each company confirms attendance in one click from its inbox, and the status flips instantly — no phone tag, last-reminded time tracked." },
        { k: "Manage & shortlist", t: "Review, filter, flag, shortlist, or reject every applicant from one roster — company-private flags stay private, shared statuses stay shared." },
        { k: "Set up event day", t: "Assign booths on a floor map, move banners through their approval stepper, fulfil logistics, print delegate badges, and issue access passes." },
        { k: "Check in at the door", t: "Volunteers scan student QR tickets at a code-gated terminal, companies check in by QR or manually — every scan logged to the person who made it." },
        { k: "Survey & export", t: "Companies fill the post-event survey from their status page; organizers watch live stats, read per-question results, and export the whole fair to CSV." },
      ],

      audiencesEyebrow: "Built for everyone in the hall",
      audiencesTitle: "Four audiences, one source of truth",
      audiencesSub: "Each role sees exactly what it needs — nothing more, nothing missing.",
      audienceCards: [
        { name: "Organizers", blurb: "Full visibility and control over applicants, companies, logistics, and live numbers.", cta: "The organizer cockpit" },
        { name: "Companies", blurb: "Self-service booth, banner, and pass tracking — plus applicant shortlists, without email ping-pong.", cta: "The company portal" },
        { name: "Students", blurb: "A three-step application that ends in a QR ticket — retrievable any time with a university ID.", cta: "The student journey" },
        { name: "Volunteers", blurb: "Code-gated check-in terminals for door staff — no full account, every scan logged.", cta: "The door crew" },
      ],

      statLabels: ["Companies coordinated", "Applicants processed", "Event-ops modules", "Roles, one platform"],

      bentoEyebrow: "Why teams choose it",
      bentoTitle: "Built from a real fair, not a whiteboard",
      bentoSub: "Every feature exists because a real event day demanded it.",
      bento: [
        { t: "One source of truth", d: "No spreadsheets emailed back and forth, no logistics buried in group chats. Every applicant, company, booth, and badge lives in one live system." },
        { t: "Paperless by default", d: "QR tickets for students, digital badges for delegates, instant check-in at the door." },
        { t: "Live, not lagging", d: "Attendance counts, survey results, and statistics update as the day unfolds." },
        { t: "Four roles, scoped access", d: "Organizers, companies, students, and volunteers each get their own view — permissions enforced, activity logged." },
        { t: "Spreadsheet in, spreadsheet out", d: "Bulk-import companies from Excel with per-row validation; export the whole fair to CSV when it wraps." },
        { t: "Details covered", d: "Banner print deadlines, parking slots, booth power outlets, accessibility requests — the edge cases you only learn on event day." },
      ],
    },

    platform: {
      heroEyebrow: "The organizer's cockpit",
      heroTitle: "Everything event day needs, in one console",
      heroSub: "A faithful look at the screens your team works in — applicants, companies, event operations, statistics, and the post-event survey.",

      explorerEyebrow: "Interactive tour",
      explorerTitle: "See the real screens",
      explorerSub: "Switch between consoles and tap the pulsing dots — every screen is a faithful recreation of the live portal.",
      tabs: ["Applicants", "Companies", "Event Ops", "Statistics", "Survey"],

      hotspots: {
        applicants: [
          { t: "Advanced filters", d: "Major, CGPA range, nationality, skills, languages, CV presence, attendance, status — combined freely." },
          { t: "Private flags, shared statuses", d: "A company's flags stay private to it; shortlist and reject statuses are visible to all." },
          { t: "Expandable profiles", d: "Full details, CV download, and the student's QR code — one click away." },
        ],
        companies: [
          { t: "Reminder emails", d: "Bulk-select companies and send confirmation reminders; the last-reminded time is tracked." },
          { t: "Bulk Excel import", d: "Upload a spreadsheet, preview validated rows, resolve duplicates, and submit in one batch." },
          { t: "End-to-end tracking", d: "Status, sector, city, booth, and applicant count for every participant." },
        ],
        eventops: [
          { t: "Click-to-assign floor map", d: "Every booth on an interactive map — available, reserved, or assigned at a glance." },
          { t: "Banner steppers", d: "Each banner order moves Not Submitted → Submitted → Approved → Printed → Placed." },
          { t: "Twelve modules", d: "Booths, banners, logistics, badges, schedule, passes, staff, reports — one tabbed console." },
        ],
        statistics: [
          { t: "Live tiles", d: "Applicants, companies, check-ins, and attendance rate — updating as the day runs." },
          { t: "Charts that answer questions", d: "Daily check-ins, status breakdowns, and attendance at a glance." },
          { t: "CSV export", d: "The complete fair — companies and students — downloadable for office records." },
        ],
        survey: [
          { t: "Response rate", d: "See exactly who submitted and who's still awaiting a nudge." },
          { t: "Per-question breakdowns", d: "Multiple-choice distributions, numeric averages, and full open-ended answers." },
          { t: "Sentiment at a glance", d: "Aggregate satisfaction summarized per question across all companies." },
        ],
      },

      screens: [
        {
          eyebrow: "Applicant management",
          title: "Every applicant, one searchable roster",
          desc: "Filter by major, CGPA, nationality, skills, CV presence, attendance, or status. Shortlist, flag, or reject in a click — company-private flags stay private, visible-to-all statuses stay shared.",
          bullets: ["Advanced multi-criteria filters", "Expandable profiles with CV & QR", "Camera-based QR attendance", "Bulk 'load all' or paginated views"],
        },
        {
          eyebrow: "Company management",
          title: "Every participant, tracked end to end",
          desc: "Status, sector, city, booth, and applicant counts for every company. Send reminder emails, change statuses, and bulk-import companies from a spreadsheet with per-row validation.",
          bullets: ["Confirmation reminder emails", "Bulk Excel import with conflict resolution", "Status & sector filtering", "Per-company applicant counts"],
        },
        {
          eyebrow: "Event operations",
          title: "The whole event day, one cockpit",
          desc: "A tabbed console for booths on an interactive floor map, banner approval steppers, logistics, delegate badges, schedules, and access passes — every event-day concern in one place.",
          bullets: ["Click-to-assign booth floor map", "Banner progress steppers", "Printable delegate badges", "Access & parking passes"],
        },
        {
          eyebrow: "Statistics & survey",
          title: "Know what's happening, as it happens",
          desc: "Aggregate applicant, company, and attendance numbers with charts, plus post-event survey breakdowns — response rates, per-question sentiment, and a full CSV export.",
          bullets: ["Live attendance & applicant charts", "Per-question survey analytics", "Sentiment at a glance", "Complete CSV export"],
        },
      ],

      modulesEyebrow: "Event operations, in depth",
      modulesTitle: "Every module event day needs",
      modulesSub: "Twelve tabs your team lives in on the day — operations, reporting, and access-control panels for CASTO admins, replacing a dozen spreadsheets and a very long group chat.",
      modules: [
        { t: "Venue & Booths", d: "Assign companies to booths on a click-to-assign floor map." },
        { t: "Banners & Branding", d: "Track each banner order through a Submitted → Placed stepper." },
        { t: "Special Requirements", d: "Accessibility, AV, and custom setup requests with priorities." },
        { t: "Equipment & Logistics", d: "Tables, chairs, power, screens — requested vs. fulfilled." },
        { t: "Delegate Badges", d: "Manage the roster and print real name badges on the spot." },
        { t: "Attendance & Check-in", d: "QR or manual check-in for companies and students." },
        { t: "Manage Staff", d: "Code-gated volunteer accounts with per-person activity logs." },
        { t: "Schedule", d: "Event-day sessions: time, host, location, capacity." },
        { t: "Access Passes", d: "Entry and parking passes per delegate, slot included." },
        { t: "Post-Event Report", d: "Summary stats plus a CSV export of companies & students." },
        { t: "Activity Log", d: "A running audit trail of who changed what, and when." },
        { t: "Team & Roles", d: "Staff focus areas with a password + confirmation-code gate." },
      ],

      selfEyebrow: "The company portal",
      selfTitle: "Companies serve themselves",
      selfSub: "Everything a participating employer needs, mirrored live from what organizers manage — no back-and-forth emails.",
      selfCards: [
        { t: "Live status page", d: "Attendance confirmation, applicant count, open positions, representatives, and preferences — always current." },
        { t: "Event Day mirror", d: "Assigned booth with its QR code, banner status and print deadline, logistics fulfillment, and access passes." },
        { t: "One-click confirmation", d: "Companies confirm attendance straight from their reminder email — status flips instantly." },
        { t: "Account settings", d: "Edit login email, phone, city, sector, positions, and candidate preferences without re-registering." },
        { t: "Shared team access", d: "Approve additional login emails so a whole recruiting team can work from one company account." },
        { t: "View As", d: "Organizers preview exactly what any company sees — read-only, without touching their session." },
      ],

      trustEyebrow: "Foundations",
      trustTitle: "Boring where it matters",
      trustSub: "The unglamorous parts that make the exciting parts dependable.",
      trust: [
        { t: "Scoped roles", d: "Four audiences, four permission levels — enforced server-side." },
        { t: "Audit trail", d: "Every change across event ops is logged: who, what, when." },
        { t: "Validated intake", d: "University IDs, phone formats, CGPA ranges — checked before they reach the database." },
        { t: "Code-gated staff", d: "Volunteers check students in without ever holding a full account." },
        { t: "Duplicate detection", d: "Similar company names are flagged at signup and merged, not duplicated." },
        { t: "Your data, exportable", d: "Complete CSV exports of companies and students, any time." },
        { t: "Role-scoped sessions", d: "JWT-based logins with server-enforced permissions per role — organizer, company, or code-gated volunteer." },
        { t: "Hashed credentials", d: "Passwords are bcrypt-hashed before storage; nothing sensitive is ever kept in plain text." },
        { t: "Data stays with the office", d: "Applicant and company records exist to run the fair — exportable or deletable on request." },
      ],
    },

    audiences: {
      heroEyebrow: "Who it serves",
      heroTitle: "One platform, four experiences",
      heroSub: "Universities and business owners run the fair; companies, students, and volunteers live in it. Each gets an experience designed for exactly what they came to do.",
      subnav: ["Organizers", "Companies", "Students", "Volunteers"],

      organizers: {
        tag: "The organizing office",
        title: "Total visibility, calm control",
        sub: "For career offices and event teams who are done stitching spreadsheets together. Every applicant, company, booth, banner, and badge — one dashboard, updated live.",
        points: [
          "Review, filter, and shortlist every applicant from one roster",
          "Manage companies end to end — statuses, reminders, bulk import",
          "Run event day from a twelve-module operations console",
          "Watch attendance and survey results move in real time",
          "Assign staff focus areas with an audit trail behind every change",
        ],
        highlights: [
          { t: "Role-based access", d: "Four user types, four permission levels, enforced server-side — the door team never touches applicant data." },
          { t: "Everything is auditable", d: "Every operational change is logged: who did it, what changed, and when." },
          { t: "One export, whole fair", d: "Companies and students to CSV whenever you need it — no spreadsheet stitching." },
        ],
        screens: [
          { screen: "eventops", caption: "Event-day operations — booths, banners, logistics, badges, and passes in one tabbed console." },
          { screen: "applicants", caption: "Applicant roster — filter by program, GPA, skills, or status and shortlist in a click." },
          { screen: "statistics", caption: "Live statistics — attendance, applicant outcomes, and survey results as the day moves." },
        ],
      },
      companies: {
        tag: "Participating employers",
        title: "Self-service, not email ping-pong",
        sub: "For employers who want the logistics handled and the candidates front and center. Confirm once, then watch your booth, banner, and passes update themselves.",
        points: [
          "A live status page mirroring everything organizers manage for you",
          "Booth assignment with QR code, banner deadlines, logistics fulfillment",
          "Browse, flag, and shortlist applicants — your flags stay private",
          "Approve extra login emails so the whole team can work together",
          "One post-event survey, straight from your status page",
        ],
        highlights: [
          { t: "Confirm in one click", d: "Accept from the reminder email and your status flips instantly — no phone calls, no forms." },
          { t: "Your flags stay yours", d: "Shortlists and notes are private to your team; public statuses stay shared with organizers." },
          { t: "Shared team access", d: "Approve extra login emails so your whole recruiting team works from one company account." },
        ],
        screens: [
          { screen: "portal", caption: "Company status page — booth, banner deadline, logistics, and passes, mirrored live." },
          { screen: "applicants", caption: "Applicant browsing — search, flag, and shortlist candidates ahead of the day." },
        ],
      },
      students: {
        tag: "The applicant experience",
        title: "A form students actually finish",
        sub: "A guided three-step wizard that validates as you go and ends with a QR ticket — plus a way back to it any time with just a university ID.",
        steps: [
          { label: "Personal", desc: "Name, university ID, contact details, and languages — with inline validation and a smart date picker." },
          { label: "Professional", desc: "Study program, college, technical & soft skills as searchable chips, CGPA, and CV upload." },
          { label: "Preferences", desc: "Optional field interests, preferred work city, availability, and opportunity types." },
        ],
        ticketTitle: "It ends with a ticket",
        ticketDesc: "Every submission produces a QR ticket, emailed instantly. Screenshot it for entry — scanning it at the door is the whole check-in.",
        lookupTitle: "Lost it? Get it back.",
        lookupDesc: "No account, no re-applying. Enter the university ID you applied with and the ticket is right there.",
      },
      volunteers: {
        tag: "Door & check-in staff",
        title: "A terminal, not an account",
        sub: "Door staff get a code-gated check-in terminal — scan student QR codes or fall back to manual entry. No credentials to manage, nothing sensitive exposed.",
        points: [
          "Camera-based QR scanning at the entrance",
          "Manual university-ID check-in as a fallback",
          "Per-booth QR terminals for company-side scanning",
          "Every check-in logged per volunteer",
        ],
        highlights: [
          { t: "Code-gated, not credentialed", d: "A short access code unlocks the terminal — no personal login to hand out or take back." },
          { t: "Nothing sensitive on screen", d: "The terminal shows only what a check-in needs; applicant data never appears at the door." },
          { t: "Accountable by design", d: "Every scan is logged against the volunteer who made it, so the record is always traceable." },
        ],
        screens: [
          { screen: "checkin", caption: "Check-in terminal — scan a QR ticket, or look a student up by university ID." },
        ],
      },
    },

    howItWorks: {
      heroEyebrow: "The timeline",
      heroTitle: "One fair, start to finish",
      heroSub: "Follow a career fair through its four phases — from the first setup click to the closing report — and see who's doing what, on which screen, at every stage.",
      phaseLabel: "Phase",
      phases: [
        {
          key: "before",
          tag: "Weeks before · Organizers",
          title: "Set the fair up",
          sub: "The organizing office builds the event before anyone else logs in: publish the form, line up the companies, assign every booth and banner.",
          who: ["Organizers"],
          meta: { duration: "Weeks ahead", metric: "12 ops modules", owner: "Organizing office" },
          detail: {
            title: "Under the hood",
            body: "Every booth, banner deadline, and company record is created here — one operations console the whole team edits, with an audit log tracking who changed what.",
          },
          points: [
            "Create the event and publish the public application form",
            "Set application and company deadlines from the dashboard",
            "Bulk-import participating employers and assign booths",
          ],
          screens: [
            { screen: "eventops", caption: "Event settings — the twelve-module operations console where the fair is configured." },
            { screen: "companies", caption: "Companies roster — statuses, reminders, and booth assignment in one place." },
          ],
        },
        {
          key: "apply",
          tag: "Application window · Students & Companies",
          title: "Applications open",
          sub: "The form goes live. Students apply in a guided wizard and walk away with a QR ticket; companies confirm and prep their booth from a self-service page.",
          who: ["Students", "Companies"],
          meta: { duration: "2–3 weeks", metric: "1,284 applications", owner: "Students & companies" },
          detail: {
            title: "Under the hood",
            body: "The wizard validates each field as it's typed, so bad data never reaches the roster. On submit, a signed QR ticket is generated and emailed — recoverable later with only a university ID.",
          },
          points: [
            "Students complete a three-step wizard that validates as they go",
            "Every submission emails an instant QR ticket, recoverable by ID",
            "Companies confirm, upload banners, and shortlist candidates early",
          ],
          screens: [
            { screen: "form", caption: "The apply wizard — personal, professional, and preference steps." },
            { screen: "ticket", caption: "The QR ticket — emailed on submit, re-fetched with just a university ID." },
            { screen: "portal", caption: "Company status page — booth, banner deadline, and private shortlist." },
          ],
        },
        {
          key: "eventday",
          tag: "Event day · Volunteers & Organizers",
          title: "Run the day",
          sub: "Doors open. Volunteers check people in from code-gated terminals while organizers watch attendance and the applicant roster move in real time.",
          who: ["Volunteers", "Organizers"],
          meta: { duration: "The one day", metric: "Live attendance", owner: "Volunteers & organizers" },
          detail: {
            title: "Under the hood",
            body: "Each terminal is gated by a rotating code, and every scan is stamped with the volunteer who made it. Attendance streams to the organizers' dashboard the instant a ticket is read — no manual tallies.",
          },
          points: [
            "Camera QR check-in at the door, manual ID lookup as a fallback",
            "Per-booth terminals log every scan against the volunteer who did it",
            "Organizers track live attendance and the roster as it fills",
          ],
          screens: [
            { screen: "checkin", caption: "Check-in terminal — scan a QR ticket or look a student up by ID." },
            { screen: "applicants", caption: "Applicant roster — filter and shortlist the whole list from one screen." },
          ],
        },
        {
          key: "after",
          tag: "After the fair · Organizers",
          title: "Read the results",
          sub: "The floor clears, the data doesn't. Live statistics and post-event survey results become the report you hand in the next morning.",
          who: ["Organizers"],
          meta: { duration: "Next morning", metric: "Report-ready", owner: "Organizing office" },
          detail: {
            title: "Under the hood",
            body: "Statistics are computed live from the same data the day ran on, so the report needs no reconciliation. One export bundles attendance, outcomes, and survey results — no spreadsheet stitching.",
          },
          points: [
            "Live statistics on attendance, companies, and applicant outcomes",
            "One post-event survey, results rolling in from students and companies",
            "Export the full picture for your report — no spreadsheet stitching",
          ],
          screens: [
            { screen: "statistics", caption: "Statistics — attendance and outcomes, exportable for the final report." },
            { screen: "survey", caption: "Survey results — post-event feedback from both sides of the fair." },
          ],
        },
      ],
      overviewEyebrow: "At a glance",
      overviewTitle: "Four phases, one continuous flow",
      metaLabels: { duration: "When", metric: "Signal", owner: "Owner" },
      detailLabel: "Under the hood",
      outroEyebrow: "That's the whole loop",
      outroTitle: "From first setup click to closing report",
      outroSub: "Every phase reads from the same live data, so nothing is re-entered and nothing goes stale. See it running end to end, or explore the platform module by module.",
      outroPrimary: "Request a demo",
      outroSecondary: "Explore the platform",
    },

    story: {
      heroEyebrow: "Why it exists",
      heroTitle: "Event day shouldn't be chaos",
      heroSub: "FairFlow grew out of running a real university career fair — so it handles the edge cases you only learn about at 8 a.m. on the day.",

      originEyebrow: "The origin",
      originTitle: "Born on a fair floor",
      originBody1: "FairFlow is the platform behind the University of Sharjah's Career Advising & Student Training Office (CASTO) job fair: dozens of companies, over a thousand student applications, one organizing office, and a hall that filled up fast. The spreadsheets broke first. Then the printed lists. Then the group chat.",
      originBody2: "Everything in FairFlow exists because that day demanded it — the booth map, the banner deadlines, the code-gated door terminals, the audit log. It was built from a real fair, not a whiteboard.",
      originStats: [
        { v: "70+", l: "Companies coordinated" },
        { v: "1,284", l: "Applications processed" },
        { v: "12", l: "Event-ops modules" },
      ],

      baEyebrow: "The difference you feel",
      baTitle: "Before FairFlow, and after",
      beforeTitle: "Before",
      beforeItems: [
        "Spreadsheets emailed around, versions in conflict",
        "Paper badges and printed lists stale within the hour",
        "Logistics buried in group chats",
        "No clear picture of who actually showed up",
      ],
      afterTitle: "With FairFlow",
      afterItems: [
        "One live source of truth, updating by the second",
        "QR tickets for students, digital badges for delegates",
        "A single ops console for the whole event day",
        "Attendance and stats the moment they happen",
      ],

      principlesEyebrow: "Principles",
      principlesTitle: "What it optimizes for",
      principles: [
        { t: "Calm over clever", d: "The dashboard should lower your heart rate on event day, not raise it." },
        { t: "One truth", d: "If two people see different numbers, the system has failed. Everyone reads from the same live data." },
        { t: "Scoped by role", d: "Every audience sees exactly what it needs. Volunteers never touch applicant data; companies never see each other's flags." },
        { t: "Paper is a bug", d: "Anything printed goes stale in an hour. QR codes, digital badges, and live lists don't." },
      ],

      roadmapEyebrow: "What's next",
      roadmapTitle: "Where FairFlow is headed",
      roadmapItems: [
        "Multi-event support — run several fairs from one CASTO account, with data kept separate per event",
        "Native email/SMS reminders for students, not just companies",
        "Deeper analytics exports and year-over-year comparisons",
        "An open API for universities that want to plug FairFlow into existing student-information systems",
      ],

      casesEyebrow: "Use cases",
      casesTitle: "Wherever people meet employers",
      casesSub: "Built for university fairs first — at home anywhere booths, badges, and applicants collide.",
      cases: [
        { t: "University career fairs", d: "Hundreds of students, dozens of employers, one busy day — organized end to end." },
        { t: "Industry expos & hiring events", d: "Booth logistics, delegate badges, and lead capture without the clipboard." },
        { t: "Recruitment drives", d: "Shortlist, flag, and follow up — all from one applicant roster." },
      ],

      faqEyebrow: "Questions",
      faqTitle: "Answers, before you ask",
      faq: [
        { q: "Who is FairFlow built for?", a: "University career offices, event teams, and any organization that runs hiring fairs or expos — plus the companies, applicants, and check-in staff who take part in them." },
        { q: "Will companies need training to use it?", a: "No. Each company gets a self-service portal that mirrors exactly what organizers manage for them — status, booth, banner, and passes — and confirms attendance in one click straight from the invite email." },
        { q: "How do students apply?", a: "Through a guided three-step form with inline validation and CV upload. Every submission ends with a QR ticket, emailed instantly, that doubles as the entry pass on the day." },
        { q: "How does check-in work on event day?", a: "Check-in staff unlock a code-gated terminal and scan each student's QR ticket — or check them in by university ID if a ticket isn't handy. Every scan is logged against the person who made it." },
        { q: "Can we export our data whenever we want?", a: "Yes. Full CSV exports of companies and students are available at any time, alongside a post-event report with summary statistics — the data is always yours." },
        { q: "Is the platform bilingual?", a: "The showcase and every applicant-facing screen support English and Arabic with full right-to-left layout. The management dashboard currently runs in English." },
      ],
    },

    demo: {
      trigger: "Request a demo",
      stepLabel: "Step",
      back: "Back",
      close: "Close",
      next: "Continue",
      submit: "Request my demo",
      sending: "Sending…",
      errorFallback: "Something went wrong. Please try again.",
      successHeading: "Request received",
      successSub: "Thanks — we'll be in touch within one business day to line up a walkthrough tailored to your event.",
      closing: "Closing…",
      required: "This field is required",
      invalidEmail: "Enter a valid email address",
      optional: "Optional",

      steps: {
        eventType: {
          title: "What kind of event is it?",
          sub: "So we tailor the walkthrough to how you'll actually use FairFlow.",
          options: {
            university: "University career fair",
            expo: "Industry expo or hiring event",
            drive: "Recruitment drive",
            multi: "A season of several events",
            other: "Something else",
          },
        },
        scale: {
          title: "How big is it?",
          sub: "A rough size is fine — it helps us show the right parts.",
          companiesLabel: "Participating companies",
          attendeesLabel: "Expected attendees",
          companyBuckets: ["Up to 20", "20–50", "50–100", "100+"],
          attendeeBuckets: ["Under 500", "500–1,500", "1,500–5,000", "5,000+"],
        },
        audiences: {
          title: "Who needs to be in the system?",
          sub: "Pick every role you'd onboard — choose as many as apply.",
          options: {
            organizers: "Organizing office",
            companies: "Participating companies",
            students: "Students / applicants",
            volunteers: "Door & check-in staff",
          },
        },
        timeline: {
          title: "When is the event?",
          sub: "This tells us how soon you'd need to be up and running.",
          options: {
            planning: "Just exploring",
            quarter: "This quarter",
            months: "In 3–6 months",
            set: "Date is set",
          },
        },
        about: {
          title: "Where should we send it?",
          sub: "We'll reach out with a walkthrough and next steps.",
        },
        details: {
          title: "Anything we should know?",
          sub: "Priorities, must-have modules, current tools — whatever helps us prepare.",
          featuresLabel: "Most interested in",
          featureOptions: {
            applicants: "Applicant management",
            companies: "Company management",
            eventops: "Event-day operations",
            checkin: "QR check-in",
            stats: "Statistics & survey",
            bilingual: "Bilingual / RTL",
          },
        },
        confirm: {
          title: "Look right?",
          sub: "Send it over and we'll take it from here.",
        },
      },

      fields: {
        name: "Your name",
        email: "Work email",
        organization: "Organization",
        role: "Your role",
        eventName: "Event name",
        message: "Message",
        eventType: "Event type",
        scale: "Scale",
        audiences: "Audiences",
        timeline: "Timeline",
        features: "Interested in",
      },
      placeholders: {
        name: "Full name",
        email: "you@organization.com",
        organization: "University, company, or agency",
        role: "e.g. Career Services Lead",
        eventName: "e.g. Spring Career Fair 2026",
        message: "Tell us a little about your event and what you're hoping to solve…",
      },
      consent: "I agree to be contacted about this request. This demo request is a showcase form — nothing is stored or sent to a server.",
      none: "—",
    },

    footer: {
      ctaEyebrow: "Next step",
      ctaTitle: "Ready to run a smoother fair?",
      ctaSub: "See how FairFlow replaces the spreadsheets and paper badges with one dashboard your whole team will actually enjoy using.",
      ctaButton: "Request a demo",
      ctaSecondary: "Explore the platform",
      tagline: "One platform to run a career fair end to end — applications, companies, event-day operations, check-in, and analytics.",
      product: "Product", audiencesCol: "Audiences", resources: "Resources", getStarted: "Get started",
      links: {
        platform: "Platform", modules: "Event Ops", screens: "The Screens",
        organizers: "Organizers", companies: "Companies", students: "Students", volunteers: "Volunteers",
        story: "Our story", useCases: "Use cases", faq: "FAQ",
        demo: "Request a demo", contact: "Contact",
      },

      contactEyebrow: "Get in touch",
      contactTitle: "Talk to the developer",
      contactSub: "Questions about running FairFlow for your fair? Reach out directly — no sales funnel.",

      devEyebrow: "Built by",
      devName: "Ammar Obad",
      devRole: "Full-stack Developer & Computer Engineer",
      devBlurb: "Built the dashboard, the applicant form, and this showcase end to end — front end, back end, and everything between.",

      langLabel: "Language",
      backToTop: "Back to top",
      privacy: "Privacy", terms: "Terms",
      rights: "FairFlow is an independent showcase built around a real deployment. This site is not an official University of Sharjah or CASTO web property.",
    },
  },

  ar: {
    brand: "فيرفلو",
    nav: { home: "الرئيسية", platform: "المنصّة", howItWorks: "كيف تعمل", audiences: "الفئات", story: "قصتنا", demo: "اطلب عرضًا" },
    langLabel: "English",

    common: {
      requestDemo: "اطلب عرضًا",
      explorePlatform: "استكشف المنصّة",
      scrollHint: "مرّر للأسفل",
      tryIt: "جرّبها بنفسك — تفاعلية بالكامل",
      hotspotHint: "اضغط على النقاط المتحركة لتتعرّف على كل ميزة",
    },

    home: {
      heroEyebrow: "إدارة معارض التوظيف بذكاء",
      heroTitle1: "شغّل معرضك،",
      heroTitle2: "ووفّر على فريقك التعب.",
      heroSub: "منصّة واحدة تجمع المنظّمين والشركات والطلاب وفريق الاستقبال — من استقبال أول طلب إلى تسجيل الدخول بالباركود، وتوزيع الأجنحة، والتقارير اللحظية. كل شيء تحت سقف واحد، بلا تعقيد.",
      heroCtaPrimary: "اطلب عرضًا",
      heroCtaSecondary: "تعرّف على المنصّة",

      marquee: ["دخول بالباركود", "خريطة الأجنحة", "تقارير لحظية", "ترشيح المتقدّمين", "متابعة اللافتات", "بطاقات الحضور", "استبيان ما بعد الفعالية", "استيراد ملفات إكسل", "تصاريح الدخول", "سجل الأنشطة"],

      screensEyebrow: "شاشات حقيقية من المنصّة",
      screensTitle: "أربع لوحات، نظام واحد",
      screensSub: "هذه نسخة مطابقة تمامًا للشاشات التي يستخدمها فريقك يوميًا — استمر بالتمرير لتتجوّل فيها.",

      journeyEyebrow: "رحلة العمل كاملة",
      journeyTitle: "ست مراحل، منصّة واحدة",
      journeySub: "من أول تسجيل إلى تصدير ملف CSV النهائي، كل مرحلة من مراحل معرض حقيقي تعيش في النظام نفسه — بلا تسليمات ولا إعادة إدخال.",
      journeyHint: "مرّر لتنتقل بين المراحل — أو اضغط أي مرحلة للقفز إليها",
      steps: [
        { k: "التسجيل", t: "يقدّم الطلاب عبر نموذج من ثلاث خطوات متحقّق منه؛ وتسجّل الشركات ممثّليها وقطاعها ووظائفها الشاغرة. وأسماء الشركات المتشابهة تُكتشف قبل إنشاء أي تكرار." },
        { k: "الدعوة والتأكيد", t: "يرسل فريق التنظيم رسائل التذكير دفعة واحدة؛ وتؤكّد كل شركة حضورها بضغطة واحدة من بريدها، فتتحدّث الحالة فورًا — بلا مكالمات، مع تسجيل آخر موعد تذكير." },
        { k: "الإدارة والترشيح", t: "راجع، صفِّ، علّم، رشّح، أو ارفض كل متقدّم من قائمة واحدة — ملاحظات كل شركة تبقى خاصة، والحالات العامة تبقى مشتركة." },
        { k: "تجهيز يوم الفعالية", t: "وزّع الأجنحة على خريطة تفاعلية، حرّك اللافتات عبر مراحل اعتمادها، نفّذ اللوجستيات، اطبع بطاقات المندوبين، وأصدر تصاريح الدخول." },
        { k: "التسجيل عند الباب", t: "يمسح فريق الاستقبال تذاكر الطلاب عبر جهاز مقيّد برمز، وتسجّل الشركات دخولها بالباركود أو يدويًا — وكل عملية موثّقة باسم من قام بها." },
        { k: "الاستبيان والتصدير", t: "تعبّئ الشركات استبيان ما بعد الفعالية من صفحة حالتها؛ ويتابع فريق التنظيم الأرقام لحظيًا، ويقرأ نتائج كل سؤال، ويصدّر المعرض كاملًا بصيغة CSV." },
      ],

      audiencesEyebrow: "مصمّمة لكل من في القاعة",
      audiencesTitle: "أربع فئات، ومصدر واحد للمعلومة",
      audiencesSub: "كل فئة ترى بالضبط ما تحتاجه — لا أكثر ولا أقل.",
      audienceCards: [
        { name: "فريق التنظيم", blurb: "تحكّم ورؤية كاملة على المتقدّمين، الشركات، اللوجستيات، والأرقام اللحظية.", cta: "لوحة تحكم المنظّم" },
        { name: "الشركات", blurb: "خدمة ذاتية لمتابعة الجناح واللافتة والتصاريح — مع ترشيح المتقدّمين دون رسائل بريدية لا تنتهي.", cta: "بوابة الشركة" },
        { name: "الطلاب", blurb: "تقديم من ثلاث خطوات فقط ينتهي بتذكرة إلكترونية — واستعادتها في أي وقت بالرقم الجامعي.", cta: "رحلة الطالب" },
        { name: "فريق الاستقبال", blurb: "أجهزة دخول مقيّدة برمز خاص لفريق الاستقبال — بلا حساب رسمي، وكل عملية مسجّلة باسم صاحبها.", cta: "فريق الاستقبال" },
      ],

      statLabels: ["شركة شاركت معنا", "طلب تقديم تمت معالجته", "أداة تشغيل", "فئات على منصّة واحدة"],

      bentoEyebrow: "لماذا تختارها الفرق",
      bentoTitle: "بُنيت من واقع معرض حقيقي، لا من فكرة على الورق",
      bentoSub: "كل ميزة فيها موجودة لأن يوم فعالية حقيقي احتاجها فعلًا.",
      bento: [
        { t: "مصدر واحد للمعلومة", d: "لا مزيد من ملفات إكسل تتنقّل عبر البريد، ولا لوجستيات ضائعة بين المحادثات الجماعية. كل متقدّم وشركة وجناح وبطاقة، في نظام واحد يتحدّث لحظيًا." },
        { t: "بلا أوراق من الأساس", d: "تذاكر إلكترونية للطلاب، بطاقات رقمية للمندوبين، ودخول فوري عند الباب." },
        { t: "لحظية، لا متأخّرة", d: "أعداد الحضور، نتائج الاستبيان، والتقارير تتحدّث تلقائيًا مع تقدّم اليوم." },
        { t: "أربع فئات، صلاحيات محدّدة", d: "المنظّمون، الشركات، الطلاب، وفريق الاستقبال — لكل فئة واجهتها الخاصة، بصلاحيات مضبوطة وسجل نشاط كامل." },
        { t: "استيراد وتصدير بلمسة واحدة", d: "استورد بيانات الشركات دفعة واحدة من ملف إكسل مع فحص كل صف، وصدّر بيانات المعرض كاملة عند الانتهاء." },
        { t: "التفاصيل الدقيقة محسوبة", d: "مواعيد طباعة اللافتات، مواقف السيارات، كهرباء الأجنحة، وطلبات الوصول — أمور لا تكتشفها إلا يوم الفعالية." },
      ],
    },

    platform: {
      heroEyebrow: "لوحة تحكّم المنظّم",
      heroTitle: "كل ما يحتاجه يوم المعرض، في مكان واحد",
      heroSub: "جولة حقيقية على الشاشات التي يعمل عليها فريقك فعليًا — المتقدّمون، الشركات، عمليات المعرض، التقارير، واستبيان ما بعد الفعالية.",

      explorerEyebrow: "جولة تفاعلية",
      explorerTitle: "شاهد الشاشات الفعلية",
      explorerSub: "تنقّل بين اللوحات واضغط على النقاط المتحركة — كل شاشة هنا مطابقة تمامًا لما هو موجود فعليًا في المنصّة.",
      tabs: ["المتقدّمون", "الشركات", "عمليات المعرض", "التقارير", "الاستبيان"],

      hotspots: {
        applicants: [
          { t: "فلاتر بحث متقدّمة", d: "التخصّص، المعدّل التراكمي، الجنسية، المهارات، اللغات، وجود السيرة الذاتية، الحضور، والحالة — كلها قابلة للدمج بحرّية." },
          { t: "ملاحظات خاصة وحالات مشتركة", d: "ملاحظات كل شركة تبقى خاصة فيها فقط؛ أما الترشيح والرفض فتظهر للجميع." },
          { t: "ملفات قابلة للتوسّع", d: "التفاصيل الكاملة، تحميل السيرة الذاتية، وباركود الطالب — بضغطة واحدة." },
        ],
        companies: [
          { t: "رسائل تذكير تلقائية", d: "اختر عدة شركات وأرسل تذكير التأكيد دفعة واحدة، مع تسجيل آخر موعد إرسال." },
          { t: "استيراد جماعي من إكسل", d: "ارفع ملف إكسل، راجع الصفوف بعد فحصها، عالج التكرارات، وأرسل الكل دفعة واحدة." },
          { t: "متابعة من أول خطوة لآخر خطوة", d: "الحالة، القطاع، المدينة، الجناح، وعدد المتقدّمين لكل شركة مشاركة." },
        ],
        eventops: [
          { t: "خريطة تفاعلية للتوزيع", d: "كل جناح على خريطة تفاعلية — متاح، محجوز، أو مخصّص، بنظرة واحدة." },
          { t: "متابعة حالة اللافتات", d: "كل طلب لافتة ينتقل خطوة بخطوة: لم يُرسل ← أُرسل ← اعتُمد ← طُبع ← رُكّب." },
          { t: "كل الوحدات في مكان واحد", d: "الأجنحة، اللافتات، اللوجستيات، البطاقات، الجداول، التصاريح، الفريق، والتقارير — في لوحة واحدة بتبويبات واضحة." },
        ],
        statistics: [
          { t: "بطاقات بيانات لحظية", d: "المتقدّمون، الشركات، تسجيلات الدخول، ونسبة الحضور — تتحدّث تلقائيًا مع سير اليوم." },
          { t: "رسوم بيانية تجاوب على أسئلتك", d: "تسجيلات الدخول اليومية، توزيع الحالات، ونسب الحضور — بنظرة واحدة." },
          { t: "تصدير بصيغة CSV", d: "بيانات المعرض كاملة — الشركات والطلاب — جاهزة للتنزيل لسجلّات المكتب." },
        ],
        survey: [
          { t: "نسبة الاستجابة", d: "اعرف بالضبط من أرسل ردّه ومن ما زال بانتظار تذكير." },
          { t: "تحليل تفصيلي لكل سؤال", d: "توزيع الاختيارات، المتوسطات الرقمية، والإجابات المفتوحة كاملة." },
          { t: "الانطباع العام بنظرة واحدة", d: "مستوى الرضا ملخّص لكل سؤال، عبر جميع الشركات المشاركة." },
        ],
      },

      screens: [
        {
          eyebrow: "إدارة المتقدّمين",
          title: "كل متقدّم، في قائمة واحدة سهلة البحث",
          desc: "صفِّ حسب التخصّص، المعدّل، الجنسية، المهارات، وجود السيرة الذاتية، الحضور، أو الحالة. رشِّح، علِّم، أو ارفض بضغطة واحدة — ملاحظات كل شركة تبقى خاصة، بينما تظهر الحالات العامة للجميع.",
          bullets: ["فلاتر بحث بمعايير متعددة", "ملفات قابلة للتوسّع مع السيرة والباركود", "تسجيل حضور بالباركود عبر الكاميرا", "عرض شامل أو صفحات مقسّمة"],
        },
        {
          eyebrow: "إدارة الشركات",
          title: "كل شركة مشاركة، مُتابَعة من أول خطوة لآخرها",
          desc: "الحالة، القطاع، المدينة، الجناح، وعدد المتقدّمين لكل شركة. أرسل رسائل تذكير، غيّر الحالات، واستورد بيانات الشركات دفعة واحدة من ملف إكسل مع فحص كل صف على حدة.",
          bullets: ["رسائل تذكير للتأكيد", "استيراد جماعي مع معالجة التكرارات", "فلترة حسب الحالة والقطاع", "عدد المتقدّمين لكل شركة"],
        },
        {
          eyebrow: "عمليات المعرض",
          title: "يوم المعرض كامل، في لوحة تحكّم واحدة",
          desc: "نظام بتبويبات يغطّي الأجنحة على خريطة تفاعلية، متابعة اعتماد اللافتات، اللوجستيات، بطاقات المندوبين، الجداول، وتصاريح الدخول — كل ما يخص يوم الفعالية في مكان واحد.",
          bullets: ["خريطة تفاعلية لتوزيع الأجنحة", "متابعة حالة اللافتات خطوة بخطوة", "بطاقات مندوبين جاهزة للطباعة", "تصاريح دخول ومواقف سيارات"],
        },
        {
          eyebrow: "التقارير والاستبيان",
          title: "اعرف ما يجري أوّلًا بأوّل",
          desc: "أرقام مجمّعة للمتقدّمين والشركات والحضور مع رسوم بيانية واضحة، إضافة إلى تحليل استبيان ما بعد الفعالية — نسب الاستجابة، الانطباع لكل سؤال، وتصدير كامل للبيانات.",
          bullets: ["رسوم بيانية لحظية للحضور والمتقدّمين", "تحليل تفصيلي لكل سؤال", "الانطباع العام بنظرة واحدة", "تصدير كامل للبيانات"],
        },
      ],

      modulesEyebrow: "عمليات المعرض بالتفصيل",
      modulesTitle: "كل أداة يحتاجها يوم المعرض",
      modulesSub: "اثنا عشر تبويبًا يعمل عليها فريقك طوال يوم الفعالية — التشغيل، التقارير، ولوحات الصلاحيات الخاصة بمكتب كاستو، تغني عن عشرات ملفات إكسل ومجموعة محادثات لا تنتهي.",
      modules: [
        { t: "الأجنحة والمواقع", d: "وزّع الشركات على الأجنحة عبر خريطة تفاعلية بضغطة واحدة." },
        { t: "اللافتات والهوية البصرية", d: "تابع كل طلب لافتة من مرحلة التقديم حتى التركيب." },
        { t: "المتطلبات الخاصة", d: "طلبات الوصول، الاحتياجات الصوتية، والإعدادات المخصّصة، مرتّبة حسب الأولوية." },
        { t: "المعدّات واللوجستيات", d: "طاولات، كراسي، كهرباء، وشاشات — المطلوب مقابل ما تم تجهيزه." },
        { t: "بطاقات المندوبين", d: "أدِر قائمة المندوبين واطبع بطاقات الأسماء في الحال." },
        { t: "الحضور والتسجيل", d: "تسجيل دخول بالباركود أو يدويًا، للشركات والطلاب." },
        { t: "إدارة فريق العمل", d: "حسابات لفريق الاستقبال مقيّدة برمز خاص، مع سجل نشاط لكل شخص." },
        { t: "الجدول الزمني", d: "جلسات اليوم: الوقت، المتحدّث، المكان، والسعة." },
        { t: "تصاريح الدخول", d: "تصاريح دخول ومواقف لكل مندوب، مع تحديد الموقع." },
        { t: "تقرير ما بعد الفعالية", d: "ملخّص إحصائي مع تصدير بيانات الشركات والطلاب." },
        { t: "سجل الأنشطة", d: "سجل تدقيق مستمر يوضّح من غيّر ماذا ومتى." },
        { t: "الفريق والصلاحيات", d: "مجالات عمل كل موظف، مع حماية بكلمة مرور ورمز تأكيد." },
      ],

      selfEyebrow: "بوابة الشركة",
      selfTitle: "الشركات تخدم نفسها بنفسها",
      selfSub: "كل ما يحتاجه صاحب العمل المشارك، معروض مباشرة مما يديره فريق التنظيم — بلا رسائل بريدية متبادلة.",
      selfCards: [
        { t: "صفحة حالة لحظية", d: "تأكيد الحضور، عدد المتقدّمين، الوظائف الشاغرة، الممثّلون، والتفضيلات — محدّثة أولًا بأول." },
        { t: "نسخة مطابقة من يوم الفعالية", d: "الجناح المخصّص وباركوده، حالة اللافتة وموعد طباعتها، تنفيذ اللوجستيات، وتصاريح الدخول." },
        { t: "تأكيد الحضور بضغطة واحدة", d: "تؤكّد الشركة حضورها مباشرة من رسالة التذكير — وتتحدّث الحالة فورًا." },
        { t: "إعدادات الحساب", d: "عدّل بريد الدخول، رقم الهاتف، المدينة، القطاع، الوظائف الشاغرة، وتفضيلات المرشّحين دون إعادة التسجيل من جديد." },
        { t: "وصول مشترك لفريق العمل", d: "اعتمد بريدًا إلكترونيًا إضافيًا ليعمل فريق التوظيف كاملًا من حساب شركة واحد." },
        { t: "معاينة كشركة", d: "يستطيع فريق التنظيم معاينة ما تراه أي شركة بالضبط — للاطّلاع فقط، دون التأثير على جلستها." },
      ],

      trustEyebrow: "الأساسيات",
      trustTitle: "متينة في التفاصيل التي لا تظهر",
      trustSub: "الجوانب الأقل بريقًا، وهي التي تجعل الجوانب اللامعة تعمل بثقة.",
      trust: [
        { t: "صلاحيات محدّدة بدقة", d: "أربع فئات مستخدمين، بأربعة مستويات صلاحية، مفروضة من الخادم مباشرة." },
        { t: "سجل تدقيق شامل", d: "كل تغيير في عمليات المعرض مسجّل: من قام به، وماذا غيّر، ومتى." },
        { t: "بيانات مفحوصة قبل الحفظ", d: "الأرقام الجامعية، صيغ أرقام الهواتف، ونطاقات المعدّل — تُفحص جميعها قبل الوصول لقاعدة البيانات." },
        { t: "فريق استقبال بصلاحيات محدودة", d: "يسجّل فريق الاستقبال دخول الطلاب دون امتلاك حساب رسمي كامل أبدًا." },
        { t: "كشف تلقائي للتكرار", d: "أسماء الشركات المتشابهة تُكتشف عند التسجيل ويتم دمجها بدل تكرارها." },
        { t: "بياناتك قابلة للتصدير دائمًا", d: "تصدير كامل لبيانات الشركات والطلاب بصيغة CSV، في أي وقت تحتاجه." },
        { t: "جلسات دخول مضبوطة بالدور", d: "جلسات قائمة على JWT مع صلاحيات يفرضها الخادم لكل دور — منظّم أو شركة أو متطوّع مقيّد برمز." },
        { t: "بيانات اعتماد مشفّرة", d: "كلمات المرور تُشفّر بخوارزمية bcrypt قبل التخزين؛ ولا تُحفظ أي معلومة حسّاسة كنص صريح مطلقًا." },
        { t: "البيانات تبقى ملكًا للمكتب", d: "سجلّات المتقدّمين والشركات موجودة فقط لإدارة المعرض — قابلة للتصدير أو الحذف عند الطلب." },
      ],
    },

    audiences: {
      heroEyebrow: "لمن صُمّمت المنصّة",
      heroTitle: "منصّة واحدة، أربع تجارب مختلفة",
      heroSub: "الجامعات وأصحاب الأعمال يديرون المعرض، بينما تعيش فيه الشركات والطلاب وفريق الاستقبال. كل فئة تحصل على تجربة مصمّمة خصيصًا لما جاءت من أجله.",
      subnav: ["فريق التنظيم", "الشركات", "الطلاب", "فريق الاستقبال"],

      organizers: {
        tag: "مكتب التنظيم",
        title: "رؤية شاملة، وتحكّم بلا ضغط",
        sub: "لمكاتب التوظيف وفرق تنظيم الفعاليات التي سئمت ترقيع ملفات إكسل. كل متقدّم وشركة وجناح ولافتة وبطاقة، في لوحة تحكم واحدة تتحدّث لحظيًا.",
        points: [
          "راجع، صفِّ، ورشِّح كل متقدّم من قائمة واحدة",
          "أدِر الشركات من أول خطوة لآخرها — الحالات، التذكيرات، والاستيراد الجماعي",
          "شغّل يوم المعرض بالكامل من لوحة عمليات تضم اثنتي عشرة وحدة",
          "تابع الحضور ونتائج الاستبيان لحظة بلحظة",
          "وزّع مهام فريق العمل مع سجل تدقيق يوثّق كل تغيير",
        ],
        highlights: [
          { t: "صلاحيات حسب الدور", d: "أربع فئات مستخدمين بأربعة مستويات صلاحية، مفروضة من الخادم — فريق الاستقبال لا يصل إلى بيانات المتقدّمين مطلقًا." },
          { t: "كل تغيير موثّق", d: "كل إجراء تشغيلي مسجّل في سجل التدقيق: من قام به، وماذا غيّر، ومتى." },
          { t: "تصدير واحد للمعرض كاملًا", d: "بيانات الشركات والطلاب بصيغة CSV متى شئت — دون ترقيع ملفات إكسل." },
        ],
        screens: [
          { screen: "eventops", caption: "عمليات يوم المعرض — الأجنحة واللافتات واللوجستيات والبطاقات والتصاريح في لوحة واحدة بتبويبات." },
          { screen: "applicants", caption: "قائمة المتقدّمين — صفِّ حسب التخصّص أو المعدّل أو المهارات أو الحالة، ورشِّح بضغطة واحدة." },
          { screen: "statistics", caption: "إحصاءات لحظية — الحضور، نتائج المتقدّمين، وحصيلة الاستبيان مع تقدّم اليوم." },
        ],
      },
      companies: {
        tag: "الشركات المشاركة",
        title: "خدمة ذاتية، بلا رسائل بريدية لا تنتهي",
        sub: "لأصحاب الأعمال الذين يريدون لوجستيات جاهزة ومرشّحين في الواجهة مباشرة. أكّد حضورك مرة واحدة، وشاهد جناحك ولافتتك وتصاريحك تتحدّث تلقائيًا.",
        points: [
          "صفحة حالة لحظية تعكس كل ما يديره فريق التنظيم لأجلك",
          "جناح مخصّص بباركوده، مواعيد اللافتات، وتنفيذ اللوجستيات",
          "تصفّح، علّم، ورشّح المتقدّمين — ملاحظاتك تبقى خاصة بك",
          "اعتمد بريدًا إضافيًا ليعمل فريقك كاملًا من حساب واحد",
          "استبيان واحد بعد الفعالية، مباشرة من صفحة حالتك",
        ],
        highlights: [
          { t: "تأكيد بضغطة واحدة", d: "أكّد حضورك من رسالة التذكير مباشرة فتتحدّث حالتك فورًا — بلا مكالمات ولا نماذج." },
          { t: "ملاحظاتك تبقى لك", d: "الترشيحات والملاحظات خاصة بفريقك؛ أما الحالات العامة فتبقى مشتركة مع فريق التنظيم." },
          { t: "وصول مشترك للفريق", d: "اعتمد بريدًا إضافيًا ليعمل فريق التوظيف كاملًا من حساب شركة واحد." },
        ],
        screens: [
          { screen: "portal", caption: "صفحة حالة الشركة — الجناح، موعد اللافتة، اللوجستيات، والتصاريح، محدّثة لحظيًا." },
          { screen: "applicants", caption: "تصفّح المتقدّمين — ابحث، علّم، ورشّح المرشّحين قبل يوم الفعالية." },
        ],
      },
      students: {
        tag: "تجربة المتقدّم",
        title: "نموذج تقديم يكمله الطلاب فعليًا",
        sub: "معالج بثلاث خطوات واضحة، يتحقّق من بياناتك أثناء التعبئة، وينتهي بتذكرة إلكترونية — مع إمكانية استرجاعها في أي وقت بالرقم الجامعي فقط.",
        steps: [
          { label: "البيانات الشخصية", desc: "الاسم، الرقم الجامعي، بيانات التواصل، واللغات — مع تحقّق فوري ومنتقي تاريخ سهل الاستخدام." },
          { label: "البيانات المهنية", desc: "البرنامج الدراسي، الكلية، المهارات التقنية والشخصية كوسوم قابلة للبحث، المعدّل التراكمي، ورفع السيرة الذاتية." },
          { label: "التفضيلات", desc: "مجالات الاهتمام الاختيارية، مدينة العمل المفضّلة، التوفّر، وأنواع الفرص المطلوبة." },
        ],
        ticketTitle: "تنتهي رحلتك بتذكرة جاهزة",
        ticketDesc: "كل طلب تقديم ينتج عنه تذكرة إلكترونية تصلك بالبريد فورًا. احفظ صورتها للدخول — ومسحها عند الباب هو كل ما يلزم لتسجيل حضورك.",
        lookupTitle: "ضيّعت تذكرتك؟ لا مشكلة.",
        lookupDesc: "دون حساب ودون إعادة تقديم. أدخل الرقم الجامعي الذي قدّمت به، وتذكرتك جاهزة أمامك مباشرة.",
      },
      volunteers: {
        tag: "فريق الاستقبال والتسجيل",
        title: "جهاز تسجيل، لا حساب رسمي",
        sub: "يحصل فريق الاستقبال على جهاز تسجيل دخول مقيّد برمز خاص — يمسح باركود الطلاب أو يسجّل يدويًا عند الحاجة. بلا بيانات دخول يديرها أحد، وبلا أي معلومة حسّاسة مكشوفة.",
        points: [
          "مسح الباركود بالكاميرا عند المدخل",
          "تسجيل يدوي بالرقم الجامعي كخيار بديل",
          "أجهزة مسح مخصّصة لكل جناح لمتابعة الشركات",
          "كل عملية تسجيل دخول موثّقة باسم صاحبها",
        ],
        highlights: [
          { t: "مقيّد برمز، لا بحساب", d: "رمز وصول قصير يفتح الجهاز — بلا حساب شخصي يُمنح أو يُستعاد." },
          { t: "لا شيء حسّاس على الشاشة", d: "لا يعرض الجهاز إلا ما يحتاجه التسجيل؛ بيانات المتقدّمين لا تظهر عند الباب أبدًا." },
          { t: "مسؤولية موثّقة بالتصميم", d: "كل عملية مسح مسجّلة باسم من قام بها، فيبقى السجل قابلًا للتتبّع دائمًا." },
        ],
        screens: [
          { screen: "checkin", caption: "جهاز التسجيل — امسح تذكرة الطالب، أو ابحث عنه بالرقم الجامعي." },
        ],
      },
    },

    howItWorks: {
      heroEyebrow: "المسار الزمني",
      heroTitle: "معرض واحد، من البداية إلى النهاية",
      heroSub: "تابع معرض التوظيف عبر مراحله الأربع — من أول نقرة في الإعداد حتى التقرير الختامي — وشاهد مَن يقوم بماذا، وعلى أي شاشة، في كل مرحلة.",
      phaseLabel: "المرحلة",
      phases: [
        {
          key: "before",
          tag: "قبل أسابيع · فريق التنظيم",
          title: "جهّز المعرض",
          sub: "يبني مكتب التنظيم الفعالية قبل أن يسجّل أحد الدخول: انشر النموذج، رتّب الشركات، ووزّع كل جناح ولافتة.",
          who: ["فريق التنظيم"],
          meta: { duration: "قبل أسابيع", metric: "12 وحدة عمليات", owner: "مكتب التنظيم" },
          detail: {
            title: "خلف الكواليس",
            body: "كل جناح وموعد لافتة وسجلّ شركة يُنشأ هنا — لوحة عمليات واحدة يحرّرها الفريق كله، مع سجلّ تدقيق يتتبّع من غيّر ماذا.",
          },
          points: [
            "أنشئ الفعالية وانشر نموذج التقديم العام",
            "حدّد مواعيد التقديم والشركات من لوحة التحكّم",
            "استورد الشركات المشاركة دفعة واحدة ووزّع الأجنحة",
          ],
          screens: [
            { screen: "eventops", caption: "إعدادات الفعالية — لوحة العمليات باثنتي عشرة وحدة حيث يُضبط المعرض." },
            { screen: "companies", caption: "قائمة الشركات — الحالات والتذكيرات وتوزيع الأجنحة في مكان واحد." },
          ],
        },
        {
          key: "apply",
          tag: "فترة التقديم · الطلاب والشركات",
          title: "يُفتح التقديم",
          sub: "يُنشر النموذج. يقدّم الطلاب عبر معالج موجّه ويخرجون بتذكرة إلكترونية؛ والشركات تؤكّد وتجهّز جناحها من صفحة خدمة ذاتية.",
          who: ["الطلاب", "الشركات"],
          meta: { duration: "2–3 أسابيع", metric: "1,284 طلبًا", owner: "الطلاب والشركات" },
          detail: {
            title: "خلف الكواليس",
            body: "يتحقّق المعالج من كل حقل أثناء كتابته، فلا تصل بيانات خاطئة إلى القائمة. وعند الإرسال تُنشأ تذكرة إلكترونية موقّعة وتُرسل — قابلة للاسترجاع لاحقًا بالرقم الجامعي فقط.",
          },
          points: [
            "يُكمل الطلاب معالجًا بثلاث خطوات يتحقّق أثناء التعبئة",
            "كل طلب يرسل تذكرة إلكترونية فورًا، قابلة للاسترجاع بالرقم الجامعي",
            "تؤكّد الشركات حضورها، وترفع لافتاتها، وترشّح المتقدّمين مبكرًا",
          ],
          screens: [
            { screen: "form", caption: "معالج التقديم — خطوات البيانات الشخصية والمهنية والتفضيلات." },
            { screen: "ticket", caption: "التذكرة الإلكترونية — تصل عند الإرسال، وتُسترجع بالرقم الجامعي فقط." },
            { screen: "portal", caption: "صفحة حالة الشركة — الجناح، موعد اللافتة، والترشيح الخاص." },
          ],
        },
        {
          key: "eventday",
          tag: "يوم المعرض · فريق الاستقبال والتنظيم",
          title: "أدِر اليوم",
          sub: "تُفتح الأبواب. يسجّل فريق الاستقبال الحضور من أجهزة مقيّدة برمز بينما يتابع فريق التنظيم الحضور وقائمة المتقدّمين لحظة بلحظة.",
          who: ["فريق الاستقبال", "فريق التنظيم"],
          meta: { duration: "اليوم نفسه", metric: "حضور لحظي", owner: "الاستقبال والتنظيم" },
          detail: {
            title: "خلف الكواليس",
            body: "كل جهاز مقيّد برمز متغيّر، وكل عملية مسح مختومة باسم من قام بها. ويصل الحضور إلى لوحة فريق التنظيم لحظة قراءة التذكرة — بلا إحصاء يدوي.",
          },
          points: [
            "تسجيل بالكاميرا عند الباب، وبحث يدوي بالرقم الجامعي كبديل",
            "أجهزة كل جناح توثّق كل مسح باسم من قام به",
            "يتابع فريق التنظيم الحضور اللحظي والقائمة وهي تمتلئ",
          ],
          screens: [
            { screen: "checkin", caption: "جهاز التسجيل — امسح تذكرة أو ابحث عن الطالب بالرقم الجامعي." },
            { screen: "applicants", caption: "قائمة المتقدّمين — صفِّ ورشِّح القائمة كاملة من شاشة واحدة." },
          ],
        },
        {
          key: "after",
          tag: "بعد المعرض · فريق التنظيم",
          title: "اقرأ النتائج",
          sub: "تخلو القاعة، وتبقى البيانات. تتحوّل الإحصاءات اللحظية ونتائج الاستبيان إلى التقرير الذي تسلّمه في صباح اليوم التالي.",
          who: ["فريق التنظيم"],
          meta: { duration: "صباح الغد", metric: "جاهز للتقرير", owner: "مكتب التنظيم" },
          detail: {
            title: "خلف الكواليس",
            body: "تُحسب الإحصاءات لحظيًا من البيانات نفسها التي جرى عليها اليوم، فلا يحتاج التقرير إلى مطابقة. وتصدير واحد يجمع الحضور والنتائج ونتائج الاستبيان — بلا ترقيع ملفات.",
          },
          points: [
            "إحصاءات لحظية عن الحضور والشركات ونتائج المتقدّمين",
            "استبيان واحد بعد الفعالية، تصل نتائجه من الطلاب والشركات",
            "صدّر الصورة الكاملة لتقريرك — بلا ترقيع ملفات إكسل",
          ],
          screens: [
            { screen: "statistics", caption: "الإحصاءات — الحضور والنتائج، قابلة للتصدير للتقرير الختامي." },
            { screen: "survey", caption: "نتائج الاستبيان — ملاحظات ما بعد الفعالية من طرفي المعرض." },
          ],
        },
      ],
      overviewEyebrow: "لمحة سريعة",
      overviewTitle: "أربع مراحل، تدفّق واحد متّصل",
      metaLabels: { duration: "متى", metric: "المؤشّر", owner: "المسؤول" },
      detailLabel: "خلف الكواليس",
      outroEyebrow: "هذه هي الدورة كاملة",
      outroTitle: "من أول نقرة إعداد إلى التقرير الختامي",
      outroSub: "كل مرحلة تقرأ من البيانات اللحظية نفسها، فلا شيء يُعاد إدخاله ولا شيء يتقادم. شاهدها تعمل من البداية إلى النهاية، أو استكشف المنصّة وحدةً وحدة.",
      outroPrimary: "اطلب عرضًا",
      outroSecondary: "استكشف المنصّة",
    },

    story: {
      heroEyebrow: "لماذا وُجدت فيرفلو",
      heroTitle: "يوم المعرض لا يستحقّ الفوضى",
      heroSub: "انطلقت فيرفلو من تنظيم معرض توظيف جامعي حقيقي — ولهذا هي تتعامل مع التفاصيل التي لا تكتشفها إلا الساعة الثامنة صباح يوم الفعالية.",

      originEyebrow: "البداية",
      originTitle: "وُلدت من أرض الواقع",
      originBody1: "فيرفلو هي المنصّة التي تدير معرض التوظيف لمكتب الإرشاد الوظيفي وتدريب الطلاب (كاستو) بجامعة الشارقة: عشرات الشركات، أكثر من ألف طلب تقديم من الطلاب، مكتب تنظيم واحد، وقاعة امتلأت بسرعة. أول ما انهار كان ملفات إكسل، بعدها القوائم المطبوعة، ثم مجموعة المحادثات نفسها.",
      originBody2: "كل ميزة في فيرفلو موجودة لأن ذلك اليوم فرضها فعليًا — خريطة الأجنحة، مواعيد اللافتات، أجهزة الاستقبال المقيّدة برمز، وسجل التدقيق. المنصّة بُنيت من واقع معرض حقيقي، لا من فكرة على ورق.",
      originStats: [
        { v: "70+", l: "شركة شاركت معنا" },
        { v: "1,284", l: "طلب تقديم تمت معالجته" },
        { v: "12", l: "أداة تشغيل" },
      ],

      baEyebrow: "الفرق الذي تلمسه بنفسك",
      baTitle: "قبل فيرفلو وبعدها",
      beforeTitle: "قبل",
      beforeItems: [
        "ملفات إكسل تتنقّل عبر البريد وتتضارب نسخها",
        "بطاقات ورقية وقوائم مطبوعة تتقادم خلال ساعة",
        "لوجستيات ضائعة بين المحادثات الجماعية",
        "لا صورة واضحة عمّن حضر فعلًا",
      ],
      afterTitle: "مع فيرفلو",
      afterItems: [
        "مصدر واحد للمعلومة يتحدّث لحظة بلحظة",
        "تذاكر إلكترونية للطلاب وبطاقات رقمية للمندوبين",
        "نظام عمليات واحد يجمع يوم الفعالية بأكمله",
        "حضور وتقارير تظهر أمامك فور حدوثها",
      ],

      principlesEyebrow: "المبادئ",
      principlesTitle: "ما الذي تركّز عليه المنصّة",
      principles: [
        { t: "الهدوء أولًا، لا التعقيد", d: "لوحة التحكم ينبغي أن تخفّف ضغطك يوم المعرض، لا أن تزيده." },
        { t: "معلومة واحدة موثوقة", d: "إذا رأى شخصان رقمين مختلفين، فهذا يعني أن النظام قد فشل. فالجميع يقرأ من البيانات اللحظية نفسها." },
        { t: "صلاحيات حسب الدور", d: "كل فئة ترى بالضبط ما تحتاجه. فريق الاستقبال لا يصل إلى بيانات المتقدّمين، والشركات لا ترى ملاحظات بعضها." },
        { t: "الورق مشكلة، لا حل", d: "أي شيء مطبوع يصبح قديمًا خلال ساعة. أما الباركود، البطاقات الرقمية، والقوائم اللحظية فتبقى محدّثة دائمًا." },
      ],

      roadmapEyebrow: "ما القادم",
      roadmapTitle: "إلى أين تتّجه فيرفلو مستقبلًا",
      roadmapItems: [
        "دعم عدة معارض في آن واحد — إدارة أكثر من فعالية من حساب كاستو نفسه، مع فصل كامل لبيانات كل فعالية",
        "تذكيرات مباشرة عبر البريد والرسائل النصية للطلاب، لا للشركات فقط",
        "تحليلات أعمق وتصدير لمقارنات الأداء بين السنوات",
        "واجهة برمجية مفتوحة للجامعات الراغبة في ربط فيرفلو بأنظمتها الحالية لإدارة بيانات الطلاب",
      ],

      casesEyebrow: "مجالات الاستخدام",
      casesTitle: "أينما يلتقي الباحثون عن عمل بأصحاب العمل",
      casesSub: "بُنيت في الأساس لمعارض الجامعات، وتعمل بكفاءة في أي مكان تجتمع فيه الأجنحة والبطاقات والمتقدّمون.",
      cases: [
        { t: "معارض التوظيف الجامعية", d: "مئات الطلاب وعشرات الشركات في يوم واحد — منظّم من أول خطوة لآخرها." },
        { t: "المعارض الصناعية وفعاليات التوظيف", d: "لوجستيات الأجنحة، بطاقات المندوبين، وجمع البيانات بلا أي ورق." },
        { t: "حملات التوظيف المباشر", d: "ترشيح، تمييز، ومتابعة — كل ذلك من قائمة متقدّمين واحدة." },
      ],

      faqEyebrow: "أسئلة شائعة",
      faqTitle: "إجابات، قبل أن تسأل",
      faq: [
        { q: "لمن صُمّمت فيرفلو؟", a: "لمكاتب التوظيف الجامعية، وفرق تنظيم الفعاليات، وأي جهة تنظّم معارض توظيف — إضافة إلى الشركات والمتقدّمين وفريق الاستقبال المشاركين فيها." },
        { q: "هل يحتاج فريق الشركة إلى تدريب لاستخدامها؟", a: "لا. تحصل كل شركة على بوابة خدمة ذاتية تعرض بالضبط ما يديره فريق التنظيم لأجلها — الحالة، الجناح، اللافتة، والتصاريح — مع تأكيد الحضور بضغطة واحدة من رسالة الدعوة مباشرة." },
        { q: "كيف يقدّم الطلاب طلباتهم؟", a: "عبر نموذج موجّه من ثلاث خطوات، مع تحقّق فوري ورفع للسيرة الذاتية. وينتهي كل طلب بتذكرة إلكترونية تصل بالبريد فورًا وتصلح تصريح دخول يوم الفعالية." },
        { q: "كيف يتم تسجيل الحضور يوم المعرض؟", a: "يفتح فريق الاستقبال جهازًا مقيّدًا برمز خاص، ويمسح تذكرة كل طالب — أو يسجّل حضوره بالرقم الجامعي إن لم تكن التذكرة جاهزة. وكل عملية مسح موثّقة باسم من قام بها." },
        { q: "هل نستطيع تصدير بياناتنا متى أردنا؟", a: "نعم. تصدير كامل لبيانات الشركات والطلاب بصيغة CSV متاح في أي وقت، إضافة إلى تقرير ما بعد الفعالية بإحصاءات ملخّصة — بياناتك ملكك دائمًا." },
        { q: "هل المنصّة ثنائية اللغة؟", a: "الموقع التعريفي وجميع واجهات المتقدّمين تدعم العربية والإنجليزية بتخطيط كامل من اليمين إلى اليسار. أما لوحة إدارة المكتب فتعمل بالإنجليزية حاليًا." },
      ],
    },

    demo: {
      trigger: "اطلب عرضًا",
      stepLabel: "الخطوة",
      back: "رجوع",
      close: "إغلاق",
      next: "متابعة",
      submit: "أرسل طلب العرض",
      sending: "جارٍ الإرسال…",
      errorFallback: "حدث خطأ ما. حاول مرة أخرى.",
      successHeading: "تم استلام طلبك",
      successSub: "شكرًا لك — سنتواصل معك خلال يوم عمل واحد لترتيب جولة مخصّصة لفعاليتك.",
      closing: "جارٍ الإغلاق…",
      required: "هذا الحقل مطلوب",
      invalidEmail: "أدخل بريدًا إلكترونيًا صحيحًا",
      optional: "اختياري",

      steps: {
        eventType: {
          title: "ما نوع فعاليتك؟",
          sub: "لنخصّص الجولة بحسب طريقة استخدامك الفعلية لفيرفلو.",
          options: {
            university: "معرض توظيف جامعي",
            expo: "معرض صناعي أو فعالية توظيف",
            drive: "حملة توظيف مباشر",
            multi: "موسم من عدة فعاليات",
            other: "شيء آخر",
          },
        },
        scale: {
          title: "ما حجم الفعالية؟",
          sub: "حجم تقريبي يكفي — يساعدنا على عرض الأجزاء المناسبة.",
          companiesLabel: "الشركات المشاركة",
          attendeesLabel: "عدد الحضور المتوقّع",
          companyBuckets: ["حتى 20", "20–50", "50–100", "أكثر من 100"],
          attendeeBuckets: ["أقل من 500", "500–1,500", "1,500–5,000", "أكثر من 5,000"],
        },
        audiences: {
          title: "من يحتاج إلى وجوده في النظام؟",
          sub: "اختر كل الأدوار التي ستضيفها — اختر ما ينطبق.",
          options: {
            organizers: "مكتب التنظيم",
            companies: "الشركات المشاركة",
            students: "الطلاب / المتقدّمون",
            volunteers: "فريق الاستقبال والتسجيل",
          },
        },
        timeline: {
          title: "متى موعد الفعالية؟",
          sub: "هذا يخبرنا بمدى سرعة احتياجك للانطلاق.",
          options: {
            planning: "مجرد استكشاف",
            quarter: "هذا الربع",
            months: "خلال 3–6 أشهر",
            set: "الموعد محدّد",
          },
        },
        about: {
          title: "إلى أين نرسل العرض؟",
          sub: "سنتواصل معك بجولة والخطوات التالية.",
        },
        details: {
          title: "هل من شيء نودّ معرفته؟",
          sub: "الأولويات، الوحدات الأساسية، أدواتك الحالية — أي شيء يساعدنا على التحضير.",
          featuresLabel: "الأكثر اهتمامًا بـ",
          featureOptions: {
            applicants: "إدارة المتقدّمين",
            companies: "إدارة الشركات",
            eventops: "عمليات يوم الفعالية",
            checkin: "التسجيل بالباركود",
            stats: "التقارير والاستبيان",
            bilingual: "ثنائية اللغة / RTL",
          },
        },
        confirm: {
          title: "هل كل شيء صحيح؟",
          sub: "أرسِله ونحن نتكفّل بالباقي.",
        },
      },

      fields: {
        name: "اسمك",
        email: "البريد الإلكتروني",
        organization: "الجهة",
        role: "دورك",
        eventName: "اسم الفعالية",
        message: "رسالتك",
        eventType: "نوع الفعالية",
        scale: "الحجم",
        audiences: "الفئات",
        timeline: "الموعد",
        features: "الاهتمام بـ",
      },
      placeholders: {
        name: "الاسم الكامل",
        email: "you@organization.com",
        organization: "جامعة، شركة، أو جهة تنظيم",
        role: "مثال: مسؤول خدمات التوظيف",
        eventName: "مثال: معرض التوظيف الربيعي 2026",
        message: "أخبرنا قليلًا عن فعاليتك وما الذي تأمل في حلّه…",
      },
      consent: "أوافق على أن يتم التواصل معي بخصوص هذا الطلب. هذا النموذج تعريفي — لا يتم تخزين أي بيانات أو إرسالها إلى أي خادم.",
      none: "—",
    },

    footer: {
      ctaEyebrow: "الخطوة التالية",
      ctaTitle: "جاهز لمعرض أكثر سلاسة؟",
      ctaSub: "شاهد كيف تستبدل فيرفلو ملفات إكسل والبطاقات الورقية بلوحة تحكم واحدة سيستمتع فريقك فعليًا باستخدامها.",
      ctaButton: "اطلب عرضًا",
      ctaSecondary: "استكشف المنصّة",
      tagline: "منصّة واحدة تدير معرض التوظيف من أول خطوة لآخرها — الطلبات، الشركات، عمليات يوم الفعالية، التسجيل، والتقارير.",
      product: "المنتج", audiencesCol: "الفئات", resources: "مصادر مفيدة", getStarted: "ابدأ الآن",
      links: {
        platform: "المنصّة", modules: "عمليات المعرض", screens: "الشاشات",
        organizers: "فريق التنظيم", companies: "الشركات", students: "الطلاب", volunteers: "فريق الاستقبال",
        story: "قصتنا", useCases: "مجالات الاستخدام", faq: "الأسئلة الشائعة",
        demo: "اطلب عرضًا", contact: "تواصل معنا",
      },

      contactEyebrow: "تواصل معنا",
      contactTitle: "تحدّث مباشرة مع المطوّر",
      contactSub: "هل لديك أسئلة حول تشغيل فيرفلو لمعرضك؟ تواصل مباشرة — بلا مسار مبيعات.",

      devEyebrow: "من بناها",
      devName: "عمّار عبّاد",
      devRole: "مطوّر متكامل ومهندس حاسوب",
      devBlurb: "طوّر لوحة التحكم، نموذج التقديم، وهذا الموقع التعريفي من الصفر — الواجهة الأمامية، الخلفية، وكل ما بينهما.",

      langLabel: "اللغة",
      backToTop: "العودة للأعلى",
      privacy: "الخصوصية", terms: "الشروط",
      rights: "فيرفلو موقع تعريفي مستقل مبني حول تجربة تشغيل حقيقية. هذا الموقع ليس تابعًا رسميًا لجامعة الشارقة أو مكتب كاستو.",
    },
  },
};
