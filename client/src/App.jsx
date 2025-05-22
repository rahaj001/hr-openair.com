import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageContext } from "./components/language/LanguageContext";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Kontakt from './pages/Kontakt';
import OpenairFocus from './pages/OpenairFocus';
import HeroSection from './pages/HeroSection';
import Testimonials from './pages/Testimonials';
import CypherboxInfos from './pages/CypherboxInfos';
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import CookiesRechlinie from './pages/CoockiesRechlinie';
import { ScrollProvider } from "./utils/ScrollContext";
import bild from './assets/hr-logo.png';


function App() {
  const { lang } = useContext(LanguageContext);
  
  const onCtaClick = () => {
    alert("Test Nachricht ......!");
  };

  return (
      <ScrollProvider>
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />                                 
        <Route path="/apps" element={<CypherboxInfos lang={lang} />} />                      
        <Route path="/focus" element={<OpenairFocus  lang={lang} />} />                   
        <Route path="/kontakt" element={<Kontakt />} />                              
        <Route path="/heroSection" element={<HeroSection lang={lang} title='title text' subtitle='subtitle' ctaText='clarText' onCtaClick={onCtaClick} bgImage={bild}/>} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/featuresSection" element={<CypherboxInfos />} />
        <Route path="/impressum" element={<Impressum lang={lang} />} />
        <Route path="/datenschutz" element={<Datenschutz lang={lang} />} />
        <Route path="/cookiesRechlinie" element={<CookiesRechlinie lang={lang} />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
     </ScrollProvider>
   
  );
}

export default App;