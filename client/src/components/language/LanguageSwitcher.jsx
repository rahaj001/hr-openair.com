import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./LanguageSwitcher.css";


const flags = {
  de: "/src/components/logo/de.png",
  en: "/src/components/logo/en.png",
  fr: "/src/components/logo/fr.png",
  ar: "/src/components/logo/ar.png",
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      {Object.entries(flags).map(([code, uri]) => (
        <button
          key={code}
          className={`lang-button ${lang === code ? "active" : ""}`}
          onClick={() => setLang(code)}
          title={code.toUpperCase()}
        >
          <span className="flag-wrapper">
            <img src={uri} alt={`${code} flag`} className="flag-icon" />
          </span>
        </button>
      ))}
    </div>
  );
}
