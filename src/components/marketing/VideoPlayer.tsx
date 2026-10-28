"use client";

import { useState } from "react";
import { Icon } from "./mock-frames";

/** Click-to-load YouTube embed: no third-party requests until the visitor presses play. */
export function VideoPlayer({ id, title, playLabel }: { id: string; title: string; playLabel: string }) {
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" loading="lazy" />
          <span className="fo-video-play">
            <Icon name="pi-play" size={22} style={{ marginLeft: 3 }} />
          </span>
        </button>
      )}
    </div>
  );
}
