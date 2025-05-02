import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordion.css';

export default function Accordion({ title, backgroundImage, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        className="accordion-header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onClick={() => setOpen(!open)}
      >
        <h2 className="accordion-title">{title}</h2>
        <div className="accordion-icon">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}