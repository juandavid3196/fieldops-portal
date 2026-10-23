import { DAYS, HOURS, NAV_SCHED, PLAN_CHECKS } from "@/app/landing.data";
import { Icon, Sidebar, WINDOW_SHADOW } from "../mock-frames";

const cell = { border: "1px solid #dfe5ee", borderRadius: 4 } as const;

function ScheduleMock() {
  return (
    <div aria-hidden="true" style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex", minWidth: 0 }}>
      <Sidebar items={NAV_SCHED} active="Schedule" width={92} padX={7} />
      <div style={{ flex: 1, minWidth: 0, padding: "12px 12px 6px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Schedule</div>
          <div style={{ marginLeft: "auto", fontSize: 8, color: "#fff", background: "#2563eb", padding: "5px 10px", borderRadius: 4, fontWeight: 500 }}>+ New job</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 8, color: "#1c2b55", marginBottom: 8 }}>
          <span style={{ ...cell, padding: "4px 8px" }}>Today</span>
          <span style={{ ...cell, padding: "4px 5px" }}>‹</span>
          <span style={{ ...cell, padding: "4px 5px" }}>›</span>
          <span style={{ marginLeft: 4 }}>Sep 21 – Sep 27, 2026</span>
          <span style={{ marginLeft: "auto", display: "flex", ...cell, overflow: "hidden" }}>
            <span style={{ padding: "4px 10px", color: "#7b88a3" }}>Day</span>
            <span style={{ padding: "4px 10px", background: "#eef3fc", color: "#1c2b55", fontWeight: 600 }}>Week</span>
            <span style={{ padding: "4px 10px", color: "#7b88a3" }}>Month</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, fontSize: 7.5, color: "#1c2b55", marginBottom: 8 }}>
          <span style={{ ...cell, padding: "4px 7px", width: 64 }}>
            All teams <Icon name="pi-chevron-down" size={5} style={{ float: "right", marginTop: 2 }} />
          </span>
          <span style={{ ...cell, padding: "4px 7px", width: 64 }}>
            All statuses <Icon name="pi-chevron-down" size={5} style={{ float: "right", marginTop: 2 }} />
          </span>
          <span style={{ ...cell, flex: 1, padding: "4px 7px", color: "#9aa5b8" }}>
            <Icon name="pi-search" size={6.5} /> Search jobs, customers, or addresses...
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "34px repeat(5,minmax(0,1fr))", fontSize: 8, border: "1px solid #e6ebf2", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ borderBottom: "1px solid #e6ebf2" }} />
          {DAYS.map((d) => (
            <div
              key={d.label}
              style={{
                padding: "7px 4px",
                textAlign: "center",
                borderBottom: "1px solid #e6ebf2",
                borderLeft: "1px solid #e6ebf2",
                fontWeight: 500,
                color: d.today ? "#2563eb" : "#1c2b55",
                background: d.today ? "#f3f7ff" : "#fff",
              }}
            >
              {d.label}
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {HOURS.map((h) => (
              <div key={h} style={{ height: 20, fontSize: 6.5, color: "#7b88a3", textAlign: "right", padding: "2px 5px 0 0" }}>
                {h}
              </div>
            ))}
          </div>
          {DAYS.map((d) => (
            <div
              key={d.label}
              style={{
                position: "relative",
                height: 200,
                borderLeft: "1px solid #e6ebf2",
                background: d.today ? "#f3f7ff" : "#fff",
                backgroundImage: "repeating-linear-gradient(180deg,transparent 0 19px,#f1f4f8 19px 20px)",
              }}
            >
              {d.events.map((e) => (
                <div
                  key={e.title}
                  style={{ position: "absolute", left: 3, right: 3, top: e.top, height: e.height, borderRadius: 3, background: e.bg, borderLeft: `2.5px solid ${e.bar}`, padding: "3px 4px", overflow: "hidden" }}
                >
                  <div style={{ fontWeight: 600, color: "#0b1d45", fontSize: 7, lineHeight: 1.2 }}>{e.title}</div>
                  <div style={{ color: "#46557a", fontSize: 6.5 }}>{e.place}</div>
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
    <section style={{ background: "linear-gradient(180deg,#f3f7fc 0%,#edf3fa 100%)" }}>
      <div className="fo-wrap fo-sched-grid">
        <ScheduleMock />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <h2 className="fo-h2b">
            Planifica con claridad.
            <br />
            <span className="teal">Ejecuta con confianza.</span>
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.5, color: "#46557a", textWrap: "pretty" }}>
            Coordina personas, visitas y recursos desde un solo lugar. Mantén a tu equipo alineado, da seguimiento en tiempo real y asegura un cierre completo de cada servicio.
          </p>
          <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 22 }}>
            {PLAN_CHECKS.map((c) => (
              <li key={c.title} style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <div style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={11} />
                </div>
                <div>
                  <div style={{ fontSize: 15.5, fontWeight: 600, color: "#0b1d45" }}>{c.title}</div>
                  <div style={{ fontSize: 13.5, color: "#46557a", marginTop: 4 }}>{c.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
