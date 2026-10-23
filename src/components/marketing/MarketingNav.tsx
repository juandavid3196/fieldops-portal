"use client";

import Link from "next/link";
import { useState } from "react";
import { REPO_URL } from "@/app/caso-tecnico/case-study.data";
import { Icon, Leaf } from "./mock-frames";

export function MarketingNav({ active = "producto" }: { active?: "producto" | "caso" }) {
  const [open, setOpen] = useState(false);
  const caso = active === "caso";

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #edf1f6", position: "relative", zIndex: 2 }}>
      <div className="fo-nav-inner">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Leaf size={28} stroke />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.03em", color: "#0b1d45" }}>FieldOps</span>
        </Link>
        <nav className="fo-nav-links" aria-label="Principal">
          <Link href="/" className={`fo-nav-link${active === "producto" ? " active" : ""}`}>
            Producto
          </Link>
          <Link href="/caso-tecnico" className={`fo-nav-link${active === "caso" ? " active" : ""}`}>
            Caso técnico
          </Link>
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: caso ? 12 : 10, alignItems: "center" }}>
          {caso && (
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-repo fo-hide-tablet">
              <Icon name="pi-github" size={16} /> Ver repositorio
            </a>
          )}
          <Link
            href={caso ? "/#demo" : "#demo"}
            className="fo-btn fo-btn-primary"
            style={{ gap: 10, fontSize: 14, padding: "11px 18px", borderRadius: caso ? 5 : 6 }}
          >
            {caso ? "Explorar demo" : "Ver demo"} <Icon name="pi-arrow-right" size={12} />
          </Link>
          <button
            type="button"
            className="fo-burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="fo-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "pi-times" : "pi-bars"} size={18} />
          </button>
        </div>
      </div>
      <nav id="fo-drawer" className={`fo-drawer${open ? " open" : ""}`} aria-label="Menú móvil">
        <Link href="/" onClick={() => setOpen(false)}>
          Producto
        </Link>
        <Link href="/caso-tecnico" onClick={() => setOpen(false)}>
          Caso técnico
        </Link>
        <Link href={caso ? "/#demo" : "#demo"} onClick={() => setOpen(false)}>
          {caso ? "Explorar demo" : "Ver demo"}
        </Link>
        {caso && (
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Ver repositorio
          </a>
        )}
      </nav>
    </header>
  );
}
