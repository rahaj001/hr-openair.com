// components/FeaturesGrid.jsx
import React from 'react';
import './FeaturesGrid.css';
import { FaMobileAlt, FaLaptopCode, FaCloud } from 'react-icons/fa';

const features = [
  { icon: <FaMobileAlt />, title: 'Mobile Apps', desc: 'Native & cross-platform Apps' },
  { icon: <FaLaptopCode />, title: 'Web Development', desc: 'Responsive modern Websites' },
  { icon: <FaCloud />, title: 'Cloud Services', desc: 'Scalable cloud solutions' },
];

export default function FeaturesGrid() {
  return (
    <section className="features-grid">
      {features.map((f,i)=>(
        <div key={i} className="feature-item">
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}