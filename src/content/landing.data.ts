// Visual data for the landing mock-ups. Translatable copy lives in src/i18n and src/content/mock-copy.ts.

export type Status = {
  label: string;
  bg: string;
  fg: string;
};

export type NavItem = { label: string; icon: string };

export type InvoiceStatus = "paid" | "sent" | "over" | "part" | "draft";

/** Chip colors for the hero billing screen; labels come from the mock copy. */
export const INVOICE_TONE: Record<InvoiceStatus, { bg: string; fg: string }> = {
  paid: { bg: "var(--m-green-bg)", fg: "var(--m-green-fg)" },
  sent: { bg: "var(--m-blue-bg)", fg: "var(--m-blue-fg)" },
  over: { bg: "var(--m-red-bg)", fg: "var(--m-amber-fg)" },
  part: { bg: "var(--m-amber-bg)", fg: "var(--m-amber-fg)" },
  draft: { bg: "var(--m-subtle)", fg: "var(--m-body)" },
};

/** KPI values and colors; labels come from the mock copy (`invoices.kpis`). */
export const KPIS = [
  { value: "$18,760", icon: "pi-file", bg: "var(--m-blue-bg)", fg: "var(--m-link)" },
  { value: "$4,320", icon: "pi-clock", bg: "var(--m-red-bg)", fg: "#e5484d" },
  { value: "$2,845", icon: "pi-file-edit", bg: "var(--m-subtle)", fg: "var(--m-body)" },
  { value: "$118,140", icon: "pi-credit-card", bg: "var(--m-green-bg)", fg: "var(--m-green-fg)" },
];

/** Non-translatable invoice fields; dates and status labels come from the mock copy. */
export const INVOICES: { id: string; customer: string; wo: string; amount: string; balance: string; status: InvoiceStatus }[] = [
  { id: "INV-1048", customer: "Sofia Martinez", wo: "WO-1048", amount: "$357.28", balance: "$0.00", status: "paid" },
  { id: "INV-1049", customer: "Daniel Kim", wo: "WO-1042", amount: "$149.00", balance: "$149.00", status: "sent" },
  { id: "INV-1045", customer: "Jennifer Walsh", wo: "WO-1037", amount: "$325.00", balance: "$325.00", status: "over" },
  { id: "INV-1044", customer: "BrightLine Offices", wo: "WO-1035", amount: "$1,560.00", balance: "$780.00", status: "part" },
  { id: "INV-1050", customer: "Robert Chen", wo: "WO-1053", amount: "$485.00", balance: "$485.00", status: "draft" },
];

/** Icons for the technician phone tab bar; labels come from the mock copy. */
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

/** Icons for `roles.items`, in order. "hardhat" is a custom SVG. */
export const ROLE_ICONS = ["pi-home", "pi-users", "hardhat", "pi-user"];

/** Icons for `connected.features`, in order. */
export const SURFACE_ICONS = ["pi-desktop", "pi-mobile", "pi-users"];

/** Icons for `guide.items`; the first two are emphasized in the design. */
export const GUIDE_ICONS = ["pi-file", "pi-sitemap", "pi-image", "pi-lightbulb"];
