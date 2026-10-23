import type { CSSProperties, ReactNode } from "react";
import type { MockCopy } from "@/content/mock-copy";
import { AppSidebar } from "../AppSidebar";
import { Icon } from "../mock-frames";

/*
 * Staff "Jobs" screen, recreated from the real app design at its native 1672px width
 * and scaled into the window with CSS zoom, like a screenshot.
 */

const NATIVE_W = 1672;
const FRAME_W = 726;

const C = {
  ink: "var(--m-ink)",
  body: "var(--m-body)",
  muted: "var(--m-muted)",
  line: "var(--m-line)",
  teal: "#0f8c89",
  tealDark: "var(--m-teal-fg)",
  side: "#0d1f3c",
};


// Labels and notes come from the mock copy (`jobs.kpis`), in this order.
const KPIS = [
  { icon: "pi-file", tone: "teal", value: "12" },
  { icon: "pi-calendar", tone: "teal", value: "3" },
  { icon: "pi-calendar", tone: "teal", value: "7" },
  { icon: "pi-exclamation-triangle", tone: "red", value: "2" },
] as const;

const TAB_COUNTS = [24, 12, 3, 9];

const STATUS = {
  ready: { bg: "var(--m-subtle)", fg: "var(--m-ink2)", dot: "var(--m-body)" },
  completed: { bg: "var(--m-green-bg)", fg: "var(--m-green-fg)", dot: "#16a34a" },
  progress: { bg: "var(--m-amber-bg)", fg: "var(--m-amber-fg)", dot: "#f59e0b" },
  assigned: { bg: "var(--m-purple-bg)", fg: "var(--m-purple-fg)", dot: "#7c3aed" },
  scheduled: { bg: "var(--m-blue-bg)", fg: "var(--m-blue-fg)", dot: "#3b82f6" },
  correction: { bg: "var(--m-red-bg)", fg: "var(--m-red-fg)", dot: "#e5484d" },
};

const AVATAR = {
  MM: { bg: "var(--m-teal-bg)", fg: "var(--m-green-fg)" },
  CR: { bg: "var(--m-blue-bg)", fg: "var(--m-blue-fg)" },
  AL: { bg: "var(--m-red-bg)", fg: "var(--m-red-fg)" },
  PS: { bg: "var(--m-purple-bg)", fg: "var(--m-purple-fg)" },
  LG: { bg: "var(--m-amber-bg)", fg: "var(--m-amber-fg)" },
};

// Service, property, schedule and "updated" text come from the mock copy (`jobs.rows`), in this order.
type Row = {
  id: string;
  customer: string;
  propertyIcon: "home" | "building";
  tech: { initials: keyof typeof AVATAR; name: string } | null;
  high?: boolean;
  status: keyof typeof STATUS;
};

const ROWS: Row[] = [
  { id: "#WO-7", customer: "Marina Garcia", propertyIcon: "home", tech: null, status: "ready" },
  { id: "#WO-6", customer: "Marina Garcia", propertyIcon: "home", tech: { initials: "MM", name: "Manuel Merlano" }, status: "completed" },
  { id: "#WO-5", customer: "Daniel Esteban", propertyIcon: "building", tech: { initials: "CR", name: "Carlos Rivera" }, high: true, status: "progress" },
  { id: "#WO-4", customer: "Marina Garcia", propertyIcon: "home", tech: { initials: "AL", name: "Ana López" }, status: "assigned" },
  { id: "#WO-3", customer: "Juan David Rodriguez", propertyIcon: "building", tech: { initials: "PS", name: "Priya Shah" }, status: "scheduled" },
  { id: "#WO-2", customer: "Marina Garcia", propertyIcon: "building", tech: { initials: "LG", name: "Luis Garcia" }, high: true, status: "correction" },
];

const COLS = "162px 244px 244px 210px 120px 186px 128px 1fr";

const box: CSSProperties = {
  height: 42,
  border: `1px solid ${C.line}`,
  borderRadius: 6,
  background: "var(--m-surface)",
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "0 14px",
  fontSize: 15,
  color: C.ink,
  whiteSpace: "nowrap",
};

