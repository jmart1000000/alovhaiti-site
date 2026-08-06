import { mission } from "../data/content.js";
import SmileDivider from "./SmileDivider.jsx";

export default function Mission() {
  return (
    <section id="mission">
      <div className="mission">
        <div className="wrap reveal">
          <div>
            <p className="eyebrow">{mission.eyebrow}</p>
            <h2>{mission.title}</h2>
          </div>
          <div className="mission-text">
            <p>{mission.text}</p>
          </div>
        </div>
      </div>
      <SmileDivider flip />
    </section>
  );
}
