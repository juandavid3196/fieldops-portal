export type Status = {
  label: string;
  bg: string;
  fg: string;
};

export const STATUS = {
  paid: { label: "Paid", bg: "#e7f6ee", fg: "#136f4a" },
  sent: { label: "Sent", bg: "#eaf1fd", fg: "#1d4ed8" },
  over: { label: "Overdue", bg: "#fdecec", fg: "#c2410c" },
  part: { label: "Partially paid", bg: "#fff1e0", fg: "#b45309" },
  draft: { label: "Draft", bg: "#eef2f6", fg: "#46557a" },
  prog: { label: "En proceso", bg: "#fff1e0", fg: "#c2410c" },
  sched: { label: "Programado", bg: "#eaf1fd", fg: "#1d4ed8" },
  done: { label: "Completado", bg: "#e7f6ee", fg: "#136f4a" },
  route: { label: "En camino", bg: "#eaf1fd", fg: "#1d4ed8" },
} satisfies Record<string, Status>;

export type NavItem = { label: string; icon: string };

const enNav: NavItem[] = [
  { label: "Dashboard", icon: "pi-home" },
  { label: "Requests", icon: "pi-inbox" },
  { label: "Quotes", icon: "pi-file" },
  { label: "Jobs", icon: "pi-wrench" },
  { label: "Schedule", icon: "pi-calendar" },
  { label: "Customers", icon: "pi-user" },
  { label: "Team", icon: "pi-users" },
];

export const NAV_HERO: NavItem[] = [
  ...enNav,
  { label: "Billing", icon: "pi-receipt" },
  { label: "Reports", icon: "pi-chart-bar" },
  { label: "Settings", icon: "pi-cog" },
];

export const NAV_SCHED: NavItem[] = [...enNav, { label: "Settings", icon: "pi-cog" }];

export const NAV_ES: NavItem[] = [
  { label: "Dashboard", icon: "pi-home" },
  { label: "Solicitudes", icon: "pi-inbox" },
  { label: "Cotizaciones", icon: "pi-file" },
  { label: "Trabajos", icon: "pi-briefcase" },
  { label: "Agenda", icon: "pi-calendar" },
  { label: "Clientes", icon: "pi-user" },
  { label: "Equipo", icon: "pi-users" },
  { label: "Facturación", icon: "pi-receipt" },
  { label: "Reportes", icon: "pi-chart-bar" },
  { label: "Configuración", icon: "pi-cog" },
];

export const KPIS = [
  { label: "Outstanding", value: "$18,760", icon: "pi-file", bg: "#eaf1fd", fg: "#2563eb" },
  { label: "Overdue", value: "$4,320", icon: "pi-clock", bg: "#fdecec", fg: "#e5484d" },
  { label: "Draft", value: "$2,845", icon: "pi-file-edit", bg: "#eef2f6", fg: "#46557a" },
  { label: "Paid this month", value: "$118,140", icon: "pi-credit-card", bg: "#e7f6ee", fg: "#168a5b" },
];

export const INVOICES = [
  { id: "INV-1048", customer: "Sofia Martinez", wo: "WO-1048", date: "Sep 20, 2026", due: "Oct 4, 2026", amount: "$357.28", balance: "$0.00", status: STATUS.paid },
  { id: "INV-1049", customer: "Daniel Kim", wo: "WO-1042", date: "Sep 19, 2026", due: "Oct 3, 2026", amount: "$149.00", balance: "$149.00", status: STATUS.sent },
  { id: "INV-1045", customer: "Jennifer Walsh", wo: "WO-1037", date: "Sep 2, 2026", due: "Sep 16, 2026", amount: "$325.00", balance: "$325.00", status: STATUS.over },
  { id: "INV-1044", customer: "BrightLine Offices", wo: "WO-1035", date: "Sep 1, 2026", due: "Sep 30, 2026", amount: "$1,560.00", balance: "$780.00", status: STATUS.part },
  { id: "INV-1050", customer: "Robert Chen", wo: "WO-1053", date: "—", due: "—", amount: "$485.00", balance: "$485.00", status: STATUS.draft },
];

