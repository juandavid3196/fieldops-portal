"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { REPO_URL } from "@/content/case-study.data";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/es";
import { Icon, LogoMark, Wordmark } from "./mock-frames";

type NavCopy = Dictionary["nav"];

function readTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function toggleTheme() {
  const next = readTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

function ThemeToggle({ t }: { t: NavCopy }) {
  // React can reset <html> attributes (Strict Mode's dev remount, or a locale switch re-rendering
  // the root layout); re-apply the same theme the inline script picked.
  useLayoutEffect(() => {
    let theme: string | null = null;
    try {
      theme = localStorage.getItem("theme");
    } catch {}
    if (theme !== "light" && theme !== "dark") theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Both icons render; CSS shows the one for the theme you would switch to, so SSR and client agree.
  return (
    <button type="button" className="fo-theme" onClick={toggleTheme} aria-label={t.theme} title={t.theme}>
      <Icon name="pi-moon" size={15} />
      <Icon name="pi-sun" size={15} />
    </button>
  );
}

/** Remembers the chosen language so "/" redirects to it next time (read by the proxy). */
function rememberLocale(l: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; SameSite=Lax`;
}

function LanguageSwitch({ locale, t, className = "fo-lang" }: { locale: Locale; t: NavCopy; className?: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");
  return (
    <nav className={className} aria-label={t.language}>
      {locales.map((l) => (
        <Link key={l} href={`/${l}${rest ? `/${rest}` : ""}`} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined} onClick={() => rememberLocale(l)}>
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

export function MarketingNav({ variant = "landing", locale, t }: { variant?: "landing" | "case"; locale: Locale; t: NavCopy }) {
  const [open, setOpen] = useState(false);
  const caso = variant === "case";
  const home = `/${locale}`;
  const caseHref = `/${locale}/caso-tecnico`;
  const demoHref = caso ? `${home}#demo` : "#demo";
  const close = () => setOpen(false);

  // The open menu covers the page: lock scroll and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const items: { href: string; label: string; tag: string; primary?: boolean; external?: boolean }[] = [
    { href: home, label: t.product, tag: t.productTag },
    { href: caseHref, label: t.caseStudy, tag: t.caseTag },
    { href: demoHref, label: caso ? t.exploreDemo : t.viewDemo, tag: t.demoTag, primary: true },
    ...(caso ? [{ href: REPO_URL, label: t.viewRepo, tag: t.repoTag, external: true }] : []),
  ];

  return (
    <header className="fo-nav">
      <div className="fo-container fo-nav-inner">
        <Link href={home} style={{ display: "flex", alignItems: "center", gap: 9 }} aria-label={t.home}>
          <LogoMark size={30} />
          <span style={{ fontWeight: 700, fontSize: 25, letterSpacing: "-0.035em", color: "var(--ink-strong)" }}><Wordmark /></span>
        </Link>
        <nav className="fo-nav-links" aria-label={t.main}>
          <Link href={home} className={`fo-nav-link${caso ? "" : " active"}`} aria-current={caso ? undefined : "page"}>
            {t.product}
          </Link>
          <Link href={caseHref} className={`fo-nav-link${caso ? " active" : ""}`} aria-current={caso ? "page" : undefined}>
            {t.caseStudy}
          </Link>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <div className="fo-tools">
            <LanguageSwitch locale={locale} t={t} />
            <ThemeToggle t={t} />
          </div>
          {caso && (
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-repo fo-hide-tablet" style={{ height: 38, padding: "0 18px", fontSize: 14 }}>
              <Icon name="pi-github" size={16} /> {t.viewRepo}
            </a>
          )}
          <Link href={demoHref} className="fo-btn fo-btn-primary fo-nav-cta" style={{ height: 38, padding: "0 18px", fontSize: 14, gap: 10 }}>
            {caso ? t.exploreDemo : t.viewDemo} <Icon name="pi-arrow-right" size={12} />
          </Link>
          <button type="button" className="fo-burger" aria-label={open ? t.closeMenu : t.openMenu} aria-expanded={open} aria-controls="fo-drawer" onClick={() => setOpen((v) => !v)}>
            <Icon name="pi-bars" size={18} />
          </button>
        </div>
      </div>
      <div id="fo-drawer" className={`fo-drawer${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label={t.mobile} aria-hidden={!open} inert={!open}>
        <div className="fo-drawer-head">
          <Link href={home} onClick={close} style={{ display: "flex", alignItems: "center", gap: 9 }} aria-label={t.home}>
            <LogoMark size={30} />
            <span style={{ fontWeight: 700, fontSize: 25, letterSpacing: "-0.035em", color: "var(--ink-strong)" }}><Wordmark /></span>
          </Link>
          <button type="button" className="fo-drawer-close" aria-label={t.closeMenu} onClick={close}>
            <Icon name="pi-times" size={16} />
          </button>
        </div>
        <svg className="fo-drawer-peaks" viewBox="0 0 300 250" aria-hidden="true">
          <path className="big" d="M0 250 L120 0 L240 250 Z" />
          <path className="small" d="M130 250 L215 90 L300 250 Z" />
        </svg>
        <nav className="fo-drawer-nav" aria-label={t.mobile}>
          <p className="fo-drawer-eyebrow">{t.explore}</p>
          {items.map((it, n) => {
            const inner = (
              <>
                <span className="fo-drawer-num">{String(n + 1).padStart(2, "0")}</span>
                <span className="fo-drawer-label">{it.label}</span>
                <span className="fo-drawer-tag">{it.tag}</span>
                <span className="fo-drawer-arrow"><Icon name="pi-arrow-up-right" size={20} /></span>
              </>
            );
            const cls = `fo-drawer-item${it.primary ? " primary" : ""}`;
            return it.external ? (
              <a key={it.label} href={it.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={close}>{inner}</a>
            ) : (
              <Link key={it.label} href={it.href} className={cls} onClick={close}>{inner}</Link>
            );
          })}
        </nav>
        <div className="fo-drawer-foot">
          <div className="fo-drawer-controls">
            <div>
              <p className="fo-drawer-eyebrow small">{t.language}</p>
              <LanguageSwitch locale={locale} t={t} className="fo-lang fo-lang-lg" />
            </div>
            <div className="fo-drawer-sep" />
            <div>
              <p className="fo-drawer-eyebrow small">{t.appearance}</p>
              <button type="button" className="fo-drawer-theme" onClick={toggleTheme} aria-label={t.theme}>
                <span className="to-dark"><Icon name="pi-moon" size={18} /> {t.dark}</span>
                <span className="to-light"><Icon name="pi-sun" size={18} /> {t.light}</span>
              </button>
            </div>
          </div>
          <p className="fo-drawer-note">{t.demoNote} · {t.fictional}</p>
        </div>
      </div>
    </header>
  );
}
