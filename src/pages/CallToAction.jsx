// components/CallToAction.jsx
import React from 'react';
import './CallToAction.css';

export default function CallToAction({ text, buttonText, onClick }) {
  return (
    <section className="cta-section">
      <h2>{text}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </section>
  );
}