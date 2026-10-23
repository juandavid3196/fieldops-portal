import { AUDIT, DATA_CHECKS, NAV_ES } from "@/app/landing.data";
import { Icon, Sidebar, TopBar, WINDOW_SHADOW } from "../mock-frames";

const AUDIT_COLS = "88px 70px 90px minmax(0,1fr)";
const box = { border: "1px solid #dfe5ee", borderRadius: 4, padding: "4px 6px" } as const;

function ReportsMock() {
  return (
    <div aria-hidden="true" style={{ background: "#fff", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden", display: "flex", minWidth: 0 }}>
      <Sidebar items={NAV_ES} active="Reportes" width={84} padX={6} fontSize={8} logoSize={12} wordSize={11.5} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <TopBar height={32} searchPlaceholder="Buscar clientes, trabajos, cotizaciones..." filterLabel="Todos los estados" filterGap={10} bellColor="#2563eb" />
        <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Reportes</div>
            <div style={{ fontSize: 7.5, color: "#7b88a3" }}>Analiza el rendimiento de tu operación.</div>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 7.5, color: "#46557a", borderBottom: "1px solid #e6ebf2", whiteSpace: "nowrap", overflow: "hidden" }}>
            <span style={{ paddingBottom: 5 }}>Resumen</span>
            <span>Trabajos</span>
            <span>Facturación</span>
            <span>Clientes</span>
            <span>Equipo</span>
            <span style={{ color: "#2563eb", fontWeight: 600, borderBottom: "1.5px solid #2563eb", paddingBottom: 5 }}>Auditoría</span>
          </div>
          <div style={{ display: "flex", gap: 6, fontSize: 7, color: "#1c2b55", flexWrap: "wrap" }}>
            <div style={{ ...box, minWidth: 80 }}>
              Todos los usuarios <Icon name="pi-chevron-down" size={5} />
            </div>
            <div style={{ ...box, flex: 1 }}>
              <Icon name="pi-calendar" size={6.5} /> 1 sep 2026 - 30 sep 2026
            </div>
            <div style={{ ...box, minWidth: 70 }}>
              Todos los tipos <Icon name="pi-chevron-down" size={5} />
            </div>
            <div style={{ ...box, padding: "4px 8px", color: "#2563eb" }}>
              <Icon name="pi-download" size={6.5} /> Exportar
            </div>
          </div>
          <div style={{ border: "1px solid #e6ebf2", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: AUDIT_COLS, gap: 6, fontSize: 7, fontWeight: 600, color: "#1c2b55", padding: "6px 8px", background: "#f6f8fb" }}>
              <span>Fecha y hora</span>
              <span>Usuario</span>
              <span>Acción</span>
              <span>Detalle</span>
            </div>
            {AUDIT.map((a) => (
              <div key={a.when} style={{ display: "grid", gridTemplateColumns: AUDIT_COLS, gap: 6, fontSize: 7, color: "#46557a", padding: "6px 8px", borderTop: "1px solid #f1f4f8" }}>
                <span>{a.when}</span>
                <span style={{ color: "#2563eb" }}>{a.who}</span>
                <span>{a.what}</span>
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.detail}</span>
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
    <section style={{ background: "linear-gradient(180deg,#eef5fc 0%,#e8f1fb 100%)" }}>
      <div className="fo-wrap fo-data-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <div className="fo-eyebrow">CONTROL Y TRAZABILIDAD</div>
          <h2 className="fo-h2b" style={{ lineHeight: 1.06 }}>
            Decide con datos.
            <br />
            <span className="teal">Revisa cada cambio.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "#46557a", textWrap: "pretty" }}>
            Reportes operativos y financieros para entender el rendimiento, junto con un historial de auditoría que conserva la trazabilidad.
          </p>
          <ul style={{ listStyle: "none", margin: "4px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {DATA_CHECKS.map((c) => (
              <li key={c.bold} style={{ display: "flex", gap: 20, alignItems: "center", fontSize: 15.5, color: "#46557a" }}>
                <div style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={11} />
                </div>
                <div>
                  <b style={{ color: "#0b1d45", fontWeight: 600 }}>{c.bold}</b> {c.text}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 12.5, fontStyle: "italic", color: "#7b88a3" }}>Datos de demostración.</div>
        </div>
        <ReportsMock />
      </div>
    </section>
  );
}
