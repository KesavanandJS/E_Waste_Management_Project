import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './ew.jpg';

function Dashboard() {
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToSubmission = () => {
    navigate(`/ewaste/submission/${userId}`);
    setIsSidebarOpen(false);
  };

  const navigateToHistory = () => {
    navigate(`/history/${userId}`);
    setIsSidebarOpen(false);
  };

  const navigateToGoals = () => {
    navigate(`/review/${userId}`);
    setIsSidebarOpen(false);
  };
  

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li>Profile</li>
            <li onClick={navigateToSubmission}>E-Waste Submission</li>
            <li onClick={navigateToHistory}>View History</li>
            <li onClick={navigateToGoals}>Track Sustainability Goals</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
      <h1>Welcome to your Dashboard, {userName}</h1>
      <p>E-Waste Management refers to the process of collecting, recycling, and disposing of discarded electronic devices in an environmentally responsible way. It involves the proper handling of electronic waste such as old computers, mobile phones, televisions, and other gadgets to prevent toxic materials like lead, mercury, and cadmium from polluting the environment. Effective e-waste management promotes resource recovery, reduces landfill waste, conserves energy, and minimizes environmental and health hazards.</p>
      {/* Add the image below */}

      <div className="dashboard-image-container">
        <img
          src={process.env.PUBLIC_URL + '/ew.jpg'} // Replace with the correct path
          alt="E-Waste Management"
          className="dashboard-image"
        />
      </div>
    </div>
  );
}

export default Dashboard;
