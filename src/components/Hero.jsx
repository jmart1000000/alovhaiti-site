import { hero } from "../data/content.js";
import SmileDivider from "./SmileDivider.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg className="hero-dots" viewBox="0 0 340 340" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={20 + col * 42}
              cy={20 + row * 42}
              r="2"
              fill="#0e4a3d"
              opacity={0.14}
            />
          ))
        )}
      </svg>
      <div className="wrap">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-lead">{hero.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className="btn btn-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
      <SmileDivider />
    </section>
  );
}
