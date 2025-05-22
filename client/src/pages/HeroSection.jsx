// components/HeroSection.jsx
import React from 'react';
import { motion } from "framer-motion";
import homeTexts from "../text/homeTexts";
import './HeroSection.css';


export default function HeroSection({lang, title, subtitle, ctaText, onCtaClick, bgImage }) {
  const t = homeTexts[lang];

  return (

    <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      
      <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
        <h1 className="hero-title"> {t.intro.title}</h1>
        {t.intro.paragraphs.map((p, i) => (
             <motion.p
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: i * 0.2 }}
              className="hero-subtitle"
           >
             {p}
           </motion.p>          
        ))}
      
    
        <button className="hero-cta" onClick={onCtaClick}>{ctaText}</button>
        </motion.div>
    </section>
  );
}