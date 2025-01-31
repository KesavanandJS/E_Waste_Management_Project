import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AcceptPage.css';

function AcceptPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    biddingPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6002/api/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productId: id }),
      });

      if (response.ok) {
        alert('Bid submitted successfully!');
        setFormData({ name: '', phone: '', biddingPrice: '' });
      } else {
        alert('Failed to submit bid.');
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
      alert('An error occurred while submitting the bid.');
    }
  };

  return (
    <section className="accept-page">
      <h2>Accepted Product</h2>
      <p>You have accepted the product with ID: <strong>{id}</strong></p>
      <form className="accept-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>
        <div className="form-group">
          <label htmlFor="biddingPrice">Bidding Price:</label>
          <input
            type="number"
            id="biddingPrice"
            name="biddingPrice"
            value={formData.biddingPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default AcceptPage;
