// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import welcomeTexts from '../text/welcomeText';
import './WelcomeDisplay.css';



export default function WelcomeDisplay({ lang }) {
  const t = welcomeTexts[lang];
  

  const testimonials = [
  { text: t.text1 },
  { text: t.text2 },

];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i=> (i+1)%testimonials.length), 5000);
    return ()=>clearInterval(timer);
  }, []);

  return (         
    <section className="testimonials-welcome">
      <p className="text">“{testimonials[idx].text}”</p>
    </section>
    
  );
}