function Select({ icon, children, width }: { icon: string; children: ReactNode; width: number }) {
  return (
    <div style={{ ...box, width, justifyContent: "space-between" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Icon name={icon} size={17} style={{ color: C.body }} />
        {children}
      </span>
      <Icon name="pi-chevron-down" size={12} style={{ color: C.body }} />
    </div>
  );
}

type Copy = MockCopy["jobs"];

function TopBar({ t }: { t: Copy }) {
  return (
    <div style={{ height: 55, borderBottom: `1px solid ${C.line}`, display: "flex", alignItems: "center", padding: "0 20px", gap: 22 }}>
      <div style={{ ...box, width: 438, height: 40, color: C.muted }}>
        <Icon name="pi-search" size={16} style={{ color: C.body }} /> {t.search}
      </div>
      <div style={{ marginLeft: "auto", ...box, height: 38, gap: 10, fontWeight: 600 }}>
        <Icon name="pi-building" size={15} style={{ color: C.body }} /> test <Icon name="pi-chevron-down" size={11} />
      </div>
      <Icon name="pi-question-circle" size={17} style={{ color: C.body }} />
      <Icon name="pi-bell" size={18} style={{ color: C.body }} />
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--m-teal-bg)", color: "var(--m-green-fg)", fontSize: 12.5, fontWeight: 700, display: "grid", placeItems: "center" }}>JDRR</span>
        <span style={{ lineHeight: 1.3 }}>
          <span style={{ display: "block", fontSize: 15, fontWeight: 600, color: C.ink }}>Juan David Rios Rodriguez</span>
          <span style={{ display: "block", fontSize: 13, color: C.body }}>{t.role}</span>
        </span>
        <Icon name="pi-chevron-down" size={12} style={{ color: C.body, marginLeft: 6 }} />
      </span>
    </div>
  );
}

function JobsTable({ t }: { t: Copy }) {
  return (
    <div style={{ marginTop: 18, border: `1px solid ${C.line}`, borderRadius: 8, background: "var(--m-surface)" }}>
      <div style={{ display: "flex", gap: 8, padding: "0 10px", borderBottom: `1px solid ${C.line}`, height: 52, alignItems: "flex-end" }}>
        {t.tabs.map((label, i) => {
          const on = i === 0;
          return (
          <span
            key={label}
            style={{ height: 52, padding: "0 16px", display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: on ? 600 : 500, color: on ? C.tealDark : C.body, borderBottom: on ? `3px solid ${C.teal}` : "3px solid transparent", whiteSpace: "nowrap" }}
          >
            {label}
            <span style={{ minWidth: 26, height: 22, padding: "0 7px", borderRadius: 999, background: on ? "var(--m-teal-bg)" : "var(--m-subtle)", color: on ? C.tealDark : C.body, fontSize: 13, fontWeight: 600, display: "grid", placeItems: "center" }}>
              {TAB_COUNTS[i]}
            </span>
          </span>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 14, padding: "16px 18px" }}>
        <div style={{ ...box, width: 480, color: C.muted }}>
          <Icon name="pi-search" size={16} style={{ color: C.body }} /> {t.tableSearch}
        </div>
        <Select icon="pi-building" width={184}>{t.filters[0]}</Select>
        <Select icon="pi-check-circle" width={186}>{t.filters[1]}</Select>
        <Select icon="pi-flag" width={186}>{t.filters[2]}</Select>
        <Select icon="pi-sort-alt" width={186}>{t.filters[3]}</Select>
        <span style={{ ...box, width: 62, padding: 0, justifyContent: "center", borderColor: "var(--m-teal-bd)", color: C.teal }}>
          <Icon name="pi-sliders-h" size={17} />
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: COLS, alignItems: "center", height: 40, padding: "0 18px", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, fontSize: 15, fontWeight: 600, color: C.ink }}>
        {t.columns.map((h, i) => (
          <span key={h} style={i === 7 ? { justifySelf: "end", paddingRight: 8 } : undefined}>
            {h}
          </span>
        ))}
      </div>
      {ROWS.map((r, i) => {
        const s = STATUS[r.status];
        const row = t.rows[i];
        return (
          <div
            key={r.id}
            className="fo-stagger"
            style={{ "--i": i + 2, display: "grid", gridTemplateColumns: COLS, alignItems: "center", height: 63, padding: "0 18px", borderBottom: "1px solid var(--m-line-soft)", fontSize: 15, color: C.ink } as CSSProperties}
          >
            <span>
              <span style={{ display: "block", fontSize: 16, fontWeight: 600, color: C.teal, textDecoration: "underline", textUnderlineOffset: 3 }}>{r.id}</span>
              <span style={{ display: "block", fontSize: 13.5, color: C.body, marginTop: 2 }}>{row.service}</span>
            </span>
            <span>
              <span style={{ display: "block", fontWeight: 600 }}>{r.customer}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.body, marginTop: 4 }}>
                <Icon name={r.propertyIcon === "home" ? "pi-home" : "pi-building"} size={14} />
                {row.property}
              </span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 14, color: row.schedule ? C.ink : C.body, whiteSpace: "nowrap" }}>
              <Icon name="pi-calendar" size={16} style={{ color: C.body }} />
              {row.schedule ?? t.notScheduled}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", color: r.tech ? C.ink : C.body }}>
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  background: r.tech ? AVATAR[r.tech.initials].bg : "var(--m-line-soft)",
                  color: r.tech ? AVATAR[r.tech.initials].fg : C.muted,
                  border: r.tech ? undefined : `1px solid ${C.line}`,
                }}
              >
                {r.tech ? r.tech.initials : "—"}
              </span>
              {r.tech ? r.tech.name : t.unassigned}
            </span>
            <span style={{ color: r.high ? "var(--m-red-fg)" : C.ink, fontWeight: r.high ? 700 : 400 }}>{r.high ? t.priority.high : t.priority.normal}</span>
            <span>
              <span style={{ height: 28, padding: "0 12px", borderRadius: 999, background: s.bg, color: s.fg, fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: s.dot }} />
                {t.statuses[r.status]}
              </span>
            </span>
            <span style={{ whiteSpace: "nowrap" }}>{row.updated}</span>
            <span style={{ justifySelf: "end", width: 46, height: 36, borderRadius: 6, border: `1px solid ${C.line}`, display: "grid", placeItems: "center", color: C.ink }}>
              <Icon name="pi-ellipsis-h" size={15} />
            </span>
          </div>
        );
      })}
      <div style={{ height: 48, display: "flex", alignItems: "center", padding: "0 18px", fontSize: 14.5, color: C.ink }}>
        {t.showing}
        <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          {t.rowsPerPage}
          <span style={{ ...box, height: 34, width: 72, justifyContent: "space-between" }}>
            10 <Icon name="pi-chevron-down" size={11} />
          </span>
          <span style={{ display: "flex", gap: 6, marginLeft: 14 }}>
            {["pi-chevron-left", "1", "2", "3", "pi-chevron-right"].map((p) => (
              <span
                key={p}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 6,
                  display: "grid",
                  placeItems: "center",
                  border: p === "1" ? `1px solid ${C.teal}` : p.startsWith("pi-") ? `1px solid ${C.line}` : "1px solid transparent",
                  color: p === "1" ? C.tealDark : p === "pi-chevron-left" ? "var(--m-faint)" : C.ink,
                  fontWeight: p === "1" ? 700 : 500,
                }}
              >
                {p.startsWith("pi-") ? <Icon name={p} size={12} /> : p}
              </span>
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}

