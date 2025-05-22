import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { legalTexts } from "../data/legalTexts";

export default function Legal() {
  const { lang } = useContext(LanguageContext);
  const texts = legalTexts[lang];

  return (
    <div>
      <h2>Impressum</h2>
      <p>{texts.impressum}</p>

      <h2>Datenschutz</h2>
      <p>{texts.datenschutz}</p>
    </div>
  );
}
