import { ROLES } from "@/app/landing.data";
import { HardHat, Icon } from "../mock-frames";

export function Roles() {
  return (
    <section id="roles" className="fo-roles">
      <div className="fo-container">
        <div className="fo-roles-head">
          <div className="fo-eyebrow" style={{ color: "#d5deea" }}>Una plataforma, cuatro experiencias</div>
          <h2 className="fo-title fo-title-lg fo-roles-title" style={{ marginTop: 10, fontSize: 52, lineHeight: 1.05, color: "#fff", letterSpacing: "-0.04em" }}>
            Cada persona ve exactamente <span style={{ color: "#2cc2bd" }}>lo que necesita.</span>
          </h2>
          <p style={{ marginTop: 12, fontSize: 22.5, color: "#d5deea" }}>Herramientas claras para administrar, coordinar, ejecutar y consultar el trabajo.</p>
        </div>
        <div className="fo-roles-grid">
          {ROLES.map((r) => (
            <div
              key={r.title}
              style={{ minHeight: 186, background: "#fff", borderRadius: 4, padding: "19px 24px 18px 27px", boxShadow: "0 10px 30px rgba(0,0,0,.18)" }}
            >
              <span style={{ color: "#0f9d9a", display: "block", height: 42 }}>
                {r.icon === "hardhat" ? <HardHat size={44} /> : <Icon name={r.icon} size={40} style={{ lineHeight: "42px" }} />}
              </span>
              <h3 style={{ marginTop: 10, fontSize: 19.5, fontWeight: 700, color: "#0b1d45", letterSpacing: "-0.02em" }}>{r.title}</h3>
              <p style={{ marginTop: 4, fontSize: 16.5, lineHeight: 1.45, color: "#46557a", maxWidth: 222 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