export const PHONE_TABS_EN: NavItem[] = [
  { label: "Today", icon: "pi-home" },
  { label: "Schedule", icon: "pi-calendar" },
  { label: "Time", icon: "pi-clock" },
  { label: "Messages", icon: "pi-comment" },
  { label: "More", icon: "pi-ellipsis-h" },
];

export const PHONE_TABS_ES: NavItem[] = [
  { label: "Hoy", icon: "pi-home" },
  { label: "Agenda", icon: "pi-calendar" },
  { label: "Registro", icon: "pi-clock" },
  { label: "Mensajes", icon: "pi-comment" },
  { label: "Más", icon: "pi-ellipsis-h" },
];

export const STEPS = [
  // "\n" marks the line break used in the design.
  { icon: "pi-file", title: "Solicitud", desc: "Registra y organiza\nlas solicitudes de servicio.", tone: "teal" },
  { icon: "pi-file-edit", title: "Cotización", desc: "Crea y envía\ncotizaciones en minutos.", tone: "blue" },
  { icon: "pi-clipboard", title: "Orden", desc: "Convierte en una\norden de trabajo.", tone: "teal" },
  { icon: "pi-calendar", title: "Visita", desc: "Agenda y asigna\na tu equipo.", tone: "teal" },
  { icon: "pi-dollar", title: "Factura", desc: "Genera la factura\nautomáticamente.", tone: "blue" },
  { icon: "pi-credit-card", title: "Pago", desc: "Recibe pagos en línea\no fuera de FieldOps.", tone: "teal" },
] as const;

const EVENT_TONE = {
  teal: { bg: "#dcf3ee", bar: "#14a38b" },
  blue: { bg: "#dde8fd", bar: "#2f6fec" },
  gray: { bg: "#eceff4", bar: "#8792a8" },
};

type Tone = keyof typeof EVENT_TONE;

// Positions in px below the day header, as drawn in the design.
function ev(top: number, height: number, title: string, place: string, tone: Tone) {
  return { top, height, title, place, ...EVENT_TONE[tone] };
}

export const DAYS = [
  { label: "Mon 21", today: false, events: [ev(27, 42, "Toilet repair", "Westlake Dr", "teal")] },
  { label: "Tue 22", today: false, events: [ev(64, 49, "Sink leak repair", "Oak Street", "blue"), ev(144, 49, "HVAC inspection", "Cedar Park", "gray")] },
  { label: "Wed 23", today: true, events: [ev(90, 53, "Water heater", "Maple Ave", "blue"), ev(171, 46, "Pipe inspection", "Riverside Ave", "blue")] },
  { label: "Thu 24", today: false, events: [ev(31, 54, "AC maintenance", "Downtown", "teal"), ev(117, 41, "Follow up", "South Congress", "gray")] },
  { label: "Fri 25", today: false, events: [ev(63, 45, "Estimate visit", "Lamar Blvd", "gray"), ev(176, 43, "Install water heater", "Pine Street", "teal")] },
];

export const HOURS = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

export const PLAN_CHECKS = [
  { title: "Agenda y asignación de técnicos", desc: "Visualiza la carga de trabajo y asigna visitas fácilmente." },
  { title: "Seguimiento del trabajo en campo", desc: "Conoce el estado de cada servicio en tiempo real." },
  { title: "Evidencias y cierre del servicio", desc: "Registra notas, fotos y confirma la finalización del trabajo." },
];

export const ROLES = [
  { icon: "pi-home", title: "Propietario", desc: "Control total de la operación, las finanzas y el equipo." },
  { icon: "pi-users", title: "Coordinador", desc: "Organiza solicitudes, agenda visitas y mantiene el trabajo en movimiento." },
  { icon: "hardhat", title: "Técnico", desc: "Consulta su ruta, registra avances y documenta el servicio desde el móvil." },
  { icon: "pi-user", title: "Cliente", desc: "Aprueba cotizaciones, sigue el servicio y consulta sus facturas." },
];

