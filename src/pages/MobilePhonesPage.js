import React, { useState } from 'react';
import './MobilePhonesPage.css'; // Import CSS for styling

function MobilePhonesPage() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    condition: 'working',
    accessories: '',
    battery: 'yes',
    issues: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can add API calls here to submit the data
  };

  return (
    <div className="mobile-form-container">
      <h1>Mobile Phones</h1>
      <p>Please provide details about the mobile phone you want to recycle.</p>
      
      <form className="mobile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Mobile Brand</label>
          <input 
            type="text" 
            id="brand" 
            name="brand" 
            value={formData.brand} 
            onChange={handleInputChange} 
            placeholder="Enter mobile brand" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input 
            type="text" 
            id="model" 
            name="model" 
            value={formData.model} 
            onChange={handleInputChange} 
            placeholder="Enter model name" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <select 
            id="condition" 
            name="condition" 
            value={formData.condition} 
            onChange={handleInputChange} 
            required
          >
            <option value="working">Working</option>
            <option value="non-working">Non-working</option>
            <option value="broken">Broken</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="accessories">Accessories Included</label>
          <input 
            type="text" 
            id="accessories" 
            name="accessories" 
            value={formData.accessories} 
            onChange={handleInputChange} 
            placeholder="E.g., charger, earphones" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="battery">Battery Present?</label>
          <select 
            id="battery" 
            name="battery" 
            value={formData.battery} 
            onChange={handleInputChange} 
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="issues">Any Issues?</label>
          <textarea 
            id="issues" 
            name="issues" 
            value={formData.issues} 
            onChange={handleInputChange} 
            placeholder="Describe any issues with the device"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default MobilePhonesPage;
