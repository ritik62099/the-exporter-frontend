import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../auth/AuthContext'; // 👈 Make sure you have this
import "../assets/css/landing.css"; // Optional: style this page as needed

const ExporterLanding = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
  
    const handleAction = (path) => {
      if (user) {
        navigate(path);
      } else {
        localStorage.setItem("redirectAfterLogin", path); // Store the clicked route
        navigate('/signup'); // Go to signup if not logged in
      }
    };
  
    return (
      <div className="landing-page">
        <h1>Welcome to ExporterPro</h1>
        <div className="button-group">
          <button onClick={() => handleAction('/place-order')}>📦 Place Order</button>
          <button onClick={() => handleAction('/deliver-product')}>🚚 Deliver Product</button>
        </div>
      </div>
    );
  };
  
  export default ExporterLanding;