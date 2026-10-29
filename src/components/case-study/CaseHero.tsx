import type { CSSProperties, ReactNode } from "react";
import { STATS } from "@/content/case-study.data";
import { APP_URL } from "@/content/demo.data";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { delay } from "../motion";
import { Icon } from "../marketing/mock-frames";
import { AngularMark, DotnetMark, PostgresMark, TechIcon } from "./BrandIcons";

const BORDER = "1px solid rgba(95,211,207,.35)";
const ITEM_BORDER = "1px solid rgba(95,211,207,.3)";
const DASH = "1px dashed rgba(159,176,200,.5)";

function DiagramItem({ icon, title, desc, style, iconSize = 20 }: { icon: ReactNode | string; title: string; desc: ReactNode; style: CSSProperties; iconSize?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 12px",
        border: ITEM_BORDER,
        borderRadius: 5,
        background: "rgba(255,255,255,.035)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {typeof icon === "string" ? <Icon name={icon} size={iconSize} style={{ color: "#e8f1fb", width: 24, textAlign: "center", flex: "none" }} /> : icon}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{title}</div>
        <div style={{ fontSize: 10.5, color: "#9fb0c8", marginTop: 3, lineHeight: 1.35, whiteSpace: "pre-line" }}>{desc}</div>
      </div>
    </div>
  );
}

