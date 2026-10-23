import { getDictionary, getMockCopy } from "@/i18n/dictionaries";
import { order } from "../../motion";
import { Icon } from "../mock-frames";
import { ReportsMock } from "./ReportsMock";

export async function DataAudit() {
  const { data: t } = await getDictionary();
  const copy = await getMockCopy();
  return (
    <section className="fo-data">
      <div className="fo-container fo-data-grid">
        <div style={{ minWidth: 0 }} data-reveal="left">
          <div className="fo-eyebrow">{t.eyebrow}</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 14, fontSize: 44, lineHeight: "50px", letterSpacing: "-0.045em" }}>
            {t.title1}
            <br />
            <span className="teal fo-shine">{t.title2}</span>
          </h2>
          <p style={{ marginTop: 22, fontSize: 18, lineHeight: "26px", color: "var(--body)", maxWidth: 440 }}>{t.lead}</p>
          <ul style={{ listStyle: "none", margin: "22px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 15 }}>
            {t.checks.map((c, i) => (
              <li key={c.bold} className="fo-stagger" style={{ ...order(i + 2), display: "flex", gap: 20, alignItems: "center", fontSize: 16, color: "var(--body)" }}>
                <div style={{ width: 30, height: 30, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                  <Icon name="pi-check" size={13} />
                </div>
                <div>
                  <b style={{ color: "var(--ink-strong)", fontWeight: 600 }}>{c.bold}</b> {c.text}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 18, fontSize: 13, fontStyle: "italic", color: "var(--muted)" }}>{t.caption}</div>
        </div>
        <ReportsMock copy={copy} />
      </div>
    </section>
  );
}
