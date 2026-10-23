import { STEPS } from "@/app/landing.data";
import { Icon } from "../mock-frames";

const TONES = {
  teal: { bg: "#e6f6f5", fg: "#0f8c89" },
  blue: { bg: "#e8f0fd", fg: "#2563eb" },
};

export function Flow() {
  return (
    <section id="como-funciona" style={{ background: "#fff" }}>
      <div className="fo-wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <h2 className="fo-h2" style={{ letterSpacing: "-0.03em" }}>De la solicitud al pago, todo conectado.</h2>
          <p style={{ fontSize: 17, color: "#46557a" }}>Un flujo simple y completo para que nada se quede pendiente.</p>
        </div>
        <ol className="fo-steps" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, position: "relative" }}>
              <div style={{ width: 68, height: 68, borderRadius: "50%", background: TONES[s.tone].bg, color: TONES[s.tone].fg, display: "grid", placeItems: "center" }}>
                <Icon name={s.icon} size={26} />
              </div>
              {i < STEPS.length - 1 && <i className="pi pi-arrow-right fo-step-arrow" aria-hidden="true" />}
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0b1d45", marginTop: 12 }}>{s.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.4, color: "#46557a", maxWidth: 160, textWrap: "pretty" }}>{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
