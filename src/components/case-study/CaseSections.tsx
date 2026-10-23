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

const blueBox = { background: "#e9f1fc", border: "1px solid #c9daf4", borderRadius: 4 } as const;
const arrowDown = { fontSize: 10, color: "#2563eb", textAlign: "center", lineHeight: 1 } as const;

function Check({ size, icon }: { size: number; icon: number }) {
  return (
    <div style={{ width: size, height: size, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
      <Icon name="pi-check" size={icon} />
    </div>
  );
}

export function Challenge() {
  return (
    <section id="reto" style={{ background: "#fff" }}>
      <div className="cs-wrap cs-reto">
        <div className="cs-intro">
          <div className="cs-eyebrow">EL RETO</div>
          <h2 className="cs-h2" style={{ letterSpacing: "-0.03em" }}>Modelar una operación completa, no solo una interfaz.</h2>
          <p>
            Gestionar solicitudes, cotizaciones, órdenes de trabajo, visitas, técnicos, facturas y pagos en un mismo sistema, manteniendo aislamiento por
            organización (tenant) y control de permisos por rol.
          </p>
        </div>
        {PILLARS.map((p) => (
          <div key={p.title} className="cs-card" style={{ padding: "22px 18px", display: "flex", flexDirection: "column", gap: 8, boxShadow: "0 2px 8px rgba(11,29,69,.03)" }}>
            <Icon name={p.icon} size={26} style={{ color: "#0f8c89" }} />
            <h3 style={{ margin: "10px 0 0", fontSize: 15.5, fontWeight: 600, color: "#0b1d45" }}>{p.title}</h3>
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#46557a" }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Architecture() {
  return (
    <section id="arquitectura" style={{ background: "linear-gradient(180deg,#eef4fb 0%,#f2f7fc 100%)" }}>
      <div className="cs-wrap cs-arch-split">
        <div className="cs-intro" style={{ gap: 14 }}>
          <div className="cs-eyebrow">ARQUITECTURA</div>
          <h2 className="cs-h2" style={{ letterSpacing: "-0.03em" }}>Una base preparada para crecer.</h2>
          <p style={{ lineHeight: 1.6 }}>
            Una arquitectura en capas que separa claramente las responsabilidades, facilita el mantenimiento y permite evolucionar el sistema sin afectar el
            núcleo del negocio.
          </p>
        </div>

        <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 4, minWidth: 0 }}>
          <div style={{ ...blueBox, borderRadius: 6, padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 11, fontWeight: 600, color: "#0b1d45" }}>
              <Icon name="pi-desktop" size={15} style={{ color: "#2563eb" }} />
              Angular applications <span style={{ color: "#46557a", fontWeight: 400 }}>(Angular 22.1)</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 6 }}>
              {APPS.map((a) => (
                <div key={a.title} style={{ background: "#fff", border: "1px solid #dfe8f5", borderRadius: 4, padding: 9, display: "flex", alignItems: "center", gap: 9 }}>
                  <Icon name={a.icon} size={15} style={{ color: "#2563eb" }} />
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 600, color: "#1d4ed8" }}>{a.title}</div>
                    <div style={{ fontSize: 8.5, color: "#46557a", marginTop: 1 }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={arrowDown}><Icon name="pi-arrow-down" size={10} /></div>
          <div style={{ background: "#e7e8fc", border: "1px solid #c9ccf5", borderRadius: 6, padding: 9, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontSize: 11.5, fontWeight: 600, color: "#0b1d45" }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#5b3fd4", color: "#fff", fontSize: 6.5, fontWeight: 700, display: "grid", placeItems: "center" }}>.NET</span>
            .NET 10 Web API
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 6, ...arrowDown }}>
            <Icon name="pi-arrow-down" size={10} /><Icon name="pi-arrow-down" size={10} /><Icon name="pi-arrow-down" size={10} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 6 }}>
            {LAYERS.map((l) => (
              <div key={l.title} style={{ ...blueBox, padding: 10, display: "flex", gap: 10, alignItems: "center" }}>
                <Icon name={l.icon} size={18} style={{ color: "#0f8c89" }} />
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 600, color: "#1d4ed8" }}>{l.title}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#1d4ed8" }}>{l.key}</div>
                  <div style={{ fontSize: 8.5, color: "#46557a", marginTop: 2 }}>{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, ...arrowDown }}>
            <Icon name="pi-arrow-down" size={10} /><Icon name="pi-arrow-down" size={10} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ ...blueBox, padding: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <Icon name="pi-database" size={22} style={{ color: "#336791" }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#0b1d45" }}>PostgreSQL</div>
                <div style={{ fontSize: 9.5, color: "#46557a" }}>Datos de la aplicación</div>
              </div>
            </div>
            <div style={{ ...blueBox, padding: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <Icon name="pi-folder" size={22} style={{ color: "#2563eb" }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#0b1d45" }}>File storage</div>
                <div style={{ fontSize: 9.5, color: "#46557a" }}>Archivos y evidencias</div>
              </div>
            </div>
          </div>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          {ARCH_CHECKS.map((c) => (
            <li key={c.title} style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <Check size={24} icon={10} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#0b1d45" }}>{c.title}</div>
                <div style={{ fontSize: 11, color: "#46557a", marginTop: 3 }}>{c.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="cs-wrap cs-tech">
        <div className="cs-intro">
          <div className="cs-eyebrow">TECNOLOGÍAS</div>
          <h2 className="cs-h2" style={{ letterSpacing: "-0.03em" }}>Elegidas por su capacidad, no por moda.</h2>
        </div>
        {TECH.map((g) => (
          <div key={g.title} className="cs-card" style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
            <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 600, color: "#0b1d45" }}>
              <Icon name={g.icon} size={20} style={{ color: g.iconColor }} />
              {g.title}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: "0 0 0 2px", display: "flex", flexDirection: "column", gap: 8 }}>
              {g.items.map((x) => (
                <li key={x.t} style={{ fontSize: 12.5, color: "#46557a", display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Placeholder brand marks; swap for official SVG logos. */}
                  <span
                    aria-hidden="true"
                    style={{
                      width: x.size ?? 16,
                      height: x.size ?? 16,
                      flex: "none",
                      borderRadius: x.r ?? "4px",
                      background: x.bg,
                      color: "#fff",
                      fontSize: x.fs ?? 7,
                      fontWeight: 700,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {x.m}
                  </span>
                  {x.t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SpecDriven() {
  return (
    <section id="proceso" style={{ background: "linear-gradient(135deg,#0a1f3d 0%,#0c2a4f 60%,#0a223f 100%)", position: "relative", zIndex: 1 }}>
      <div className="cs-wrap cs-spec">
        <div className="cs-intro">
          <div className="cs-eyebrow" style={{ color: "#d5deea" }}>SPEC-DRIVEN DEVELOPMENT</div>
          <h2 className="cs-h2" style={{ letterSpacing: "-0.03em", color: "#fff" }}>Cada feature comenzó con decisiones explícitas.</h2>
          <p style={{ color: "#d5deea" }}>Diseño, reglas de negocio y criterios de aceptación antes de escribir código.</p>
        </div>
        <ol className="cs-proc" style={{ listStyle: "none", margin: 0 }}>
          {PROCESS.map((p, i) => (
            <li
              key={p.title}
              style={{
                position: "relative",
                border: "1px solid rgba(95,211,207,.35)",
                borderRadius: 6,
                padding: "24px 8px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 6,
                background: "rgba(255,255,255,.03)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -13,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#0a223f",
                  border: "1.5px solid #2cc2bd",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {i + 1}
              </span>
              <Icon name={p.icon} size={20} style={{ color: "#2cc2bd", marginBottom: 4 }} />
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#fff" }}>{p.title}</div>
              <div style={{ fontSize: 11, lineHeight: 1.4, color: "#bfcadb" }}>{p.desc}</div>
              {i < PROCESS.length - 1 && <i className="pi pi-arrow-right cs-proc-arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="cs-spec-card" style={{ background: "#fff", borderRadius: 6, overflow: "hidden", boxShadow: "0 24px 50px rgba(0,0,0,.28)", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderBottom: "1px solid #edf1f6" }}>
            <span style={{ width: 12, height: 9, border: "1px solid #9aa5b8", borderRadius: 2 }} />
            <span style={{ fontSize: 10.5, fontWeight: 600, color: "#0b1d45" }}>Solicitud de servicio – SPEC</span>
            <span style={{ marginLeft: "auto", fontSize: 8, color: "#7b88a3" }}>‹ ›</span>
          </div>
          <div style={{ padding: "6px 12px 10px", display: "flex", flexDirection: "column" }}>
            {SPEC_ROWS.map((r) => (
              <div key={r.title} style={{ display: "flex", gap: 12, padding: "7px 0", borderBottom: "1px solid #f1f4f8", alignItems: "center" }}>
                <Icon name={r.icon} size={14} style={{ color: "#1d4ed8", width: 16 }} />
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#0b1d45" }}>{r.title}</div>
                  <div style={{ fontSize: 8.5, color: "#46557a", marginTop: 1 }}>{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Decisions() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="cs-wrap cs-dec">
        <div className="cs-intro">
          <div className="cs-eyebrow">DECISIONES TÉCNICAS</div>
          <h2 className="cs-h2">Los retos que definieron el proyecto.</h2>
        </div>
        {DECISIONS.map((d) => (
          <div key={d.title} className="cs-card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10, minWidth: 0, height: "100%", boxSizing: "border-box" }}>
            <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: 12, fontSize: 12.5, fontWeight: 600, color: "#0b1d45" }}>
              <Icon name={d.icon} size={20} style={{ color: "#0f8c89" }} />
              {d.title}
            </h3>
            <div style={{ fontSize: 12, lineHeight: 1.45, color: "#46557a", flex: 1 }}>{d.desc}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10.5, color: "#46557a", borderTop: "1px solid #f1f4f8", paddingTop: 10 }}>
              Problema <Icon name="pi-arrow-right" size={8} /> decisión <Icon name="pi-arrow-right" size={8} /> resultado
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Quality() {
  return (
    <section id="calidad" style={{ background: "linear-gradient(180deg,#eef4fb 0%,#f3f8fc 100%)" }}>
      <div className="cs-wrap cs-qual">
        <div className="cs-intro">
          <div className="cs-eyebrow">CALIDAD Y ENTREGA</div>
          <h2 className="cs-h2">Construido como si fuera a producción.</h2>
        </div>
        <div aria-hidden="true" className="cs-card" style={{ overflow: "hidden", minWidth: 0, boxShadow: "0 8px 24px rgba(11,29,69,.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
            <Icon name="pi-github" size={16} style={{ color: "#0b1d45" }} />
            <span style={{ fontSize: 11.5, fontWeight: 600, color: "#0b1d45" }}>GitHub Actions</span>
            <span style={{ marginLeft: "auto", fontSize: 9.5, fontWeight: 500, color: "#136f4a", background: "#e7f6ee", border: "1px solid #b8e5cd", padding: "3px 9px", borderRadius: 5, display: "flex", alignItems: "center", gap: 5 }}>
              <Icon name="pi-check-circle" size={9} /> Success
            </span>
          </div>
          {PIPELINE.map((p) => (
            <div key={p.title} style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 14px", borderTop: "1px solid #f1f4f8" }}>
              <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#16a34a", color: "#fff", display: "grid", placeItems: "center" }}>
                <Icon name="pi-check" size={8} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#0b1d45" }}>{p.title}</div>
                <div style={{ fontSize: 9.5, color: "#46557a" }}>{p.desc}</div>
              </div>
              <span style={{ fontSize: 10, color: "#46557a" }}>{p.time}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, minWidth: 0 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {QUAL_CHECKS.map((q) => (
              <li key={q} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 12.5, color: "#46557a" }}>
                <Check size={18} icon={8} />
                {q}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 12, color: "#1c2b55", background: "#e3ebf6", borderRadius: 5, padding: "11px 14px", marginTop: 8 }}>
            <span aria-hidden="true" style={{ width: 18, height: 18, flex: "none", borderRadius: "50%", background: "#46557a", color: "#fff", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700 }}>i</span>
            Las decisiones y limitaciones también quedan documentadas.
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contribution() {
  return (
    <section id="contribucion" style={{ background: "#fff" }}>
      <div className="cs-wrap cs-contrib">
        <div className="cs-intro" style={{ gap: 10 }}>
          <div className="cs-eyebrow">MI CONTRIBUCIÓN</div>
          <h2 className="cs-h2">Diseñé el producto y también construí sus cimientos.</h2>
          <p style={{ fontSize: 13, lineHeight: 1.5 }}>
            Definí los flujos, diseñé la experiencia, modelé el dominio y desarrollé la arquitectura Full Stack apoyándome en un proceso iterativo asistido
            por IA y validado mediante revisiones técnicas.
          </p>
        </div>
        {CONTRIB_LINKS.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <a key={l.title} href={l.href} className="cs-link-card" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <Icon name={l.icon} size={26} style={{ color: "#0f8c89" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0b1d45" }}>{l.title}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.45, color: "#46557a", marginTop: 4 }}>{l.desc}</div>
              </div>
              <Icon name="pi-arrow-right" size={13} style={{ color: "#0f8c89" }} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
