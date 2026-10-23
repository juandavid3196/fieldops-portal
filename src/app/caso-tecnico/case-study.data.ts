export const REPO_URL = "https://github.com/juandavid3196/fieldops";

export const TAGS = ["Full Stack", "Product design", "System design", "Spec-driven development"];

export const STATS = [
  { icon: "angular", title: "Angular 22.1", desc: "Frontend moderno y reactivo" },
  { icon: "dotnet", title: ".NET 10", desc: "API robusta y escalable" },
  { icon: "postgres", title: "PostgreSQL", desc: "Datos relacionales confiables" },
  { icon: "pi-database", title: "50 domain entities", desc: "Modelo de dominio completo" },
  { icon: "pi-users", title: "3 user experiences", desc: "Equipo, técnicos y clientes" },
];

export const PILLARS = [
  { icon: "pi-desktop", title: "Producto", desc: "Flujos completos de principio a fin." },
  { icon: "pi-box", title: "Arquitectura", desc: "Separación clara entre dominio, aplicación e infraestructura." },
  { icon: "pi-users", title: "Experiencia", desc: "Portales adaptados al equipo, técnicos y clientes." },
];

export const APPS = [
  { icon: "pi-desktop", title: "Staff portal", desc: "Gestión y administración" },
  { icon: "pi-wrench", title: "Technician experience", desc: "Trabajo en campo" },
  { icon: "pi-users", title: "Customer portal", desc: "Consulta y pagos" },
];

export const LAYERS = [
  { icon: "pi-file", title: "Application", key: "CQRS", desc: "Casos de uso y orquestación" },
  { icon: "pi-box", title: "Domain", key: "DDD", desc: "Entidades y reglas de negocio" },
  { icon: "pi-database", title: "Infrastructure", key: "EF Core", desc: "Repositorios y persistencia" },
];

export const ARCH_CHECKS = [
  { title: "Clean Architecture", desc: "Capas bien definidas y bajo acoplamiento." },
  { title: "Tenant isolation", desc: "Datos aislados por organización." },
  { title: "Role-based access", desc: "Control de acceso por rol y sucursal." },
  { title: "Auditable actions", desc: "Registro de eventos importantes." },
  { title: "Versioned database migrations", desc: "Migraciones versionadas y revisadas." },
];

// Item icons: a BrandIcons key, a PrimeIcon ("pi-…") or literal text ("text:…").
export type TechItem = { icon: string; label: string; note?: string; color?: string };

export const TECH: { icon: string; iconColor: string; title: string; big?: boolean; items: TechItem[] }[] = [
  {
    icon: "pi-desktop",
    iconColor: "#0f8c89",
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
    iconColor: "#0f8c89",
    title: "Backend",
    items: [
      { icon: "dotnet", label: ".NET 10" },
      { icon: "csharp", label: "C#" },
      { icon: "pi-circle-fill", label: "CQRS", color: "#0b1d45" },
      { icon: "pi-box", label: "DDD", color: "#0f8c89" },
      { icon: "ef", label: "EF Core" },
      { icon: "text:{ }", label: "REST APIs", color: "#0b1d45" },
    ],
  },
  {
    icon: "pi-database",
    iconColor: "#0f8c89",
    title: "Data & infrastructure",
    big: true,
    items: [
      { icon: "postgres", label: "PostgreSQL" },
      { icon: "docker", label: "Docker Compose" },
      { icon: "pi-github", label: "GitHub Actions", color: "#0b1d45" },
    ],
  },
  {
    icon: "pi-shield",
    iconColor: "#0f8c89",
    title: "Quality",
    items: [
      { icon: "eslint", label: "ESLint" },
      { icon: "prettier", label: "Prettier" },
      { icon: "pi-check-square", label: "Tests", note: "(unitarios e integración)", color: "#0b1d45" },
      { icon: "pi-file", label: "Code review", color: "#0b1d45" },
      { icon: "pi-history", label: "Audit trail", color: "#0f8c89" },
    ],
  },
];

export const PROCESS = [
  // "\n" marks the line break used in the design.
  { icon: "pi-pencil", title: "Diseño", desc: "Mockups y\nestados" },
  { icon: "pi-file", title: "SPEC", desc: "Reglas y\nalcance" },
  { icon: "pi-box", title: "Arquitectura", desc: "Contratos y\ndatos" },
  { icon: "pi-code", title: "Implementación", desc: "Frontend y\nbackend" },
  { icon: "pi-file-check", title: "Auditoría", desc: "QA, seguridad\ny accesibilidad" },
];

export const SPEC_ROWS = [
  { icon: "pi-list", title: "Business rules", desc: "Reglas de negocio y validaciones" },
  { icon: "pi-code", title: "API contract", desc: "Endpoints, payloads y respuestas" },
  { icon: "pi-database", title: "Data impact", desc: "Entidades y cambios en la base de datos" },
  { icon: "pi-check-square", title: "Acceptance criteria", desc: "Criterios de aceptación y casos de prueba" },
];

export const DECISIONS = [
  { icon: "pi-building", title: "Multi-tenancy", desc: "Evitar cruces de información entre organizaciones." },
  { icon: "pi-arrow-right-arrow-left", title: "Estados y transiciones", desc: "Mantener consistencia entre solicitudes, cotizaciones, trabajos y visitas." },
  { icon: "pi-shield", title: "Permisos por rol y sucursal", desc: "Autorizar tanto la interfaz como cada operación del servidor." },
  { icon: "pi-file-check", title: "Trazabilidad", desc: "Registrar cambios importantes sin exponer información sensible." },
];

export const PIPELINE = [
  { title: "Format", desc: "Check code formatting", time: "12s" },
  { title: "Lint", desc: "Run linters", time: "38s" },
  { title: "Tests", desc: "Execute unit and integration tests", time: "2m 14s" },
  { title: "Build", desc: "Build application", time: "1m 27s" },
];

export const QUAL_CHECKS = [
  "CI para frontend y backend",
  "Migraciones revisadas y no aplicadas automáticamente",
  "Validación de aislamiento por organización",
  "Pruebas de permisos y flujos críticos",
  "Revisión visual, responsive y accesibilidad",
];

// Prototype points all three at the repo root; `/specs` and `/docs` are the intended targets.
export const CONTRIB_LINKS = [
  { icon: "pi-file", title: "Explorar los SPECs", desc: "Requisitos, reglas de negocio y criterios de aceptación.", href: `${REPO_URL}/tree/HEAD/specs` },
  { icon: "pi-box", title: "Revisar la arquitectura", desc: "Diagramas, estructura del proyecto y decisiones técnicas.", href: `${REPO_URL}/tree/HEAD/docs` },
  { icon: "pi-book", title: "Leer la guía de uso", desc: "Recorrido paso a paso por la aplicación.", href: "/#guia" },
];
