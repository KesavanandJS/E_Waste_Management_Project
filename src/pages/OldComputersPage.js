import React, { useState } from 'react';
import axios from 'axios';
import './OldComputersPage.css'; // Optional: For styling purposes

function OldComputersPage() {
  const [formData, setFormData] = useState({
    computerType: '',
    manufacturer: '',
    model: '',
    yearOfPurchase: '',
    condition: '',
    isWorking: false,
    accessories: [],
    pickupAddress: '',
    contactNumber: '',
    recyclingPreference: '',
    priceEstimation: '', // New field for price estimation
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'accessories') {
        const updatedAccessories = checked
          ? [...formData.accessories, value]
          : formData.accessories.filter((item) => item !== value);
        setFormData({ ...formData, accessories: updatedAccessories });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/submit-computer',
        formData
      );
      console.log('Form Data Submitted:', response.data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form.');
    }
  };

  return (
    <div className="old-computers-page">
      <h1>Old Computers Submission Form</h1>
      <form onSubmit={handleSubmit} className="ewaste-form">
        <div className="form-group">
          <label htmlFor="computerType">Computer Type:</label>
          <select
            id="computerType"
            name="computerType"
            value={formData.computerType}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="desktop">Desktop</option>
            <option value="laptop">Laptop</option>
            <option value="all-in-one">All-in-One</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            placeholder="E.g., Dell, HP, Lenovo"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Enter model number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearOfPurchase">Year of Purchase:</label>
          <input
            type="number"
            id="yearOfPurchase"
            name="yearOfPurchase"
            value={formData.yearOfPurchase}
            onChange={handleChange}
            placeholder="YYYY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition:</label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="isWorking">
            <input
              type="checkbox"
              id="isWorking"
              name="isWorking"
              checked={formData.isWorking}
              onChange={handleChange}
            />
            Is the computer still in working condition?
          </label>
        </div>

        <div className="form-group">
          <label>Accessories (if any):</label>
          <label>
            <input
              type="checkbox"
              name="accessories"
              value="keyboard"
              checked={formData.accessories.includes('keyboard')}
              onChange={handleChange}
            />
            Keyboard
          </label>
          <label>
            <input
              type="checkbox"
              name="accessories"
              value="mouse"
              checked={formData.accessories.includes('mouse')}
              onChange={handleChange}
            />
            Mouse
          </label>
          <label>
            <input
              type="checkbox"
              name="accessories"
              value="monitor"
              checked={formData.accessories.includes('monitor')}
              onChange={handleChange}
            />
            Monitor
          </label>
          <label>
            <input
              type="checkbox"
              name="accessories"
              value="chargingAdapter"
              checked={formData.accessories.includes('chargingAdapter')}
              onChange={handleChange}
            />
            Charging Adapter
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="pickupAddress">Pick-Up Address:</label>
          <textarea
            id="pickupAddress"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Enter pick-up address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="recyclingPreference">Recycling Preference:</label>
          <select
            id="recyclingPreference"
            name="recyclingPreference"
            value={formData.recyclingPreference}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="donate">Donate to Charity</option>
            <option value="recycle">Recycle</option>
            <option value="resell">Resell</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="priceEstimation">Price Estimation:</label>
          <input
            type="number"
            id="priceEstimation"
            name="priceEstimation"
            value={formData.priceEstimation}
            onChange={handleChange}
            placeholder="Enter estimated price"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldComputersPage;
