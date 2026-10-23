import { Icon } from "../mock-frames";

export function Cta() {
  return (
    <section id="demo" style={{ background: "linear-gradient(135deg,#0a1f3d 0%,#0c2a4f 60%,#0a223f 100%)", position: "relative", overflow: "hidden" }}>
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <path d="M0 230 L120 230 L210 150 L330 150" fill="none" stroke="#1fb5ae" strokeWidth="1.5" opacity=".7" />
        <path d="M1110 260 L1230 150 L1290 150 L1440 40" fill="none" stroke="#1fb5ae" strokeWidth="1.5" opacity=".7" />
        <circle cx="1290" cy="150" r="6" fill="#0a223f" stroke="#2cc2bd" strokeWidth="1.5" />
      </svg>
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "44px var(--padx) 22px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 10,
        }}
      >
        <h2 className="fo-h2" style={{ color: "#fff" }}>
          Descubre cómo se siente una operación <span style={{ color: "#2cc2e0" }}>bajo control.</span>
        </h2>
        <p style={{ fontSize: 17, color: "#d5deea" }}>Explora la demo con datos ficticios y conoce FieldOps desde cada rol.</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 16 }}>
          <a href="#demo" className="fo-btn fo-btn-primary on-navy" style={{ padding: "14px 32px" }}>
            Explorar la demo <Icon name="pi-arrow-right" size={13} />
          </a>
          <a href="#guia" className="fo-btn fo-btn-ghost" style={{ padding: "13px 26px" }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", color: "#0a1f3d", display: "grid", placeItems: "center" }}>
              <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
            </span>
            Ver documentación
          </a>
        </div>
        <div style={{ fontSize: 12, color: "#d5deea", marginTop: 10 }}>Proyecto demostrativo · No utiliza datos reales</div>
      </div>
    </section>
  );
}
