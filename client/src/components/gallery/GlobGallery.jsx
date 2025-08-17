import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Gallery.css";

// 🔽 Alle PNGs aus accc-Ordner laden
const images = import.meta.glob("../../assets/screenshot/acc/*.png", { eager: true });

// -> images = { "pfad/filename.png": { default: url }, ... }
const galleryImages = Object.entries(images)
  .map(([path, mod]) => ({
    name: path.split("/").pop(), // z.B. "bild1.png"
    url: mod.default,            // URL zum Bild
  }));

function GlobGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshow, setSlideshow] = useState(true);
  const slideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // ✨ nur 1 App-Eintrag, Gallery dynamisch
  const apps = [
    {
      id: 1,
      name: "ACCC Screenshots",
      description: "Screenshots aus accc-Ordner",
      image: galleryImages[0]?.url, // erstes Bild als Thumbnail
      gallery: galleryImages.map((img) => img.url), // alle Bilder
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
    setSlideshow(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  }, [currentGallery]);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentGallery.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
    setSlideshow(false);
  };

  useEffect(() => {
    if (!isOpen || !slideshow) return;
    if (!isHovered) {
      slideInterval.current = setInterval(nextImage, 4000);
    }
    return () => clearInterval(slideInterval.current);
  }, [isOpen, slideshow, isHovered, nextImage]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, nextImage]);

  return (
    <div className="shortscreen-container">
      {apps.map((item) => (
        <div
          key={item.id}
          className="shortscreen-item"
          onClick={() => {
            openGallery(item.gallery);
            setSlideshow(true);
          }}
        >
          <img src={item.image} alt={item.name} className="slideshow-image" />
          {/* ✅ Dots unter dem Hauptbild */}
          <div className="dots">
            {item.gallery.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === 0 ? "active" : ""}`} // Immer ersten aktiv markieren
              ></span>
            ))}
          </div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}

  {isOpen && (
    <div className="modal-overlay" onClick={closeGallery}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeGallery}>×</button>

        <div className="main-image">
          <img
            src={currentGallery[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>

        <div className="nav-buttons">
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>

        {/* 🔽 Nur Dots unter Hauptbild */}
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

export default GlobGallery;
