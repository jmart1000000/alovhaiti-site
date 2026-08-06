import { programs } from "../data/content.js";

export default function Programs() {
  return (
    <section className="programs" id="programmes">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Nos programmes</p>
          <h2>Ce que nous faisons, concrètement.</h2>
        </div>
        <div className="program-grid">
          {programs.map((p, i) => (
            <div className="program-card reveal" key={p.title} style={{ transitionDelay: `${i * 100}ms` }}>
              <span className={`status-tag ${p.status === "En cours" ? "active" : "soon"}`}>
                {p.status}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="program-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
