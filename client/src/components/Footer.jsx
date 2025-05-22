import React from 'react';
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} OpenAir Solutions</p>
      
      <nav className="footer-nav">
        <NavLink to="/impressum">Impressum</NavLink>
        <NavLink to="/datenschutz">Datenschutz</NavLink>
        <NavLink to="/cookiesRechlinie">Cookie-Richtlinie</NavLink>
      </nav>
    </footer>
  );
}