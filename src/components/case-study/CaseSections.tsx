import type { CSSProperties, ReactNode } from "react";
import {
  APPS,
  CONTRIB_LINKS,
  DECISION_ICONS,
  LAYERS,
  PILLAR_ICONS,
  PIPELINE,
  PROCESS_ICONS,
  SPEC_ROWS,
  TECH,
} from "@/content/case-study.data";
import { getDictionary, getLocale, type Dictionary } from "@/i18n/dictionaries";
import { Icon } from "../marketing/mock-frames";
import { DotnetMark, PostgresMark, TechIcon } from "./BrandIcons";

type CaseCopy = Dictionary["caseStudy"];

function Check({ size, icon }: { size: number; icon: number }) {
  return (
    <div style={{ width: size, height: size, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
      <Icon name="pi-check" size={icon} />
    </div>
  );
}

const lines = (parts: string[]) =>
  parts.map((part, i) => (
    <span key={part}>
      {i > 0 && <br />}
      {part}
    </span>
  ));

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

export async function Challenge() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.challenge;
  return (
    <section id="reto" className="cs-section" style={{ background: "var(--bg)" }}>
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={lines(t.title)} lead={t.lead} />
        <div className="cs-reto">
          {t.pillars.map((p, i) => (
            <div key={p.title} className="cs-card" style={{ padding: "30px 28px" }}>
              <Icon name={PILLAR_ICONS[i]} size={36} style={{ color: "var(--icon-teal)" }} />
              <h3 style={{ marginTop: 22, fontSize: 19, fontWeight: 700, color: "var(--ink-strong)", letterSpacing: "-0.01em" }}>{p.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.55, color: "var(--body)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const blueBox: CSSProperties = { position: "absolute", background: "var(--diag-box)", border: "1px solid var(--diag-border)", borderRadius: 5, boxSizing: "border-box" };
const arrow = (left: number, top: number) => <Icon name="pi-arrow-down" size={11} style={{ position: "absolute", left, top, color: "var(--diag-arrow)" }} />;
const strong: CSSProperties = { fontWeight: 600, color: "var(--ink-strong)" };

function LayerDiagram({ t }: { t: CaseCopy["architecture"] }) {
  return (
    <div className="fo-stage cs-arch-stage" aria-hidden="true">
      <div style={{ ...blueBox, left: 0, top: 0, width: 563, height: 90 }}>
        <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontSize: 12, ...strong }}>
          <Icon name="pi-desktop" size={20} style={{ color: "var(--diag-icon)" }} />
          Angular applications <span style={{ color: "var(--body)", fontWeight: 400 }}>(Angular 22.1)</span>
        </div>
        <div style={{ position: "absolute", left: 6, right: 6, top: 33, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 5 }}>
          {APPS.map((a, i) => (
            <div key={a.title} style={{ height: 51, background: "var(--diag-inner)", border: "1px solid var(--diag-inner-border)", borderRadius: 4, padding: "0 10px", display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name={a.icon} size={18} style={{ color: "var(--icon-teal)" }} />
              <div style={{ whiteSpace: "nowrap", minWidth: 0 }}>
                <div style={{ fontSize: 11.5, ...strong }}>{a.title}</div>
                <div style={{ fontSize: 10, color: "var(--body)", marginTop: 2 }}>{t.apps[i]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {arrow(277, 95)}
      <div style={{ ...blueBox, left: 0, top: 108, width: 563, height: 37, background: "var(--diag-api)", borderColor: "var(--diag-api-border)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 12.5, ...strong }}>
        <DotnetMark size={26} />
        .NET 10 Web API
      </div>
      {arrow(97, 150)}
      {arrow(280, 150)}
      {arrow(470, 150)}
      {LAYERS.map((l, i) => (
        <div key={l.title} style={{ ...blueBox, left: [0, 193, 386][i], top: 164, width: [188, 187, 177][i], height: 68, display: "flex", alignItems: "center", gap: 11, padding: "0 11px" }}>
          <Icon name={l.icon} size={22} style={{ color: "var(--icon-teal)" }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 11.5, ...strong }}>{l.title}</div>
            <div style={{ fontSize: 11, ...strong }}>{l.key}</div>
            <div style={{ fontSize: 9, color: "var(--body)", marginTop: 2, whiteSpace: "nowrap" }}>{t.layers[i]}</div>
          </div>
        </div>
      ))}
      {arrow(109, 236)}
      {arrow(451, 236)}
      <div style={{ ...blueBox, left: 0, top: 247, width: 277, height: 62, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <PostgresMark size={32} />
        <div>
          <div style={{ fontSize: 12, ...strong }}>PostgreSQL</div>
          <div style={{ fontSize: 11, color: "var(--body)", marginTop: 2 }}>{t.storage[0]}</div>
        </div>
      </div>
      <div style={{ ...blueBox, left: 286, top: 247, width: 277, height: 62, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <Icon name="pi-folder" size={30} style={{ color: "var(--diag-icon)" }} />
        <div>
          <div style={{ fontSize: 12, ...strong }}>File storage</div>
          <div style={{ fontSize: 11, color: "var(--body)", marginTop: 2 }}>{t.storage[1]}</div>
        </div>
      </div>
    </div>
  );
}

export async function Architecture() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.architecture;
  return (
    <section id="arquitectura" className="cs-section cs-arch">
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <div className="cs-arch-body">
          <LayerDiagram t={t} />
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 26 }}>
            {t.checks.map((c) => (
              <li key={c.title} style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <Check size={32} icon={13} />
                <div>
                  <div style={{ fontSize: 16.5, fontWeight: 600, color: "var(--ink-strong)" }}>{c.title}</div>
                  <div style={{ fontSize: 14.5, color: "var(--body)", marginTop: 4 }}>{c.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export async function Technologies() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.tech;
  return (
    <section className="cs-section" style={{ background: "var(--bg)" }}>
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={t.title} />
        <div className="cs-tech">
          {TECH.map((g) => (
            <div key={g.title} className="cs-card" style={{ padding: "26px 26px 28px", minWidth: 0 }}>
              <h3 style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 17, fontWeight: 700, color: "var(--ink-strong)", paddingBottom: 18, borderBottom: "1px solid var(--line-soft)" }}>
                <Icon name={g.icon} size={26} style={{ color: g.iconColor, width: 28 }} />
                {g.title}
              </h3>
              <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: g.big ? 18 : 13 }}>
                {g.items.map((x) => (
                  <li key={x.label} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 15, color: "var(--body)" }}>
                    <span style={{ width: 28, display: "grid", placeItems: "center", flex: "none" }}>
                      <TechIcon id={x.icon} size={g.big ? 28 : 22} color={x.color} />
                    </span>
                    <span>
                      {x.label}
                      {x.note && <span style={{ fontSize: 13 }}> {t.testsNote}</span>}
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

export async function SpecDriven() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.spec;
  return (
    <section id="proceso" className="cs-section cs-spec">
      <div className="fo-container">
        <Head light eyebrow={t.eyebrow} title={lines(t.title)} lead={t.lead} />
        <div className="cs-spec-body">
          <ol className="cs-proc">
            {t.steps.map((p, i) => (
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
                <Icon name={PROCESS_ICONS[i]} size={30} style={{ color: "#2cc2bd" }} />
                <div style={{ marginTop: 14, fontSize: 16, fontWeight: 600, color: "#fff" }}>{p.title}</div>
                <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.5, color: "#bfcadb", whiteSpace: "pre-line" }}>{p.desc}</div>
              </li>
            ))}
          </ol>
          <div aria-hidden="true" style={{ background: "var(--surface)", borderRadius: 8, overflow: "hidden", boxShadow: "0 24px 50px rgba(0,0,0,.28)", border: "1px solid var(--mock-ring)", minWidth: 0 }}>
            <div style={{ height: 52, display: "flex", alignItems: "center", gap: 12, padding: "0 20px", borderBottom: "1px solid var(--line-soft)" }}>
              <span style={{ width: 16, height: 12, border: "1.5px solid var(--muted)", borderRadius: 2 }} />
              <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink-strong)" }}>{t.card}</span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)" }}>‹ ›</span>
            </div>
            <div style={{ padding: "6px 20px 10px" }}>
              {SPEC_ROWS.map((r, i) => (
                <div key={r.title} style={{ padding: "13px 0", display: "flex", gap: 16, alignItems: "center", borderBottom: i < SPEC_ROWS.length - 1 ? "1px solid var(--line-soft)" : undefined }}>
                  <span style={{ width: 36, height: 36, flex: "none", borderRadius: 6, background: "var(--tint-blue)", color: "var(--icon-blue)", display: "grid", placeItems: "center" }}>
                    <Icon name={r.icon} size={15} />
                  </span>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink-strong)" }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "var(--body)", marginTop: 2 }}>{t.rows[i]}</div>
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

export async function Decisions() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.decisions;
  return (
    <section id="decisiones" className="cs-section" style={{ background: "var(--bg)" }}>
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={t.title} />
        <div className="cs-dec">
          {t.items.map((d, i) => (
            <div key={d.title} className="cs-card" style={{ padding: "26px 24px 22px", display: "flex", flexDirection: "column", minWidth: 0 }}>
              <Icon name={DECISION_ICONS[i]} size={30} style={{ color: "var(--icon-teal)" }} />
              <h3 style={{ marginTop: 18, fontSize: 17, fontWeight: 700, color: "var(--ink-strong)", letterSpacing: "-0.01em" }}>{d.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.55, color: "var(--body)", flex: 1 }}>{d.desc}</p>
              <div style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--line-soft)", display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--body)" }}>
                {t.path[0]} <Icon name="pi-arrow-right" size={8} /> {t.path[1]} <Icon name="pi-arrow-right" size={8} /> {t.path[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function Quality() {
  const { caseStudy } = await getDictionary();
  const t = caseStudy.quality;
  return (
    <section id="calidad" className="cs-section cs-qual">
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={t.title} />
        <div className="cs-qual-body">
          <div aria-hidden="true" className="cs-card" style={{ overflow: "hidden" }}>
            <div style={{ height: 56, display: "flex", alignItems: "center", gap: 12, padding: "0 22px", borderBottom: "1px solid var(--line-soft)" }}>
              <Icon name="pi-github" size={20} style={{ color: "var(--ink-strong)" }} />
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-strong)" }}>GitHub Actions</span>
              <span style={{ marginLeft: "auto", height: 28, padding: "0 12px", fontSize: 13, fontWeight: 500, color: "#136f4a", background: "#e7f6ee", border: "1px solid #b8e5cd", borderRadius: 6, display: "flex", alignItems: "center", gap: 7 }}>
                <Icon name="pi-check-circle" size={12} /> Success
              </span>
            </div>
            {PIPELINE.map((p, i) => (
              <div key={p.title} style={{ height: 60, display: "flex", alignItems: "center", gap: 16, padding: "0 22px", borderTop: i ? "1px solid var(--line-soft)" : undefined }}>
                <span style={{ width: 22, height: 22, flex: "none", borderRadius: "50%", background: "#16a34a", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={10} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink-strong)" }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "var(--body)", marginTop: 2 }}>{p.desc}</div>
                </div>
                <span style={{ fontSize: 13.5, color: "var(--body)" }}>{p.time}</span>
              </div>
            ))}
          </div>
          <div style={{ minWidth: 0 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {t.checks.map((q) => (
                <li key={q} style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 16, color: "var(--ink)" }}>
                  <Check size={28} icon={12} />
                  {q}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 32, display: "flex", gap: 14, alignItems: "center", fontSize: 15, color: "var(--ink)", background: "var(--info)", borderRadius: 8, padding: "16px 20px" }}>
              <span aria-hidden="true" style={{ width: 24, height: 24, flex: "none", borderRadius: "50%", background: "#46557a", color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700 }}>i</span>
              {t.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function Contribution() {
  const { caseStudy } = await getDictionary();
  const locale = await getLocale();
  const t = caseStudy.contribution;
  return (
    <section id="contribucion" className="cs-section" style={{ background: "var(--bg)" }}>
      <div className="fo-container">
        <Head eyebrow={t.eyebrow} title={lines(t.title)} lead={t.lead} />
        <div className="cs-contrib">
          {CONTRIB_LINKS.map((l, i) => {
            const external = l.href.startsWith("http");
            const href = external ? l.href : `/${locale}${l.href}`;
            return (
              <a key={l.icon} href={href} className="cs-link-card" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <Icon name={l.icon} size={34} style={{ color: "var(--icon-teal)", width: 36, textAlign: "center" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "var(--ink-strong)" }}>{t.links[i].title}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--body)", marginTop: 6 }}>{t.links[i].desc}</div>
                </div>
                <Icon name="pi-arrow-right" size={15} style={{ color: "var(--icon-teal)" }} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
