import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from "./pages/Homepage/Homepage";
import PerformanceMarketing from "./pages/services/PerformanceMarketing";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;