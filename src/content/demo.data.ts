// Data for the demo page. Translatable copy lives in src/i18n (`demo`).

export const APP_URL = "https://fieldops-co-app.vercel.app/auth/sign-in";
export const SIGN_UP_URL = "https://fieldops-co-app.vercel.app/auth/sign-up";

/** Shared by every demo account (fictional, read-only data). */
export const DEMO_PASSWORD = "ExploreFieldOps2026!";

/** Guide PDFs live in public/guides. */
export const GUIDE_PDF = {
  es: "/guides/fieldops-guia-es.pdf",
  en: "/guides/fieldops-guide-en.pdf",
} as const;

/** Same order as `demo.accounts.rows`; the first one is the recommended starting point. */
export const DEMO_ACCOUNTS = [
  { email: "owner@demo.fieldops.test", icon: "pi-building", start: true },
  { email: "operations@demo.fieldops.test", icon: "pi-clone" },
  { email: "dispatcher@demo.fieldops.test", icon: "pi-calendar" },
  { email: "accounting@demo.fieldops.test", icon: "pi-file" },
  { email: "viewer@demo.fieldops.test", icon: "pi-eye" },
  { email: "tech.hvac@demo.fieldops.test", icon: "pi-wrench" },
  { email: "customer1@demo.fieldops.test", icon: "pi-user" },
] as const;

export const OTHER_ACCOUNTS = [
  { key: "plumbing", email: "tech.plumbing@demo.fieldops.test" },
  { key: "electric", email: "tech.electric@demo.fieldops.test" },
] as const;

export const HERO_ROLE_ICONS = ["pi-desktop", "pi-wrench", "pi-user"] as const;
