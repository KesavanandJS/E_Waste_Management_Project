import React, { useState } from 'react';
import './BatteriesPage.css'; // Import the CSS file

function BatteriesPage() {
  const [formData, setFormData] = useState({
    batteryType: '',
    condition: '',
    quantity: 1,
    brand: '',
    contactNumber: '',
    pickupDate: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Submit the form data to the backend (API call can be added here)
  };

  return (
    <div className="batteries-page-container">
      <h1>Battery Recycling Form</h1>
      <form className="battery-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="batteryType">Battery Type:</label>
          <select
            id="batteryType"
            name="batteryType"
            value={formData.batteryType}
            onChange={handleChange}
            required
          >
            <option value="">Select Battery Type</option>
            <option value="Alkaline">Alkaline</option>
            <option value="Lithium-ion">Lithium-ion</option>
            <option value="Nickel Cadmium">Nickel Cadmium</option>
            <option value="Lead-acid">Lead-acid</option>
            <option value="Others">Others</option>
          </select>
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
            <option value="">Select Condition</option>
            <option value="Working">Working</option>
            <option value="Non-working">Non-working</option>
            <option value="Damaged">Damaged</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Battery Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
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
            required
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pickupDate">Preferred Pickup Date:</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Any special instructions or comments"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BatteriesPage;
