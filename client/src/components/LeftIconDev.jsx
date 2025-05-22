import { FaHome, FaTools, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useScrollDirection } from "../utils/ScrollContext";
import logo from '../assets/hr-logo.png';

import "./LeftIconNav.css";

export default function LeftIconNav() {
  const scrollDir = useScrollDirection();
  
  return (
    <div className={`left-icon-nav ${scrollDir === "down" ? "visible" : ""}`}>
        <div className="left-logo">
            <img src={logo} alt="HR Logo" className="left-logo-img left-logo-animated" />
        </div>  
      <NavLink to="/"><FaHome className="icon-nav" /></NavLink>
      <NavLink to="/dienste"><FaTools className="icon-nav"/></NavLink>
      <NavLink to="/kontakt"><FaEnvelope className="icon-nav"/></NavLink>
    </div>
  );
}
