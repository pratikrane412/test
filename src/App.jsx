import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from './pages/Aboutpage/Aboutpage';
import PerformanceMarketing from "./pages/services/PerformanceMarketing";
import SearchEngineOptimization from "./pages/services/SearchEngineOptimization";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import Contactpage from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/home" element={<Homepage />} />  
        <Route path="/about" element={<Aboutpage />} /> 
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/services/seo-services" element={<SearchEngineOptimization />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;