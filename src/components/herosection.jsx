import React from 'react';
import Slider from 'react-slick';
import '../assets/css/hero.css';
import Banner from '../assets/images/banner.jpg';
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  const slides = [
    {
      title: "Global Export Made Easy",
      desc: "Fast, secure, and reliable freight solutions for your business.",
      image: Banner,
    },
    {
      title: "Air & Sea Logistics Experts",
      desc: "Move goods internationally with full control and tracking.",
      image: Banner,
    },
    {
      title: "Your Freight, Our Priority",
      desc: "Delivering success with global shipping excellence.",
      image: Banner,
    }
  ];

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={slide.title} className="hero-bg" />
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <a href="#quote" className="hero-btn">Get Quote</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
