import Link from "next/link";
import { Leaf } from "./mock-frames";

const linkStyle = { color: "#1c2b55" } as const;

export function MarketingFooter() {
  return (
    <footer style={{ background: "#fff" }}>
      <div className="fo-footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Leaf size={24} stroke />
          <span style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-0.03em", color: "#0b1d45" }}>FieldOps</span>
        </div>
        <nav aria-label="Pie de página" style={{ display: "flex", flexWrap: "wrap", gap: 40, fontSize: 13 }}>
          <a href="#producto" style={linkStyle}>Producto</a>
          <a href="#como-funciona" style={linkStyle}>Cómo funciona</a>
          <a href="#demo" style={linkStyle}>Demo</a>
          <Link href="/caso-tecnico" style={linkStyle}>Documentación</Link>
        </nav>
        <div style={{ marginLeft: "auto", fontSize: 12, color: "#1c2b55", textAlign: "right", lineHeight: 1.5 }}>
          Diseñado y desarrollado por Juan David Ríos.
          <br />
          <span style={{ color: "#46557a" }}>Proyecto de portafolio · 2026</span>
        </div>
      </div>
    </footer>
  );
}
