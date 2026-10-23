import type { CSSProperties } from "react";
import type { MockCopy } from "@/content/mock-copy";
import { AppSidebar } from "../AppSidebar";
import { Icon } from "../mock-frames";

/*
 * "Dispatch calendar" screen, recreated from the real app design at its native 1672×941
 * and scaled into the frame with CSS zoom, like a screenshot.
 * Event titles, skills and dates are looked up in the mock copy (`dispatch`).
 */

type Copy = MockCopy["dispatch"];

const NATIVE_W = 1672;
const FRAME_W = 757;

const C = {
  ink: "var(--m-ink)",
  body: "var(--m-body)",
  muted: "var(--m-muted)",
  line: "var(--m-line)",
  teal: "#0f8c89",
  tealDark: "var(--m-teal-fg)",
  side: "#0d1f3c",
};

const box: CSSProperties = {
  height: 38,
  border: `1px solid ${C.line}`,
  borderRadius: 6,
  background: "var(--m-surface)",
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "0 12px",
  fontSize: 14.5,
  color: C.ink,
  whiteSpace: "nowrap",
};

const check = (
  <span style={{ width: 17, height: 17, flex: "none", borderRadius: 4, background: "#18a06e", color: "#fff", display: "grid", placeItems: "center" }}>
    <Icon name="pi-check" size={10} />
  </span>
);

/* ---------- unscheduled jobs ---------- */

const PRIORITY = {
  High: { icon: "pi-arrow-up", color: "var(--m-red-fg)" },
  Medium: { icon: "pi-circle-fill", color: "#f59e0b" },
  Low: { icon: "pi-arrow-up", color: "#16a34a" },
};

// Title, date and tags come from the mock copy (`dispatch.jobs`), in this order.
const UNSCHEDULED = [
  { wo: "#WO-3091", priority: "High", dur: "2h", who: "Sofia Martinez", addr: "1842 Oak Street, Austin, TX", selected: true },
  { wo: "#WO-3092", priority: "Medium", dur: "1.5h", who: "Robert Chen", addr: "2710 Maple Ave, Austin, TX" },
  { wo: "#WO-3093", priority: "Medium", dur: "3h", who: "Maria Lopez", addr: "3901 Cedar Park Dr, Austin, TX" },
  { wo: "#WO-3094", priority: "Low", dur: "4h", who: "Jennifer Wilson", addr: "1205 Barton Hills Dr, Austin, TX" },
] as const;

