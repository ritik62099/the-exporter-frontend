


import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { FaHome, FaBox, FaMapMarkerAlt, FaFileAlt, FaPhone, FaUserCircle } from 'react-icons/fa';
import "../assets/css/navbar.css";


const ExporterNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth(); // 👈

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">🌍 ExporterPro</div>
        <div className="navbar-links-right">
          <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/track-shipment">Track</a>
            <a href="/get-quote">Get Quote</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="nav-right">
            <div className="profile-dropdown">
              <div
                className="profile-icon"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaUserCircle size={28} color="#fff" />
              </div>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  {user ? (
                    <>
                      <a href="#">My Account</a>
                      <a href="#">Orders</a>
                      <a href="#" onClick={logout}>Logout</a>
                    </>
                  ) : (
                    <>
                      <a href="/login">Login</a>
                      <a href="/pre-signup">Sign Up</a>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="mobile-bottom-nav">
        <a href="/"><FaHome /><span>Home</span></a>
        <a href="/services"><FaBox /><span>Services</span></a>
        <a href="/track-shipment"><FaMapMarkerAlt /><span>Track</span></a>
        <a href="/get-quote"><FaFileAlt /><span>Quote</span></a>
        <a href="/contact"><FaPhone /><span>Contact</span></a>
      </div>
    </>
  );
};

export default ExporterNavbar;