import React, { useState } from 'react';
import './TelevisionsPage.css'; // Import the CSS file

function TelevisionsPage() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    size: '',
    type: '',
    condition: '',
    age: '',
    pickupDate: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted TV Form Data:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="television-page-container">
      <h1>Television E-Waste Submission</h1>
      <p>Fill in the details of your old television for responsible recycling.</p>
      <form className="television-form" onSubmit={handleSubmit}>
        <label htmlFor="brand">Television Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="e.g., Samsung, Sony"
          required
        />

        <label htmlFor="model">Model Number</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="e.g., UN55NU6900FXZA"
          required
        />

        <label htmlFor="size">Screen Size (inches)</label>
        <input
          type="number"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="e.g., 55"
          required
        />

        <label htmlFor="type">Television Type</label>
        <select id="type" name="type" value={formData.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="CRT">CRT</option>
          <option value="LED">LED</option>
          <option value="LCD">LCD</option>
          <option value="Plasma">Plasma</option>
          <option value="Smart TV">Smart TV</option>
        </select>

        <label htmlFor="condition">Condition</label>
        <select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
          <option value="">Select Condition</option>
          <option value="Working">Working</option>
          <option value="Partially Working">Partially Working</option>
          <option value="Not Working">Not Working</option>
        </select>

        <label htmlFor="age">Approximate Age (years)</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="e.g., 5"
          required
        />

        <label htmlFor="pickupDate">Preferred Pickup Date</label>
        <input
          type="date"
          id="pickupDate"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="additionalInfo">Additional Information</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Provide any additional details (optional)"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TelevisionsPage;
