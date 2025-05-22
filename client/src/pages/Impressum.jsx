import legalTexts from "../text/legalTexts";
import { useEffect } from "react";


function Impressum({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  
  return (
    <div className="legal-text"  dangerouslySetInnerHTML={{ __html: legalTexts[lang].impressum }} />
  );
}

export default Impressum;