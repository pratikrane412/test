import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from "./pages/Homepage/Homepage";


function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/home" element={<Homepage />} />  
      </Routes>

      <Footer />
    </div>
  )
}

export default App;