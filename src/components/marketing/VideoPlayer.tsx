"use client";

import { useState } from "react";
import { Icon } from "./mock-frames";

/** Click-to-load YouTube embed: no third-party requests until the visitor presses play. */
export function VideoPlayer({ id, title, playLabel, watchLabel }: { id: string; title: string; playLabel: string; watchLabel: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="fo-video-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="fo-video-poster" onClick={() => setPlaying(true)} aria-label={`${playLabel}: ${title}`}>
          <span className="fo-video-brand" aria-hidden="true">
            FieldOps<span>.</span>
          </span>
          <span className="fo-video-word" aria-hidden="true">connected</span>
          <span className="fo-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
          <span className="fo-video-pill" aria-hidden="true">
            <span>
              <Icon name="pi-play" size={9} style={{ marginLeft: 1 }} />
            </span>
            {watchLabel}
          </span>
        </button>
      )}
    </div>
  );
}
