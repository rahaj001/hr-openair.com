import React, { useState } from "react";
// import { shortScreens } from "../../data/shortscreenData";
import "./ShortscreenGallery.css";
import vision from "../../assets/vision-bg.jpg";
import pc from "../../assets/pc-handy.jpeg";
import hr from "../../assets/hr-logo.png";
import cypherbox from "../../assets/cypherbox-logo.png";

function ShortscreenGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apps = [
  {
    id: 1,
    name: "Kontakte",
    description: "Verwalte deine gespeicherten Kontakte.",
    image: vision,
    gallery: [
        vision, pc, hr, cypherbox,
    ] },
      {
        id: 2,
        name: "Musik",
        description: "Höre deine Lieblingsmusik jederzeit.",
        image: pc,
         gallery: [
            pc, vision, hr, cypherbox,
        ]
      },
      {
        id: 3,
        name: "Logins",
        description: "Speichere sichere Zugangsdaten.",
        image: hr,
         gallery: [
            hr, pc, vision, cypherbox,
        ]
      },
      {
        id: 4,
        name: "Galerie",
        description: "Deine Fotos und Screenshots.",
        image: cypherbox,
         gallery: [
            cypherbox, pc, vision, hr,
        ]
      },
    ];

  const openGallery = (gallery) => {
    setCurrentGallery(gallery);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setCurrentGallery([]);
    setCurrentIndex(0);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );

  const selectImage = (index) => setCurrentIndex(index);

  return (
    <div className="shortscreen-container">
      {apps.map((item) => (
        <div
          key={item.id}
          className="shortscreen-item"
          onClick={() => openGallery(item.gallery)}
        >
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      {isOpen && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>×</button>

            {/* Hauptbild */}
            <div className="main-image">
              <img
                src={currentGallery[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
              />
            </div>

            {/* Navigation */}
            <div className="nav-buttons">
              <button onClick={prevImage}>‹</button>
              <button onClick={nextImage}>›</button>
            </div>

            {/* Thumbnails */}
            <div className="thumbnails">
              {currentGallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className={currentIndex === idx ? "active" : ""}
                  onClick={() => selectImage(idx)}
                />
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="dots">
              {currentGallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => selectImage(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShortscreenGallery;
