import React, { useState } from 'react';
import './GalleryModal.css';
import vision from "../../assets/vision-bg.jpg";
import pc from "../../assets/pc-handy.jpeg";
import hr from "../../assets/hr-logo.png";
import cypherbox from "../../assets/cypherbox-logo.png";

const images = [
  { src: vision, alt: "Bild 1" },
  { src: pc, alt: "Bild 2" },
  { src: hr, alt: "Bild 3" },
];

function GalleryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const showPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="gallery-container">
      <div className="thumbnail-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="thumbnail"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <button className="nav-btn prev" onClick={showPrev}>‹</button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="modal-image"
            />
            <button className="nav-btn next" onClick={showNext}>›</button>
            <div className="caption">{images[currentIndex].alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryModal;
