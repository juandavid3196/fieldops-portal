import type { CSSProperties } from "react";
import type { MockCopy } from "@/content/mock-copy";
import { HardHat, Icon, PhoneShell, StatusBar, Wordmark } from "../mock-frames";

/*
 * Technician "My schedule" screen, recreated from the real app design.
 * Built at 2× (444px wide) and scaled to the phone screen with CSS zoom.
 */

const NAVY = "#0d1f3c";
const TEAL = "#0f8c89";

// Day labels come from the mock copy; Wednesday the 14th is selected.
const DAY_NUMBERS = [12, 13, 14, 15, 16, 17, 18];
const SELECTED_DAY = 2;

const STATUS = {
  assigned: { bg: "var(--m-teal-bg)", fg: "var(--m-green-fg)" },
  scheduled: { bg: "var(--m-blue-bg)", fg: "var(--m-blue-fg)" },
};

// Times, titles and status labels come from the mock copy, in the same order.
const JOBS: { status: keyof typeof STATUS; dur: string; wo: string; who: string; company: boolean; street: string; city: string }[] = [
  { status: "assigned", dur: "1h 30m", wo: "#WO-3091", who: "Sofia Martinez", company: false, street: "1842 Oak Street", city: "Austin, TX 78704" },
  { status: "assigned", dur: "2h", wo: "#WO-3104", who: "Greenway Offices", company: true, street: "220 Congress Ave", city: "Austin, TX 78701" },
  { status: "scheduled", dur: "2h", wo: "#WO-3110", who: "Daniel Brooks", company: false, street: "71 Cedar Lane", city: "Austin, TX 78745" },
];

const TAB_ICONS = ["pi-calendar-minus", "pi-calendar", "pi-clock", "pi-comment", "pi-ellipsis-h"];
const ACTIVE_TAB = 1;

const row: CSSProperties = { display: "flex", alignItems: "center", gap: 14, fontSize: 13.5, color: "var(--m-ink2)" };

