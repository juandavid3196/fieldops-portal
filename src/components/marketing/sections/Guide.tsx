import { GUIDE_ITEMS } from "@/app/landing.data";
import { Avatar, Bell, Icon, Leaf, StatusBar } from "../mock-frames";

/** Low-poly teal mountains at the bottom of the book cover. */
function Mountains() {
  return (
    <svg viewBox="0 0 285 170" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: 170 }} aria-hidden="true">
      <polygon points="0,170 0,120 70,95 120,140" fill="#0d6f74" />
      <polygon points="70,95 150,40 120,140" fill="#14a3a0" />
      <polygon points="150,40 285,0 285,60" fill="#1bb9b2" />
      <polygon points="150,40 285,60 210,120" fill="#0f8c89" />
      <polygon points="120,140 150,40 210,120" fill="#12999a" />
      <polygon points="210,120 285,60 285,170" fill="#2dd4cc" opacity=".85" />
      <polygon points="0,170 120,140 210,120 285,170" fill="#0b5f66" />
      <polygon points="120,140 210,120 160,170" fill="#13a8a3" opacity=".9" />
    </svg>
  );
}

function Book() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 18,
        top: 36,
        width: 285,
        height: 380,
        transform: "rotate(-8.5deg)",
        borderRadius: "3px 8px 8px 3px",
        background: "linear-gradient(165deg,#13305a 0%,#0b2242 55%,#0a1f3d 100%)",
        boxShadow: "-9px 0 0 #081830 inset, 0 30px 50px rgba(11,29,69,.32)",
        overflow: "hidden",
        padding: "34px 28px",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em" }}>
        <Leaf size={24} fill="#2cc2bd" />
        FieldOps
      </div>
      <div style={{ marginTop: 26, fontSize: 8.5, letterSpacing: "0.2em", color: "#d5deea" }}>DOCUMENTACIÓN DEL PRODUCTO</div>
      <div style={{ marginTop: 10, fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>Guía de uso</div>
      <div style={{ marginTop: 4, fontSize: 16, color: "#fff" }}>Tu operación, paso a paso.</div>
      <div style={{ marginTop: 20, fontSize: 11, color: "#d5deea" }}>Inicio rápido · Roles · Operaciones</div>
      <Mountains />
    </div>
  );
}

const stat = { height: 38, border: "1px solid #e6ebf2", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 } as const;