function Screen({ m }: { m: MockCopy }) {
  const t = m.jobs;
  return (
    <div style={{ width: NATIVE_W, display: "flex", background: "var(--m-bg)", color: C.ink }}>
      <AppSidebar active="Jobs" copy={m.sidebar} />
      <div style={{ flex: 1, minWidth: 0, background: "var(--m-bg)" }}>
        <TopBar t={t} />
        <div style={{ padding: "16px 20px 18px" }}>
          <div style={{ fontSize: 15, color: C.body }}>
            {t.crumb} <span style={{ margin: "0 8px", color: C.muted }}>/</span> <span style={{ color: C.ink, fontWeight: 500 }}>{t.title}</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", marginTop: 6 }}>
            <div>
              <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{t.title}</div>
              <div style={{ fontSize: 16, color: C.body, marginTop: 2 }}>{t.subtitle}</div>
            </div>
            <span style={{ marginLeft: "auto", display: "flex", gap: 14, marginTop: 4 }}>
              <span style={{ height: 44, padding: "0 18px", borderRadius: 6, border: `1px solid ${C.teal}`, background: "var(--m-surface)", color: C.tealDark, fontSize: 15.5, fontWeight: 600, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="pi-calendar" size={16} /> {t.openSchedule}
              </span>
              <span style={{ height: 44, padding: "0 14px 0 18px", borderRadius: 6, background: C.tealDark, color: "#fff", fontSize: 15.5, fontWeight: 600, display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="pi-calendar-plus" size={16} /> {t.readyToSchedule}
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--m-surface)", color: C.tealDark, fontSize: 13, fontWeight: 700, display: "grid", placeItems: "center", marginLeft: 4 }}>3</span>
              </span>
            </span>
          </div>
          <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}>
            {KPIS.map((k, i) => (
              <div key={t.kpis[i].label} className="fo-stagger" style={{ "--i": i, height: 124, border: `1px solid ${C.line}`, borderRadius: 8, background: "var(--m-surface)", padding: "17px 18px", display: "flex", gap: 22 } as CSSProperties}>
                <span style={{ width: 54, height: 54, flex: "none", borderRadius: 8, background: k.tone === "red" ? "var(--m-red-bg)" : "var(--m-teal-bg)", color: k.tone === "red" ? "var(--m-red-fg)" : C.teal, display: "grid", placeItems: "center" }}>
                  <Icon name={k.icon} size={22} />
                </span>
                <span>
                  <span style={{ display: "block", fontSize: 15, fontWeight: 600 }}>{t.kpis[i].label}</span>
                  <span style={{ display: "block", fontSize: 30, fontWeight: 700, marginTop: 4, lineHeight: 1.1 }}>{k.value}</span>
                  <span style={{ display: "block", fontSize: 15, color: C.body, marginTop: 6 }}>{t.kpis[i].note}</span>
                </span>
              </div>
            ))}
          </div>
          <JobsTable t={t} />
        </div>
      </div>
    </div>
  );
}

/** Desktop window in the "Connected" composition (left of the technician's phone). */
export function JobsMock({ copy }: { copy: MockCopy }) {
  return (
    <div
      aria-hidden="true"
      className="fo-mock"
      style={{
        position: "absolute",
        left: 1,
        top: 4,
        width: FRAME_W,
        background: "var(--m-surface)",
        borderRadius: 8,
        boxShadow: "0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ zoom: FRAME_W / NATIVE_W }}>
        <Screen m={copy} />
      </div>
    </div>
  );
}
