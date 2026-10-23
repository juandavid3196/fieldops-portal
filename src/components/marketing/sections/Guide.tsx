import { GUIDE_ITEMS } from "@/app/landing.data";
import { Icon, Leaf } from "../mock-frames";

const mountain = (bg: string, clip: string, opacity?: number) => (
  <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 120, background: bg, opacity, clipPath: clip }} />
);

function Book() {
  return (
    <div
      className="fo-book"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 30,
        width: 230,
        height: 300,
        transform: "rotate(-12deg)",
        borderRadius: "3px 8px 8px 3px",
        background: "linear-gradient(170deg,#12305a 0%,#0a1f3d 60%)",
        boxShadow: "-8px 0 0 #081830 inset, 0 30px 50px rgba(11,29,69,.3)",
        overflow: "hidden",
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontWeight: 700, fontSize: 17 }}>
        <Leaf size={16} fill="#2cc2bd" />
        FieldOps
      </div>
      <div style={{ fontSize: 7, letterSpacing: "0.18em", color: "#d5deea", marginTop: 16 }}>DOCUMENTACIÓN DEL PRODUCTO</div>
      <div style={{ fontSize: 27, fontWeight: 700, color: "#fff", lineHeight: 1.05, marginTop: 4 }}>Guía de uso</div>
      <div style={{ fontSize: 12, color: "#fff" }}>Tu operación, paso a paso.</div>
      <div style={{ fontSize: 8, color: "#d5deea", marginTop: 8 }}>Inicio rápido · Roles · Operaciones</div>
      {mountain("#14b8b0", "polygon(0 60%,30% 20%,55% 55%,80% 10%,100% 35%,100% 100%,0 100%)")}
      {mountain("#0d8f8a", "polygon(0 85%,25% 55%,45% 80%,70% 45%,100% 70%,100% 100%,0 100%)")}
      {mountain("#2dd4cc", "polygon(30% 20%,55% 55%,38% 100%,10% 100%)", 0.6)}
    </div>
  );
}

const statBox = { border: "1px solid #e6ebf2", borderRadius: 3, padding: 2, fontSize: 7, fontWeight: 700 } as const;
const statLabel = { fontSize: 4, color: "#7b88a3", fontWeight: 400 } as const;

function PageSheet() {
  return (
    <div
      className="fo-page-sheet"
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 220,
        top: 0,
        width: 260,
        height: 330,
        background: "#fff",
        borderRadius: 4,
        boxShadow: "0 20px 50px rgba(11,29,69,.16), 0 0 0 1px rgba(11,29,69,.05)",
        transform: "rotate(3deg)",
        padding: "16px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700 }}>
        <Leaf size={11} />
        FieldOps
        <span style={{ marginLeft: "auto", fontSize: 5.5, letterSpacing: ".14em", color: "#7b88a3", fontWeight: 500 }}>GUÍA DEL TÉCNICO</span>
      </div>
      <div style={{ fontSize: 6.5, fontWeight: 600, color: "#0f8c89", letterSpacing: ".08em", marginTop: 8 }}>03 / EJECUCIÓN EN CAMPO</div>
      <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.1 }}>Inicia tu próxima visita</div>
      <div style={{ fontSize: 7, color: "#46557a" }}>Revisa el servicio asignado y avisa al cliente cuando estés en camino.</div>
      <div style={{ background: "#e8f6f5", borderRadius: 4, padding: "6px 8px", fontSize: 6.5, color: "#46557a", display: "flex", gap: 6 }}>
        <Icon name="pi-mobile" size={8} style={{ color: "#0f8c89" }} />
        <div>
          <b style={{ color: "#0b5e5b" }}>Antes de empezar</b>
          <br />
          Accede como técnico y abre una visita asignada.
        </div>
      </div>
      <div style={{ margin: "6px auto 0", width: 120, height: 200, background: "#0b0f19", borderRadius: 18, padding: 4 }}>
        <div style={{ background: "#fff", height: "100%", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "14px 7px 5px", fontSize: 6.5, fontWeight: 700, display: "flex", gap: 3, alignItems: "center", borderBottom: "1px solid #f1f4f8" }}>
            <Leaf size={7} />
            FieldOps
            <span style={{ marginLeft: "auto", width: 11, height: 11, borderRadius: "50%", background: "#e6f7f6", fontSize: 4, display: "grid", placeItems: "center" }}>CR</span>
          </div>
          <div style={{ padding: "6px 7px", display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ fontSize: 7.5, fontWeight: 700 }}>Trabajos de hoy</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, textAlign: "center" }}>
              <div style={statBox}>4<div style={statLabel}>trabajos</div></div>
              <div style={statBox}>7.5<div style={statLabel}>horas</div></div>
              <div style={statBox}>52 min<div style={statLabel}>traslado</div></div>
            </div>
            <div style={{ fontSize: 5, color: "#7b88a3" }}>2:00 p. m. · WO-3091</div>
            <div style={{ fontSize: 7, fontWeight: 700, lineHeight: 1.15 }}>Reparación de fuga en fregadero</div>
            <div style={{ fontSize: 4.5, color: "#7b88a3" }}>23 min · 8.4 mi · 2:00–3:30 p. m.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Guide() {
  return (
    <section id="guia" style={{ background: "linear-gradient(180deg,#fff 0%,#f6f9fc 100%)" }}>
      <div className="fo-wrap fo-guide-grid">
        <div className="fo-guide-visual">
          <Book />
          <PageSheet />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <div className="fo-eyebrow">GUÍA DE USO</div>
          <h2 className="fo-h2b" style={{ lineHeight: 1.06 }}>Aprende FieldOps paso a paso.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "#46557a" }}>
            Recorre cada función por rol o descarga el manual completo para consultarlo cuando lo necesites.
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {GUIDE_ITEMS.map((g) => (
              <li key={g.title} style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 15, color: g.strong ? "#0b1d45" : "#46557a", fontWeight: g.strong ? 500 : 400 }}>
                <Icon name={g.icon} size={17} style={{ color: "#0f8c89", width: 20 }} />
                {g.title}
              </li>
            ))}
          </ul>
          {/* Targets TBD: guide route and PDF asset. */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            <a href="#guia" className="fo-btn fo-btn-primary" style={{ padding: "14px 30px" }}>
              Explorar la guía <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#guia" className="fo-btn fo-btn-outline" style={{ padding: "13px 22px" }}>
              <Icon name="pi-file" size={15} /> Descargar manual PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
