// components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

export default function HeroSection({ title, subtitle, ctaText, onCtaClick, bgImage }) {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta" onClick={onCtaClick}>{ctaText}</button>
      </div>
    </section>
  );
}