import { motion } from "framer-motion";
import homeTexts from "../text/homeTexts";
//import { useScrollDirection } from "../utils/ScrollContext";
import './HomesSection.css';
import { useEffect } from "react";

function HomesSection({ lang }) {
      const t = homeTexts[lang];
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
    <div className="homesection-info-container">
      <h1 className='homesection-title'>{t.wel}</h1>
       <h1 className='homesection-title'>{t.come}</h1>

      <section className="homesection-section">
        <h2 className="homesection-section-header">{t.intro.title}</h2>
       {t.intro.paragraphs.map((p, i) => (
             <motion.p
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: i * 0.2 }}
              className="homesection-section-text"
           >
             {p}
           </motion.p>          
        ))}

         <h2 className="homesection-section-header">{t.services.title}</h2>
        <ul>
          {t.services.items.map((item, i) => {
            const [title, desc] = item.split(":");
            return (
              <li  className="homesection-section-text" key={i}>
                <strong>{title}:</strong> {desc}
              </li>
                        
            );
          })}
        </ul>
      </section>

    </div>
  );
}

export default HomesSection;