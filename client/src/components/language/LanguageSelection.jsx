import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./LanguageSelection.css";

export default function LanguageSelection() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="language-selection">
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="ar">🇸🇦 العربية</option>
      </select>
    </div>
  );
}
