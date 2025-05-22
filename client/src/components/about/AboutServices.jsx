import React from "react";
import angebotTexts from "../../text/angebotTexts";
import "./About.css";

function AboutServices({ lang = "de" }) {
  const t = angebotTexts[lang];

  return (
    <div className="page-about">
      <section className="page-section" id="about-intro">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <ul>
        {t.features.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
        </ul>
       
      </section>

      <section className="page-section" id="about-intro">
      <ul>
      {t.pricing.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
        </ul>
        <p>{t.note}</p>
      </section>
    </div>
  );
}

export default AboutServices;
