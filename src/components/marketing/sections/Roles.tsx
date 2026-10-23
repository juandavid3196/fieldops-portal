import type { CSSProperties } from "react";
import { ROLE_ICONS } from "@/content/landing.data";
import { getDictionary } from "@/i18n/dictionaries";
import { delay } from "../../motion";
import { HardHat, Icon } from "../mock-frames";

export async function Roles() {
  const { roles: t } = await getDictionary();
  return (
    <section id="roles" className="fo-roles">
      <div className="fo-container">
        <div className="fo-roles-head" data-reveal="">
          <div className="fo-eyebrow" style={{ color: "#d5deea" }}>{t.eyebrow}</div>
          <h2 className="fo-title fo-title-lg fo-roles-title" style={{ marginTop: 10, fontSize: 52, lineHeight: 1.05, color: "#fff", letterSpacing: "-0.04em" }}>
            {t.title}
            <span className="fo-shine" style={{ color: "#2cc2bd", "--accent": "#2cc2bd" } as CSSProperties}>
              {t.accent}
            </span>
          </h2>
          <p style={{ marginTop: 12, fontSize: 22.5, color: "#d5deea" }}>{t.lead}</p>
        </div>
        <div className="fo-roles-grid">
          {t.items.map((r, i) => (
            <div key={r.title} className="fo-role-card" data-reveal="" style={{ minHeight: 186, borderRadius: 4, padding: "19px 24px 18px 27px", ...delay(i * 110) }}>
              <span className="fo-role-icon" style={{ color: "var(--accent)", height: 42 }}>
                {ROLE_ICONS[i] === "hardhat" ? <HardHat size={44} /> : <Icon name={ROLE_ICONS[i]} size={40} style={{ lineHeight: "42px" }} />}
              </span>
              <h3 style={{ marginTop: 10, fontSize: 19.5, fontWeight: 700, color: "var(--ink-strong)", letterSpacing: "-0.02em" }}>{r.title}</h3>
              <p style={{ marginTop: 4, fontSize: 16.5, lineHeight: 1.45, color: "var(--body)", maxWidth: 222 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