function Screen({ t }: { t: MockCopy["schedulePhone"] }) {
  return (
    <div style={{ width: 444, height: 966, display: "flex", flexDirection: "column", background: "var(--m-surface)", color: "var(--m-ink)" }}>
      {/* header */}
      <div style={{ background: NAVY, color: "#fff", flex: "none" }}>
        <StatusBar font={13} height={34} />
        <div style={{ height: 62, display: "flex", alignItems: "center", padding: "0 14px 6px 18px" }}>
          <span style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-0.03em" }}>
            <Wordmark ops="#2cc2bd" />
          </span>
          <span style={{ width: 1, height: 26, background: "rgba(255,255,255,.35)", margin: "0 14px" }} />
          <span style={{ fontSize: 18.5, fontWeight: 500 }}>{t.title}</span>
          <span style={{ marginLeft: "auto", position: "relative", display: "inline-flex" }}>
            <Icon name="pi-bell" size={22} />
            <span className="fo-dot" style={{ position: "absolute", top: -2, right: -3, width: 8, height: 8, borderRadius: "50%", background: "#e5484d" }} />
          </span>
          <span style={{ marginLeft: 20, width: 40, height: 40, borderRadius: "50%", background: "var(--m-subtle)", color: "var(--m-body)", display: "grid", placeItems: "center", border: "2px solid rgba(255,255,255,.85)" }}>
            <HardHat size={22} />
          </span>
        </div>
      </div>

      <div style={{ padding: "16px 19px 0", flex: 1, minHeight: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.heading}</div>

        {/* week strip */}
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 35, height: 35, flex: "none", borderRadius: 7, background: "var(--m-subtle)", display: "grid", placeItems: "center", color: "var(--m-ink)" }}>
            <Icon name="pi-chevron-left" size={12} />
          </span>
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
            {t.days.map((d, i) => {
              const on = i === SELECTED_DAY;
              return (
              <span
                key={d}
                style={{ height: 54, borderRadius: 8, display: "grid", placeContent: "center", textAlign: "center", background: on ? TEAL : "transparent", color: on ? "#fff" : "var(--m-ink)" }}
              >
                <span style={{ fontSize: 11.5, color: on ? "rgba(255,255,255,.85)" : "var(--m-muted)" }}>{d}</span>
                <span style={{ fontSize: 15, fontWeight: 700, marginTop: 3 }}>{DAY_NUMBERS[i]}</span>
              </span>
              );
            })}
          </div>
          <span style={{ width: 35, height: 35, flex: "none", borderRadius: 7, background: "var(--m-subtle)", display: "grid", placeItems: "center", color: "var(--m-ink)" }}>
            <Icon name="pi-chevron-right" size={12} />
          </span>
        </div>

        {/* day header */}
        <div style={{ marginTop: 16, display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 21.5, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.day}</span>
          <span style={{ marginLeft: "auto", height: 31, padding: "0 13px", borderRadius: 999, background: "var(--m-blue-bg)", color: "var(--m-blue-fg)", fontSize: 14.5, fontWeight: 600, display: "flex", alignItems: "center" }}>
            {t.summary}
          </span>
        </div>

        {/* timeline */}
        <div style={{ position: "relative", marginTop: 12 }}>
          <span style={{ position: "absolute", left: 73, top: 18, bottom: 128, width: 2, background: "var(--m-line)" }} />
          {JOBS.map((j, i) => (
            <div key={j.wo} className="fo-stagger" style={{ "--i": i + 3, display: "flex", gap: 14, marginBottom: 11 } as CSSProperties}>
              <div style={{ width: 52, flex: "none", textAlign: "center", fontSize: 14.5, fontWeight: 700, lineHeight: 1.35, paddingTop: 10 }}>
                {t.times[i][0]}
                <br />
                {t.times[i][1]}
              </div>
              <span style={{ width: 12, height: 12, flex: "none", marginTop: 14, borderRadius: "50%", background: TEAL, position: "relative", zIndex: 1 }} />
              <div style={{ flex: 1, minWidth: 0, background: "var(--m-card-tint)", borderRadius: 10, padding: "11px 12px", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ height: 25, padding: "0 10px", borderRadius: 999, background: STATUS[j.status].bg, color: STATUS[j.status].fg, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center" }}>
                    {t.statuses[j.status]}
                  </span>
                  <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600, color: "var(--m-body)" }}>{j.dur}</span>
                </div>
                <div style={{ marginTop: 7, fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>{t.jobs[i]}</div>
                <div style={{ marginTop: 3, fontSize: 12.5, color: "var(--m-muted)" }}>{j.wo}</div>
                <div style={{ ...row, marginTop: 7 }}>
                  <Icon name={j.company ? "pi-building" : "pi-user"} size={14} style={{ color: "var(--m-muted)", width: 16 }} />
                  {j.who}
                </div>
                <div style={{ ...row, marginTop: 7 }}>
                  <Icon name="pi-map-marker" size={14} style={{ color: "var(--m-muted)", width: 16 }} />
                  {j.street}
                </div>
                <div style={{ marginTop: 3, paddingLeft: 30, fontSize: 12.5, color: "var(--m-muted)" }}>{j.city}</div>
                <Icon name="pi-chevron-right" size={13} style={{ position: "absolute", right: 16, top: "50%", marginTop: -7, color: "var(--m-ink)" }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", borderTop: "1px solid var(--m-line)", padding: "10px 0 12px", fontSize: 12.5, color: "var(--m-muted)" }}>
          {t.footnote}
        </div>
      </div>

      {/* tab bar */}
      <div style={{ height: 66, flex: "none", background: NAVY, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", alignItems: "center" }}>
        {t.tabs.map((label, i) => {
          const on = i === ACTIVE_TAB;
          return (
          <div key={label} style={{ position: "relative", height: "100%", display: "grid", placeContent: "center", textAlign: "center", color: on ? "#2cc2bd" : "#fff" }}>
            <Icon name={TAB_ICONS[i]} size={20} />
            <span style={{ marginTop: 6, fontSize: 12, fontWeight: on ? 600 : 400, whiteSpace: "nowrap" }}>{label}</span>
            {on && <span style={{ position: "absolute", left: "18%", right: "18%", bottom: 0, height: 3, borderRadius: 2, background: "#2cc2bd" }} />}
          </div>
          );
        })}
      </div>
    </div>
  );
}

/** Phone placed over the jobs window in the "Connected" composition. */
export function TechSchedulePhone({ copy }: { copy: MockCopy["schedulePhone"] }) {
  return (
    <PhoneShell width={234} height={495} radius={36} bezel={6} notch={{ w: 74, h: 18, top: 2, radius: 10 }} shadow="0 30px 60px rgba(11,29,69,.28)" style={{ position: "absolute", left: 727, top: 0, zIndex: 2 }}>
      <div style={{ zoom: 0.5 }}>
        <Screen t={copy} />
      </div>
    </PhoneShell>
  );
}
