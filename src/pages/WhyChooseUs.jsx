import React from 'react';
import { FaCheckCircle, FaBolt, FaShieldAlt } from 'react-icons/fa';
import '../assets/css/whyChooseUs.css';

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Reliable",
    description: "We ensure your shipments reach on time, every time — with full transparency.",
  },
  {
    icon: <FaBolt />,
    title: "Fast",
    description: "Optimized logistics and real-time tracking for rapid delivery.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insured",
    description: "Every shipment is protected with comprehensive insurance coverage.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
