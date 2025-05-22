import { useState } from "react";
import vision from "../../assets/vision-bg.jpg";
import pc from "../../assets/pc-handy.jpeg";
import hr from "../../assets/hr-logo.png";
import cypherbox from "../../assets/cypherbox-logo.png";
import "./ShortGallery.css";

const apps = [
  {
    id: 1,
    name: "Kontakte",
    description: "Verwalte deine gespeicherten Kontakte.",
    image: vision,
  },
  {
    id: 2,
    name: "Musik",
    description: "Höre deine Lieblingsmusik jederzeit.",
    image: pc,
  },
  {
    id: 3,
    name: "Logins",
    description: "Speichere sichere Zugangsdaten.",
    image: hr,
  },
  {
    id: 4,
    name: "Galerie",
    description: "Deine Fotos und Screenshots.",
    image: cypherbox,
  },
];

function ShortGallery() {
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <div className="shortscreen-gallery">
      <h2 className="gallery-title">Shortscreen Apps</h2>

      <div className="gallery-grid">
        {apps.map((app) => (
          <div
            key={app.id}
            className="app-card"
            onClick={() => setSelectedApp(app)}
          >
            <img src={app.image} alt={app.name} className="thumbnail" />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
          </div>
        ))}
      </div>

      {selectedApp && (
        <div className="modal" onClick={() => setSelectedApp(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedApp.image} alt={selectedApp.name} />
            <h3>{selectedApp.name}</h3>
            <p>{selectedApp.description}</p>
            <button onClick={() => setSelectedApp(null)}>Schließen</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShortGallery;