function GuideSheet() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 310,
        top: 12,
        width: 358,
        height: 440,
        background: "#fff",
        borderRadius: 4,
        boxShadow: "0 20px 50px rgba(11,29,69,.16), 0 0 0 1px rgba(11,29,69,.05)",
        transform: "rotate(2.5deg)",
        padding: "22px 24px",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700 }}>
        <Leaf size={15} />
        FieldOps
        <span style={{ marginLeft: "auto", fontSize: 7.5, letterSpacing: ".16em", color: "#7b88a3", fontWeight: 500 }}>GUÍA DEL TÉCNICO</span>
      </div>
      <div style={{ marginTop: 20, fontSize: 8, fontWeight: 600, color: "#0f8c89", letterSpacing: ".1em" }}>03 / EJECUCIÓN EN CAMPO</div>
      <div style={{ marginTop: 6, fontSize: 19.5, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Inicia tu próxima visita</div>
      <div style={{ marginTop: 5, fontSize: 9.5, color: "#46557a" }}>Revisa el servicio asignado y avisa al cliente cuando estés en camino.</div>
      <div style={{ marginTop: 12, background: "#e8f6f5", borderRadius: 6, padding: "9px 11px", fontSize: 9, color: "#46557a", display: "flex", gap: 9, alignItems: "center" }}>
        <Icon name="pi-file" size={15} style={{ color: "#0f8c89" }} />
        <div>
          <b style={{ color: "#0b5e5b", fontSize: 9.5 }}>Antes de empezar</b>
          <div style={{ marginTop: 2 }}>Accede como técnico y abre una visita asignada.</div>
        </div>
      </div>
      <div style={{ margin: "14px 0 0 2px", width: 207, height: 300, background: "#0b0f19", borderRadius: 26, padding: 5 }}>
        <div style={{ background: "#fff", height: "100%", borderRadius: 21, overflow: "hidden" }}>
          <div style={{ background: "#0b1d33", color: "#fff" }}>
            <StatusBar font={8} height={22} />
            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 10px 9px", fontSize: 10, fontWeight: 700 }}>
              <Leaf size={12} fill="#2cc2bd" />
              FieldOps
              <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 7 }}>
                <Bell size={10} color="#fff" />
                <Avatar initials="CR" size={18} font={6.5} bg="#e6f7f6" color="#0b7471" style={{ border: "1.5px solid #2cc2bd" }} />
              </span>
            </div>
          </div>
          <div style={{ padding: "9px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700 }}>Trabajos de hoy</div>
                <div style={{ fontSize: 7.5, color: "#7b88a3", marginTop: 2 }}>Miércoles, 23 de sep de 2026</div>
              </div>
              <Icon name="pi-filter" size={10} style={{ marginLeft: "auto" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1fr 1fr", gap: 4 }}>
              <div style={stat}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>4</div>
                  <div style={{ fontSize: 6.5, color: "#7b88a3" }}>trabajos</div>
                </div>
              </div>
              <div style={stat}>
                <Icon name="pi-clock" size={9} style={{ color: "#46557a" }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>7.5</div>
                  <div style={{ fontSize: 6, color: "#7b88a3" }}>horas programadas</div>
                </div>
              </div>
              <div style={stat}>
                <Icon name="pi-car" size={9} style={{ color: "#46557a" }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>52 min</div>
                  <div style={{ fontSize: 6, color: "#7b88a3" }}>de traslado</div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 7.5, color: "#7b88a3" }}>2:00 p. m. · WO-3091</div>
            <div style={{ border: "1px solid #e6ebf2", borderRadius: 6, padding: 8, display: "grid", gridTemplateColumns: "1fr auto", gap: 6 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.2 }}>Reparación de fuga en fregadero</div>
                <div style={{ fontSize: 7.5, color: "#7b88a3", marginTop: 3 }}>#WO-3091</div>
              </div>
              <div style={{ fontSize: 7, color: "#46557a", lineHeight: 1.6 }}>
                <div><Icon name="pi-car" size={7} /> 22 min · 8.4 mi</div>
                <div><Icon name="pi-clock" size={7} /> 2:00 – 3:30 p. m.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Guide() {
  return (
    <section id="guia" className="fo-guide">
      <div className="fo-container fo-guide-grid">
        <div className="fo-stage fo-guide-stage">
          <Book />
          <GuideSheet />
        </div>
        <div className="fo-guide-copy" style={{ minWidth: 0 }}>
          <div className="fo-eyebrow" style={{ color: "#2b6f86" }}>Guía de uso</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 13, fontSize: 38.5, lineHeight: 1.15, letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>
            Aprende FieldOps paso a paso.
          </h2>
          <p style={{ marginTop: 12, fontSize: 19, lineHeight: "27px", color: "#46557a", maxWidth: 560 }}>
            Recorre cada función por rol o descarga el manual completo para consultarlo cuando lo necesites.
          </p>
          <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {GUIDE_ITEMS.map((g) => (
              <li key={g.title} style={{ display: "flex", gap: 34, alignItems: "center", height: 22, fontSize: 15.5, color: g.strong ? "#0b1d45" : "#46557a", fontWeight: g.strong ? 500 : 400 }}>
                <Icon name={g.icon} size={20} style={{ color: "#0f8c89", width: 20, textAlign: "center" }} />
                {g.title}
              </li>
            ))}
          </ul>
          {/* Targets TBD: guide route and PDF asset. */}
          <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 15 }}>
            <a href="#guia" className="fo-btn fo-btn-primary" style={{ width: 220, height: 48, fontSize: 16 }}>
              Explorar la guía <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#guia" className="fo-btn fo-btn-outline" style={{ width: 243, height: 48, fontSize: 16 }}>
              <Icon name="pi-file" size={17} /> Descargar manual PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
