import type { CSSProperties, ReactNode } from "react";
import type { MockCopy } from "@/content/mock-copy";
import { APP_SIDEBAR_WIDTH, AppSidebar } from "../AppSidebar";
import { Icon } from "../mock-frames";

/*
 * Job profitability report, recreated from the real app screen at its native size
 * (1470 × 910, plus the shared sidebar) and scaled into the frame with CSS zoom, like a screenshot.
 * Labels, dates and categories come from the mock copy (`reports`).
 */

type Copy = MockCopy["reports"];

const NATIVE_W = 1470;
const NATIVE_H = 910;

const C = {
  ink: "var(--m-ink)",
  body: "var(--m-body)",
  muted: "var(--m-muted)",
  line: "var(--m-line)",
  soft: "var(--m-bg)",
  blue: "#2563eb",
  blueSoft: "var(--m-bar-soft)",
  green: "var(--m-money)",
  red: "var(--m-red-fg)",
  teal: "#135f66",
};

const field: CSSProperties = {
  height: 32,
  border: `1px solid ${C.line}`,
  borderRadius: 4,
  background: "var(--m-surface)",
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 12px",
  fontSize: 13.5,
  color: C.ink,
  whiteSpace: "nowrap",
};

function Select({ children, width }: { children: ReactNode; width: number }) {
  return (
    <div style={{ ...field, width, justifyContent: "space-between" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>{children}</span>
      <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
    </div>
  );
}

function OutlineButton({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div style={{ height: 38, padding: "0 16px", border: `1px solid ${C.blue}`, borderRadius: 4, display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, color: "var(--m-blue-fg)", background: "var(--m-surface)", whiteSpace: "nowrap" }}>
      <Icon name={icon} size={15} />
      {children}
    </div>
  );
}

// Labels come from the mock copy (`reports.categories`), in this order.
const CATEGORIES = [
  { icon: "pi-star", count: 4 },
  { icon: "pi-wrench", count: 5 },
  { icon: "pi-file", count: 3 },
  { icon: "pi-credit-card", count: 5 },
  { icon: "pi-users", count: 3 },
  { icon: "pi-user-plus", count: 4 },
  { icon: "pi-shield", count: 1 },
];

// Labels come from the mock copy (`reports.kpis`), in this order.
const KPIS = [
  { value: "426", color: C.ink },
  { value: "$128,450", color: C.green },
  { value: "$73,630", color: C.red },
  { value: "$54,820", color: C.green },
  { value: "42.7%", color: C.ink },
];

// Category names come from the mock copy (`reports.categoriesChart`), in this order.
const BARS = [
  { revenue: 28420, cost: 16230 },
  { revenue: 38750, cost: 22480 },
  { revenue: 24360, cost: 14900 },
  { revenue: 18600, cost: 13280 },
  { revenue: 8320, cost: 6740 },
];

const COLS = "28px 66px 104px 118px 82px 112px 84px 80px 92px 68px minmax(0,1fr)";
// The completion date (column 1) and service (column 3) are filled in from the mock copy.
const ROWS = [
  ["WO-1048", "", "Sofia Martinez", "", "Carlos Rivera", "$357.28", "$178.50", "$178.78", "50.0%", "Austin Central"],
  ["WO-1053", "", "Robert Chen", "", "Miguel Santos", "$489.00", "$302.00", "$187.00", "38.2%", "North Austin"],
  ["WO-1057", "", "Mark Stevens", "", "Priya Shah", "$315.00", "$182.00", "$133.00", "42.2%", "Austin Central"],
  ["WO-1035", "", "BrightLine Offices", "", "Ethan Wright", "$1,560.00", "$1,114.00", "$446.00", "28.6%", "North Austin"],
  ["WO-1056", "", "Jennifer Walsh", "", "Luis Garcia", "$325.00", "$171.00", "$154.00", "47.4%", "Round Rock"],
];
const LOW_MARGIN = 3;

const Check = () => <span style={{ width: 13, height: 13, border: "1px solid var(--m-faint)", borderRadius: 2, background: "var(--m-surface)" }} />;

function TopBar({ t }: { t: Copy }) {
  return (
    <div style={{ height: 46, borderBottom: `1px solid ${C.line}`, display: "flex", alignItems: "center", gap: 18, padding: "0 16px" }}>
      <div style={{ ...field, width: 500, height: 34, color: C.body, fontSize: 14 }}>
        <Icon name="pi-search" size={15} style={{ color: "var(--m-link)" }} /> {t.search}
      </div>
      <div style={{ marginLeft: "auto", ...field, height: 34, gap: 12, fontSize: 14 }}>
        <Icon name="pi-building" size={15} style={{ color: C.body }} /> {t.allBranches} <Icon name="pi-chevron-down" size={11} />
      </div>
      <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: C.body }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#0f9d6b" }} /> {t.updated}
      </span>
      <span style={{ position: "relative", color: C.body, display: "inline-flex" }}>
        <Icon name="pi-bell" size={19} />
        <span style={{ position: "absolute", top: -7, right: -7, width: 15, height: 15, borderRadius: "50%", background: "#e5484d", color: "#fff", fontSize: 9, fontWeight: 700, display: "grid", placeItems: "center" }}>3</span>
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--m-subtle)", color: C.ink, fontSize: 14, fontWeight: 700, display: "grid", placeItems: "center" }}>AM</span>
        <span style={{ lineHeight: 1.25 }}>
          <span style={{ display: "block", fontSize: 14, fontWeight: 600, color: C.ink }}>Alex Morgan</span>
          <span style={{ display: "block", fontSize: 13, color: C.body }}>{t.role}</span>
        </span>
        <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
      </span>
    </div>
  );
}

