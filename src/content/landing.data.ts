// Visual data for the landing mock-ups. Translatable copy lives in src/i18n.

export type Status = {
  label: string;
  bg: string;
  fg: string;
};

export type StatusKey = "prog" | "sched" | "done" | "route";

/** Chip colors for statuses whose label comes from the dictionary (`mock.status`). */
export const STATUS_TONE: Record<StatusKey, { bg: string; fg: string }> = {
  prog: { bg: "#fff1e0", fg: "#c2410c" },
  sched: { bg: "#eaf1fd", fg: "#1d4ed8" },
  done: { bg: "#e7f6ee", fg: "#136f4a" },
  route: { bg: "#eaf1fd", fg: "#1d4ed8" },
};

// The hero billing screen is shown in English in both languages, as in the design.
const INVOICE_STATUS = {
  paid: { label: "Paid", bg: "#e7f6ee", fg: "#136f4a" },
  sent: { label: "Sent", bg: "#eaf1fd", fg: "#1d4ed8" },
  over: { label: "Overdue", bg: "#fdecec", fg: "#c2410c" },
  part: { label: "Partially paid", bg: "#fff1e0", fg: "#b45309" },
  draft: { label: "Draft", bg: "#eef2f6", fg: "#46557a" },
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

/** Icons for the localized app sidebar (`mock.appNav`), in the same order. */
export const APP_NAV_ICONS = ["pi-home", "pi-inbox", "pi-file", "pi-briefcase", "pi-calendar", "pi-user", "pi-users", "pi-receipt", "pi-chart-bar", "pi-cog"];

export const appNav = (labels: string[]): NavItem[] => labels.map((label, i) => ({ label, icon: APP_NAV_ICONS[i] }));

export const KPIS = [
  { label: "Outstanding", value: "$18,760", icon: "pi-file", bg: "#eaf1fd", fg: "#2563eb" },
  { label: "Overdue", value: "$4,320", icon: "pi-clock", bg: "#fdecec", fg: "#e5484d" },
  { label: "Draft", value: "$2,845", icon: "pi-file-edit", bg: "#eef2f6", fg: "#46557a" },
  { label: "Paid this month", value: "$118,140", icon: "pi-credit-card", bg: "#e7f6ee", fg: "#168a5b" },
];

export const INVOICES = [
  { id: "INV-1048", customer: "Sofia Martinez", wo: "WO-1048", date: "Sep 20, 2026", due: "Oct 4, 2026", amount: "$357.28", balance: "$0.00", status: INVOICE_STATUS.paid },
  { id: "INV-1049", customer: "Daniel Kim", wo: "WO-1042", date: "Sep 19, 2026", due: "Oct 3, 2026", amount: "$149.00", balance: "$149.00", status: INVOICE_STATUS.sent },
  { id: "INV-1045", customer: "Jennifer Walsh", wo: "WO-1037", date: "Sep 2, 2026", due: "Sep 16, 2026", amount: "$325.00", balance: "$325.00", status: INVOICE_STATUS.over },
  { id: "INV-1044", customer: "BrightLine Offices", wo: "WO-1035", date: "Sep 1, 2026", due: "Sep 30, 2026", amount: "$1,560.00", balance: "$780.00", status: INVOICE_STATUS.part },
  { id: "INV-1050", customer: "Robert Chen", wo: "WO-1053", date: "—", due: "—", amount: "$485.00", balance: "$485.00", status: INVOICE_STATUS.draft },
];

export const PHONE_TABS_EN: NavItem[] = [
  { label: "Today", icon: "pi-home" },
  { label: "Schedule", icon: "pi-calendar" },
  { label: "Time", icon: "pi-clock" },
  { label: "Messages", icon: "pi-comment" },
  { label: "More", icon: "pi-ellipsis-h" },
];

export const PHONE_TAB_ICONS = ["pi-home", "pi-calendar", "pi-clock", "pi-comment", "pi-ellipsis-h"];

/** Icon + tone per flow step; titles and descriptions come from `flow.steps`. */
export const STEP_STYLE = [
  { icon: "pi-file", tone: "teal" },
  { icon: "pi-file-edit", tone: "blue" },
  { icon: "pi-clipboard", tone: "teal" },
  { icon: "pi-calendar", tone: "teal" },
  { icon: "pi-dollar", tone: "blue" },
  { icon: "pi-credit-card", tone: "teal" },
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

/** Icons for `roles.items`, in order. "hardhat" is a custom SVG. */
export const ROLE_ICONS = ["pi-home", "pi-users", "hardhat", "pi-user"];

/** Non-translatable job fields; the service name comes from `mock.jobs.services`. */
export const JOBS: { id: string; customer: string; addr: string; date: string; tech: string; status: StatusKey }[] = [
  { id: "WO-3091", customer: "Sofía Martínez", addr: "1842 Oak Street...", date: "Sep 23, 2026", tech: "Daniel Kim", status: "prog" },
  { id: "WO-3092", customer: "Robert Chen", addr: "77 Pine Street...", date: "Sep 23, 2026", tech: "Jennifer Walsh", status: "sched" },
  { id: "WO-3093", customer: "Carlos Ruiz", addr: "1200 Maple Ave...", date: "Sep 24, 2026", tech: "Michael Torres", status: "sched" },
  { id: "WO-3094", customer: "Amanda Lewis", addr: "56 Cedar Park...", date: "Sep 24, 2026", tech: "Robert Chen", status: "prog" },
  { id: "WO-3095", customer: "David Kim", addr: "901 Lakeview Dr...", date: "Sep 25, 2026", tech: "Daniel Kim", status: "done" },
];

/** Technician's day; time and title come from `mock.phone`. */
export const MY_JOBS: { who: string; addr: string; status: StatusKey }[] = [
  { who: "WO-3091 · Sofía Martínez", addr: "1842 Oak Street, Austin", status: "route" },
  { who: "WO-3092 · Robert Chen", addr: "77 Pine Street, Austin", status: "sched" },
  { who: "WO-3094 · Amanda Lewis", addr: "56 Cedar Park, Austin", status: "sched" },
];

/** Icons for `connected.features`, in order. */
export const SURFACE_ICONS = ["pi-desktop", "pi-mobile", "pi-users"];

/** Users for the audit log rows (`mock.reports.rows`), in order. */
export const AUDIT_USERS = ["Daniel Kim", "Sofía Martínez", "Jennifer Walsh", "Robert Chen", "Daniel Kim", "Admin"];

/** Icons for `guide.items`; the first two are emphasized in the design. */
export const GUIDE_ICONS = ["pi-file", "pi-sitemap", "pi-image", "pi-lightbulb"];
