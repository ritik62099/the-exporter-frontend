import React, { useState } from 'react';
import '../assets/css/getQuote.css';

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    delivery: '',
    goods: '',
    date: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Quote request submitted!");
    // Handle API submit here if needed
  };

  return (
    <section className="get-quote-section">
      <h2>Get a Free Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label>Name *</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Pickup Address *</label>
          <input type="text" name="pickup" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Delivery Address *</label>
          <input type="text" name="delivery" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Type of Goods *</label>
          <input type="text" name="goods" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Date of Moving *</label>
          <input type="date" name="date" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Upload Photo (optional)</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit Quote Request</button>
      </form>
    </section>
  );
};

export default GetQuoteForm;
