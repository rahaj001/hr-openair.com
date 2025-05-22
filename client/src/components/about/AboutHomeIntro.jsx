import React from "react";
import { motion } from "framer-motion";
import homeTexts from "../../text/homeTexts";
import "./About.css";

function AboutHomeIntro({ lang = "de" }) {
  const t = homeTexts[lang];

  return (
    <div className="page-about">
      
      <section className="page-about-section" id="about-intro">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-title"
        >
          {t.intro.title}
         </motion.h2>

       
        {t.intro.paragraphs.map((p, i) => (
             <motion.p
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: i * 0.2 }}
             className="about-paragraph"
           >
             {p}
           </motion.p>          
        ))}
        
      </section>

      <section className="page-about-section" id="services">
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
    </div>
  );
}

export default AboutHomeIntro;
