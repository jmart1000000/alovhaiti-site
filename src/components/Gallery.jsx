import { useEffect, useState } from "react";
import { gallery } from "../data/content.js";

function PhotoPlaceholder({ index }) {
  // Motif de remplacement tant qu'aucune vraie photo n'est fournie.
  // Dès qu'une image existe, elle est utilisée automatiquement (voir Slide ci-dessous).
  return (
    <svg className="slide-placeholder" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#e8ebe3" />
      <path d="M-20,300 C 140,200 260,360 320,280 C 400,180 520,340 660,240 L660,420 L-20,420 Z" fill="#dbe4dc" />
      <circle cx={110 + index * 40} cy="120" r="34" fill="#c97b84" opacity="0.28" />
      <path d="M240,250 C 300,190 340,320 420,240" fill="none" stroke="#0e4a3d" strokeWidth="2" opacity="0.35" />
    </svg>
  );
}

function Slide({ slide, index }) {
  if (slide.src) {
    return <img src={slide.src} alt={slide.alt} className="slide-photo" />;
  }
  return <PhotoPlaceholder index={index} />;
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const count = gallery.slides.length;

  const goTo = (i) => setActive(((i % count) + count) % count);

  useEffect(function () {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo(active + 1);
      if (e.key === "ArrowLeft") goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="gallery" id="galerie">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2>{gallery.title}</h2>
          <p className="section-lead">{gallery.text}</p>
        </div>

        <div className="slideshow reveal" role="region" aria-roledescription="carrousel" aria-label="Photos de nos activités">
          <div className="slide-frame">
            {gallery.slides.map((slide, i) => (
              <div
                className={`slide ${i === active ? "is-active" : ""}`}
                key={slide.caption}
                aria-hidden={i !== active}
              >
                <Slide slide={slide} index={i} />
              </div>
            ))}

            <button className="slide-nav prev" onClick={() => goTo(active - 1)} aria-label="Photo précédente">
              ‹
            </button>
            <button className="slide-nav next" onClick={() => goTo(active + 1)} aria-label="Photo suivante">
              ›
            </button>
          </div>

          <div className="slide-footer">
            <p className="slide-caption">{gallery.slides[active].caption}</p>
            <div className="slide-dots">
              {gallery.slides.map((slide, i) => (
                <button
                  key={slide.caption}
                  className={`slide-dot ${i === active ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Aller à la photo ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
