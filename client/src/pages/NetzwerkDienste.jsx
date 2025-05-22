import React from 'react';
import HeroSection from './HeroSection';
import bild from '../assets/vision-bg.jpg';

export default function Netzwerkdienste() {
  return (
  
    <div className="page">
      <h1>Netzwerkdienste</h1>
      <p>Installation, Wartung und Optimierung von Netzwerken.</p>
      <HeroSection  title="title"  subtitle="subtitle" ctaText="clatext"   bgImage={bild} />
    </div>
    
  );
}