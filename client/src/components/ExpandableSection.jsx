import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./ExpandableSection.css";

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable-section-expand">
      <div className="section-header-expand" onClick={() => setIsOpen(!isOpen)}>
        <div className="line" />
        <h3 className="title">{title}</h3>
        <div className="icon">{isOpen ? <FaMinus /> : <FaPlus />}</div>
        <div className="line" />
      </div>
      {isOpen && <div className="section-content-expand">{children}</div>}
    </div>
  );
}

export default ExpandableSection;
