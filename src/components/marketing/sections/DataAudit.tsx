import type { CSSProperties } from "react";
import { AUDIT, DATA_CHECKS, NAV_ES } from "@/app/landing.data";
import { Avatar, Bell, Box, Icon, Sidebar, WINDOW_SHADOW, type SidebarSpec } from "../mock-frames";

const SIDEBAR: SidebarSpec = {
  width: 114,
  logo: { top: 22, leaf: 15, font: 13.5, left: 12 },
  items: { top: 56, step: 27.6, height: 28, font: 10, icon: 11, inset: 5, iconX: 12, gap: 12 },
};

const AUDIT_COLS = "119px 95px 120px minmax(0,1fr)";
const cell: CSSProperties = { paddingLeft: 7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", height: "100%", display: "flex", alignItems: "center" };

function ReportsMock() {
  return (
    <div className="fo-stage fo-data-stage" aria-hidden="true" style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex" }}>
      <Sidebar items={NAV_ES} active="Reportes" spec={SIDEBAR} />
      <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
        <div style={{ height: 50, borderBottom: "1px solid #edf1f6", display: "flex", alignItems: "center", padding: "0 8px 0 13.5px" }}>
          <Box style={{ width: 361, height: 24, fontSize: 9, color: "#9aa5b8" }}>
            <Icon name="pi-search" size={9} /> Buscar clientes, trabajos, cotizaciones...
          </Box>
          <Box style={{ marginLeft: 19, width: 97, height: 24, fontSize: 9, color: "#1c2b55", justifyContent: "space-between" }}>
            Todos los estados <Icon name="pi-chevron-down" size={7} />
          </Box>
          <span style={{ marginLeft: 17 }}>
            <Bell size={14} color="#2563eb" />
          </span>
          <Avatar initials="DK" size={24} font={8.5} style={{ marginLeft: "auto" }} />
        </div>
        <div style={{ position: "absolute", left: 18, right: 16, top: 58 }}>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>Reportes</div>
          <div style={{ fontSize: 9.5, color: "#7b88a3", marginTop: 4 }}>Analiza el rendimiento de tu operación.</div>
          <div style={{ marginTop: 11, height: 26, display: "flex", alignItems: "center", gap: 30, fontSize: 10, color: "#46557a", borderBottom: "1px solid #e6ebf2", whiteSpace: "nowrap", paddingLeft: 8 }}>
            <span>Resumen</span>
            <span>Trabajos</span>
            <span>Facturación</span>
            <span>Clientes</span>
            <span>Equipo</span>
            <span style={{ height: 26, display: "flex", alignItems: "center", color: "#2563eb", fontWeight: 600, borderBottom: "2px solid #2563eb", padding: "0 6px" }}>Auditoría</span>
          </div>
          <div style={{ marginTop: 13, display: "flex", gap: 11, fontSize: 9, color: "#1c2b55" }}>
            <Box style={{ width: 131, height: 24, justifyContent: "space-between" }}>
              Todos los usuarios <Icon name="pi-chevron-down" size={7} />
            </Box>
            <Box style={{ width: 190, height: 24, gap: 8 }}>
              <Icon name="pi-calendar" size={9} /> 1 sep 2026 - 30 sep 2026
            </Box>
            <Box style={{ width: 129, height: 24, justifyContent: "space-between" }}>
              Todos los tipos <Icon name="pi-chevron-down" size={7} />
            </Box>
            <Box style={{ width: 74, height: 24, justifyContent: "center", color: "#2563eb" }}>
              <Icon name="pi-download" size={9} /> Exportar
            </Box>
          </div>
          <div style={{ marginTop: 14, border: "1px solid #e6ebf2", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: AUDIT_COLS, height: 27, fontSize: 9.5, fontWeight: 600, color: "#1c2b55", background: "#f6f8fb" }}>
              {["Fecha y hora", "Usuario", "Acción", "Detalle"].map((h, i) => (
                <span key={h} style={{ ...cell, borderLeft: i ? "1px solid #e6ebf2" : undefined }}>
                  {h}
                </span>
              ))}
            </div>
            {AUDIT.map((a) => (
              <div key={a.when} style={{ display: "grid", gridTemplateColumns: AUDIT_COLS, height: 27, fontSize: 9, color: "#46557a", borderTop: "1px solid #f1f4f8" }}>
                <span style={cell}>{a.when}</span>
                <span style={{ ...cell, color: "#2563eb", borderLeft: "1px solid #f1f4f8" }}>{a.who}</span>
                <span style={{ ...cell, borderLeft: "1px solid #f1f4f8" }}>{a.what}</span>
                <span style={{ ...cell, borderLeft: "1px solid #f1f4f8" }}>{a.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataAudit() {
  return (
    <section className="fo-data">
      <div className="fo-container fo-data-grid">
        <div style={{ minWidth: 0, paddingTop: 7 }}>
          <div className="fo-eyebrow">Control y trazabilidad</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 14, fontSize: 48, lineHeight: "52px", letterSpacing: "-0.045em" }}>
            Decide con datos.
            <br />
            <span className="teal">Revisa cada cambio.</span>
          </h2>
          <p style={{ marginTop: 22, fontSize: 19, lineHeight: "26px", color: "#46557a", maxWidth: 470 }}>
            Reportes operativos y financieros para entender el rendimiento, junto con un historial de auditoría que conserva la trazabilidad.
          </p>
          <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 15 }}>
            {DATA_CHECKS.map((c) => (
              <li key={c.bold} style={{ display: "flex", gap: 29, alignItems: "center", fontSize: 16, color: "#46557a" }}>
                <div style={{ width: 30, height: 30, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={13} />
                </div>
                <div>
                  <b style={{ color: "#0b1d45", fontWeight: 600 }}>{c.bold}</b> {c.text}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 18, fontSize: 13, fontStyle: "italic", color: "#7b88a3" }}>Datos de demostración.</div>
        </div>
        <ReportsMock />
      </div>
    </section>
  );
}
