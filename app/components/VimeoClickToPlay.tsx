"use client";

import { useState } from "react";

const VIMEO_SRC = "https://player.vimeo.com/video/770544383?h=3b0cfe2ebf";
const WIDTH = 450;
const HEIGHT = 253;

export function VimeoClickToPlay() {
  const [played, setPlayed] = useState(false);

  return (
    <div className="vimeo-click-to-play" style={{ width: WIDTH, maxWidth: "100%", aspectRatio: `${WIDTH} / ${HEIGHT}` }}>
      {!played ? (
        <button
          type="button"
          className="vimeo-placeholder"
          onClick={() => setPlayed(true)}
          aria-label="Play Mar-Marina video"
        >
          <span className="vimeo-play-icon" aria-hidden="true">
            ▶
          </span>
          <span className="vimeo-play-text">Play video</span>
        </button>
      ) : (
        <iframe
          src={VIMEO_SRC}
          width={WIDTH}
          height={HEIGHT}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Mar-Marina video"
        />
      )}
    </div>
  );
}
