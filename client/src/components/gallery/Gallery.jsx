import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Gallery.css";
import login_en from "../../assets/screenshot/login_en.png"; import login_dark_en from "../../assets/screenshot/login_dark_en.png"; import login_de from "../../assets/screenshot/de/login_de.png"; import login_fr from "../../assets/screenshot/fr/login_fr.png"; import login_ar from "../../assets/screenshot/ar/login_ar.png";       import home_en from "../../assets/screenshot/home_en.png"; import home_dark_en from "../../assets/screenshot/home_dark_en.png"; import home_fr from "../../assets/screenshot/fr/home_fr.png"; import home_ar from "../../assets/screenshot/ar/home_ar.png"; import logins_en from "../../assets/screenshot/logins_en.png"; import loginsDatail from "../../assets/screenshot/loginsDatail.png"; import logins_new from "../../assets/screenshot/logins_new.png";  import loginsDatail_history from "../../assets/screenshot/logingsDatail_history.png"; import callList from "../../assets/screenshot/callList.png"; import callUser from "../../assets/screenshot/callUser.png"; import callingUser from "../../assets/screenshot/callingUser.png";
import audiosFolder from "../../assets/screenshot/audiosFolder.png"; import audio_de from "../../assets/screenshot/audio_de.png"; import audio_record from "../../assets/screenshot/audio_record.png"; import bildern from "../../assets/screenshot/bildern.png"; import bildScreen from "../../assets/screenshot/bildScreen.png"; import contactNew from "../../assets/screenshot/contact_new.png";
import video from "../../assets/screenshot/videosFolder.png";  import videoScreen from "../../assets/screenshot/videoScreen.png"; import documents from "../../assets/screenshot/documents.png"; import setting_en from "../../assets/screenshot/setting_en.png"; import settings_dark_en from "../../assets/screenshot/settings_dark_en.png"; import changePass_en from "../../assets/screenshot/changePass_en.png";
import setting_de from "../../assets/screenshot/de/setting_de.png"; import setting_fr from "../../assets/screenshot/fr/setting_fr.png"; import setting_ar from "../../assets/screenshot/ar/setting_ar.png";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshow, setSlideshow] = useState(true);
    const slideInterval = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const apps = [
    {
      id: 1,
      name: "Login",
      description: "Verwalte deine gespeicherten Kontakte.",
      image: login_en,
      gallery: [
          login_en, login_dark_en, login_de, login_fr, login_ar,
      ] },
        {
          id: 2,
          name: "Home",
          description: "Höre deine Lieblingsmusik jederzeit.",
          image: home_en,
           gallery: [
              home_en, home_dark_en, home_fr, home_ar,
          ]
        },
        {
          id: 3,
          name: "Logins",
          description: "Speichere sichere Zugangsdaten.",
          image: logins_en,
           gallery: [
              logins_en, loginsDatail, loginsDatail_history, logins_new,
          ]
        },
        {
          id: 4,
          name: "Contact",
          description: "Deine Fotos und Screenshots.",
          image: callList,
           gallery: [
              callList, callUser, callingUser, contactNew, 
          ]
        },
         {
          id: 5,
          name: "Audios",
          description: "Deine Fotos und Screenshots.",
          image: audio_de,
           gallery: [
              audio_de, audiosFolder, audio_record, 
          ]
        },
         {
          id: 6,
          name: "Bildern",
          description: "Deine Fotos und Screenshots.",
          image: bildern,
           gallery: [
              bildern, bildScreen,  
          ]
        },
         {
          id: 7,
          name: "Videos",
          description: "Deine Fotos und Screenshots.",
          image: video,
           gallery: [
              video, videoScreen,  
          ]
        },
        {
          id: 8,
          name: "Documents",
          description: "Deine Fotos und Screenshots.",
          image: documents,
           gallery: [
              documents,   
          ]
        },
         {
          id: 9,
          name: "Settings",
          description: "Deine Fotos und Screenshots.",
          image: setting_en,
           gallery: [
              setting_en, settings_dark_en, changePass_en, setting_de, setting_fr, setting_ar,
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
    setSlideshow(false); // stop auto-scroll on manual
  };

  // ⏱ Slideshow effect
  useEffect(() => {
    if (!isOpen || !slideshow) return;

     if (!isHovered) {
    slideInterval.current = setInterval(nextImage, 4000);
     }
      return () => clearInterval(slideInterval.current);
  }, [isOpen, slideshow, isHovered, nextImage]);

  // ⌨️ Keyboard navigation
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
    <div className="shortscreen-container"  >
      
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
           <div className="dots">
        {item.gallery.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      
        {/*
      <img
        src={galleryImages[currentIndex]}
        alt={`Bild ${currentIndex + 1}`}
        className="slideshow-image"
      />

      Optional: Punkte (Indikatoren) 
      <div className="dots">
        {galleryImages.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
               */}
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

export default Gallery;
