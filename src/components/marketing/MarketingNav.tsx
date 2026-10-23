"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { REPO_URL } from "@/content/case-study.data";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/es";
import { Icon, Leaf } from "./mock-frames";

type NavCopy = Dictionary["nav"];

function readTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function ThemeToggle({ t }: { t: NavCopy }) {
  // Strict Mode's dev remount resets <html> attributes; re-apply the stored theme (no-op in production).
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
    } catch {}
  }, []);

  function toggle() {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Both icons render; CSS shows the one for the theme you would switch to, so SSR and client agree.
  return (
    <button type="button" className="fo-theme" onClick={toggle} aria-label={t.theme} title={t.theme}>
      <Icon name="pi-moon" size={15} />
      <Icon name="pi-sun" size={15} />
    </button>
  );
}

/** Remembers the chosen language so "/" redirects to it next time (read by the proxy). */
function rememberLocale(l: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; SameSite=Lax`;
}

function LanguageSwitch({ locale, t }: { locale: Locale; t: NavCopy }) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");
  return (
    <nav className="fo-lang" aria-label={t.language}>
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

  return (
    <header className="fo-nav">
      <div className="fo-container fo-nav-inner">
        <Link href={home} style={{ display: "flex", alignItems: "center", gap: 9 }} aria-label={t.home}>
          <Leaf size={30} stroke />
          <span style={{ fontWeight: 700, fontSize: 25, letterSpacing: "-0.035em", color: "var(--ink-strong)" }}>FieldOps</span>
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
            <Icon name={open ? "pi-times" : "pi-bars"} size={18} />
          </button>
        </div>
      </div>
      <nav id="fo-drawer" className={`fo-drawer${open ? " open" : ""}`} aria-label={t.mobile}>
        <Link href={home} onClick={close}>
          {t.product}
        </Link>
        <Link href={caseHref} onClick={close}>
          {t.caseStudy}
        </Link>
        <Link href={demoHref} onClick={close}>
          {caso ? t.exploreDemo : t.viewDemo}
        </Link>
        {caso && (
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
            {t.viewRepo}
          </a>
        )}
      </nav>
    </header>
  );
}