export const JOBS = [
  { id: "WO-3091", customer: "Sofía Martínez", addr: "1842 Oak Street...", service: "Reparación de fuga", date: "Sep 23, 2026", tech: "Daniel Kim", status: STATUS.prog },
  { id: "WO-3092", customer: "Robert Chen", addr: "77 Pine Street...", service: "Mantenimiento AC", date: "Sep 23, 2026", tech: "Jennifer Walsh", status: STATUS.sched },
  { id: "WO-3093", customer: "Carlos Ruiz", addr: "1200 Maple Ave...", service: "Instalación", date: "Sep 24, 2026", tech: "Michael Torres", status: STATUS.sched },
  { id: "WO-3094", customer: "Amanda Lewis", addr: "56 Cedar Park...", service: "Inspección HVAC", date: "Sep 24, 2026", tech: "Robert Chen", status: STATUS.prog },
  { id: "WO-3095", customer: "David Kim", addr: "901 Lakeview Dr...", service: "Reparación", date: "Sep 25, 2026", tech: "Daniel Kim", status: STATUS.done },
];

export const MY_JOBS = [
  { time: "9:30 a. m.", title: "Reparación de fuga en fregadero", who: "WO-3091 · Sofía Martínez", addr: "1842 Oak Street, Austin", status: STATUS.route },
  { time: "11:30 a. m.", title: "Mantenimiento AC", who: "WO-3092 · Robert Chen", addr: "77 Pine Street, Austin", status: STATUS.sched },
  { time: "2:00 p. m.", title: "Inspección HVAC", who: "WO-3094 · Amanda Lewis", addr: "56 Cedar Park, Austin", status: STATUS.sched },
];

export const SURFACES = [
  { icon: "pi-desktop", title: "Operación centralizada", desc: "Toda la información en un solo lugar y actualizada en tiempo real." },
  { icon: "pi-mobile", title: "Trabajo móvil", desc: "El técnico lleva su agenda, registra avances y consulta detalles desde cualquier lugar." },
  { icon: "pi-users", title: "Portal del cliente", desc: "Tus clientes pueden seguir el estado del servicio y consultar su historial de forma simple y segura." },
];

export const DATA_CHECKS = [
  { bold: "Indicadores", text: "de cotizaciones, trabajos y facturación." },
  { bold: "Rentabilidad,", text: "antigüedad de saldos y utilización del equipo." },
  { bold: "Registro", text: "de acciones importantes por usuario y fecha." },
];

export const AUDIT = [
  { when: "Sep 23, 2026 9:14 a. m.", who: "Daniel Kim", what: "Trabajo actualizado", detail: "Se cambió el estado a En proceso (WO-3091)" },
  { when: "Sep 23, 2026 8:57 a. m.", who: "Sofía Martínez", what: "Nota agregada", detail: "Se agregó una nota al trabajo (WO-3091)" },
  { when: "Sep 22, 2026 4:31 p. m.", who: "Jennifer Walsh", what: "Cotización enviada", detail: "Se envió la cotización COT-1042 por email" },
  { when: "Sep 22, 2026 3:18 p. m.", who: "Robert Chen", what: "Trabajo completado", detail: "Se marcó como completado el trabajo (WO-3090)" },
  { when: "Sep 21, 2026 11:03 a. m.", who: "Daniel Kim", what: "Cliente actualizado", detail: "Se actualizó la información de contacto" },
  { when: "Sep 20, 2026 2:16 p. m.", who: "Admin", what: "Usuario creado", detail: "Se creó el usuario Michael Torres" },
];

export const GUIDE_ITEMS = [
  { icon: "pi-file", title: "Inicio rápido", strong: true },
  { icon: "pi-sitemap", title: "Flujos completos por rol", strong: true },
  { icon: "pi-image", title: "Instrucciones con capturas reales", strong: false },
  { icon: "pi-lightbulb", title: "Consejos y resultados esperados", strong: false },
];
