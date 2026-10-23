import Link from "next/link";
import { REPO_URL } from "@/app/caso-tecnico/case-study.data";
import { Icon, Leaf } from "../marketing/mock-frames";

const mountain = (bg: string, clip: string, opacity?: number) => (
  <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 360, background: bg, opacity, clipPath: clip }} />
);

export function CaseCta() {
  return (
    <section className="cs-cta">
      <div className="cs-cta-bar">
        {mountain("#14b8b0", "polygon(10% 100%,45% 30%,65% 60%,85% 10%,100% 40%,100% 100%)", 0.85)}
        {mountain("#0d8f8a", "polygon(25% 100%,55% 55%,75% 80%,100% 50%,100% 100%)")}
        {mountain("#2dd4cc", "polygon(45% 30%,65% 60%,48% 100%,30% 100%)", 0.5)}
        <div className="cs-cta-text">
          <div style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>¿Quieres ver el resultado funcionando?</div>
          <div style={{ fontSize: 11.5, color: "#d5deea", marginTop: 4 }}>Explora FieldOps en acción o revisa el código fuente.</div>
        </div>
        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 40 }}>
          <Link href="/#demo" className="fo-btn fo-btn-primary on-navy" style={{ justifyContent: "center", fontWeight: 500, fontSize: 13, padding: "11px 30px", borderRadius: 4, minWidth: 110 }}>
            Abrir demo <Icon name="pi-arrow-right" size={11} />
          </Link>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-ghost" style={{ justifyContent: "center", fontSize: 13, padding: "10px 40px", borderRadius: 4 }}>
            <Icon name="pi-github" size={15} /> Ver repositorio
          </a>
        </div>
        <div style={{ position: "relative", fontSize: 10.5, color: "#fff", lineHeight: 1.4, marginLeft: "auto", paddingRight: 8 }}>
          Proyecto demostrativo
          <br />
          con datos ficticios.
        </div>
      </div>
    </section>
  );
}

const linkStyle = { color: "#1c2b55" } as const;

export function CaseFooter() {
  return (
    <footer style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "6px var(--padx) 18px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 40px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <Leaf size={20} stroke />
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.03em", color: "#0b1d45" }}>FieldOps</span>
        </Link>
        <nav aria-label="Pie de página" style={{ display: "flex", flexWrap: "wrap", gap: 32, fontSize: 11.5 }}>
          <Link href="/" style={linkStyle}>Producto</Link>
          <a href="#reto" style={linkStyle}>Case study</a>
          <a href="#proceso" style={linkStyle}>Documentación</a>
          <Link href="/#demo" style={linkStyle}>Demo</Link>
        </nav>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#46557a" }}>Diseñado y desarrollado por Juan David Ríos · 2026</div>
      </div>
    </footer>
  );
}
