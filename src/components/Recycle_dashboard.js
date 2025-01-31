import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recycle_dashboard.css';

function Recycle_dashboard() {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/products'); // Define the route for the new component
  };

  return (
    <section id="dashboard" className="dashboard-section">
      <h2>Dashboard</h2>
      <div className="card-container">
        {/* Profile Card */}
        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>View and update your personal information.</p>
        </div>

        {/* Product Card */}
        <div className="dashboard-card" onClick={handleProductClick}>
          <h3>Product</h3>
          <p>Browse and manage the available products.</p>
        </div>

        {/* Pending Request Card */}
        <div className="dashboard-card">
          <h3>Pending Request</h3>
          <p>Track and manage your pending requests.</p>
        </div>
      </div>
    </section>
  );
}

export default Recycle_dashboard;
