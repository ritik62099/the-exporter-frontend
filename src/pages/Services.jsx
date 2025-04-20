import React from 'react';
import '../assets/css/services.css';
import { FaHome, FaBuilding, FaGlobe, FaTruckLoading, FaBoxOpen } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome />,
    title: "House Shifting",
    description: "Safe, secure and on-time house moving services tailored to your needs."
  },
  {
    icon: <FaBuilding />,
    title: "Office Relocation",
    description: "Professional packing and setup for smooth office transitions."
  },
  {
    icon: <FaGlobe />,
    title: "International Cargo",
    description: "End-to-end overseas cargo solutions, hassle-free and insured."
  },
  {
    icon: <FaTruckLoading />,
    title: "Export Services",
    description: "Customs-clearance, documentation, and logistics under one roof."
  },
  {
    icon: <FaBoxOpen />,
    title: "Packing & Moving",
    description: "Premium quality packing materials and expert movers at your service."
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="subtitle">We offer reliable and affordable logistics solutions for every need.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
