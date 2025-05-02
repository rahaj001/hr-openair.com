import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Importiere NavLink für Routing
import './Header.css';  // Verlinke die CSS-Datei

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      {/* Logo mit Animation */}
      <img src="/hr-logo.png" alt="HR Logo" className="logo-img logo-animated" />
      
      {/* Titel mit Animation */}
      <h1 className="animated-title">OpenAir</h1>
        {/* Burger Menu */}
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
      
      <nav className={`site-header ${menuOpen ? 'open' : ''}`}>
        {/* Navigation mit dynamischen aktiven Klassen */}
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/vision" className="nav-link" activeClassName="active">Vision</NavLink>
        <NavLink to="/dienste" className="nav-link" activeClassName="active">Dienste</NavLink>
        <NavLink to="/netzwerkdienste" className="nav-link" activeClassName="active">Netzwerkdienste</NavLink>
        <NavLink to="/heroSection" className="nav-link" activeClassName="active">Hero</NavLink>
        <NavLink to="/testimonials" className="nav-link" activeClassName="active">Imonials</NavLink>
        <NavLink to="/featuresSection" className="nav-link" activeClassName="active">Feature</NavLink>
        <NavLink to="/kontakt" className="nav-link" activeClassName="active">Kontakt</NavLink>

      </nav>
    </header>
  );
}

export default Header;
