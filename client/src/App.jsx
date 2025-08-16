import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageContext } from "./components/language/LanguageContext";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Kontakt from './pages/Kontakt';
import OpenairFocus from './pages/OpenairFocus';
import AppsPage from './pages/AppsPage';
import CypherboxInfos from './pages/CypherboxInfos';
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import CookiesRechlinie from './pages/CoockiesRechlinie';
import { ScrollProvider } from "./utils/ScrollContext";


function App() {
  const { lang } = useContext(LanguageContext);
  
  const onCtaClick = () => {
    //alert("Test Nachricht ......!");
  };

  return (
      <ScrollProvider>
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />                                 

        <Route path="/focus" element={<OpenairFocus  lang={lang} />} />                   
          <Route path="/kontakt" element={<Kontakt />} />
         <Route path="/apps" element={<AppsPage lang={lang} />} />
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