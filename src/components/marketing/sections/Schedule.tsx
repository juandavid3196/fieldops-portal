import { getDictionary, getMockCopy } from "@/i18n/dictionaries";
import { order } from "../../motion";
import { Icon } from "../mock-frames";
import { DispatchMock } from "./DispatchMock";

export async function Schedule() {
  const { schedule: t } = await getDictionary();
  const copy = await getMockCopy();
  return (
    <section className="fo-sched">
      <div className="fo-container">
        <div className="fo-sched-grid">
          <DispatchMock copy={copy} />
          <div style={{ minWidth: 0 }} data-reveal="right" >
            <h2 className="fo-title fo-title-lg fo-sched-title" style={{ fontSize: 41, lineHeight: "48px", marginTop: -2, letterSpacing: "-0.04em" }}>
              {t.title1}
              <br />
              <span className="teal">{t.title2}</span>
            </h2>
            <p style={{ marginTop: 21, fontSize: 17, lineHeight: "24px", color: "var(--body)", maxWidth: 472 }}>{t.lead}</p>
            <ul style={{ listStyle: "none", margin: "36px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 33 }}>
              {t.checks.map((c, i) => (
                <li key={c.title} className="fo-stagger" style={{ display: "flex", gap: 23, alignItems: "center", ...order(i + 2) }}>
                  <div style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", background: "#0f8c89", color: "#fff", display: "grid", placeItems: "center" }}>
                    <Icon name="pi-check" size={14} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16.5, fontWeight: 600, color: "var(--ink-strong)" }}>{c.title}</h3>
                    <div style={{ fontSize: 14, color: "var(--body)", marginTop: 7 }}>{c.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
