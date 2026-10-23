import Link from "next/link";
import { Leaf } from "./mock-frames";

const linkStyle = { color: "#1c2b55" } as const;

export function MarketingFooter() {
  return (
    <footer style={{ background: "#fff" }}>
      <div className="fo-container fo-footer-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Leaf size={27} stroke />
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "#0b1d45" }}>FieldOps</span>
        </Link>
        <nav aria-label="Pie de página" style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", fontSize: 13 }}>
          <a href="#producto" style={linkStyle}>Producto</a>
          <a href="#como-funciona" style={linkStyle}>Cómo funciona</a>
          <a href="#demo" style={linkStyle}>Demo</a>
          <Link href="/caso-tecnico" style={linkStyle}>Documentación</Link>
        </nav>
        <div style={{ marginLeft: "auto", fontSize: 11.5, color: "#1c2b55", textAlign: "right", lineHeight: 1.45 }}>
          Diseñado y desarrollado por Juan David Ríos.
          <br />
          <span style={{ color: "#7b88a3" }}>Proyecto de portafolio · 2026</span>
        </div>
      </div>
    </footer>
  );
}