function UnscheduledPanel({ c }: { c: Copy }) {
  const line: CSSProperties = { display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: C.ink, marginTop: 5, whiteSpace: "nowrap" };
  return (
    <div style={{ width: 294, flex: "none", border: `1px solid ${C.line}`, borderRadius: 8, background: "var(--m-surface)", padding: "10px 10px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 700 }}>{c.unscheduled}</span>
        <span style={{ marginLeft: "auto", width: 22, height: 22, borderRadius: 5, background: "var(--m-subtle)", fontSize: 13, fontWeight: 600, color: C.body, display: "grid", placeItems: "center" }}>4</span>
      </div>
      <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, fontSize: 13 }}>
        {c.tabs.map((t, i) => (
          <span key={t} style={{ height: 27, borderRadius: 5, display: "grid", placeItems: "center", background: i === 0 ? C.teal : "transparent", color: i === 0 ? "#fff" : C.ink, fontWeight: i === 0 ? 600 : 400 }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ ...box, marginTop: 10, height: 32, color: C.muted, fontSize: 13.5 }}>
        <Icon name="pi-search" size={14} style={{ color: C.body }} /> {c.searchJobs}
      </div>
      {UNSCHEDULED.map((j, i) => {
        const p = PRIORITY[j.priority];
        const copy = c.jobs[i];
        return (
          <div
            key={j.wo}
            className="fo-stagger"
            style={{
              "--i": i,
              marginTop: 10,
              borderRadius: 8,
              padding: "10px 12px 10px 10px",
              display: "flex",
              gap: 12,
              border: "selected" in j ? "1.5px dashed #2bb3a3" : `1px solid ${C.line}`,
              background: "selected" in j ? "var(--m-teal-bg)" : "var(--m-surface)",
            } as CSSProperties}
          >
            <Icon name="pi-ellipsis-v" size={14} style={{ color: C.body, marginTop: 14 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{copy.title}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13.5, marginTop: 3 }}>
                <span style={{ color: C.body }}>{j.wo}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 5, color: p.color, fontWeight: 600 }}>
                  <Icon name={p.icon} size={11} /> {c.priority[j.priority]}
                </span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
                  <Icon name="pi-clock" size={12} style={{ color: C.body }} /> {j.dur}
                </span>
              </div>
              <div style={line}>
                <Icon name="pi-user" size={12} style={{ color: C.body, width: 14 }} /> {j.who}
              </div>
              <div style={line}>
                <Icon name="pi-map-marker" size={12} style={{ color: C.body, width: 14 }} /> {j.addr}
              </div>
              <div style={line}>
                <Icon name="pi-calendar" size={12} style={{ color: C.body, width: 14 }} /> {copy.when}
              </div>
              <div style={{ marginTop: 9, display: "flex", gap: 6 }}>
                {copy.tags.map((t) => (
                  <span key={t} style={{ height: 24, padding: "0 10px", borderRadius: 999, background: "selected" in j ? "var(--m-blue-bg)" : "var(--m-subtle)", color: C.ink, fontSize: 12.5, fontWeight: 500, display: "flex", alignItems: "center" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- calendar ---------- */

const TONE = {
  blue: { bg: "var(--m-blue-bg)", border: "var(--m-blue-bd)" },
  green: { bg: "var(--m-green-bg)", border: "var(--m-green-bd)" },
  purple: { bg: "var(--m-purple-bg)", border: "var(--m-purple-bd)" },
  orange: { bg: "var(--m-amber-bg)", border: "var(--m-amber-bd)" },
  proposed: { bg: "var(--m-teal-bg)", border: "#2bb3a3" },
  overlap: { bg: "var(--m-amber-bg)", border: "var(--m-amber-bd)" },
};

type Item =
  | { time: string; title: string; wo: string; place?: string; tone: keyof typeof TONE; note?: boolean }
  | { travel: number }
  | { gap: number };

type Tech = { initials: string; name: string; skill: "" | keyof Copy["skills"]; avatar: { bg: string; fg: string }; best?: boolean; load: string; pct: number; bar: string; days: Item[][] };

const TECHS: Tech[] = [
  {
    initials: "CR",
    name: "Carlos Rivera",
    skill: "Plumbing",
    avatar: { bg: "var(--m-teal-bg)", fg: "var(--m-teal-fg)" },
    best: true,
    load: "3 / 8h",
    pct: 0.5,
    bar: "#2bb3a3",
    days: [
      [],
      [
        { time: "8:00 – 10:00", title: "Toilet repair", wo: "#WO-3088", place: "Westlake Dr", tone: "blue" },
        { travel: 10 },
        { time: "10:30 – 12:00", title: "Pipe inspection", wo: "#WO-3089", place: "Riverside Ave", tone: "green" },
      ],
      [
        { gap: 26 },
        { time: "9:30 – 11:30", title: "Kitchen sink leak repair", wo: "#WO-3091", tone: "proposed" },
        { travel: 18 },
        { time: "12:15 – 2:15", title: "Water heater repair", wo: "#WO-3087", place: "Maple Ave", tone: "purple" },
      ],
      [
        { gap: 14 },
        { time: "9:00 – 11:00", title: "Garbage disposal", wo: "#WO-3095", place: "Cedar Park Dr", tone: "orange" },
        { travel: 12 },
        { time: "11:30 – 1:30", title: "Faucet replacement", wo: "#WO-3096", place: "Hillcrest Ave", tone: "blue" },
      ],
      [
        { gap: 8 },
        { time: "8:30 – 11:30", title: "Sewer line inspection", wo: "#WO-3097", place: "Oak Ridge Dr", tone: "green" },
        { travel: 15 },
        { time: "12:15 – 4:00", title: "Water heater install", wo: "#WO-3098", place: "Pine St", tone: "purple" },
      ],
    ],
  },
  {
    initials: "MT",
    name: "Maya Thompson",
    skill: "",
    avatar: { bg: "var(--m-blue-bg)", fg: "var(--m-blue-fg)" },
    load: "5 / 8h",
    pct: 0.68,
    bar: "#f5a524",
    days: [
      [{ gap: 16 }, { time: "9:00 – 12:00", title: "AC maintenance", wo: "#WO-3085", place: "Lakeview Ave", tone: "blue" }],
      [
        { time: "8:30 – 11:30", title: "AC repair", wo: "#WO-3086", place: "Barton Creek", tone: "blue" },
        { travel: 15 },
        { time: "12:00 – 3:00", title: "HVAC installation", wo: "#WO-3080", place: "Red River St", tone: "blue" },
      ],
      [{ gap: 26 }, { time: "9:30 – 11:30", title: "AC diagnostic", wo: "#WO-3092", tone: "overlap", note: true }],
      [{ time: "8:00 – 12:00", title: "System tune-up", wo: "#WO-3084", place: "Sunset Dr", tone: "blue" }],
      [{ gap: 96 }, { time: "1:00 – 4:00", title: "HVAC repair", wo: "#WO-3090", place: "Domain Ave", tone: "blue" }],
    ],
  },
  {
    initials: "DB",
    name: "Daniel Brooks",
    skill: "General Repair",
    avatar: { bg: "#e3f2fd", fg: "var(--m-blue-fg)" },
    load: "",
    pct: 0.5,
    bar: "#2bb3a3",
    days: [
      [
        { time: "8:00 – 11:00", title: "Fence repair", wo: "#WO-3079", place: "Circle C Rd", tone: "blue" },
        { travel: 12 },
        { time: "11:30 – 2:30", title: "Deck repair", wo: "#WO-3081", place: "Twin Creeks", tone: "blue" },
      ],
      [
        { time: "9:00 – 12:00", title: "Drywall repair", wo: "#WO-3082", place: "Oak Hill Dr", tone: "blue" },
        { travel: 15 },
        { time: "12:30 – 4:30", title: "Fence staining", wo: "#WO-3083", place: "Maple Run", tone: "blue" },
      ],
      [{ time: "8:30 – 11:30", title: "Door installation", wo: "#WO-3084", place: "Westgate Blvd", tone: "blue" }],
      [
        { time: "9:00 – 12:00", title: "Cabinet repair", wo: "#WO-3085", place: "Mueller Blvd", tone: "blue" },
        { gap: 6 },
        { time: "1:00 – 4:00", title: "Fence repair", wo: "#WO-3089", place: "Sendero Springs", tone: "blue" },
      ],
      [{ time: "8:00 – 12:00", title: "General repairs", wo: "#WO-3090", place: "Various", tone: "purple" }],
    ],
  },
];

// Day labels come from the mock copy (`dispatch.weekdays`); Wednesday is today.
const TODAY = 2;

const ROW_H = [236, 194, 192];
const GRID = "130px repeat(5, minmax(0, 1fr))";

function CalendarItem({ item, c }: { item: Item; c: Copy }) {
  if ("gap" in item) return <span style={{ height: item.gap, flex: "none" }} />;
  if ("travel" in item)
    return (
      <span style={{ height: 22, flex: "none", borderRadius: 4, background: "var(--m-subtle)", color: C.body, fontSize: 12, display: "flex", alignItems: "center", gap: 6, padding: "0 8px" }}>
        <span style={{ fontSize: 13 }}>+</span> {item.travel} {c.travel}
      </span>
    );
  const t = TONE[item.tone];
  const dashed = item.tone === "proposed" || item.tone === "overlap";
  return (
    <div
      style={{
        position: "relative",
        flex: "none",
        borderRadius: 5,
        background: t.bg,
        border: `${dashed ? "1.5px dashed" : "1px solid"} ${t.border}`,
        padding: "5px 8px 6px",
        fontSize: 12.5,
        lineHeight: 1.3,
        color: C.ink,
      }}
    >
      <div>{item.time}</div>
      <div style={{ fontWeight: 600 }}>{c.events[item.title] ?? item.title}</div>
      <div style={{ color: C.body }}>{item.wo}</div>
      {item.place && <div style={{ color: C.body }}>{item.place}</div>}
      {item.note && <div style={{ color: "var(--m-amber-fg)", fontWeight: 500 }}>{c.overlap}</div>}
      {item.tone === "overlap" && <Icon name="pi-exclamation-triangle" size={15} style={{ position: "absolute", right: 8, bottom: 8, color: "#e8920c" }} />}
      {item.tone === "proposed" && <Icon name="pi-arrow-up-left" size={13} style={{ position: "absolute", right: 10, bottom: 8, color: C.ink }} />}
    </div>
  );
}

function Calendar({ c }: { c: Copy }) {
  const cellBorder = `1px solid ${C.line}`;
  return (
    <div style={{ flex: 1, minWidth: 0, border: cellBorder, borderRadius: 8, background: "var(--m-surface)", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: GRID, height: 57, borderBottom: cellBorder }}>
        <span />
        {c.weekdays.map(([d, n], i) => (
          <span key={n} style={{ borderLeft: cellBorder, display: "grid", placeContent: "center", textAlign: "center", fontSize: 14.5, fontWeight: 500, lineHeight: 1.35, background: i === TODAY ? "var(--m-today)" : undefined, color: i === TODAY ? "var(--m-blue-fg)" : C.ink }}>
            <span>{d}</span>
            <span>{n}</span>
          </span>
        ))}
      </div>
      {TECHS.map((tech, ti) => (
        <div key={tech.initials} style={{ display: "grid", gridTemplateColumns: GRID, height: ROW_H[ti], borderBottom: ti < TECHS.length - 1 ? cellBorder : undefined }}>
          <div style={{ padding: "26px 0 0 16px" }}>
            <span style={{ width: 48, height: 48, borderRadius: "50%", background: tech.avatar.bg, color: tech.avatar.fg, fontSize: 19, fontWeight: 700, display: "grid", placeItems: "center" }}>{tech.initials}</span>
            <div style={{ marginTop: 10, fontSize: 14.5, fontWeight: 700 }}>{tech.name}</div>
            {tech.skill && <div style={{ fontSize: 13, color: C.body, marginTop: 2 }}>{c.skills[tech.skill]}</div>}
            {tech.best && (
              <span style={{ marginTop: 8, height: 23, padding: "0 9px", borderRadius: 5, background: "var(--m-green-bg)", color: "var(--m-green-fg)", fontSize: 12.5, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="pi-star-fill" size={11} /> {c.bestMatch}
              </span>
            )}
            {tech.load && <div style={{ marginTop: 10, fontSize: 13.5, fontWeight: 500 }}>{tech.load}</div>}
            <div style={{ marginTop: 6, width: 98, height: 8, borderRadius: 4, background: "var(--m-line)" }}>
              <div className="fo-fill-anim" style={{ width: `${tech.pct * 100}%`, height: "100%", borderRadius: 4, background: tech.bar }} />
            </div>
          </div>
          {tech.days.map((items, di) => (
            <div key={di} style={{ borderLeft: cellBorder, padding: "8px 5px", display: "flex", flexDirection: "column", gap: 5, overflow: "hidden", background: di === TODAY ? "var(--m-bg)" : undefined }}>
              {items.map((item, ii) => (
                <CalendarItem key={ii} item={item} c={c} />
              ))}
            </div>
          ))}
        </div>
      ))}
      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr", borderTop: cellBorder, height: 34, alignItems: "center", fontSize: 12, color: C.body }}>
        <span />
        <span style={{ display: "flex", justifyContent: "space-between", paddingRight: 30 }}>
          {c.hours.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </span>
      </div>
      <div style={{ height: 40, display: "flex", alignItems: "center", gap: 24, padding: "0 18px", fontSize: 13, color: C.body }}>
        {[
          { label: c.legend[0], s: { background: "var(--m-blue-bd)" } },
          { label: c.legend[1], s: { border: "1.5px dashed #2bb3a3" } },
          { label: c.legend[2], s: { border: `1px solid ${C.line}`, background: "var(--m-line-soft)" } },
          { label: c.legend[3], s: { background: "#f8b4b4" } },
        ].map((l) => (
          <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 16, height: 16, borderRadius: 3, ...l.s }} /> {l.label}
          </span>
        ))}
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ position: "relative", width: 22, height: 2, background: "#e5484d" }}>
            <span style={{ position: "absolute", left: 7, top: -3, width: 8, height: 8, borderRadius: "50%", background: "#e5484d" }} />
          </span>
          {c.legend[4]}
        </span>
      </div>
    </div>
  );
}

/* ---------- assign panel ---------- */

function AssignPanel({ c }: { c: Copy["assign"] }) {
  const label: CSSProperties = { fontSize: 15, fontWeight: 700, marginTop: 14 };
  const row: CSSProperties = { display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, marginTop: 5 };
  const select = (text: string, w?: number) => (
    <div style={{ ...box, height: 32, fontSize: 13.5, justifyContent: "space-between", width: w }}>
      {text} <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
    </div>
  );
  return (
    <div style={{ width: 362, flex: "none", border: `1px solid ${C.line}`, borderRadius: 8, background: "var(--m-surface)", padding: "12px 16px 0", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 700 }}>{c.title}</span>
        <Icon name="pi-times" size={14} style={{ marginLeft: "auto", color: C.body }} />
      </div>
      <div style={{ marginTop: 14, display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ width: 38, height: 38, borderRadius: 8, background: "var(--m-subtle)", display: "grid", placeItems: "center", color: C.body }}>
          <Icon name="pi-file" size={17} />
        </span>
        <span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>#WO-3091</span>
            <span style={{ height: 23, padding: "0 10px", borderRadius: 999, background: "var(--m-amber-bg)", color: "var(--m-amber-fg)", fontSize: 12.5, fontWeight: 600, display: "flex", alignItems: "center" }}>{c.unscheduled}</span>
          </span>
          <span style={{ display: "block", fontSize: 13.5, color: C.body, marginTop: 3 }}>{c.job}</span>
        </span>
      </div>
      <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 12 }} />
      <div style={label}>{c.customer}</div>
      <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
        <span style={{ width: 54, height: 54, flex: "none", borderRadius: "50%", background: "var(--m-teal-bg)", color: C.tealDark, fontSize: 20, fontWeight: 700, display: "grid", placeItems: "center" }}>SM</span>
        <span>
          <span style={{ display: "block", fontSize: 14.5, fontWeight: 700 }}>Sofia Martinez</span>
          <span style={{ ...row, color: "var(--m-blue-fg)" }}>
            <Icon name="pi-phone" size={12} style={{ color: C.body }} /> (512) 555-0142
          </span>
          <span style={row}>
            <Icon name="pi-map-marker" size={12} style={{ color: C.body }} /> 1842 Oak Street, Austin, TX 78704
          </span>
        </span>
      </div>
      <div style={label}>{c.schedule}</div>
      <div style={row}>
        <Icon name="pi-calendar" size={13} style={{ color: C.body, width: 16 }} /> {c.date}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6, fontSize: 13.5 }}>
        <span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name="pi-clock" size={13} style={{ color: C.body }} /> {c.start} <span style={{ color: "var(--m-red-fg)" }}>*</span>
          </span>
          <span style={{ display: "block", marginTop: 4, marginLeft: 24 }}>{select(c.startValue)}</span>
        </span>
        <span>
          <span>
            {c.end} <span style={{ color: "var(--m-red-fg)" }}>*</span>
          </span>
          <span style={{ display: "block", marginTop: 4 }}>{select(c.endValue)}</span>
        </span>
      </div>
      <div style={{ fontSize: 13.5, marginTop: 9 }}>{c.window}</div>
      <div style={{ marginTop: 4 }}>{select(c.windowValue)}</div>
      <div style={{ ...label, display: "flex", alignItems: "center", gap: 10 }}>
        {c.technician} <span style={{ width: 10, height: 1, background: C.muted }} />
      </div>
      <div style={{ ...box, height: 48, marginTop: 6, gap: 12, justifyContent: "space-between" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--m-teal-bg)", color: C.tealDark, fontSize: 13.5, fontWeight: 700, display: "grid", placeItems: "center" }}>CR</span>
          <span style={{ lineHeight: 1.3 }}>
            <span style={{ display: "block", fontWeight: 700 }}>Carlos Rivera</span>
            <span style={{ display: "block", fontSize: 13, color: C.body }}>{c.skill}</span>
          </span>
        </span>
        <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
      </div>
      {c.checks.map((t) => (
        <div key={t} style={{ ...row, marginTop: 6 }}>
          {check} {t}
        </div>
      ))}
      <div style={label}>{c.impact}</div>
      {[
        { icon: "pi-user", text: c.impactRows[0] },
        { icon: "pi-car", text: c.impactRows[1] },
        { icon: "pi-car", text: c.impactRows[2] },
      ].map((r) => (
        <div key={r.text} style={row}>
          <Icon name={r.icon} size={13} style={{ color: C.body, width: 16 }} /> {r.text}
        </div>
      ))}
      <div style={{ marginTop: 10, height: 32, borderRadius: 5, background: "var(--m-green-bg)", display: "flex", alignItems: "center", gap: 10, padding: "0 12px", fontSize: 13.5, color: "var(--m-green-fg)" }}>
        <Icon name="pi-check-circle" size={15} style={{ color: "#16a34a" }} /> {c.noConflicts}
      </div>
      <div style={label}>{c.notification}</div>
      {c.notifications.map((t) => (
        <div key={t} style={{ ...row, marginTop: 6 }}>
          {check} {t}
        </div>
      ))}
      <div style={{ ...label, fontWeight: 700 }}>
        {c.note} <span style={{ fontWeight: 400, color: C.body }}>{c.optional}</span>
      </div>
      <div style={{ marginTop: 6, height: 40, border: `1px solid ${C.line}`, borderRadius: 6, padding: "8px 10px", fontSize: 13, color: C.muted }}>{c.notePlaceholder}</div>
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 12 }}>
        <span style={{ height: 40, borderRadius: 6, border: `1px solid ${C.line}`, display: "grid", placeItems: "center", fontSize: 15, fontWeight: 600 }}>{c.cancel}</span>
        <span style={{ height: 40, borderRadius: 6, background: C.tealDark, color: "#fff", display: "grid", placeItems: "center", fontSize: 15, fontWeight: 600 }}>{c.submit}</span>
      </div>
    </div>
  );
}

/* ---------- screen ---------- */

function Header({ c }: { c: Copy }) {
  return (
    <>
      <div style={{ height: 46, borderBottom: `1px solid ${C.line}`, display: "flex", alignItems: "center", padding: "0 24px 0 26px", background: "var(--m-surface)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, fontWeight: 700 }}>
          <Icon name="pi-home" size={20} style={{ color: C.teal }} /> Northstar Home Services
        </span>
        <div style={{ ...box, width: 504, height: 32, marginLeft: 176, color: C.muted, fontSize: 13.5 }}>
          <Icon name="pi-search" size={14} style={{ color: C.body }} /> {c.search}
        </div>
        <span style={{ marginLeft: "auto", position: "relative", display: "inline-flex", color: C.body }}>
          <Icon name="pi-bell" size={19} />
          <span className="fo-dot" style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#e5484d" }} />
        </span>
        <span style={{ marginLeft: 26, display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500 }}>
          <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--m-teal-bg)", color: C.tealDark, fontSize: 13.5, fontWeight: 700, display: "grid", placeItems: "center" }}>JD</span>
          James Diaz <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0 0 28px" }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, whiteSpace: "nowrap" }}>{c.title}</div>
          <div style={{ fontSize: 15, color: C.body, marginTop: 2, whiteSpace: "nowrap" }}>{c.subtitle}</div>
        </div>
        <span style={{ ...box, height: 38, marginLeft: 40, fontWeight: 500 }}>{c.today}</span>
        <span style={{ display: "flex", alignItems: "center", height: 38, border: `1px solid ${C.line}`, borderRadius: 6, background: "var(--m-surface)" }}>
          <span style={{ width: 40, display: "grid", placeItems: "center", color: C.ink }}>
            <Icon name="pi-chevron-left" size={12} />
          </span>
          <span style={{ height: "100%", padding: "0 26px", borderLeft: `1px solid ${C.line}`, borderRight: `1px solid ${C.line}`, display: "flex", alignItems: "center", fontSize: 17, fontWeight: 600, whiteSpace: "nowrap" }}>{c.week}</span>
          <span style={{ width: 40, display: "grid", placeItems: "center", color: C.ink }}>
            <Icon name="pi-chevron-right" size={12} />
          </span>
        </span>
      </div>
      <div style={{ display: "flex", gap: 14, padding: "12px 0 0 28px" }}>
        {c.filters.map(([k, v], i) => (
          <span key={k} style={{ ...box, minWidth: [210, 156, 202, 204][i], gap: 16, justifyContent: "space-between" }}>
            <span>
              {k} <b style={{ fontWeight: 600 }}>{v}</b>
            </span>
            <Icon name="pi-chevron-down" size={11} style={{ color: C.body }} />
          </span>
        ))}
      </div>
    </>
  );
}

function Screen({ m }: { m: MockCopy }) {
  const c = m.dispatch;
  return (
    <div style={{ width: NATIVE_W, height: 941, overflow: "hidden", display: "flex", background: "var(--m-bg)", color: C.ink }}>
      <AppSidebar active="Schedule" copy={m.sidebar} />
      <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
        <Header c={c} />
        {/* top-right actions sit above the assign panel */}
        <span style={{ position: "absolute", top: 58, right: 18, display: "flex", gap: 14 }}>
          <span style={{ display: "flex", height: 38, border: `1px solid ${C.line}`, borderRadius: 6, overflow: "hidden", fontSize: 15, background: "var(--m-surface)", marginRight: 112 }}>
            <span style={{ minWidth: 82, padding: "0 12px", display: "grid", placeItems: "center" }}>{c.day}</span>
            <span style={{ minWidth: 82, padding: "0 12px", display: "grid", placeItems: "center", background: "var(--m-teal-bg)", color: C.tealDark, fontWeight: 600 }}>{c.weekView}</span>
          </span>
          <span style={{ ...box, height: 38, gap: 10, fontWeight: 600 }}>
            <Icon name="pi-map" size={16} /> {c.mapView}
          </span>
          <span style={{ height: 38, padding: "0 20px", borderRadius: 6, background: C.teal, color: "#fff", fontSize: 15, fontWeight: 600, display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="pi-plus" size={13} /> {c.newJob}
          </span>
        </span>
        <div style={{ display: "flex", gap: 12, padding: "14px 12px 12px 14px", alignItems: "flex-start" }}>
          <UnscheduledPanel c={c} />
          <Calendar c={c} />
          <div style={{ marginTop: -66 }}>
            <AssignPanel c={c.assign} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Frame for the "Plan with clarity" section. */
export function DispatchMock({ copy }: { copy: MockCopy }) {
  return (
    <div className="fo-stage fo-sched-stage fo-mock" data-reveal="scale" aria-hidden="true" style={{ background: "var(--m-surface)", borderRadius: 8, boxShadow: "0 22px 50px rgba(11,29,69,.12), 0 0 0 1px rgba(11,29,69,.06)", overflow: "hidden" }}>
      <div style={{ zoom: FRAME_W / NATIVE_W }}>
        <Screen m={copy} />
      </div>
    </div>
  );
}
