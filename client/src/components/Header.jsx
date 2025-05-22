import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';  // Importiere NavLink für Routing
import { FaMobileAlt, FaGlobe, FaStore, FaHome, FaTools, FaChevronDown, FaNetworkWired } from "react-icons/fa";
import { useScrollDirection } from "../utils/ScrollContext";
import { LanguageContext } from "./language/LanguageContext";
import LanguageSelection from "./language/LanguageSelection";
import { linkTexts } from "../text/linkTexts";
import './Header.css';  // Verlinke die CSS-Datei
import logo from '../assets/hr-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [openSub, setOpenSub] = useState(false);
const scrollDir = useScrollDirection();
  const { lang } = useContext(LanguageContext);
  const t = linkTexts[lang]; // Texte für aktuelle Sprache
  const isRTL = lang === "ar";
 
  console.log('header', scrollDir);

  useEffect(() => {
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}, [lang]);
  
   


  //console.log("Sprache:", lang);     // z. B. "de"
//console.log("Übersetzungen:", t);  
  return (
    <header className={`header ${scrollDir === "down" ? "hide" : ""}`}>
       <div className={`header-top ${scrollDir === "down" ? "hide" : ""}`}>
      {/* Logo mit Animation */}
      <img src={logo} alt="HR Logo" className="logo-img logo-animated" />
      
      {/* Titel mit Animation */}
      <h1 className="animated-title">OpenAir</h1>
      
      <LanguageSelection />
         {/* Burger Menu */}
         <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
      </div>
      
      <nav className={`main-nav ${menuOpen ? "open" : ""} ${isRTL ? "rtl" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{t.home}</NavLink>
         <NavLink to="/focus" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Focus</NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{t.dienste}</NavLink>
        <NavLink to="/kontakt" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{t.kontakt}</NavLink>
           {scrollDir === "down" && <>
           <div className="language-scroll-dir"><LanguageSelection /> </div>
           <div className="logo-scroll-dir"> <img src={logo} alt="HR Logo" className="logo-img-scroll" /> </div>
           </>}
        
      </nav>
     
    </header>
  );
}

export default Header;
