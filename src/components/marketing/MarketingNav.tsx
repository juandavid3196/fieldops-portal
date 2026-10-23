"use client";

import Link from "next/link";
import { useState } from "react";
import { REPO_URL } from "@/app/caso-tecnico/case-study.data";
import { Icon, Leaf } from "./mock-frames";

export function MarketingNav({ variant = "landing" }: { variant?: "landing" | "case" }) {
  const [open, setOpen] = useState(false);
  const caso = variant === "case";
  const demoHref = caso ? "/#demo" : "#demo";
  const close = () => setOpen(false);

  return (
    <header className="fo-nav">
      <div className="fo-container fo-nav-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }} aria-label="FieldOps — inicio">
          <Leaf size={30} stroke />
          <span style={{ fontWeight: 700, fontSize: 25, letterSpacing: "-0.035em", color: "#0b1d45" }}>FieldOps</span>
        </Link>
        <nav className="fo-nav-links" aria-label="Principal">
          <Link href="/" className={`fo-nav-link${caso ? "" : " active"}`} aria-current={caso ? undefined : "page"}>
            Producto
          </Link>
          <Link href="/caso-tecnico" className={`fo-nav-link${caso ? " active" : ""}`} aria-current={caso ? "page" : undefined}>
            Caso técnico
          </Link>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          {caso && (
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-repo fo-hide-tablet" style={{ height: 38, padding: "0 18px", fontSize: 14 }}>
              <Icon name="pi-github" size={16} /> Ver repositorio
            </a>
          )}
          <Link href={demoHref} className="fo-btn fo-btn-primary fo-nav-cta" style={{ height: 38, padding: "0 18px", fontSize: 14, gap: 10 }}>
            {caso ? "Explorar demo" : "Ver demo"} <Icon name="pi-arrow-right" size={12} />
          </Link>
          <button type="button" className="fo-burger" aria-label="Abrir menú" aria-expanded={open} aria-controls="fo-drawer" onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "pi-times" : "pi-bars"} size={18} />
          </button>
        </div>
      </div>
      <nav id="fo-drawer" className={`fo-drawer${open ? " open" : ""}`} aria-label="Menú móvil">
        <Link href="/" onClick={close}>
          Producto
        </Link>
        <Link href="/caso-tecnico" onClick={close}>
          Caso técnico
        </Link>
        <Link href={demoHref} onClick={close}>
          {caso ? "Explorar demo" : "Ver demo"}
        </Link>
        {caso && (
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
            Ver repositorio
          </a>
        )}
      </nav>
    </header>
  );
}
