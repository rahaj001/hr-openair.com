// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  { text: 'Best service ever!', author: 'Alice' },
  { text: 'Amazing quality!', author: 'Bob' },
  { text: 'Will come back again.', author: 'Carol' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i=> (i+1)%testimonials.length), 5000);
    return ()=>clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <p className="quote">“{testimonials[idx].text}”</p>
      <p className="author">- {testimonials[idx].author}</p>
    </section>
  );
}