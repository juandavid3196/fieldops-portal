import { DAYS, HOURS, NAV_SCHED, PLAN_CHECKS } from "@/app/landing.data";
import { Box, Icon, Sidebar, WINDOW_SHADOW, type SidebarSpec } from "../mock-frames";

const SIDEBAR: SidebarSpec = {
  width: 123,
  logo: { top: 19, leaf: 15, font: 13.5, left: 12 },
  items: { top: 51, step: 26.7, height: 22, font: 10.5, icon: 11, inset: 3.5, iconX: 12, gap: 9 },
};

const HOUR_H = 26;
const HEADER_H = 34;

function ScheduleMock() {
  return (
    <div
      className="fo-stage fo-sched-stage"
      aria-hidden="true"
      style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex" }}
    >
      <Sidebar items={NAV_SCHED} active="Schedule" spec={SIDEBAR} />
      <div style={{ position: "relative", flex: 1, minWidth: 0, padding: "0 17px 0 16px" }}>
        <div style={{ height: 98, display: "flex", flexDirection: "column" }}>
          <div style={{ height: 50, display: "flex", alignItems: "flex-end", paddingBottom: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>Schedule</div>
            <div style={{ marginLeft: "auto", width: 85, height: 24, borderRadius: 4, background: "#2563eb", color: "#fff", fontSize: 9.5, fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
              <Icon name="pi-plus" size={8} /> New job
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: 16, right: 17, top: 75, height: 25, display: "flex", alignItems: "center", gap: 4, fontSize: 10, color: "#1c2b55" }}>
          <Box style={{ width: 57, height: 25, justifyContent: "center", color: "#46557a" }}>Today</Box>
          <Box style={{ width: 25, height: 25, padding: 0, justifyContent: "center" }}><Icon name="pi-chevron-left" size={8} /></Box>
          <Box style={{ width: 25, height: 25, padding: 0, justifyContent: "center" }}><Icon name="pi-chevron-right" size={8} /></Box>
          <span style={{ marginLeft: 10, fontSize: 10.5 }}>Sep 21 – Sep 27, 2026</span>
          <span style={{ marginLeft: "auto", width: 172, height: 25, display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid #dfe5ee", borderRadius: 4, overflow: "hidden", fontSize: 9.5 }}>
            <span style={{ display: "grid", placeItems: "center", color: "#7b88a3" }}>Day</span>
            <span style={{ display: "grid", placeItems: "center", background: "#eef3fc", color: "#2563eb", fontWeight: 600, borderLeft: "1px solid #dfe5ee", borderRight: "1px solid #dfe5ee" }}>Week</span>
            <span style={{ display: "grid", placeItems: "center", color: "#7b88a3" }}>Month</span>
          </span>
        </div>
        <div style={{ position: "absolute", left: 16, right: 17, top: 111, height: 25, display: "flex", gap: 7, fontSize: 9.5, color: "#1c2b55" }}>
          <Box style={{ width: 108, height: 25, justifyContent: "space-between" }}>All teams <Icon name="pi-chevron-down" size={7} /></Box>
          <Box style={{ width: 108, height: 25, justifyContent: "space-between" }}>All statuses <Icon name="pi-chevron-down" size={7} /></Box>
          <Box style={{ flex: 1, height: 25, color: "#9aa5b8" }}><Icon name="pi-search" size={9} /> Search jobs, customers, or addresses...</Box>
        </div>

        {/* calendar */}
        <div
          style={{
            position: "absolute",
            left: 16,
            right: 17,
            top: 153,
            bottom: 0,
            display: "grid",
            gridTemplateColumns: "46px repeat(5,minmax(0,1fr))",
            gridTemplateRows: `${HEADER_H}px 1fr`,
            border: "1px solid #e6ebf2",
            borderBottom: 0,
            borderRadius: "4px 4px 0 0",
            overflow: "hidden",
          }}
        >
          <div style={{ borderBottom: "1px solid #e6ebf2" }} />
          {DAYS.map((d) => (
            <div
              key={d.label}
              style={{
                display: "grid",
                placeItems: "center",
                fontSize: 10.5,
                fontWeight: 500,
                borderBottom: "1px solid #e6ebf2",
                borderLeft: "1px solid #e6ebf2",
                color: d.today ? "#2563eb" : "#1c2b55",
                background: d.today ? "#eef4fd" : "#fff",
              }}
            >
              {d.label}
            </div>
          ))}
          <div style={{ position: "relative" }}>
            {HOURS.map((h, i) => (
              <div key={h} style={{ position: "absolute", left: 7, top: 5 + i * HOUR_H, fontSize: 9, color: "#7b88a3" }}>
                {h}
              </div>
            ))}
          </div>
          {DAYS.map((d) => (
            <div
              key={d.label}
              style={{
                position: "relative",
                borderLeft: "1px solid #e6ebf2",
                background: d.today ? "#f3f7ff" : "#fff",
                backgroundImage: `repeating-linear-gradient(180deg,transparent 0 ${HOUR_H - 1}px,#eef2f6 ${HOUR_H - 1}px ${HOUR_H}px)`,
                backgroundPosition: "0 13px",
              }}
            >
              {d.events.map((e) => (
                <div
                  key={e.title}
                  style={{
                    position: "absolute",
                    left: 4,
                    right: 4,
                    top: e.top,
                    height: e.height,
                    borderRadius: 3,
                    background: e.bg,
                    borderLeft: `3px solid ${e.bar}`,
                    padding: "6px 7px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ fontWeight: 600, color: "#0b1d45", fontSize: 10.5, lineHeight: 1.2, whiteSpace: "nowrap" }}>{e.title}</div>
                  <div style={{ color: "#46557a", fontSize: 9.5, marginTop: 2 }}>{e.place}</div>
                </div>
              ))}
              {d.today && <span style={{ position: "absolute", left: -3, top: -3, width: 6, height: 6, borderRadius: "50%", background: "#2563eb" }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Schedule() {
  return (
    <section className="fo-sched">
      <div className="fo-container">
        <div className="fo-sched-grid">
          <ScheduleMock />
          <div style={{ minWidth: 0 }}>
            <h2 className="fo-title fo-title-lg" style={{ fontSize: 41, lineHeight: "48px", marginTop: -2, letterSpacing: "-0.04em" }}>
              Planifica con claridad.
              <br />
              <span className="teal">Ejecuta con confianza.</span>
            </h2>
            <p style={{ marginTop: 21, fontSize: 17, lineHeight: "24px", color: "#46557a", maxWidth: 472 }}>
              Coordina personas, visitas y recursos desde un solo lugar. Mantén a tu equipo alineado, da seguimiento en tiempo real y asegura un cierre
              completo de cada servicio.
            </p>
            <ul style={{ listStyle: "none", margin: "36px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 33 }}>
              {PLAN_CHECKS.map((c) => (
                <li key={c.title} style={{ display: "flex", gap: 23, alignItems: "center" }}>
                  <div style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                    <Icon name="pi-check" size={14} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16.5, fontWeight: 600, color: "#0b1d45" }}>{c.title}</h3>
                    <div style={{ fontSize: 14, color: "#46557a", marginTop: 7 }}>{c.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