function ReportsPanel({ t }: { t: Copy }) {
  const item: CSSProperties = { display: "flex", alignItems: "center", gap: 12, height: 34.5, fontSize: 14.5, color: C.ink };
  return (
    <div style={{ width: 282, flex: "none", border: `1px solid ${C.line}`, borderRadius: 6, background: "var(--m-surface)", padding: "10px 10px 0", overflow: "hidden" }}>
      <div style={{ ...field, height: 34, color: C.muted }}>
        <Icon name="pi-search" size={14} style={{ color: C.body }} /> {t.searchReports}
      </div>
      <div style={{ marginTop: 14, padding: "0 4px" }}>
        {CATEGORIES.map((c, i) => (
          <div key={c.icon} style={item}>
            <Icon name={c.icon} size={16} style={{ color: C.body, width: 18 }} />
            {t.categories[i]}
            <span style={{ marginLeft: "auto", minWidth: 22, height: 20, borderRadius: 4, background: "var(--m-line-soft)", color: C.body, fontSize: 12, display: "grid", placeItems: "center" }}>{c.count}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${C.line}`, margin: "12px 0 8px" }} />
      <div style={{ ...item, padding: "0 4px" }}>
        <Icon name="pi-history" size={16} style={{ color: C.body, width: 18 }} /> {t.recent}
      </div>
      {t.recentItems.map((r, i) => (
        <div key={r} style={{ ...item, height: 31.5, paddingLeft: 22, borderRadius: 4, background: i === 0 ? "var(--m-blue-bg)" : undefined, fontWeight: i === 0 ? 500 : 400, color: i === 0 ? "var(--m-blue-fg)" : C.ink }}>
          {r}
        </div>
      ))}
      <div style={{ borderTop: `1px solid ${C.line}`, margin: "12px 0 10px" }} />
      <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, padding: "0 4px" }}>{t.reportsHeading}</div>
      <div style={{ ...item, padding: "0 4px", marginTop: 6 }}>
        <Icon name="pi-users" size={16} style={{ color: C.body, width: 18 }} />
        <span style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>{t.operations}</span>
        <Icon name="pi-chevron-down" size={12} style={{ marginLeft: "auto", color: C.body }} />
      </div>
      {t.operationItems.map((o) => (
        <div key={o} style={{ height: 27.5, paddingLeft: 34, fontSize: 13.5, color: C.body, display: "flex", alignItems: "center" }}>
          {o}
        </div>
      ))}
      <div style={{ ...item, padding: "0 4px", marginTop: 6 }}>
        <Icon name="pi-file" size={16} style={{ color: C.body, width: 18 }} /> {t.salesQuotes}
        <Icon name="pi-chevron-down" size={12} style={{ marginLeft: "auto", color: C.body }} />
      </div>
    </div>
  );
}

function Chart({ t }: { t: Copy }) {
  const max = 50000;
  const ticks = [0, 10, 20, 30, 40, 50];
  const plotW = 650;
  return (
    <div style={{ flex: 1, minWidth: 0, border: `1px solid ${C.line}`, borderRadius: 6, padding: "12px 12px 10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 14.5, fontWeight: 700, color: C.ink }}>{t.chartTitle}</span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 18, fontSize: 12, color: C.body }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.blue }} /> {t.legend[0]}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.blueSoft }} /> {t.legend[1]}
          </span>
        </span>
      </div>
      <div style={{ position: "relative", marginTop: 14, marginLeft: 100, width: plotW, height: 158 }}>
        {ticks.map((t) => (
          <span key={t} style={{ position: "absolute", left: (t / 50) * plotW, top: 0, bottom: 0, width: 1, background: "var(--m-line-soft)" }} />
        ))}
        {BARS.map((b, i) => (
          <div key={b.revenue} style={{ position: "absolute", left: 0, right: 0, top: i * 31 + 2 }}>
            <span style={{ position: "absolute", right: "100%", marginRight: 12, top: 4, fontSize: 13, color: C.ink, whiteSpace: "nowrap" }}>{t.categoriesChart[i]}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, height: 10 }}>
              <span className="fo-bar" style={{ width: (b.revenue / max) * plotW, height: 10, background: C.blue, borderRadius: "0 2px 2px 0" }} />
              <span style={{ fontSize: 11, color: C.ink }}>${b.revenue.toLocaleString("en-US")}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, height: 10, marginTop: 2 }}>
              <span className="fo-bar" style={{ width: (b.cost / max) * plotW, height: 10, background: C.blueSoft, borderRadius: "0 2px 2px 0" }} />
              <span style={{ fontSize: 11, color: C.body }}>${b.cost.toLocaleString("en-US")}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "relative", marginLeft: 100, width: plotW, height: 18, marginTop: 6 }}>
        {ticks.map((t) => (
          <span key={t} style={{ position: "absolute", left: (t / 50) * plotW, transform: "translateX(-50%)", fontSize: 11.5, color: C.body }}>
            {t === 0 ? "0" : `${t}K`}
          </span>
        ))}
      </div>
    </div>
  );
}

function Definitions({ t }: { t: Copy }) {
  return (
    <div style={{ width: 312, flex: "none", border: `1px solid ${C.line}`, borderRadius: 6, background: "var(--m-card-tint)", padding: "12px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14.5, fontWeight: 700, color: C.ink }}>
        <Icon name="pi-info-circle" size={15} style={{ color: "var(--m-link)" }} /> {t.definitionsTitle}
      </div>
      {t.definitions.map((d) => (
        <div key={d.term} style={{ marginTop: 10 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: C.ink }}>{d.term}</div>
          <div style={{ fontSize: 13, lineHeight: 1.35, color: C.body, marginTop: 1 }}>{d.text}</div>
        </div>
      ))}
      <div style={{ marginTop: 12, background: "var(--m-blue-bg)", borderRadius: 6, padding: "10px 12px", display: "flex", gap: 10, fontSize: 13, lineHeight: 1.35, color: "var(--m-blue-fg)" }}>
        <Icon name="pi-info-circle" size={14} style={{ color: "var(--m-link)", marginTop: 2 }} />
        {t.definitionsNote}
      </div>
    </div>
  );
}

function ProfitTable({ t }: { t: Copy }) {
  const cell: CSSProperties = { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" };
  return (
    <div style={{ border: `1px solid ${C.line}`, borderRadius: 6, overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: COLS, alignItems: "center", height: 32, padding: "0 10px", background: C.soft, fontSize: 12, fontWeight: 600, color: C.ink }}>
        <Check />
        {t.columns.map((h) => (
          <span key={h} style={{ ...cell, display: "flex", alignItems: "center", gap: 4 }}>
            {h} <Icon name="pi-sort-alt" size={9} style={{ color: C.muted }} />
          </span>
        ))}
      </div>
      {ROWS.map((r, i) => (
        <div key={r[0]} className="fo-stagger" style={{ "--i": i + 2, display: "grid", gridTemplateColumns: COLS, alignItems: "center", height: 25.5, padding: "0 10px", borderTop: "1px solid var(--m-line-soft)", fontSize: 12, color: C.ink } as CSSProperties}>
          <Check />
          {r.map((value, j) => {
            const v = j === 1 ? t.rowDates[i] : j === 3 ? t.rowServices[i] : value;
            return (
            <span
              key={j}
              style={{
                ...cell,
                color: j === 0 ? "var(--m-link)" : undefined,
                fontWeight: j === 0 ? 500 : undefined,
                ...(i === LOW_MARGIN && j === 8 ? { background: "var(--m-amber-bg)", color: "var(--m-amber-fg)", borderRadius: 3, padding: "2px 6px", justifySelf: "start" } : {}),
              }}
            >
              {v}
            </span>
            );
          })}
        </div>
      ))}
      <div style={{ display: "flex", alignItems: "center", height: 44, padding: "0 10px", borderTop: `1px solid ${C.line}`, fontSize: 13, color: C.body }}>
        {t.showing}
        <span style={{ marginLeft: 214, display: "flex", gap: 30, fontWeight: 700, color: C.ink }}>
          <span>{t.total}</span>
          <span>$3,046.28</span>
          <span>$1,947.50</span>
          <span>$1,098.78</span>
          <span>36.1%</span>
        </span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {["pi-chevron-left", "1", "pi-chevron-right"].map((p) => (
            <span key={p} style={{ width: 30, height: 30, borderRadius: 4, border: `1px solid ${C.line}`, display: "grid", placeItems: "center", background: p === "1" ? "var(--m-blue-bg)" : "var(--m-surface)", color: p === "1" ? "var(--m-link)" : C.muted, fontWeight: 600 }}>
              {p.startsWith("pi-") ? <Icon name={p} size={11} /> : p}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

function Screen({ t }: { t: Copy }) {
  return (
    <div style={{ width: NATIVE_W, minHeight: NATIVE_H, paddingBottom: 14, background: "var(--m-surface)", color: C.ink, fontSize: 14, flex: "none" }}>
      <TopBar t={t} />
      <div style={{ padding: "10px 16px 0" }}>
        <div style={{ fontSize: 13, color: C.muted }}>/ {t.crumb} /</div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 29, fontWeight: 700, letterSpacing: "-0.01em" }}>{t.title}</div>
            <div style={{ fontSize: 15, color: C.body, marginTop: 2 }}>{t.subtitle}</div>
          </div>
          <div style={{ marginLeft: "auto", marginTop: 6 }}>
            <OutlineButton icon="pi-clock">{t.exportHistory}</OutlineButton>
          </div>
        </div>
        <div style={{ marginTop: 18, border: `1px solid ${C.line}`, borderRadius: 6, padding: "8px 10px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ ...field, width: 292, height: 34 }}>
            <Icon name="pi-calendar" size={15} style={{ color: C.body }} /> {t.range}
          </div>
          <Select width={252}>{t.allBranches}</Select>
          <span style={{ marginLeft: 16, width: 50, height: 28, borderRadius: 999, background: C.blue, position: "relative", flex: "none" }}>
            <span style={{ position: "absolute", right: 3, top: 3, width: 22, height: 22, borderRadius: "50%", background: "var(--m-surface)" }} />
          </span>
          <span style={{ lineHeight: 1.3 }}>
            <span style={{ display: "block", fontSize: 14, fontWeight: 600 }}>{t.compare}</span>
            <span style={{ display: "block", fontSize: 13, color: C.body }}>{t.compareRange}</span>
          </span>
        </div>

        <div style={{ marginTop: 10, display: "flex", gap: 12 }}>
          <ReportsPanel t={t} />
          <div style={{ flex: 1, minWidth: 0, border: `1px solid ${C.line}`, borderRadius: 6, padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 24, fontWeight: 700 }}>
                  <Icon name="pi-star-fill" size={20} style={{ color: "#f59e0b" }} /> {t.reportTitle}
                </div>
                <div style={{ fontSize: 14.5, color: C.body, marginTop: 2, marginLeft: 32 }}>{t.reportSubtitle}</div>
              </div>
              <span style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
                <OutlineButton icon="pi-download">{t.exportCsv}</OutlineButton>
                <OutlineButton icon="pi-file">{t.downloadPdf}</OutlineButton>
              </span>
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 16, fontSize: 13, color: C.ink }}>
              {[
                { label: t.filterLabels[0], width: 228, value: <><Icon name="pi-calendar" size={14} style={{ color: C.body }} /> {t.filterValues[0]}</>, select: false },
                { label: t.filterLabels[1], width: 176, value: t.filterValues[1], select: true },
                { label: t.filterLabels[2], width: 186, value: t.filterValues[2], select: true },
                { label: t.filterLabels[3], width: 200, value: t.filterValues[3], select: true },
                { label: t.filterLabels[4], width: 156, value: t.filterValues[4], select: true },
              ].map((f) => (
                <div key={f.label}>
                  <div style={{ marginBottom: 5 }}>{f.label}</div>
                  {f.select ? <Select width={f.width}>{f.value}</Select> : <div style={{ ...field, width: f.width }}>{f.value}</div>}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
              <span style={{ height: 34, padding: "0 24px", borderRadius: 4, background: C.teal, color: "#fff", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center" }}>{t.apply}</span>
              <span style={{ height: 34, padding: "0 30px", borderRadius: 4, border: `1px solid ${C.blue}`, color: "var(--m-blue-fg)", fontSize: 14, display: "flex", alignItems: "center" }}>{t.reset}</span>
            </div>
            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 10 }}>
              {KPIS.map((k, i) => (
                <div key={k.value} className="fo-stagger" style={{ "--i": i, height: 72, border: `1px solid ${C.line}`, borderRadius: 6, padding: "10px 14px" } as CSSProperties}>
                  <div style={{ fontSize: 14, color: C.ink, whiteSpace: "nowrap" }}>{t.kpis[i]}</div>
                  <div style={{ fontSize: 25, fontWeight: 700, color: k.color, marginTop: 4, letterSpacing: "-0.01em" }}>{k.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
              <Chart t={t} />
              <Definitions t={t} />
            </div>
            <div style={{ marginTop: 10 }}>
              <ProfitTable t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Window frame holding the report screen, scaled to the frame width (see .fo-data-stage). */
export function ReportsMock({ copy }: { copy: MockCopy }) {
  return (
    <div
      className="fo-stage fo-data-stage fo-mock"
      data-reveal="right"
      aria-hidden="true"
      style={{ background: "var(--m-surface)", borderRadius: 8, boxShadow: "0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)", overflow: "hidden" }}
    >
      <div className="fo-report-screen" style={{ display: "flex", width: APP_SIDEBAR_WIDTH + NATIVE_W }}>
        <AppSidebar active="Reports" copy={copy.sidebar} />
        <Screen t={copy.reports} />
      </div>
    </div>
  );
}
