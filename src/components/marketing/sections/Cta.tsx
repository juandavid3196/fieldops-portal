import type { CSSProperties } from "react";
import { getDictionary } from "@/i18n/dictionaries";
import { Icon } from "../mock-frames";

export async function Cta() {
  const { cta: t } = await getDictionary();
  return (
    <section id="demo" className="fo-cta" data-reveal="fade">
      <svg className="fo-cta-lines" viewBox="0 0 1384 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <path className="fo-draw" pathLength={1} d="M0 189 L185 107 L302 107" fill="none" stroke="#1fb5ae" strokeWidth="1.5" opacity=".8" />
        <path className="fo-draw" pathLength={1} d="M1059 250 L1234 122 L1384 24" fill="none" stroke="#1fb5ae" strokeWidth="1.5" opacity=".8" />
        <circle className="fo-node" cx="1234" cy="122" r="7" fill="#0a223f" stroke="#2cc2bd" strokeWidth="1.5" />
      </svg>
      <div className="fo-container" style={{ position: "relative", padding: "52px var(--padx) 40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h2 className="fo-title fo-title-md" style={{ fontSize: 30, lineHeight: 1.2, color: "#fff", letterSpacing: "-0.03em" }}>
          {t.title}
          <span className="fo-shine" style={{ color: "#2cc2e0", "--accent": "#2cc2e0" } as CSSProperties}>{t.accent}</span>
        </h2>
        <p style={{ marginTop: 10, fontSize: 17, color: "#d5deea" }}>{t.lead}</p>
        <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          <a href="#demo" className="fo-btn fo-btn-primary on-navy" style={{ minWidth: 213, height: 46, padding: "0 24px", fontSize: 15 }}>
            {t.primary} <Icon name="pi-arrow-right" size={13} />
          </a>
          <a href="#guia" className="fo-btn fo-btn-ghost" style={{ minWidth: 209, height: 46, padding: "0 24px", fontSize: 15 }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", color: "#0a1f3d", display: "grid", placeItems: "center" }}>
              <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
            </span>
            {t.secondary}
          </a>
        </div>
        <div style={{ marginTop: 18, fontSize: 12.5, lineHeight: "16px", color: "#d5deea" }}>{t.caption}</div>
      </div>
    </section>
  );
}
