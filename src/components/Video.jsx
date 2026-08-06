import { video } from "../data/content.js";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="play-glyph" aria-hidden="true">
      <circle cx="32" cy="32" r="31" fill="none" stroke="#fbfbf8" strokeWidth="1.4" opacity="0.6" />
      <path d="M26,20 L46,32 L26,44 Z" fill="#fbfbf8" />
    </svg>
  );
}

export default function Video() {
  return (
    <section className="video-section">
      <div className="wrap">
        <div className="video-card reveal">
          <div className="video-copy">
            <p className="eyebrow">{video.eyebrow}</p>
            <h2>{video.title}</h2>
            <p>{video.text}</p>
          </div>

          <div className="video-frame">
            {video.embedUrl ? (
              <iframe
                src={video.embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">
                <PlayGlyph />
                <span>Vidéo à venir</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
