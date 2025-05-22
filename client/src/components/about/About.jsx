import React from "react";
import aboutTexts from "../../text/aboutTexts";
import "./About.css";

function About({ lang = "de" }) {
  const t = aboutTexts[lang];

  return (
    <div className="page-about">
      <section className="page-section" id="about-intro">
        <h2>{t.intro.title}</h2>
        {t.intro.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="page-section" id="services">
        <h2>{t.services.title}</h2>
        <ul>
          {t.services.items.map((item, i) => {
            const [title, desc] = item.split(":");
            return (
              <li key={i}>
                <strong>{title}:</strong> {desc}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="page-section" id="projects">
        <h2>{t.projects.title}</h2>
        <p>{t.projects.intro}</p>
        <ul>
          {t.projects.examples.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
        <p>{t.projects.outro}</p>
      </section>

      <section className="page-section" id="packages">
        <h2>{t.packages.title}</h2>
        <ul>
          {t.packages.items.map((p, i) => (
            <li key={i}>
              <strong>{p.title}:</strong>
              <br />
              {p.desc}
            </li>
          ))}
        </ul>
        <p>
          <em>{t.packages.note}</em>
        </p>
      </section>
    </div>
  );
}

export default About;