function Column({ left, width, children, title }: { left: number; width: number; children: ReactNode; title: ReactNode }) {
  return (
    <div style={{ position: "absolute", left, top: 23, width, height: 260, border: BORDER, borderRadius: 6 }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 24, transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, color: "#fff", fontSize: 14, fontWeight: 500 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

const ARROW: CSSProperties = { position: "absolute", color: "#9fb0c8" };

function ArchDiagram({ caption, d }: { caption: string; d: Dictionary["caseStudy"]["diagram"] }) {
  return (
    <figure className="fo-stage cs-diagram-stage fo-enter-fade" style={{ ...delay(250), margin: 0, background: "linear-gradient(160deg,#0d2440 0%,#0a1c33 100%)", borderRadius: 8, boxShadow: "0 24px 60px rgba(11,29,69,.28)" }}>
      <figcaption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{caption}</figcaption>
      <div aria-hidden="true">
        <Column left={22} width={226} title={<><AngularMark size={24} /> Angular applications</>}>
          <DiagramItem icon="pi-desktop" title="Staff portal" desc={d.apps[0]} style={{ left: 13, top: 53, width: 200, height: 56 }} />
          <DiagramItem icon="pi-wrench" title="Technician experience" desc={d.apps[1]} style={{ left: 13, top: 122, width: 200, height: 56 }} />
          <DiagramItem icon="pi-user" title="Customer portal" desc={d.apps[2]} style={{ left: 13, top: 191, width: 200, height: 56 }} />
        </Column>
        <Column left={284} width={217} title={<><DotnetMark size={27} /> .NET 10 API</>}>
          <DiagramItem icon="pi-verified" title="Application" desc="CQRS (Use cases)" style={{ left: 12, top: 50, width: 194, height: 51 }} />
          <Icon name="pi-arrow-down" size={10} style={{ ...ARROW, left: 104, top: 106 }} />
          <DiagramItem icon="pi-database" title="Domain" desc="DDD (Entities)" style={{ left: 12, top: 125, width: 194, height: 51 }} />
          <Icon name="pi-arrow-down" size={10} style={{ ...ARROW, left: 104, top: 181 }} />
          <DiagramItem icon="pi-database" title="Infrastructure" desc="EF Core (Repositories)" style={{ left: 12, top: 196, width: 194, height: 51 }} />
        </Column>
        <Column left={532} width={162} title="Data & storage">
          <DiagramItem icon={<PostgresMark size={30} />} title="PostgreSQL" desc={d.storage[0]} style={{ left: 11, top: 46, width: 140, height: 96, alignItems: "flex-start", paddingTop: 22 }} />
          <DiagramItem icon="pi-file" iconSize={28} title="File storage" desc={d.storage[1]} style={{ left: 11, top: 151, width: 140, height: 97, alignItems: "flex-start", paddingTop: 24 }} />
        </Column>
        {/* column-to-column arrows */}
        <svg width="713" height="396" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
          <g className="cs-flow-arrow" stroke="#9fb0c8" strokeWidth="1.3" fill="none">
            <path d="M250 147 H280 M274 142 L280 147 L274 152" />
            <path d="M503 147 H528 M522 142 L528 147 L522 152" />
          </g>
          <g className="cs-flow-dash" stroke="rgba(159,176,200,.55)" strokeWidth="1" strokeDasharray="3 3" fill="none">
            <path d="M93 283 V306 M393 283 V306 M613 283 V306 M93 306 H613" />
            <path d="M95 306 V319 M268 306 V319 M443 306 V319 M611 306 V319" />
          </g>
        </svg>
        {[
          { icon: "pi-cog", t: "CI/CD", d: d.ops[0], left: 22, width: 146 },
          { icon: "docker", t: "Docker", d: d.ops[1], left: 180, width: 176 },
          { icon: "pi-file", t: "Audit", d: d.ops[2], left: 369, width: 148 },
          { icon: "pi-shield", t: "RBAC", d: d.ops[3], left: 528, width: 166 },
        ].map((o) => (
          <div
            key={o.t}
            style={{ position: "absolute", left: o.left, top: 319, width: o.width, height: 59, border: DASH, borderRadius: 5, display: "flex", alignItems: "center", gap: 12, padding: "0 14px", boxSizing: "border-box" }}
          >
            {o.icon === "docker" ? (
              <span style={{ filter: "brightness(0) invert(.93)" }}>
                <TechIcon id="docker" size={28} />
              </span>
            ) : (
              <Icon name={o.icon} size={24} style={{ color: "#e8f1fb" }} />
            )}
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "#fff" }}>{o.t}</div>
              <div style={{ fontSize: 10.5, color: "#9fb0c8", marginTop: 3, whiteSpace: "nowrap" }}>{o.d}</div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export async function CaseHero() {
  const { caseStudy: t } = await getDictionary();
  return (
    <>
      <section className="cs-hero">
        <div className="fo-container cs-hero-grid">
          <div style={{ minWidth: 0 }}>
            <div className="cs-eyebrow fo-enter">{t.eyebrow}</div>
            <h1 className="cs-h1 fo-enter" style={{ marginTop: 16, ...delay(100) }}>
              {t.h1[0]}
              <br />
              {t.h1[1]}
              <br />
              <span className="teal fo-shine">{t.h1Accent}</span>
            </h1>
            <p className="fo-enter" style={{ marginTop: 20, fontSize: 18, lineHeight: "28px", color: "var(--body)", maxWidth: 520, ...delay(220) }}>
              {t.lead}
            </p>
            <div className="fo-enter" style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 10, ...delay(320) }}>
              {t.tags.map((tag) => (
                <span key={tag} style={{ height: 32, display: "inline-flex", alignItems: "center", fontSize: 13.5, color: "var(--ink)", background: "var(--pill)", padding: "0 16px", borderRadius: 999 }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="fo-enter" style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 14, ...delay(420) }}>
              <a href="#arquitectura" className="fo-btn fo-btn-primary" style={{ height: 52, padding: "0 26px", fontSize: 15.5, fontWeight: 500, boxShadow: "0 6px 16px rgba(15,140,137,.22)" }}>
                {t.explore} <Icon name="pi-arrow-right" size={13} />
              </a>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="fo-btn fo-btn-secondary" style={{ height: 52, padding: "0 26px", fontSize: 15.5, color: "var(--link)" }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
                </span>
                {t.viewApp}
              </a>
            </div>
          </div>
          <ArchDiagram caption={t.diagramCaption} d={t.diagram} />
        </div>
      </section>

      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--line-soft)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="fo-container cs-stats">
          {STATS.map((s, i) => (
            <div key={s.title} className="cs-stat" data-reveal="" style={delay(i * 90)}>
              <span style={{ width: 44, display: "grid", placeItems: "center", flex: "none" }}>
                <TechIcon id={s.icon} size={s.icon.startsWith("pi-") ? 40 : s.icon === "dotnet" ? 42 : 38} color="var(--icon-teal)" />
              </span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-strong)", letterSpacing: "-0.01em" }}>{s.title}</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.4, color: "var(--body)", marginTop: 3 }}>{t.stats[i]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
