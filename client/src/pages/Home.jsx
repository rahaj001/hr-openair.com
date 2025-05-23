import { useContext, useEffect, useState } from 'react';
import './Home.css';
import AdBanner from "../components/banner/AdBanner";
import AboutHomeIntro from '../components/about/AboutHomeIntro';
import HomesSection from './HomesSection';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WelcomeDisplay from './WelcomeDisplay';
import { LanguageContext } from "../components/language/LanguageContext";
import bgImage from '../assets/pc-handy.jpeg';
import { useScrollDirection } from "../utils/ScrollContext";



export default function Home() {
  const consent = localStorage.getItem("cookieConsent") === "true";
    const { lang } = useContext(LanguageContext);
  const adsEnabled = false; // oder z. B. aus context oder props
  const scrollDir = useScrollDirection();

  console.log('scrollDir: ', scrollDir);

  // z. B. in App.jsx oder Layout.jsx

/*useEffect(() => {
  const onScroll = () => {
    const header = document.querySelector(".header");
    if (header) {
      if (window.scrollY > 1050) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);
*/

const scrollToSection = (id) => {
       const section = document.getElementById(id);
    };

 const onCtaClick = () => {
      alert("Test Nachricht ......!");
    };

  return (
   
       < main className="main-content-home">
               
        <section className={`home-image-section ${scrollDir === "down" ? "scroll" : ""}`}>
          <div className={`overlay ${scrollDir === "down" ? "scroll" : ""}`}></div>

          <img src={bgImage} alt="Hero" className="home-img" />

          <div className="welcome-overlay">
          <WelcomeDisplay lang={lang} />
          </div>
        </section>

        <section id="hero" className="page-section-home scroll">
           <HomesSection lang={lang} />
        
           <FeaturesSection  lang={lang}/>   
        </section>

         {/* Optional oben   <section className="page">  </section> */}
           {adsEnabled && (
        <div className="ad-banner"> {/* Platzhalter für Werbung */}
           <AdBanner consentGiven={consent} />
        </div>
  )}

         {/* Optional unten */}
            {adsEnabled && (
           <div className="ad-banner">
               <AdBanner consentGiven={consent} />
          </div>
  )}    
    
    
    {adsEnabled && (
    <aside class="ad-sidebar">
     
      <div class="ad-box">Hier könnte Ihre Werbung stehen</div>
    </aside>
    )}
   

  </main>

  );
}
