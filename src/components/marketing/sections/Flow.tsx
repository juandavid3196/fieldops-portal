import { STEP_STYLE } from "@/content/landing.data";
import { getDictionary } from "@/i18n/dictionaries";
import { Icon } from "../mock-frames";

const TONES = {
  teal: { bg: "var(--tint-teal)", fg: "var(--icon-teal)" },
  blue: { bg: "var(--tint-blue)", fg: "var(--icon-blue)" },
};

export async function Flow() {
  const { flow: t } = await getDictionary();
  return (
    <section id="como-funciona" className="fo-flow">
      <div className="fo-container" style={{ textAlign: "center" }}>
        <h2 className="fo-title fo-title-md" style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: "-0.035em" }}>
          {t.title}
        </h2>
        <p style={{ marginTop: 3, fontSize: 17.5, color: "var(--body)" }}>{t.lead}</p>
      </div>
      <ol className="fo-steps">
        {t.steps.map((s, i) => {
          const style = STEP_STYLE[i];
          const tone = TONES[style.tone];
          return (
            <li key={s.title} className="fo-step">
              <div className="fo-step-icon" style={{ width: 88, height: 88, borderRadius: "50%", background: tone.bg, color: tone.fg, display: "grid", placeItems: "center" }}>
                <Icon name={style.icon} size={34} />
              </div>
              {i < t.steps.length - 1 && <i className="pi pi-arrow-right fo-step-arrow" aria-hidden="true" />}
              <h3 style={{ marginTop: 13, fontSize: 17, fontWeight: 700, color: "var(--ink-strong)" }}>{s.title}</h3>
              <p style={{ marginTop: 5, fontSize: 14.5, lineHeight: 1.55, color: "var(--body)", whiteSpace: "pre-line" }}>{s.desc}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
