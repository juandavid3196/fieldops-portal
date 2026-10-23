import type { CSSProperties, ReactNode } from "react";
import {
  APPS,
  ARCH_CHECKS,
  CONTRIB_LINKS,
  DECISIONS,
  LAYERS,
  PILLARS,
  PIPELINE,
  PROCESS,
  QUAL_CHECKS,
  SPEC_ROWS,
  TECH,
} from "@/app/caso-tecnico/case-study.data";
import { Icon } from "../marketing/mock-frames";
import { DotnetMark, PostgresMark, TechIcon } from "./BrandIcons";

function Check({ size, icon }: { size: number; icon: number }) {
  return (
    <div style={{ width: size, height: size, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
      <Icon name="pi-check" size={icon} />
    </div>
  );
}

function Title({ eyebrow, children, light }: { eyebrow: string; children: ReactNode; light?: boolean }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div className="cs-eyebrow" style={light ? { color: "#7fd8d4" } : undefined}>{eyebrow}</div>
      <h2 className="cs-h2" style={{ marginTop: 12, color: light ? "#fff" : undefined }}>
        {children}
      </h2>
    </div>
  );
}

/** Section header row: title on the left, optional lead paragraph on the right. */
function Head({ eyebrow, title, lead, light }: { eyebrow: string; title: ReactNode; lead?: ReactNode; light?: boolean }) {
  return (
    <div className="cs-head" style={lead ? undefined : { gridTemplateColumns: "minmax(0, 1fr)" }}>
      <Title eyebrow={eyebrow} light={light}>
        {title}
      </Title>
      {lead && (
        <p className="cs-head-lead" style={light ? { color: "#d5deea" } : undefined}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function Challenge() {
  return (
    <section id="reto" className="cs-section" style={{ background: "#fff" }}>
      <div className="fo-container">
        <Head
          eyebrow="El reto"
          title={<>Modelar una operación completa,<br />no solo una interfaz.</>}
          lead="Gestionar solicitudes, cotizaciones, órdenes de trabajo, visitas, técnicos, facturas y pagos en un mismo sistema, manteniendo aislamiento por organización (tenant) y control de permisos por rol."
        />
        <div className="cs-reto">
        {PILLARS.map((p) => (
          <div key={p.title} className="cs-card" style={{ padding: "30px 28px" }}>
            <Icon name={p.icon} size={36} style={{ color: "#0f8c89" }} />
            <h3 style={{ marginTop: 22, fontSize: 19, fontWeight: 700, color: "#0b1d45", letterSpacing: "-0.01em" }}>{p.title}</h3>
            <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.55, color: "#46557a" }}>{p.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

const blueBox: CSSProperties = { position: "absolute", background: "#e9f1fc", border: "1px solid #c9daf4", borderRadius: 5, boxSizing: "border-box" };
const arrow = (left: number, top: number) => <Icon name="pi-arrow-down" size={11} style={{ position: "absolute", left, top, color: "#2563eb" }} />;

function LayerDiagram() {
  return (
    <div className="fo-stage cs-arch-stage" aria-hidden="true">
      <div style={{ ...blueBox, left: 0, top: 0, width: 563, height: 90 }}>
        <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontSize: 12, fontWeight: 600, color: "#0b1d45" }}>
          <Icon name="pi-desktop" size={20} style={{ color: "#2563eb" }} />
          Angular applications <span style={{ color: "#46557a", fontWeight: 400 }}>(Angular 22.1)</span>
        </div>
        <div style={{ position: "absolute", left: 6, right: 6, top: 33, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 5 }}>
          {APPS.map((a) => (
            <div key={a.title} style={{ height: 51, background: "#fff", border: "1px solid #dfe8f5", borderRadius: 4, padding: "0 10px", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name={a.icon} size={18} style={{ color: "#0f8c89" }} />
              <div style={{ whiteSpace: "nowrap" }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#0b1d45" }}>{a.title}</div>
                <div style={{ fontSize: 10, color: "#46557a", marginTop: 2 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {arrow(277, 95)}
      <div style={{ ...blueBox, left: 0, top: 108, width: 563, height: 37, background: "#e2e3fb", borderColor: "#c9ccf5", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 12.5, fontWeight: 600, color: "#0b1d45" }}>
        <DotnetMark size={26} />
        .NET 10 Web API
      </div>
      {arrow(97, 150)}
      {arrow(280, 150)}
      {arrow(470, 150)}
      {LAYERS.map((l, i) => (
        <div key={l.title} style={{ ...blueBox, left: [0, 193, 386][i], top: 164, width: [188, 187, 177][i], height: 68, display: "flex", alignItems: "center", gap: 11, padding: "0 11px" }}>
          <Icon name={l.icon} size={22} style={{ color: "#0f8c89" }} />
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: "#0b1d45" }}>{l.title}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#0b1d45" }}>{l.key}</div>
            <div style={{ fontSize: 9, color: "#46557a", marginTop: 2, whiteSpace: "nowrap" }}>{l.desc}</div>
          </div>
        </div>
      ))}
      {arrow(109, 236)}
      {arrow(451, 236)}
      <div style={{ ...blueBox, left: 0, top: 247, width: 277, height: 62, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <PostgresMark size={32} />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#0b1d45" }}>PostgreSQL</div>
          <div style={{ fontSize: 11, color: "#46557a", marginTop: 2 }}>Datos de la aplicación</div>
        </div>
      </div>
      <div style={{ ...blueBox, left: 286, top: 247, width: 277, height: 62, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <Icon name="pi-folder" size={30} style={{ color: "#2563eb" }} />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#0b1d45" }}>File storage</div>
          <div style={{ fontSize: 11, color: "#46557a", marginTop: 2 }}>Archivos y evidencias</div>
        </div>
      </div>
    </div>
  );
}

export function Architecture() {
  return (
    <section id="arquitectura" className="cs-section cs-arch">
      <div className="fo-container">
        <Head
          eyebrow="Arquitectura"
          title="Una base preparada para crecer."
          lead="Una arquitectura en capas que separa claramente las responsabilidades, facilita el mantenimiento y permite evolucionar el sistema sin afectar el núcleo del negocio."
        />
        <div className="cs-arch-body">
          <LayerDiagram />
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 26 }}>
            {ARCH_CHECKS.map((c) => (
              <li key={c.title} style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <Check size={32} icon={13} />
                <div>
                  <div style={{ fontSize: 16.5, fontWeight: 600, color: "#0b1d45" }}>{c.title}</div>
                  <div style={{ fontSize: 14.5, color: "#46557a", marginTop: 4 }}>{c.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section className="cs-section" style={{ background: "#fff" }}>
      <div className="fo-container">
        <Head
          eyebrow="Tecnologías"
          title="Elegidas por su capacidad, no por moda."
        />
        <div className="cs-tech">
          {TECH.map((g) => (
            <div key={g.title} className="cs-card" style={{ padding: "26px 26px 28px", minWidth: 0 }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, fontWeight: 700, color: "#0b1d45", paddingBottom: 18, borderBottom: "1px solid #eef2f7" }}>
                <Icon name={g.icon} size={26} style={{ color: g.iconColor, width: 28 }} />
                {g.title}
              </h3>
              <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: g.big ? 18 : 13 }}>
                {g.items.map((x) => (
                  <li key={x.label} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 15, color: "#46557a" }}>
                    <span style={{ width: 28, display: "grid", placeItems: "center", flex: "none" }}>
                      <TechIcon id={x.icon} size={g.big ? 28 : 22} color={x.color} />
                    </span>
                    <span>
                      {x.label}
                      {x.note && <span style={{ fontSize: 13 }}> {x.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecDriven() {
  return (
    <section id="proceso" className="cs-section cs-spec">
      <div className="fo-container">
        <Head
          light
          eyebrow="Spec-driven development"
          title={<>Cada feature comenzó con<br />decisiones explícitas.</>}
          lead="Diseño, reglas de negocio y criterios de aceptación antes de escribir código."
        />
        <div className="cs-spec-body">
          <ol className="cs-proc">
            {PROCESS.map((p, i) => (
              <li
                key={p.title}
                style={{
                  position: "relative",
                  border: "1px solid rgba(95,211,207,.32)",
                  marginLeft: i ? -1 : 0,
                  borderRadius: 4,
                  padding: "40px 10px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "rgba(255,255,255,.02)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#2cc2bd",
                    color: "#0a1f3d",
                    fontSize: 14,
                    fontWeight: 700,
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 0 0 4px #0b2546",
                  }}
                >
                  {i + 1}
                </span>
                <Icon name={p.icon} size={30} style={{ color: "#2cc2bd" }} />
                <div style={{ marginTop: 14, fontSize: 16, fontWeight: 600, color: "#fff" }}>{p.title}</div>
                <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.5, color: "#bfcadb", whiteSpace: "pre-line" }}>{p.desc}</div>
              </li>
            ))}
          </ol>
          <div aria-hidden="true" style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 24px 50px rgba(0,0,0,.28)", minWidth: 0 }}>
            <div style={{ height: 52, display: "flex", alignItems: "center", gap: 12, padding: "0 20px", borderBottom: "1px solid #edf1f6" }}>
              <span style={{ width: 16, height: 12, border: "1.5px solid #9aa5b8", borderRadius: 2 }} />
              <span style={{ fontSize: 14.5, fontWeight: 600, color: "#0b1d45" }}>Solicitud de servicio – SPEC</span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#7b88a3" }}>‹ ›</span>
            </div>
            <div style={{ padding: "6px 20px 10px" }}>
              {SPEC_ROWS.map((r, i) => (
                <div key={r.title} style={{ padding: "13px 0", display: "flex", gap: 16, alignItems: "center", borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid #f1f4f8" : undefined }}>
                  <span style={{ width: 36, height: 36, flex: "none", borderRadius: 6, background: "#eef3fc", color: "#1d4ed8", display: "grid", placeItems: "center" }}>
                    <Icon name={r.icon} size={15} />
                  </span>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: "#0b1d45" }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "#46557a", marginTop: 2 }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Decisions() {
  return (
    <section id="decisiones" className="cs-section" style={{ background: "#fff" }}>
      <div className="fo-container">
        <Head
          eyebrow="Decisiones técnicas"
          title="Los retos que definieron el proyecto."
        />
        <div className="cs-dec">
          {DECISIONS.map((d) => (
            <div key={d.title} className="cs-card" style={{ padding: "26px 24px 22px", display: "flex", flexDirection: "column", minWidth: 0 }}>
              <Icon name={d.icon} size={30} style={{ color: "#0f8c89" }} />
              <h3 style={{ marginTop: 18, fontSize: 17, fontWeight: 700, color: "#0b1d45", letterSpacing: "-0.01em" }}>{d.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.55, color: "#46557a", flex: 1 }}>{d.desc}</p>
              <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid #f1f4f8", display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#46557a" }}>
                Problema <Icon name="pi-arrow-right" size={8} /> decisión <Icon name="pi-arrow-right" size={8} /> resultado
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section id="calidad" className="cs-section cs-qual">
      <div className="fo-container">
        <Head
          eyebrow="Calidad y entrega"
          title="Construido como si fuera a producción."
        />
        <div className="cs-qual-body">
          <div aria-hidden="true" className="cs-card" style={{ overflow: "hidden", boxShadow: "0 8px 24px rgba(11,29,69,.06)" }}>
            <div style={{ height: 56, display: "flex", alignItems: "center", gap: 12, padding: "0 22px", borderBottom: "1px solid #f1f4f8" }}>
              <Icon name="pi-github" size={20} style={{ color: "#0b1d45" }} />
              <span style={{ fontSize: 15, fontWeight: 600, color: "#0b1d45" }}>GitHub Actions</span>
              <span style={{ marginLeft: "auto", height: 28, padding: "0 12px", fontSize: 13, fontWeight: 500, color: "#136f4a", background: "#e7f6ee", border: "1px solid #b8e5cd", borderRadius: 6, display: "flex", alignItems: "center", gap: 7 }}>
                <Icon name="pi-check-circle" size={12} /> Success
              </span>
            </div>
            {PIPELINE.map((p, i) => (
              <div key={p.title} style={{ height: 60, display: "flex", alignItems: "center", gap: 16, padding: "0 22px", borderTop: i ? "1px solid #f6f8fb" : undefined }}>
                <span style={{ width: 22, height: 22, flex: "none", borderRadius: "50%", background: "#16a34a", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={10} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: "#0b1d45" }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "#46557a", marginTop: 2 }}>{p.desc}</div>
                </div>
                <span style={{ fontSize: 13.5, color: "#46557a" }}>{p.time}</span>
              </div>
            ))}
          </div>
          <div style={{ minWidth: 0 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {QUAL_CHECKS.map((q) => (
                <li key={q} style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 16, color: "#1c2b55" }}>
                  <Check size={28} icon={12} />
                  {q}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center", fontSize: 15, color: "#1c2b55", background: "#e3ebf6", borderRadius: 8, padding: "16px 20px" }}>
              <span aria-hidden="true" style={{ width: 24, height: 24, flex: "none", borderRadius: "50%", background: "#46557a", color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>i</span>
              Las decisiones y limitaciones también quedan documentadas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contribution() {
  return (
    <section id="contribucion" className="cs-section" style={{ background: "#fff" }}>
      <div className="fo-container">
        <Head
          eyebrow="Mi contribución"
          title={<>Diseñé el producto y también<br />construí sus cimientos.</>}
          lead="Definí los flujos, diseñé la experiencia, modelé el dominio y desarrollé la arquitectura Full Stack apoyándome en un proceso iterativo asistido por IA y validado mediante revisiones técnicas."
        />
        <div className="cs-contrib">
          {CONTRIB_LINKS.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a key={l.title} href={l.href} className="cs-link-card" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <Icon name={l.icon} size={34} style={{ color: "#0f8c89", width: 36, textAlign: "center" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#0b1d45" }}>{l.title}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "#46557a", marginTop: 6 }}>{l.desc}</div>
                </div>
                <Icon name="pi-arrow-right" size={15} style={{ color: "#0f8c89" }} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
