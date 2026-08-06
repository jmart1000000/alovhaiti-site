import { pillars } from "../data/content.js";

const icons = {
  Sensibiliser: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6 L20 14 M20 26 L20 34 M6 20 L14 20 M26 20 L34 20" stroke="#0e4a3d" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="20" cy="20" r="6" stroke="#c97b84" strokeWidth="1.6" />
    </svg>
  ),
  Former: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 14 L20 8 L34 14 L20 20 Z" stroke="#0e4a3d" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 18 V27 C12 30 27 30 27 27 V18" stroke="#c97b84" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Outiller: (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="16" width="24" height="16" rx="3" stroke="#0e4a3d" strokeWidth="1.6" />
      <path d="M14 16 V12 C14 9 26 9 26 12 V16" stroke="#c97b84" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="wrap">
        <div className="pillar-grid">
          {pillars.map((p, i) => (
            <div className="pillar-card reveal" key={p.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="pillar-icon">{icons[p.title]}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
