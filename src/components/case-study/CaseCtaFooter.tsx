import Link from "next/link";
import { REPO_URL } from "@/content/case-study.data";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Icon, Leaf } from "../marketing/mock-frames";

/** Low-poly teal ridge on the right of the CTA bar. */
function Mountains() {
  return (
    <svg className="cs-cta-mountains" viewBox="0 0 456 45" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, width: 360, height: "100%" }}>
      <polygon points="40,45 150,8 215,30 255,45" fill="#0f8c89" opacity=".9" />
      <polygon points="150,8 215,30 300,2 330,20" fill="#14b8b0" opacity=".85" />
      <polygon points="215,30 330,20 380,45 255,45" fill="#0d6f74" />
      <polygon points="300,2 456,0 456,30 330,20" fill="#1bb9b2" opacity=".7" />
      <polygon points="330,20 456,30 456,45 380,45" fill="#2dd4cc" opacity=".55" />
    </svg>
  );
}

export async function CaseCta() {
  const { caseStudy } = await getDictionary();
  const locale = await getLocale();
  const t = caseStudy.cta;
  return (
    <section className="cs-cta">
      <div className="fo-container">
        <div className="cs-cta-bar">
          <Mountains />
          <div className="cs-cta-text">
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{t.title}</div>
            <div style={{ fontSize: 15, color: "#d5deea", marginTop: 6 }}>{t.lead}</div>
          </div>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href={`/${locale}#demo`} className="fo-btn fo-btn-primary on-navy" style={{ height: 48, padding: "0 30px", fontWeight: 600, fontSize: 15 }}>
              {t.demo} <Icon name="pi-arrow-right" size={12} />
            </Link>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-ghost" style={{ height: 48, padding: "0 28px", fontSize: 15 }}>
              <Icon name="pi-github" size={17} /> {t.repo}
            </a>
          </div>
          <div style={{ position: "relative", fontSize: 13, color: "#fff", lineHeight: 1.45, marginLeft: "auto" }}>
            {t.note[0]}
            <br />
            {t.note[1]}
          </div>
        </div>
      </div>
    </section>
  );
}

const linkStyle = { color: "var(--ink)" } as const;

export async function CaseFooter() {
  const { caseStudy, footer } = await getDictionary();
  const locale = await getLocale();
  const t = caseStudy.footer;
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)" }}>
      <div className="fo-container" style={{ minHeight: 76, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 56px", paddingTop: 16, paddingBottom: 16 }}>
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Leaf size={26} stroke />
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "var(--ink-strong)" }}>FieldOps</span>
        </Link>
        <nav aria-label={footer.label} style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", fontSize: 14 }}>
          <Link href={`/${locale}`} style={linkStyle}>{t.product}</Link>
          <a href="#reto" style={linkStyle}>{t.caseStudy}</a>
          <a href="#proceso" style={linkStyle}>{t.docs}</a>
          <Link href={`/${locale}#demo`} style={linkStyle}>{t.demo}</Link>
        </nav>
        <div style={{ marginLeft: "auto", fontSize: 13, color: "var(--body)" }}>{t.credit}</div>
      </div>
    </footer>
  );
}
