import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { CONTACT } from "@/content/contact";
import { ColombiaFlag, LogoMark, Wordmark } from "./mock-frames";
import { SocialLinks } from "./SocialLinks";

const linkStyle = { color: "var(--ink)" } as const;

export async function MarketingFooter() {
  const { footer: t } = await getDictionary();
  const locale = await getLocale();
  return (
    <footer style={{ background: "var(--bg)" }}>
      <div className="fo-container fo-footer-inner">
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoMark size={27} />
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "var(--ink-strong)" }}><Wordmark /></span>
        </Link>
        <nav aria-label={t.label} style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", fontSize: 13 }}>
          <a href="#producto" style={linkStyle}>{t.product}</a>
          <a href="#como-funciona" style={linkStyle}>{t.howItWorks}</a>
          <a href="#demo" style={linkStyle}>{t.demo}</a>
          <Link href={`/${locale}/caso-tecnico`} style={linkStyle}>{t.docs}</Link>
          <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" style={linkStyle}>{t.goPortfolio} ↗</a>
        </nav>
        <div className="fo-footer-end">
          <div style={{ fontSize: 11.5, color: "var(--ink)", textAlign: "right", lineHeight: 1.45 }}>
            {t.credit}
            <ColombiaFlag />
            <br />
            <span style={{ color: "var(--muted)" }}>{t.portfolio}</span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
