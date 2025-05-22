import React, { useState } from 'react';
import './AccordionImage.css';  // Importiere die CSS-Datei

const AccordionImage = ({ image, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-container">
      <div className="image-container">
        <img src={image} alt="Accordion Background" className="background-image" />
        <div className="image-overlay"></div>
        
        {/* Text- und Header-Sektion */}
        <div className="content">
          <h2 className="accordion-title">{title}</h2>
          
          <div className="accordion-icon" onClick={toggleAccordion}>
            <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i>
          </div>

          {/* Der Text, der sich öffnet, wenn das Akkordeon geöffnet ist */}
          {isOpen && (
            <div className="accordion-content">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionImage;
