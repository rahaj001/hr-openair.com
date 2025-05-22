import { useState } from "react";
import vision from "../../assets/vision-bg.jpg";
import pc from "../../assets/pc-handy.jpeg";
import hr from "../../assets/hr-logo.png";
import cypherbox from "../../assets/cypherbox-logo.png";
import "./CypherBoxGallery.css";






function CypherBoxGallery() {
const apps = [
  {
    id: 1,
    name: "Kontakte",
    description: "Verwalte deine gespeicherten Kontakte.",
    image: vision,
    gallery: [
        vision, pc, hr, cypherbox,
    ]
  },
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

 const [isOpen, setIsOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery) => {
    setCurrentGallery(gallery);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);
  const nextImage = () =>
    setCurrentIndex((i) => (i + 1) % currentGallery.length);
  const prevImage = () =>
    setCurrentIndex((i) => (i - 1 + currentGallery.length) % currentGallery.length);

  return (
    <div className="shortscreen-gallery">
      {apps.map((item) => (
        <div
          key={item.id}
          className="shortscreen-item"
          onClick={() => openGallery(item.gallery)}
        >
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      ))}

      {isOpen && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeGallery}>×</button>
            <button className="nav-btn prev" onClick={prevImage}>‹</button>
            <img
              src={currentGallery[currentIndex]}
              alt={`Bild ${currentIndex + 1}`}
              className="modal-image"
            />
            <button className="nav-btn next" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default CypherBoxGallery;
