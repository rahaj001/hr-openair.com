import legalTexts from "../text/legalTexts";
import { useEffect } from "react";

function Datenschutz({ lang }) {
     useEffect(() => {
        document.documentElement.lang = lang;
      }, [lang]);
  return (
    <div className="legal-text" dangerouslySetInnerHTML={{ __html: legalTexts.datenschutz[lang] }} />
  );
}

export default Datenschutz;
