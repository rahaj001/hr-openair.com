import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Vision from './pages/Vision';
import Dienste from './pages/Dienste';
import Netzwerkdienste from './pages/NetzwerkDienste';
import Kontakt from './pages/Kontakt';
import FeaturesSection from './pages/FeaturesSection';
import HeroSection from './pages/HeroSection';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/dienste" element={<Dienste />} />
        <Route path="/netzwerkdienste" element={<Netzwerkdienste />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/heroSection" element={<HeroSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/featuresSection" element={<FeaturesSection />} />

      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;