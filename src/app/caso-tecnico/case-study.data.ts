export const REPO_URL = "https://github.com/juandavid3196/fieldops";

export const TAGS = ["Full Stack", "Product design", "System design", "Spec-driven development"];

export type ArchItem = { icon: string; size: number; title: string; desc: string; down?: boolean };
export type ArchColumn = {
  title: string;
  badge?: { text: string; bg: string; radius: string; fontSize: number };
  items: ArchItem[];
};

export const ARCH_COLUMNS: ArchColumn[] = [
  {
    title: "Angular applications",
    badge: { text: "A", bg: "#dd0031", radius: "4px", fontSize: 12 },
    items: [
      { icon: "pi-desktop", size: 18, title: "Staff portal", desc: "Gestión completa" },
      { icon: "pi-wrench", size: 17, title: "Technician experience", desc: "Trabajo en campo" },
      { icon: "pi-user", size: 17, title: "Customer portal", desc: "Consulta y pagos" },
    ],
  },
  {
    title: ".NET 10 API",
    badge: { text: ".NET", bg: "#5b3fd4", radius: "50%", fontSize: 6.5 },
    items: [
      { icon: "pi-verified", size: 17, title: "Application", desc: "CQRS (Use cases)", down: true },
      { icon: "pi-database", size: 17, title: "Domain", desc: "DDD (Entities)", down: true },
      { icon: "pi-server", size: 17, title: "Infrastructure", desc: "EF Core (Repositories)" },
    ],
  },
  {
    title: "Data & storage",
    items: [
      { icon: "pi-database", size: 22, title: "PostgreSQL", desc: "Datos de la aplicación" },
      { icon: "pi-file", size: 22, title: "File storage", desc: "Archivos y evidencias" },
    ],
  },
];

export const OPS = [
  { icon: "pi-cog", title: "CI/CD", desc: "GitHub Actions" },
  { icon: "pi-box", title: "Docker", desc: "Entornos de desarrollo" },
  { icon: "pi-file-check", title: "Audit", desc: "Trazabilidad" },
  { icon: "pi-shield", title: "RBAC", desc: "Permisos por rol" },
];

export const STATS = [
  { mark: "A", bg: "#dd0031", radius: "6px", fontSize: 16, title: "Angular 22.1", desc: "Frontend moderno y reactivo" },
  { mark: ".NET", bg: "#5b3fd4", radius: "50%", fontSize: 10, title: ".NET 10", desc: "API robusta y escalable" },
  { icon: "pi-database", color: "#336791", title: "PostgreSQL", desc: "Datos relacionales confiables" },
  { icon: "pi-database", color: "#0f8c89", title: "50 domain entities", desc: "Modelo de dominio completo" },
  { icon: "pi-users", color: "#0f8c89", title: "3 user experiences", desc: "Equipo, técnicos y clientes" },
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
  { icon: "pi-list", title: "Application", key: "CQRS", desc: "Casos de uso y orquestación" },
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

export type Chip = { m: string; t: string; bg: string; size?: number; r?: string; fs?: number };
const chip = (m: string, t: string, bg: string, o: Partial<Chip> = {}): Chip => ({ m, t, bg, ...o });

export const TECH = [
  {
    icon: "pi-desktop",
    iconColor: "#0f8c89",
    title: "Frontend",
    items: [
      chip("A", "Angular 22.1", "#dd0031"),
      chip("TS", "TypeScript", "#3178c6"),
      chip("((·))", "Signals", "#7c3aed", { fs: 5 }),
      chip("Rx", "RxJS", "#d6247f", { r: "50%" }),
      chip("P", "PrimeNG", "#dd0031", { r: "50% 50% 4px 4px" }),
      chip("S", "SCSS", "#cd6799", { r: "50%" }),
    ],
  },
  {
    icon: "pi-cog",
    iconColor: "#0b1d45",
    title: "Backend",
    items: [
      chip(".NET", ".NET 10", "#5b3fd4", { r: "50%", fs: 5 }),
      chip("C#", "C#", "#68217a"),
      chip("◎", "CQRS", "#0b1d45", { r: "50%" }),
      chip("⬡", "DDD", "#0f8c89"),
      chip("EF", "EF Core", "#1e3a8a", { fs: 6 }),
      chip("{ }", "REST APIs", "#0b1d45", { fs: 6 }),
    ],
  },
  {
    icon: "pi-database",
    iconColor: "#0f8c89",
    title: "Data & infrastructure",
    items: [
      chip("PG", "PostgreSQL", "#336791", { size: 22, r: "50%", fs: 8 }),
      chip("🐳", "Docker Compose", "#2496ed", { size: 22, fs: 11 }),
      chip("", "GitHub Actions", "#0b1d45", { size: 22, r: "50%" }),
    ],
  },
  {
    icon: "pi-shield",
    iconColor: "#0f8c89",
    title: "Quality",
    items: [
      chip("ES", "ESLint", "#4b32c3", { r: "50%", fs: 6 }),
      chip("P", "Prettier", "#f7b93e"),
      chip("✓", "Tests (unitarios e integración)", "#0f8c89"),
      chip("</>", "Code review", "#0b1d45", { fs: 5.5 }),
      chip("◉", "Audit trail", "#0f8c89", { r: "50%" }),
    ],
  },
];

export const PROCESS = [
  { icon: "pi-pencil", title: "Diseño", desc: "Mockups y estados" },
  { icon: "pi-file", title: "SPEC", desc: "Reglas y alcance" },
  { icon: "pi-box", title: "Arquitectura", desc: "Contratos y datos" },
  { icon: "pi-code", title: "Implementación", desc: "Frontend y backend" },
  { icon: "pi-file-check", title: "Auditoría", desc: "QA, seguridad y accesibilidad" },
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
