import React from 'react';
import './Dienste.css';
import bild from '../assets/vision-bg.jpg';

export default function Dienste() {
  return (
    <div className="page">
      <h1>Unsere Dienste</h1>
      <ul>
        <li>App-Entwicklung</li>
        <li>Webseitenerstellung</li>
        <li>UI/UX Design</li>
      </ul>
     
      <section className="dienste-section">
  <div className="dienste-text">
    <h2>Digitale Lösungen</h2>
    <p>
      Wir bieten individuelle digitale Services – vom Konzept bis zur Umsetzung. Skalierbar, modern und effizient.
    </p>
  </div>
  <div className="dienste-image">
    <img src={bild} alt="Digitale Dienste" />
  </div>
</section>


    </div>
  );
}