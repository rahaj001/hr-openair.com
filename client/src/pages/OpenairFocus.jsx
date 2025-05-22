// src/pages/OpenairInfo.jsx
import React, { useEffect } from "react";
import openairInfoTexts from "../text/aboutTexts";
import "./OpenairFocus.css"; // optional für Style



function OpenairFocus({ lang = "de" }) {
    
      const isRTL = lang === "ar";

  useEffect(() => {
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
   // document.documentElement.lang = lang;
  }, [lang]);

  const content = openairInfoTexts[lang] || openairInfoTexts["de"];

  return (
    <div className={`info-container  ${isRTL ? "rtl" : ""}`} >
      <h2>{content.title}</h2>
      <p>{content.ziel}</p>
    </div>
  );

}

export default OpenairFocus;
