// Visual data for the case study. Translatable copy lives in src/i18n.

export const REPO_URL = "https://github.com/juandavid3196/fieldops";

/** Icon + title per stat; the description comes from `caseStudy.stats`. */
export const STATS = [
  { icon: "angular", title: "Angular 22.1" },
  { icon: "dotnet", title: ".NET 10" },
  { icon: "postgres", title: "PostgreSQL" },
  { icon: "pi-database", title: "50 domain entities" },
  { icon: "pi-users", title: "3 user experiences" },
];

export const PILLAR_ICONS = ["pi-desktop", "pi-box", "pi-users"];

export const APPS = [
  { icon: "pi-desktop", title: "Staff portal" },
  { icon: "pi-wrench", title: "Technician experience" },
  { icon: "pi-users", title: "Customer portal" },
];

export const LAYERS = [
  { icon: "pi-file", title: "Application", key: "CQRS" },
  { icon: "pi-box", title: "Domain", key: "DDD" },
  { icon: "pi-database", title: "Infrastructure", key: "EF Core" },
];

// Item icons: a BrandIcons key, a PrimeIcon ("pi-…") or literal text ("text:…").
// Labels are product names, shown as-is in every language.
export type TechItem = { icon: string; label: string; note?: boolean; color?: string };

export const TECH: { icon: string; iconColor: string; title: string; big?: boolean; items: TechItem[] }[] = [
  {
    icon: "pi-desktop",
    iconColor: "var(--icon-teal)",
    title: "Frontend",
    items: [
      { icon: "angular", label: "Angular 22.1" },
      { icon: "ts", label: "TypeScript" },
      { icon: "signals", label: "Signals" },
      { icon: "rxjs", label: "RxJS" },
      { icon: "primeng", label: "PrimeNG" },
      { icon: "sass", label: "SCSS" },
    ],
  },
  {
    icon: "pi-cog",
    iconColor: "var(--icon-teal)",
    title: "Backend",
    items: [
      { icon: "dotnet", label: ".NET 10" },
      { icon: "csharp", label: "C#" },
      { icon: "pi-circle-fill", label: "CQRS", color: "var(--ink-strong)" },
      { icon: "pi-box", label: "DDD", color: "var(--icon-teal)" },
      { icon: "ef", label: "EF Core" },
      { icon: "text:{ }", label: "REST APIs", color: "var(--ink-strong)" },
    ],
  },
  {
    icon: "pi-database",
    iconColor: "var(--icon-teal)",
    title: "Data & infrastructure",
    big: true,
    items: [
      { icon: "postgres", label: "PostgreSQL" },
      { icon: "docker", label: "Docker Compose" },
      { icon: "pi-github", label: "GitHub Actions", color: "var(--ink-strong)" },
    ],
  },
  {
    icon: "pi-shield",
    iconColor: "var(--icon-teal)",
    title: "Quality",
    items: [
      { icon: "eslint", label: "ESLint" },
      { icon: "prettier", label: "Prettier" },
      // The "(unit and integration)" note is localized: `caseStudy.tech.testsNote`.
      { icon: "pi-check-square", label: "Tests", note: true, color: "var(--ink-strong)" },
      { icon: "pi-file", label: "Code review", color: "var(--ink-strong)" },
      { icon: "pi-history", label: "Audit trail", color: "var(--icon-teal)" },
    ],
  },
];

export const PROCESS_ICONS = ["pi-pencil", "pi-file", "pi-box", "pi-code", "pi-file-check"];

export const SPEC_ROWS = [
  { icon: "pi-list", title: "Business rules" },
  { icon: "pi-code", title: "API contract" },
  { icon: "pi-database", title: "Data impact" },
  { icon: "pi-check-square", title: "Acceptance criteria" },
];

export const DECISION_ICONS = ["pi-building", "pi-arrow-right-arrow-left", "pi-shield", "pi-file-check"];

export const PIPELINE = [
  { title: "Format", desc: "Check code formatting", time: "12s" },
  { title: "Lint", desc: "Run linters", time: "38s" },
  { title: "Tests", desc: "Execute unit and integration tests", time: "2m 14s" },
  { title: "Build", desc: "Build application", time: "1m 27s" },
];

// Prototype points all three at the repo root; `/specs` and `/docs` are the intended targets.
// The guide link is resolved per locale by the component.
export const CONTRIB_LINKS = [
  { icon: "pi-file", href: `${REPO_URL}/tree/HEAD/specs` },
  { icon: "pi-box", href: `${REPO_URL}/tree/HEAD/docs` },
  { icon: "pi-book", href: "#guia" },
];
