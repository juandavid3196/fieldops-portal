import type { MockCopy } from "@/content/mock-copy";
import { Icon, LogoMark, Wordmark } from "./mock-frames";

/*
 * The staff app's left navigation, shared by every desktop mock-up so they all match the real app.
 * Drawn at native size (243px wide); mocks scale it together with the rest of their screen.
 */

export type AppSection = keyof MockCopy["sidebar"]["labels"];

type Entry = { icon: string; section: AppSection; chevron?: boolean } | { heading: "operations" | "people" | "finance" } | { divider: true };

const NAV: Entry[] = [
  { icon: "pi-th-large", section: "Dashboard" },
  { heading: "operations" },
  { icon: "pi-inbox", section: "Requests" },
  { icon: "pi-file-edit", section: "Quotes" },
  { icon: "pi-wrench", section: "Jobs" },
  { icon: "pi-calendar", section: "Schedule" },
  { heading: "people" },
  { icon: "pi-users", section: "Customers" },
  { icon: "pi-id-card", section: "Team" },
  { heading: "finance" },
  { icon: "pi-box", section: "Products and services" },
  { icon: "pi-receipt", section: "Invoices", chevron: true },
  { icon: "pi-chart-bar", section: "Reports" },
  { divider: true },
  { icon: "pi-cog", section: "Administration" },
];

export const APP_SIDEBAR_WIDTH = 243;

/** `height` is only needed when the sidebar can't stretch to its parent (e.g. inside a zoom wrapper). */
export function AppSidebar({ active, copy, height }: { active: AppSection; copy: MockCopy["sidebar"]; height?: number }) {
  return (
    <div style={{ width: APP_SIDEBAR_WIDTH, height, flex: "none", alignSelf: "stretch", background: "#0d1f3c", color: "#d5deea", padding: "10px 12px 0" }}>
      <div style={{ height: 44, display: "flex", alignItems: "center", gap: 10, padding: "0 8px", fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
        <LogoMark size={24} />
        <Wordmark ops="#2cc2bd" />
      </div>
      <div style={{ marginTop: 14 }}>
        {NAV.map((n, i) => {
          if ("heading" in n)
            return (
              <div key={n.heading} style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#8fa0bb", padding: "18px 10px 6px" }}>
                {copy[n.heading]}
              </div>
            );
          if ("divider" in n) return <div key={`d${i}`} style={{ borderTop: "1px solid rgba(255,255,255,.12)", margin: "14px 8px" }} />;
          const on = n.section === active;
          return (
            <div
              key={n.section}
              style={{
                height: 41,
                display: "flex",
                alignItems: "center",
                gap: 13,
                padding: "0 10px",
                borderRadius: 6,
                fontSize: 15,
                fontWeight: on ? 600 : 500,
                color: on ? "#fff" : "#d5deea",
                background: on ? "#164f5e" : "transparent",
                boxShadow: on ? "inset 3px 0 0 #2cc2bd" : undefined,
                whiteSpace: "nowrap",
              }}
            >
              <Icon name={n.icon} size={17} style={{ width: 19 }} />
              {copy.labels[n.section]}
              {n.chevron && <Icon name="pi-chevron-right" size={13} style={{ marginLeft: "auto" }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
