import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FoldSection.css";

function FoldSection({ title, content, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-section">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="title-line" />
        <h3>{title}</h3>
        <span className="icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
         <div className="section-content-expand">{ children }</div>
      </div>
    </div>
  );
}

export default FoldSection;
