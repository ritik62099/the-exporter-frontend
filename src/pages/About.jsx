import React from 'react';
import '../assets/css/about.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

const team = [
  {
    name: "Ayesha Malik",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ali Khan",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Sana Raza",
    role: "Logistics Lead",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Company Background */}
      <section className="about-section fade-in">
        <h2>Who We Are</h2>
        <p>
          <strong>ExporterPro</strong> is a tech-forward logistics company dedicated to revolutionizing the way businesses ship worldwide. 
          From humble beginnings, we've grown into a trusted export partner for hundreds of companies across the globe.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-section fade-in">
        <div className="mission-item">
          <FaBullseye className="mission-icon" />
          <div>
            <h3>Our Mission</h3>
            <p>To simplify and secure global shipping through innovation, reliability, and exceptional customer service.</p>
          </div>
        </div>

        <div className="mission-item">
          <FaEye className="mission-icon" />
          <div>
            <h3>Our Vision</h3>
            <p>To be the world's most trusted and intelligent logistics platform.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-section team fade-in">
        <h2>Meet the Team</h2>
        <p className="team-intro">Our leadership combines decades of logistics, technology, and international trade expertise.</p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
