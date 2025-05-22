import legalTexts from "../text/legalTexts";
import { useEffect } from "react";

function CookiesRechlinie({ lang }) {
     useEffect(() => {
        document.documentElement.lang = lang;
      }, [lang]);
  return (
    <div className="legal-text" dangerouslySetInnerHTML={{ __html: legalTexts.cookies[lang] }} />
  );
}

export default CookiesRechlinie;
