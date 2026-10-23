import { ROLES } from "@/app/landing.data";
import { Icon } from "../mock-frames";

export function Roles() {
  return (
    <section id="roles" style={{ background: "linear-gradient(135deg,#0a1f3d 0%,#0c2a4f 55%,#0a223f 100%)" }}>
      <div className="fo-wrap" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="fo-eyebrow" style={{ color: "#d5deea" }}>UNA PLATAFORMA, CUATRO EXPERIENCIAS</div>
          <h2 className="fo-h2b" style={{ lineHeight: 1.06, color: "#fff", textWrap: "balance" }}>
            Cada persona ve exactamente <span style={{ color: "#2cc2bd" }}>lo que necesita.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#d5deea" }}>Herramientas claras para administrar, coordinar, ejecutar y consultar el trabajo.</p>
        </div>
        <div className="fo-roles-grid">
          {ROLES.map((r) => (
            <div
              key={r.title}
              style={{ background: "#fff", borderRadius: 6, padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: 8, boxShadow: "0 10px 30px rgba(0,0,0,.18)" }}
            >
              <Icon name={r.icon} size={30} style={{ color: "#0f9d9a" }} />
              <h3 style={{ margin: "10px 0 0", fontSize: 17, fontWeight: 700, color: "#0b1d45" }}>{r.title}</h3>
              <div style={{ fontSize: 14.5, lineHeight: 1.45, color: "#46557a" }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
