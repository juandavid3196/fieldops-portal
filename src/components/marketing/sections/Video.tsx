import { getDictionary } from "@/i18n/dictionaries";
import { HardHat, Icon } from "../mock-frames";
import { VideoPlayer } from "../VideoPlayer";

const VIDEO_ID = "uo4dG3d09gE";

export async function Video() {
  const { video: t } = await getDictionary();
  const audiences = [
    { icon: <Icon name="pi-building" size={26} />, label: t.office },
    { icon: <HardHat size={28} />, label: t.technicians },
    { icon: <Icon name="pi-users" size={26} />, label: t.customers },
  ];
  return (
    <section id="video" className="fo-video">
      <div className="fo-container fo-video-inner">
        <div className="fo-video-copy" data-reveal="fade">
          <span className="fo-video-rule" aria-hidden="true" />
          <div className="fo-eyebrow" style={{ color: "var(--eyebrow-alt)" }}>{t.eyebrow}</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 14, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            {t.title}
          </h2>
          <p style={{ marginTop: 14, fontSize: 19, lineHeight: "28px", color: "var(--body)", maxWidth: 540, marginInline: "auto" }}>{t.lead}</p>
        </div>
        <div data-reveal="scale" style={{ width: "100%" }}>
          <VideoPlayer id={VIDEO_ID} title={t.videoTitle} playLabel={t.play} watchLabel={t.watch} />
        </div>
        <ul className="fo-video-aud" data-reveal="fade">
          {audiences.map((a) => (
            <li key={a.label}>
              <span style={{ color: "var(--icon-teal)", display: "grid" }}>{a.icon}</span>
              {a.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
