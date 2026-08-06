import { contact } from "../data/content.js";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <div>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2>{contact.title}</h2>
            <p>{contact.text}</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              Écrire à ALOVHAITI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
