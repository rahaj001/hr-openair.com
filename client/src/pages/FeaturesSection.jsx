import { useContext } from 'react';
import { motion } from "framer-motion";
import { FaMobileAlt, FaGlobe, FaNetworkWired, FaStore } from "react-icons/fa";
import { LanguageContext } from "../components/language/LanguageContext";
import './FeaturesSection.css';
import './HomesSection.css';
import angebotTexts from "../text/angebotTexts";


function FeaturesSection({lang}) {

//const { lang } = useContext(LanguageContext);
  const t = angebotTexts[lang];

  // utils/scrollToSection.js
 const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  /*
  { scrollToSection }
  onClick={() => scrollToSection("about-app")}
  onClick={() => scrollToSection("about-web")}
  onClick={() => scrollToSection("about-network")}
   onClick={() => scrollToSection("about-store")}
  */
  return (
  
     <div className='main-content-container'>
      <motion.div
      className="main-content-features"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="feature-item"   onClick={() => scrollToSection("apps")}  >
        <FaMobileAlt size={40} color="#0072FF" style={{ marginBottom: "0.5rem" }} />
        <h3>{t.app.title}</h3>
        <p>{t.app.description}</p>
      </div>

      <div className="feature-item"  onClick={() => scrollToSection("webs")} >
        <FaGlobe size={40} color="#0072FF" style={{ marginBottom: "0.5rem" }} />
        <h3>{t.web.title}</h3>
        <p>{t.web.description}</p>
      </div>

      <div className="feature-item"   onClick={() => scrollToSection("networks")}  >
        <FaNetworkWired size={40} color="#0072FF" style={{ marginBottom: "0.5rem" }} />
        <h3>{t.network.title}</h3>
        <p>{t.network.description}</p>
      </div>

      <div className="feature-item"  onClick={() => scrollToSection("stores")}  >
        <FaStore size={40} color="#0072FF" style={{ marginBottom: "0.5rem" }} />
        <h3>{t.store.title}</h3>
        <p>{t.store.description}</p>
      </div>
      </motion.div>

       
    <div className="featuresection-container">
      <section className="featuresection-section"  >
             <h2 className="featuresection-title" >{t.title}</h2>
             
             <p className="featuresection-text">{t.description}</p>
             <ul>
              {t.features.map((p, i) => (
                          <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                           className="featuresection-text"
                        >
                           <li  className="featuresection-text" key={i}>
                                  {p}
                           </li>
                        </motion.p>          
                     ))}
            </ul>    
            <h2 className="featuresection-subtitle" id="webs">{t.price}</h2>     
            {t.pricing.map((p, i) => (
                          <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                           className="featuresection-text"
                        >  
                           <li  className="featuresection-text" key={i}>
                                  {p}
                           </li>
                        </motion.p>          
                     ))}
                    
                   
           
                       <h2 className="featuresection-subtitle">{t.extra}</h2>
             <p className="featuresection-text">{t.note}</p>     

             <h2 className="featuresection-title" id="apps">{t.appDevelopment.title}</h2>
             <p className="featuresection-text">{t.appDevelopment.paragraphs}</p>
            {t.appDevelopment.ul.map((p, i) => (
                          <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                           className="featuresection-text"
                        >
                           <li  className="featuresection-text" key={i}>
                                  {p}
                           </li>
                        </motion.p>          
                     ))}
             

             <h2 className="featuresection-title" id="networks">{t.networkServices.title}</h2>
             <p className="featuresection-text">{t.networkServices.paragraphs}</p>
                        {t.networkServices.ul.map((p, i) => (
                          <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.2 }}
                           className="featuresection-text"
                        >
                           <li  className="featuresection-text" key={i}>
                                  {p}
                           </li>
                        </motion.p>          
                     ))}
                    
      </section>
    </div>  
                   
                             

    </div>


   
      
  );
}

export default FeaturesSection;
