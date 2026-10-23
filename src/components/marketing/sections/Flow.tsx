import { STEPS } from "@/app/landing.data";
import { Icon } from "../mock-frames";

const TONES = {
  teal: { bg: "#e8f6f5", fg: "#0f8c89" },
  blue: { bg: "#eaf0fc", fg: "#2563eb" },
};

export function Flow() {
  return (
    <section id="como-funciona" className="fo-flow">
      <div className="fo-container" style={{ textAlign: "center" }}>
        <h2 className="fo-title fo-title-md" style={{ fontSize: 36, lineHeight: 1.15, letterSpacing: "-0.035em" }}>
          De la solicitud al pago, todo conectado.
        </h2>
        <p style={{ marginTop: 3, fontSize: 17.5, color: "#46557a" }}>Un flujo simple y completo para que nada se quede pendiente.</p>
      </div>
      <ol className="fo-steps">
        {STEPS.map((s, i) => (
          <li key={s.title} className="fo-step">
            <div style={{ width: 88, height: 88, borderRadius: "50%", background: TONES[s.tone].bg, color: TONES[s.tone].fg, display: "grid", placeItems: "center" }}>
              <Icon name={s.icon} size={34} />
            </div>
            {i < STEPS.length - 1 && <i className="pi pi-arrow-right fo-step-arrow" aria-hidden="true" />}
            <h3 style={{ marginTop: 13, fontSize: 17, fontWeight: 700, color: "#0b1d45" }}>{s.title}</h3>
            <p style={{ marginTop: 5, fontSize: 14.5, lineHeight: 1.55, color: "#46557a", whiteSpace: "pre-line" }}>{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
