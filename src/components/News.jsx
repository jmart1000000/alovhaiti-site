import { news } from "../data/content.js";

export default function News() {
  return (
    <section className="news" id="actualites">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Actualités</p>
          <h2>Ce qui se passe chez ALOVHAITI.</h2>
        </div>
        <div className="news-list reveal">
          {news.map((n) => (
            <article className="news-item" key={n.title}>
              <span className="news-date">{n.date}</span>
              <div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
