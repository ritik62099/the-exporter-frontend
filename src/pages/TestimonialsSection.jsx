import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../assets/css/testimonials.css';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Import Manager, FreshMart",
    review: "ExporterPro has simplified our logistics! Their platform is user-friendly and their support is amazing.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    position: "CEO, GlobalTrade LLC",
    review: "Reliable, fast, and cost-effective. Our go-to partner for international shipping!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
  },
  {
    name: "Emily Chen",
    position: "Logistics Coordinator, AsiaLink",
    review: "They handled our customs clearance smoothly. Very professional team.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <h3>{testimonial.name}</h3>
            <span className="position">{testimonial.position}</span>
            <p className="review">"{testimonial.review}"</p>
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} color="#ffc107" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
