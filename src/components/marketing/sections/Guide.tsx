import { GUIDE_ICONS } from "@/content/landing.data";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { order } from "../../motion";
import { Avatar, Bell, Icon, LogoMark, Wordmark, StatusBar } from "../mock-frames";

type Mock = Dictionary["mock"];

/** Low-poly teal mountains at the bottom of the book cover. */
function Mountains() {
  return (
    <svg viewBox="0 0 285 170" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: 170 }} aria-hidden="true">
      <polygon points="0,170 0,120 70,95 120,140" fill="#0d6f74" />
      <polygon points="70,95 150,40 120,140" fill="#14a3a0" />
      <polygon points="150,40 285,0 285,60" fill="#1bb9b2" />
      <polygon points="150,40 285,60 210,120" fill="#0f8c89" />
      <polygon points="120,140 150,40 210,120" fill="#12999a" />
      <polygon points="210,120 285,60 285,170" fill="#2dd4cc" opacity=".85" />
      <polygon points="0,170 120,140 210,120 285,170" fill="#0b5f66" />
      <polygon points="120,140 210,120 160,170" fill="#13a8a3" opacity=".9" />
    </svg>
  );
}

function Book({ b }: { b: Mock["book"] }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 18,
        top: 36,
        width: 285,
        height: 380,
        transform: "rotate(-8.5deg)",
        borderRadius: "3px 8px 8px 3px",
        background: "linear-gradient(165deg,#13305a 0%,#0b2242 55%,#0a1f3d 100%)",
        boxShadow: "-9px 0 0 #081830 inset, 0 30px 50px rgba(11,29,69,.32)",
        overflow: "hidden",
        padding: "34px 28px",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em" }}>
        <LogoMark size={24} />
        <Wordmark ops="#2cc2bd" />
      </div>
      <div style={{ marginTop: 26, fontSize: 8.5, letterSpacing: "0.2em", color: "#d5deea" }}>{b.kicker}</div>
      <div style={{ marginTop: 10, fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>{b.title}</div>
      <div style={{ marginTop: 4, fontSize: 16, color: "#fff" }}>{b.subtitle}</div>
      <div style={{ marginTop: 20, fontSize: 11, color: "#d5deea" }}>{b.topics}</div>
      <Mountains />
    </div>
  );
}

const stat = { height: 38, border: "1px solid var(--m-line)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 } as const;

function GuideSheet({ s }: { s: Mock["sheet"] }) {
  return (
    <div
      aria-hidden="true"
      className="fo-mock"
      style={{
        position: "absolute",
        left: 310,
        top: 12,
        width: 358,
        height: 440,
        background: "var(--m-surface)",
        borderRadius: 4,
        boxShadow: "0 20px 50px rgba(11,29,69,.16), 0 0 0 1px rgba(11,29,69,.05)",
        transform: "rotate(2.5deg)",
        padding: "22px 24px",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700 }}>
        <LogoMark size={15} />
        <Wordmark ops="#0f9d9a" />
        <span style={{ marginLeft: "auto", fontSize: 7.5, letterSpacing: ".16em", color: "var(--m-muted)", fontWeight: 500 }}>{s.kicker}</span>
      </div>
      <div style={{ marginTop: 20, fontSize: 8, fontWeight: 600, color: "#0f8c89", letterSpacing: ".1em" }}>{s.chapter}</div>
      <div style={{ marginTop: 6, fontSize: 19.5, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{s.title}</div>
      <div style={{ marginTop: 5, fontSize: 9.5, color: "var(--m-body)" }}>{s.lead}</div>
      <div style={{ marginTop: 12, background: "var(--m-teal-bg)", borderRadius: 6, padding: "9px 11px", fontSize: 9, color: "var(--m-body)", display: "flex", gap: 9, alignItems: "center" }}>
        <Icon name="pi-file" size={15} style={{ color: "#0f8c89" }} />
        <div>
          <b style={{ color: "var(--m-teal-fg)", fontSize: 9.5 }}>{s.tipTitle}</b>
          <div style={{ marginTop: 2 }}>{s.tip}</div>
        </div>
      </div>
      <div style={{ margin: "14px 0 0 2px", width: 207, height: 300, background: "#0b0f19", borderRadius: 26, padding: 5 }}>
        <div style={{ background: "var(--m-surface)", height: "100%", borderRadius: 21, overflow: "hidden" }}>
          <div style={{ background: "#0b1d33", color: "#fff" }}>
            <StatusBar font={8} height={22} />
            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 10px 9px", fontSize: 10, fontWeight: 700 }}>
              <LogoMark size={12} />
              <Wordmark ops="#2cc2bd" />
              <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 7 }}>
                <Bell size={10} color="#fff" />
                <Avatar initials="CR" size={18} font={6.5} bg="var(--m-teal-bg)" color="var(--m-teal-fg)" style={{ border: "1.5px solid #2cc2bd" }} />
              </span>
            </div>
          </div>
          <div style={{ padding: "9px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700 }}>{s.today}</div>
                <div style={{ fontSize: 7.5, color: "var(--m-muted)", marginTop: 2 }}>{s.date}</div>
              </div>
              <Icon name="pi-filter" size={10} style={{ marginLeft: "auto" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1fr 1fr", gap: 4 }}>
              <div style={stat}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>4</div>
                  <div style={{ fontSize: 6.5, color: "var(--m-muted)" }}>{s.stats[0]}</div>
                </div>
              </div>
              <div style={stat}>
                <Icon name="pi-clock" size={9} style={{ color: "var(--m-body)" }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>7.5</div>
                  <div style={{ fontSize: 6, color: "var(--m-muted)" }}>{s.stats[1]}</div>
                </div>
              </div>
              <div style={stat}>
                <Icon name="pi-car" size={9} style={{ color: "var(--m-body)" }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>52 min</div>
                  <div style={{ fontSize: 6, color: "var(--m-muted)" }}>{s.stats[2]}</div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 7.5, color: "var(--m-muted)" }}>{s.next}</div>
            <div style={{ border: "1px solid var(--m-line)", borderRadius: 6, padding: 8, display: "grid", gridTemplateColumns: "1fr auto", gap: 6 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.2 }}>{s.job}</div>
                <div style={{ fontSize: 7.5, color: "var(--m-muted)", marginTop: 3 }}>#WO-3091</div>
              </div>
              <div style={{ fontSize: 7, color: "var(--m-body)", lineHeight: 1.6 }}>
                <div>
                  <Icon name="pi-car" size={7} /> 22 min · 8.4 mi
                </div>
                <div>
                  <Icon name="pi-clock" size={7} /> {s.window}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function Guide() {
  const { guide: t, mock } = await getDictionary();
  return (
    <section id="guia" className="fo-guide">
      <div className="fo-container fo-guide-grid">
        <div className="fo-stage fo-guide-stage" data-reveal="left">
          <Book b={mock.book} />
          <GuideSheet s={mock.sheet} />
        </div>
        <div className="fo-guide-copy" style={{ minWidth: 0 }} data-reveal="right">
          <div className="fo-eyebrow" style={{ color: "var(--eyebrow-alt)" }}>{t.eyebrow}</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 13, fontSize: 38.5, lineHeight: 1.15, letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>
            {t.title}
          </h2>
          <p style={{ marginTop: 12, fontSize: 19, lineHeight: "27px", color: "var(--body)", maxWidth: 560 }}>{t.lead}</p>
          <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {t.items.map((item, i) => (
              <li
                key={item}
                className="fo-stagger"
                style={{ ...order(i + 2), display: "flex", gap: 34, alignItems: "center", height: 22, fontSize: 15.5, color: i < 2 ? "var(--ink-strong)" : "var(--body)", fontWeight: i < 2 ? 500 : 400 }}
              >
                <Icon name={GUIDE_ICONS[i]} size={20} style={{ color: "var(--icon-teal)", width: 20, textAlign: "center" }} />
                {item}
              </li>
            ))}
          </ul>
          {/* Targets TBD: guide route and PDF asset. */}
          <div className="fo-stagger" style={{ ...order(6), marginTop: 30, display: "flex", flexWrap: "wrap", gap: 15 }}>
            <a href="#guia" className="fo-btn fo-btn-primary" style={{ minWidth: 220, height: 48, padding: "0 24px", fontSize: 16 }}>
              {t.explore} <Icon name="pi-arrow-right" size={13} />
            </a>
            <a href="#guia" className="fo-btn fo-btn-outline" style={{ minWidth: 243, height: 48, padding: "0 24px", fontSize: 16 }}>
              <Icon name="pi-file" size={17} /> {t.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
