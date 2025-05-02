import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Unsere Leistungen</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/icons/app-dev.svg" alt="App Entwicklung" />
          <h3>App Entwicklung</h3>
          <p>Individuelle mobile Lösungen für Android & iOS.</p>
        </div>
        <div className="feature-item">
          <img src="/icons/web-dev.svg" alt="Webentwicklung" />
          <h3>Webseiten</h3>
          <p>Moderne Webseiten mit React, HTML, CSS.</p>
        </div>
        <div className="feature-item">
          <img src="/icons/network.svg" alt="Netzwerkdienste" />
          <h3>Netzwerkdienste</h3>
          <p>Zuverlässige technische Infrastruktur und Wartung.</p>
        </div>
        <div className="feature-item">
          <img src="/icons/store.svg" alt="Store Entwicklung" />
          <h3>Store Lösungen</h3>
          <p>Entwicklung für interne & globale App Stores.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
