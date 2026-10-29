import { Fragment } from "react";
import { APP_URL, GUIDE_PDF, HERO_ROLE_ICONS, SIGN_UP_URL } from "@/content/demo.data";
import { REPO_URL } from "@/content/case-study.data";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { delay, order } from "../motion";
import { ColombiaFlag, Icon, LogoMark, Wordmark } from "../marketing/mock-frames";
import { SocialLinks } from "../marketing/SocialLinks";
import { DemoAccounts } from "./DemoAccounts";
import Link from "next/link";

/** Renders `**bold**` segments from the dictionary copy. */
function Rich({ text }: { text: string }) {
  return text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

export async function DemoHero() {
  const { demo } = await getDictionary();
  const t = demo.hero;
  return (
    <section className="dm-hero">
      <div className="fo-container dm-hero-grid">
        <div className="dm-hero-copy">
          <div className="fo-eyebrow fo-enter" style={{ color: "var(--eyebrow-alt)" }}>{t.eyebrow}</div>
          <h1 className="dm-h1 fo-enter" style={delay(80)}>
            {t.line1}
            <br />
            <span style={{ color: "var(--accent)" }}>{t.accent}</span>
          </h1>
          <p className="dm-lead fo-enter" style={delay(160)}>
            {t.lead[0]}
            <br />
            {t.lead[1]}
          </p>
          <div className="dm-hero-actions fo-enter" style={delay(240)}>
            <a href="#cuentas" className="fo-btn fo-btn-primary dm-btn">
              {t.primary} <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#recorrido" className="fo-btn fo-btn-outline dm-btn dm-btn-outline">
              <Icon name="pi-book" size={15} /> {t.secondary}
            </a>
          </div>
          <p className="dm-caption fo-enter" style={delay(320)}>
            <Icon name="pi-shield" size={13} /> {t.caption}
          </p>
        </div>

        <div className="dm-panel fo-enter-fade" style={delay(200)}>
          <svg className="dm-panel-peaks" viewBox="0 0 300 200" aria-hidden="true">
            <path d="M0 200 L120 20 L240 200 Z" />
            <path d="M130 200 L215 90 L300 200 Z" />
          </svg>
          <div className="dm-panel-top">
            <span>
              {t.org} <span style={{ opacity: 0.6 }}>/ {t.orgSuffix}</span>
            </span>
            <span className="dm-badge"><i /> {t.badge}</span>
          </div>
          <h2>{t.title}</h2>
          <p className="dm-panel-sub">{t.sub}</p>
          <ul className="dm-roles">
            {t.roles.map((r, i) => (
              <li key={r.title} className="fo-enter" style={delay(380 + i * 90)}>
                <Icon name={HERO_ROLE_ICONS[i]} size={22} />
                <b>{r.title}</b>
                <small>{r.desc}</small>
              </li>
            ))}
          </ul>
          <div className="dm-panel-foot">
            <span><Icon name="pi-check" size={11} /> {t.foot[0]}</span>
            <span><Icon name="pi-shield" size={11} /> {t.foot[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function DemoAccountsSection() {
  const { demo } = await getDictionary();
  const t = demo.accounts;
  return (
    <section id="cuentas" className="dm-accounts">
      <div className="fo-container">
        <div className="dm-accounts-head" data-reveal="up">
          <div>
            <div className="fo-eyebrow">{t.eyebrow}</div>
            <h2 className="dm-h2">{t.title}</h2>
            <p className="dm-sub">{t.lead}</p>
          </div>
          <span className="dm-pill">
            <Icon name="pi-shield" size={13} /> {t.badge}
          </span>
        </div>
        <div data-reveal="up">
          <DemoAccounts t={t} />
        </div>
      </div>
    </section>
  );
}

export async function DemoJourney() {
  const { demo } = await getDictionary();
  const t = demo.journey;
  return (
    <section id="recorrido" className="dm-journey">
      <div className="fo-container">
        <div className="dm-journey-head" data-reveal="up">
          <h2 className="dm-h2 dm-h2-md">{t.title}</h2>
          <p>{t.hint}</p>
        </div>
        <ol className="dm-steps" data-reveal="up">
          {t.steps.map((s, i) => (
            <li key={s.title} className="fo-stagger" style={order(i)}>
              <span className="dm-step-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p><Rich text={s.desc} /></p>
              </div>
            </li>
          ))}
        </ol>
        <div className="dm-thread" data-reveal="up">
          <span className="dm-thread-label">{t.thread}</span>
          <ol>
            {t.threadSteps.map((s, i) => (
              <Fragment key={s}>
                {i > 0 && <li className="dm-thread-arrow" aria-hidden="true"><Icon name="pi-arrow-right" size={12} /></li>}
                <li>
                  {(i === 0 || i === t.threadSteps.length - 1) && <Icon name="pi-file" size={13} style={{ color: "var(--icon-teal)" }} />}
                  {s}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export async function DemoHelp() {
  const { demo } = await getDictionary();
  const locale = await getLocale();
  const t = demo.help;
  return (
    <section className="dm-help">
      <div className="fo-container dm-help-grid" data-reveal="up">
        <div className="dm-help-card">
          <span className="dm-help-icon"><Icon name="pi-book" size={22} /></span>
          <div>
            <h3>{t.guideTitle}</h3>
            <p><Rich text={t.guideText} /></p>
            <a href={GUIDE_PDF[locale]} target="_blank" rel="noopener noreferrer" className="dm-link">
              {t.guideLink} <Icon name="pi-external-link" size={12} />
            </a>
          </div>
        </div>
        <div className="dm-help-card">
          <span className="dm-help-icon blue"><Icon name="pi-building" size={22} /></span>
          <div>
            <h3>{t.orgTitle}</h3>
            <p>{t.orgText}</p>
            <a href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer" className="dm-link">
              {t.orgLink} <Icon name="pi-arrow-right" size={12} />
            </a>
            <small>{t.orgNote}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function DemoCta() {
  const { demo } = await getDictionary();
  const t = demo.cta;
  return (
    <section className="dm-cta-wrap">
      <div className="fo-container">
        <div className="dm-cta" data-reveal="up">
          <svg className="dm-cta-peaks" viewBox="0 0 456 82" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="40,82 150,18 215,50 255,82" fill="#0f8c89" opacity=".5" />
            <polygon points="150,18 215,50 300,4 330,36" fill="#14b8b0" opacity=".45" />
            <polygon points="300,4 456,0 456,50 330,36" fill="#1bb9b2" opacity=".35" />
            <polygon points="330,36 456,50 456,82 380,82" fill="#2dd4cc" opacity=".3" />
          </svg>
          <div>
            <h2>{t.title}</h2>
            <p>{t.lead}</p>
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-primary on-navy dm-cta-btn">
            {t.button} <Icon name="pi-arrow-right" size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

export async function DemoFooter() {
  const { demo, caseStudy } = await getDictionary();
  const locale = await getLocale();
  const t = demo.footer;
  const linkStyle = { color: "var(--ink)" } as const;
  return (
    <footer style={{ background: "var(--bg)" }}>
      <div className="fo-container dm-footer">
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoMark size={26} />
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em", color: "var(--ink-strong)" }}><Wordmark /></span>
        </Link>
        <nav className="dm-footer-links">
          <a href={GUIDE_PDF[locale]} target="_blank" rel="noopener noreferrer" style={linkStyle}>{t.guide}</a>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>{t.repo} ↗</a>
        </nav>
        <div className="fo-footer-end">
          <span style={{ fontSize: 13, color: "var(--body)" }}>
            {caseStudy.footer.credit}
            <ColombiaFlag />
          </span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
