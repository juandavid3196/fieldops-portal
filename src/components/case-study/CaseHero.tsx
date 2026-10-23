import Link from "next/link";
import { ARCH_COLUMNS, OPS, STATS, TAGS } from "@/app/caso-tecnico/case-study.data";
import { Icon } from "../marketing/mock-frames";

function ArchDiagram() {
  return (
    <figure className="cs-diagram" style={{ margin: 0 }}>
      <figcaption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Arquitectura de FieldOps: aplicaciones Angular (portal del equipo, experiencia del técnico y portal del cliente) conectadas a una API .NET 10
        con las capas Application (CQRS), Domain (DDD) e Infrastructure (EF Core), que persiste en PostgreSQL y almacenamiento de archivos. CI/CD con
        GitHub Actions, Docker, auditoría y permisos por rol.
      </figcaption>
      <div aria-hidden="true">
        <div className="cs-diagram-cols">
          {ARCH_COLUMNS.map((col, ci) => (
            <div
              key={col.title}
              style={{ border: "1px solid rgba(95,211,207,.35)", borderRadius: 6, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 10, position: "relative" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9, color: "#fff", fontSize: 13.5, fontWeight: 500 }}>
                {col.badge && (
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: col.badge.radius,
                      background: col.badge.bg,
                      color: "#fff",
                      fontSize: col.badge.fontSize,
                      fontWeight: 700,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {col.badge.text}
                  </span>
                )}
                {col.title}
              </div>
              {col.items.map((it) => (
                <div key={it.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
                  <div
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      border: "1px solid rgba(95,211,207,.3)",
                      borderRadius: 4,
                      padding: 10,
                      background: "rgba(255,255,255,.035)",
                      flex: 1,
                    }}
                  >
                    <Icon name={it.icon} size={it.size} style={{ color: "#e8f1fb", width: 22, textAlign: "center" }} />
                    <div>
                      <div style={{ fontSize: 11.5, fontWeight: 500, color: "#fff" }}>{it.title}</div>
                      <div style={{ fontSize: 9.5, color: "#9fb0c8", marginTop: 2 }}>{it.desc}</div>
                    </div>
                  </div>
                  {it.down && <Icon name="pi-arrow-down" size={9} style={{ color: "#9fb0c8" }} />}
                </div>
              ))}
              {ci < 2 && <i className="pi pi-arrow-right cs-diagram-arrow" />}
            </div>
          ))}
        </div>
        <div style={{ height: 14, margin: "6px 8% 0", border: "1px dashed rgba(159,176,200,.45)", borderBottom: "none" }} />
        <div className="cs-ops">
          {OPS.map((o) => (
            <div key={o.title} style={{ border: "1px dashed rgba(159,176,200,.5)", borderRadius: 4, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name={o.icon} size={18} style={{ color: "#e8f1fb" }} />
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 500, color: "#fff" }}>{o.title}</div>
                <div style={{ fontSize: 9.5, color: "#9fb0c8", marginTop: 2 }}>{o.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function CaseHero() {
  return (
    <>
      <section className="cs-hero">
        <div className="cs-hero-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
            <div className="cs-eyebrow" style={{ fontSize: 12 }}>ENGINEERING CASE STUDY</div>
            <h1 className="cs-h1">
              Cómo construí FieldOps: del problema a una <span className="teal">plataforma completa.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: "#46557a", textWrap: "pretty" }}>
              Un proyecto Full Stack diseñado para demostrar arquitectura, producto, calidad y decisiones técnicas en un sistema de operaciones reales.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {TAGS.map((t) => (
                <span key={t} style={{ fontSize: 12.5, color: "#1c2b55", background: "#e6edf7", padding: "7px 14px", borderRadius: 999 }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 10 }}>
              <a href="#arquitectura" className="fo-btn fo-btn-primary" style={{ padding: "14px 22px", fontWeight: 500, boxShadow: "0 6px 16px rgba(15,140,137,.22)" }}>
                Explorar la arquitectura <Icon name="pi-arrow-right" size={13} />
              </a>
              <Link href="/" className="fo-btn fo-btn-secondary" style={{ padding: "13px 22px", color: "#1d4ed8" }}>
                <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#2563eb", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-play" size={8} style={{ marginLeft: 1 }} />
                </span>
                Ver la aplicación
              </Link>
            </div>
          </div>
          <ArchDiagram />
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid #edf1f6", borderBottom: "1px solid #edf1f6" }}>
        <div className="cs-stats">
          {STATS.map((s) => (
            <div key={s.title} className="cs-stat">
              <div
                aria-hidden="true"
                style={{
                  width: 34,
                  height: 34,
                  flex: "none",
                  borderRadius: s.mark ? s.radius : 0,
                  background: s.mark ? s.bg : "transparent",
                  color: s.mark ? "#fff" : s.color,
                  display: "grid",
                  placeItems: "center",
                  fontSize: s.mark ? s.fontSize : undefined,
                  fontWeight: 700,
                }}
              >
                {s.mark ?? <Icon name={s.icon!} size={22} />}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0b1d45" }}>{s.title}</div>
                <div style={{ fontSize: 11.5, color: "#46557a", marginTop: 2 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
