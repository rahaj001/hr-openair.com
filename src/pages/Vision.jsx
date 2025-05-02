import React from 'react';
import AccordionImage from '../components/AccordionImage'; 
import '@fortawesome/fontawesome-free/css/all.css';
import bgImage from '../assets/vision-bg.jpg';

export default function Vision() {
  return (
    <div className="">
     {/* Beispiel für eine Accordion-Sektion mit Bild */}
     <AccordionImage 
        image={bgImage} // Ersetze mit deinem Bild
        title="Vision"
        content="Dies ist ein Testtext. Hier kannst du mehr über die Vision des Projekts erfahren."
      />
      <AccordionImage 
        image="https://via.placeholder.com/1600x900"  // Ersetze mit deinem Bild
        title="Dienste"
        content="Dies ist ein Testtext. Hier kannst du mehr über unsere Dienste erfahren."
      />
      {/* Weitere Inhalte */}
    </div>
  );
}