import cypherboxInfoTexts from "../text/cypherboxInfoTexts";
import ExpandableSection from "../components/ExpandableSection";
import FoldSection from "../components/FoldSection";
import cypherbox from '../assets/cypherbox-logo.png' ;
//import { useScrollDirection } from "../utils/ScrollContext";
import ShortGallery from '../components/gallery/ShortGallery';
import GalleryModal from "../components/gallery/GalleryModal";

import './CypherboxInfos.css';
import { useEffect } from "react";
import Gallery from "../components/gallery/Gallery";

function CypherboxInfos({ lang }) {
      const t = cypherboxInfoTexts[lang];
    //    const {scrolldirection, setScrollDirection} = useScrollDirection();
 useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

 useEffect(() => {
  const onScroll = () => {
    const header = document.querySelector(".header-top");
    if (header) {
        header.classList.add("shrink");
    }
  };

 onScroll();
}, []);
  return (
    <div className="cypherbox-info-container">
      <div className="head-title" >
                     <img src={cypherbox} />
      <h1 className='cypherbox-title'>{t.title}</h1>
      </div>
      

        <FoldSection title="Shortscreen Apps"
          >
            <Gallery />
            </FoldSection>


         <ExpandableSection title={t.usageTitle}>
                                              <section className="cypherbox-section">
        <h2 className="cypherbox-section-header">{t.blick}</h2>
        <p className="cypherbox-section-text"> {t.usage.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
      </section>

      <section className="cypherbox-section">
        <h2 className="cypherbox-section-header">{t.funktion}</h2>
        <p className="cypherbox-section-text">
          {t.features.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </p>
      </section>

      <section className="cypherbox-section">
        <h2 className="cypherbox-section-header">{t.recht}</h2>
        <p className="cypherbox-section-text"> {t.legal.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}</p>
      </section>
         </ExpandableSection>

         
    
    </div>
  );
}

export default CypherboxInfos;