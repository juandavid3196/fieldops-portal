import { getDictionary } from "@/i18n/dictionaries";
import { VideoPlayer } from "../VideoPlayer";

const VIDEO_ID = "uo4dG3d09gE";

export async function Video() {
  const { video: t } = await getDictionary();
  return (
    <section id="video" className="fo-video">
      <div className="fo-container fo-video-inner">
        <div className="fo-video-copy" data-reveal="fade">
          <div className="fo-eyebrow" style={{ color: "var(--eyebrow-alt)" }}>{t.eyebrow}</div>
          <h2 className="fo-title fo-title-lg" style={{ marginTop: 13, fontSize: 38.5, lineHeight: 1.15, letterSpacing: "-0.04em" }}>
            {t.title}
          </h2>
          <p style={{ marginTop: 12, fontSize: 19, lineHeight: "27px", color: "var(--body)" }}>{t.lead}</p>
        </div>
        <div data-reveal="scale">
          <VideoPlayer id={VIDEO_ID} title={t.videoTitle} playLabel={t.play} />
        </div>
      </div>
    </section>
  );
}
