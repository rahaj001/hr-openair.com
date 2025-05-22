// components/HeroSection.jsx
import React from 'react';
import { motion } from "framer-motion";
import homeTexts from "../text/homeTexts";
import './CypherBox.css';


export default function CypherBox({lang, title, subtitle, ctaText, onCtaClick, bgImage }) {
  const t = homeTexts[lang];

  return (

    <section className="cypherbox-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="cypherbox-content">
        <h1 className="cypherbox-title"> {t.intro.title}</h1>
        {t.intro.paragraphs.map((p, i) => (
             <motion.p
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: i * 0.2 }}
              className="cypherbox-subtitle"
           >
             {p}
           </motion.p>          
        ))}
      
    
        <button className="hero-cta" onClick={onCtaClick}>{ctaText}</button>
      </div>
    </section>
  );
}