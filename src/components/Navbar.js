import React, { useState } from 'react';
import { FaHome, FaBox, FaMapMarkerAlt, FaFileAlt, FaPhone, FaUserCircle } from 'react-icons/fa';
import "../assets/css/navbar.css";

const ExporterNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for profile menu

  return (
    <>
      {/* Top Navbar */}
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
          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <div
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle size={28} color="#fff" />
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
                <a href="#">My Account</a>
                <a href="#">Orders</a>
                <a href="#">Logout</a>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
        </div>
      </nav>



      {/* Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        <a href="#">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="#">
          <FaBox />
          <span>Services</span>
        </a>
        <a href="#">
          <FaMapMarkerAlt />
          <span>Track</span>
        </a>
        <a href="#">
          <FaFileAlt />
          <span>Quote</span>
        </a>
        <a href="#">
          <FaPhone />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
};

export default ExporterNavbar;
