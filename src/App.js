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
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import { AuthProvider } from "./auth/AuthContext.jsx";
function App() {
  return (
    <>
    <AuthProvider>
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     <Footer/>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
