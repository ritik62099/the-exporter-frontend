import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router,  Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import ServicesSection from "./pages/Services.jsx";
import GetQuoteForm from "./pages/GetQuote.jsx";
import TrackShipment from "./pages/TrackShipment.jsx";
import Contact from "./pages/Contact.jsx";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      {/* <Home/> */}
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<ServicesSection />} />
        <Route path="/get-quote" element={<GetQuoteForm />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
    </Router>
    </>
  );
}

export default App;
