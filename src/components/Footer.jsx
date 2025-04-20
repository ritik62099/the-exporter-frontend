import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>🌍 ExporterPro</h3>
          <p>Trusted logistics partner for global trade. We deliver efficiency, transparency, and peace of mind.</p>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@exporterpro.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Global St, Trade City, USA</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ExporterPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
