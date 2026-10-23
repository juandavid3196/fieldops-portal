import type { CSSProperties } from "react";
import { SURFACE_ICONS } from "@/content/landing.data";
import { getDictionary, getMockCopy, type Dictionary } from "@/i18n/dictionaries";
import { order } from "../../motion";
import { JobsMock } from "./JobsMock";
import { TechSchedulePhone } from "./TechSchedulePhone";
import { Avatar, Chip, Icon, LogoMark, Wordmark, WINDOW_SHADOW } from "../mock-frames";

type Mock = Dictionary["mock"];

const portalBtn: CSSProperties = {
  height: 31,
  border: "1px solid var(--m-line)",
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 7,
  color: "var(--m-link)",
  fontSize: 10,
};

function CustomerPortal({ m }: { m: Mock }) {
  const p = m.portal;
  return (
    <div
      aria-hidden="true"
      className="fo-mock"
      style={{ position: "absolute", left: 977, top: 30, width: 279, height: 342, background: "var(--m-surface)", borderRadius: 8, boxShadow: WINDOW_SHADOW, overflow: "hidden" }}
    >
      <div style={{ height: 48, padding: "0 15px", borderBottom: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 7 }}>
        <LogoMark size={17} />
        <b style={{ fontSize: 13.5, letterSpacing: "-0.01em" }}><Wordmark ops="#0f9d9a" /></b>
        <span style={{ fontSize: 12.5, color: "var(--m-body)", borderLeft: "1px solid var(--m-line)", paddingLeft: 8, marginLeft: 2 }}>{p.label}</span>
        <Icon name="pi-bars" size={14} style={{ marginLeft: "auto", color: "var(--m-body)" }} />
      </div>
      <div style={{ padding: "13px 15px 0" }}>
        <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em" }}>{p.title}</div>
        <div style={{ marginTop: 12, height: 30, display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--m-bg)", border: "1px solid var(--m-line)", borderRadius: 4, fontSize: 10 }}>
          <span style={{ display: "grid", placeItems: "center", background: "var(--m-surface)", color: "var(--m-link)", fontWeight: 600, border: "1px solid var(--m-link)", borderRadius: 4, margin: -1 }}>{p.current}</span>
          <span style={{ display: "grid", placeItems: "center", color: "var(--m-muted)" }}>{p.history}</span>
        </div>
        <div style={{ marginTop: 13, height: 194, border: "1px solid var(--m-line)", borderRadius: 6, padding: "10px 12px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 13, fontWeight: 700 }}>
            WO-3091
            <span style={{ marginLeft: "auto" }}>
              <Chip status={{ label: m.status.prog, bg: "var(--m-green-bg)", fg: "var(--m-green-fg)" }} size={8.5} height={20} pad="0 9px" />
            </span>
          </div>
          <div style={{ marginTop: 9, fontSize: 12.5, fontWeight: 600 }}>{p.job}</div>
          <div style={{ marginTop: 6, fontSize: 9.5, color: "var(--m-body)", whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>{p.when}</div>
          <div style={{ marginTop: 12, paddingTop: 13, borderTop: "1px solid var(--m-line-soft)", display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials="SM" size={27} font={9} />
            <div>
              <div style={{ fontSize: 9, color: "var(--m-muted)" }}>{p.tech}</div>
              <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 1 }}>Sofía Martínez</div>
            </div>
          </div>
          <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
            <span style={portalBtn}>
              <Icon name="pi-phone" size={10} /> {p.details}
            </span>
            <span style={portalBtn}>
              <Icon name="pi-comment" size={10} /> {p.messages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc, circleLeft, textLeft, width, stagger }: { icon: string; title: string; desc: string; circleLeft?: number; textLeft?: number; width: number; stagger?: number }) {
  const positioned = circleLeft !== undefined;
  return (
    <>
      <div
        className={stagger === undefined ? undefined : "fo-stagger-pop"}
        style={{
          ...(stagger === undefined ? {} : order(stagger)),
          ...(positioned ? { position: "absolute", left: circleLeft, top: 431 } : {}),
          width: 85,
          height: 85,
          flex: "none",
          borderRadius: "50%",
          background: "var(--tint-teal)",
          color: "var(--icon-teal)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Icon name={icon} size={36} />
      </div>
      <div className={stagger === undefined ? undefined : "fo-stagger"} style={{ ...(stagger === undefined ? {} : order(stagger)), ...(positioned ? { position: "absolute", left: textLeft, top: 441, width } : { maxWidth: width }) }}>
        <h3 style={{ fontSize: 17.5, fontWeight: 700, color: "var(--ink-strong)", letterSpacing: "-0.01em" }}>{title}</h3>
        <p style={{ marginTop: 9, fontSize: 13, lineHeight: "19px", color: "var(--soft)" }}>{desc}</p>
      </div>
    </>
  );
}

const FEATURE_POS = [
  { circleLeft: -5, textLeft: 104, width: 232 },
  { circleLeft: 394, textLeft: 505, width: 222 },
  { circleLeft: 975, textLeft: 1079, width: 228 },
];

export async function Connected() {
  const { connected: t, mock: m } = await getDictionary();
  const copy = await getMockCopy();
  return (
    <section className="fo-conn">
      <div className="fo-container">
        <div style={{ textAlign: "center" }} data-reveal="">
          <h2 className="fo-title fo-title-md" style={{ fontSize: 40, lineHeight: 1.15, letterSpacing: "-0.04em" }}>
            {t.title}
            <span className="teal fo-shine">{t.accent}</span>
          </h2>
          <p style={{ marginTop: 4, fontSize: 21.5, color: "var(--body)" }}>{t.lead}</p>
        </div>
        <div className="fo-stage fo-conn-stage" data-reveal="scale">
          <JobsMock copy={copy} />
          <TechSchedulePhone copy={copy.schedulePhone} />
          <CustomerPortal m={m} />
          {t.features.map((f, i) => (
            <Feature key={f.title} icon={SURFACE_ICONS[i]} {...f} {...FEATURE_POS[i]} stagger={i + 6} />
          ))}
        </div>
        <div className="fo-conn-features">
          {t.features.map((f, i) => (
            <div key={f.title} data-reveal="" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <Feature icon={SURFACE_ICONS[i]} {...f} width={320} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
