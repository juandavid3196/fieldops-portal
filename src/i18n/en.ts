import type { Dictionary } from "./es";

// English copy. Must mirror the shape of the Spanish dictionary.

export const en: Dictionary = {
  meta: {
    title: "FieldOps — Field service management",
    description:
      "Connect requests, quotes, visits and invoicing to keep your operation under control. Demo project with fictional data.",
    caseTitle: "Case study — FieldOps",
    caseDescription:
      "How FieldOps was built: the challenge, the layered architecture, the stack, the spec-driven process, key technical decisions and delivery quality.",
  },

  nav: {
    home: "FieldOps — home",
    main: "Main",
    mobile: "Mobile menu",
    product: "Product",
    caseStudy: "Case study",
    viewDemo: "View demo",
    exploreDemo: "Explore demo",
    viewRepo: "View repository",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    theme: "Toggle light and dark mode",
  },

  footer: {
    label: "Footer",
    product: "Product",
    howItWorks: "How it works",
    demo: "Demo",
    docs: "Documentation",
    credit: "Designed and built by Juan David Ríos.",
    portfolio: "Portfolio project · 2026",
    whatsapp: "Message me on WhatsApp",
    linkedin: "My LinkedIn profile",
  },

  hero: {
    eyebrow: "Field service management",
    line1: "Your whole team.",
    line2: "Every job.",
    line3: "All in ",
    accent: "one place.",
    lead: "Connect requests, quotes, visits and invoicing to keep your operation under control.",
    primary: "Explore the demo",
    secondary: "See how it works",
    caption: "Demo project · Fictional data",
    toastTitle: "Visit completed",
    toastBody: "Service finished successfully.",
  },

  flow: {
    title: "From request to payment, all connected.",
    lead: "A simple, end-to-end flow so nothing falls through the cracks.",
    steps: [
      { title: "Request", desc: "Log and organize\nservice requests." },
      { title: "Quote", desc: "Create and send\nquotes in minutes." },
      { title: "Work order", desc: "Turn it into\na work order." },
      { title: "Visit", desc: "Schedule and assign\nyour team." },
      { title: "Invoice", desc: "Generate the invoice\nautomatically." },
      { title: "Payment", desc: "Get paid online\nor outside FieldOps." },
    ],
  },

  schedule: {
    title1: "Plan with clarity.",
    title2: "Execute with confidence.",
    lead: "Coordinate people, visits and resources from one place. Keep your team aligned, track progress in real time and make sure every job is properly closed.",
    checks: [
      { title: "Scheduling and technician dispatch", desc: "See the workload and assign visits with ease." },
      { title: "Field work tracking", desc: "Know the status of every job in real time." },
      { title: "Evidence and job close-out", desc: "Capture notes and photos and confirm the work is done." },
    ],
  },

  roles: {
    eyebrow: "One platform, four experiences",
    title: "Everyone sees exactly ",
    accent: "what they need.",
    lead: "Clear tools to manage, coordinate, execute and review the work.",
    items: [
      { title: "Owner", desc: "Full control over operations, finances and the team." },
      { title: "Coordinator", desc: "Organizes requests, schedules visits and keeps work moving." },
      { title: "Technician", desc: "Checks their route, logs progress and documents the job from mobile." },
      { title: "Customer", desc: "Approves quotes, follows the service and reviews invoices." },
    ],
  },

  connected: {
    title: "From the office to the field, ",
    accent: "everything stays connected.",
    lead: "The right information reaches each person at the right time.",
    features: [
      { title: "Centralized operations", desc: "All your information in one place, updated in real time." },
      { title: "Mobile work", desc: "Technicians carry their schedule, log progress and check details from anywhere." },
      { title: "Customer portal", desc: "Your customers can follow their service and review their history simply and securely." },
    ],
  },

  data: {
    eyebrow: "Control and traceability",
    title1: "Decide with data.",
    title2: "Review every change.",
    lead: "Operational and financial reports to understand performance, plus an audit trail that keeps everything traceable.",
    checks: [
      { bold: "Metrics", text: "for quotes, jobs and invoicing." },
      { bold: "Profitability,", text: "receivables aging and team utilization." },
      { bold: "A log", text: "of key actions by user and date." },
    ],
    caption: "Demo data.",
  },

  guide: {
    eyebrow: "User guide",
    title: "Learn FieldOps step by step.",
    lead: "Learn to use FieldOps with step-by-step instructions, flows by role and real screenshots. Read or download the manual in Spanish or English.",
    items: ["Quick start", "End-to-end flows by role", "Instructions with real screenshots", "Tips and expected results"],
    guideEs: "Ver guía en español",
    guideEn: "View English guide",
  },

  cta: {
    title: "See what an operation ",
    accent: "under control feels like.",
    lead: "Explore the demo with fictional data and discover FieldOps from every role.",
    primary: "Explore the demo",
    secondary: "View documentation",
    caption: "Demo project · Uses no real data",
  },

  mock: {
    status: {
      prog: "In progress",
      sched: "Scheduled",
      done: "Completed",
      route: "En route",
    },
    portal: {
      label: "Customer portal",
      title: "My services",
      current: "Active",
      history: "History",
      job: "Kitchen sink leak repair",
      when: "Wed, Sep 23, 2026 · 9:30 AM – 11:30 AM",
      tech: "Technician",
      details: "View details",
      messages: "Messages",
    },
    book: {
      kicker: "PRODUCT DOCUMENTATION",
      title: "User guide",
      subtitle: "Your operation, step by step.",
      topics: "Quick start · Roles · Operations",
    },
    sheet: {
      kicker: "TECHNICIAN GUIDE",
      chapter: "03 / FIELD EXECUTION",
      title: "Start your next visit",
      lead: "Review the assigned job and let the customer know you are on your way.",
      tipTitle: "Before you start",
      tip: "Sign in as a technician and open an assigned visit.",
      today: "Today's jobs",
      date: "Wednesday, Sep 23, 2026",
      stats: ["jobs", "scheduled hours", "travel"],
      next: "2:00 PM · WO-3091",
      job: "Kitchen sink leak repair",
      window: "2:00 – 3:30 PM",
    },
  },

  caseStudy: {
    eyebrow: "Engineering case study",
    h1: ["How I built FieldOps:", "from the problem to a"],
    h1Accent: "complete platform.",
    lead: "A full-stack project designed to showcase architecture, product thinking, quality and technical decisions in a real-world operations system.",
    tags: ["Full Stack", "Product design", "System design", "Spec-driven development"],
    explore: "Explore the architecture",
    viewApp: "See the app",
    diagramCaption:
      "FieldOps architecture: Angular applications (staff portal, technician experience and customer portal) connected to a .NET 10 API with Application (CQRS), Domain (DDD) and Infrastructure (EF Core) layers, persisting to PostgreSQL and file storage. CI/CD with GitHub Actions, Docker, auditing and role-based permissions.",
    diagram: {
      apps: ["Full management", "Field work", "Status and payments"],
      storage: ["Application\ndata", "Files and\nevidence"],
      ops: ["GitHub Actions", "Dev environments", "Traceability", "Role permissions"],
    },
    stats: [
      "Modern, reactive frontend",
      "Robust, scalable API",
      "Reliable relational data",
      "Complete domain model",
      "Staff, technicians and customers",
    ],
    challenge: {
      eyebrow: "The challenge",
      title: ["Model a complete operation,", "not just an interface."],
      lead: "Manage requests, quotes, work orders, visits, technicians, invoices and payments in a single system, while keeping data isolated per organization (tenant) and permissions controlled by role.",
      pillars: [
        { title: "Product", desc: "Complete, end-to-end flows." },
        { title: "Architecture", desc: "Clear separation between domain, application and infrastructure." },
        { title: "Experience", desc: "Portals tailored to staff, technicians and customers." },
      ],
    },
    architecture: {
      eyebrow: "Architecture",
      title: "A foundation built to grow.",
      lead: "A layered architecture that clearly separates responsibilities, eases maintenance and lets the system evolve without touching the business core.",
      apps: ["Management and admin", "Field work", "Status and payments"],
      layers: ["Use cases and orchestration", "Entities and business rules", "Repositories and persistence"],
      storage: ["Application data", "Files and evidence"],
      checks: [
        { title: "Clean Architecture", desc: "Well-defined layers with low coupling." },
        { title: "Tenant isolation", desc: "Data isolated per organization." },
        { title: "Role-based access", desc: "Access control by role and branch." },
        { title: "Auditable actions", desc: "Key events are logged." },
        { title: "Versioned database migrations", desc: "Versioned and reviewed migrations." },
      ],
    },
    tech: {
      eyebrow: "Technologies",
      title: "Chosen for capability, not hype.",
      testsNote: "(unit and integration)",
    },
    spec: {
      eyebrow: "Spec-driven development",
      title: ["Every feature started with", "explicit decisions."],
      lead: "Design, business rules and acceptance criteria before writing any code.",
      steps: [
        { title: "Design", desc: "Mockups and\nstates" },
        { title: "SPEC", desc: "Rules and\nscope" },
        { title: "Architecture", desc: "Contracts and\ndata" },
        { title: "Implementation", desc: "Frontend and\nbackend" },
        { title: "Audit", desc: "QA, security\nand accessibility" },
      ],
      card: "Service request – SPEC",
      rows: [
        "Business rules and validations",
        "Endpoints, payloads and responses",
        "Entities and database changes",
        "Acceptance criteria and test cases",
      ],
    },
    decisions: {
      eyebrow: "Technical decisions",
      title: "The challenges that shaped the project.",
      items: [
        { title: "Multi-tenancy", desc: "Prevent data from leaking between organizations." },
        { title: "States and transitions", desc: "Keep requests, quotes, jobs and visits consistent with each other." },
        { title: "Role and branch permissions", desc: "Authorize both the interface and every server operation." },
        { title: "Traceability", desc: "Log important changes without exposing sensitive information." },
      ],
      path: ["Problem", "decision", "outcome"],
    },
    quality: {
      eyebrow: "Quality and delivery",
      title: "Built as if it were going to production.",
      checks: [
        "CI for frontend and backend",
        "Migrations reviewed, never applied automatically",
        "Per-organization isolation checks",
        "Tests for permissions and critical flows",
        "Visual, responsive and accessibility review",
      ],
      note: "Decisions and limitations are documented too.",
    },
    contribution: {
      eyebrow: "My contribution",
      title: ["I designed the product and", "also built its foundations."],
      lead: "I defined the flows, designed the experience, modeled the domain and built the full-stack architecture, using an AI-assisted iterative process validated through technical reviews.",
      links: [
        { title: "Explore the SPECs", desc: "Requirements, business rules and acceptance criteria." },
        { title: "Review the architecture", desc: "Diagrams, project structure and technical decisions." },
        { title: "Read the user guide", desc: "A step-by-step tour of the application." },
      ],
    },
    cta: {
      title: "Want to see it in action?",
      lead: "Explore FieldOps live or browse the source code.",
      demo: "Open demo",
      repo: "View repository",
      note: ["Demo project", "with fictional data."],
    },
    footer: {
      product: "Product",
      caseStudy: "Case study",
      docs: "Documentation",
      demo: "Demo",
      credit: "Designed and built by Juan David Ríos · 2026",
    },
  },
};
