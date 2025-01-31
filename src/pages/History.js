import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './History.css'; // Import the CSS file

function History() {
  const { userId } = useParams();
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await fetch('http://localhost:5001/computers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComputers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComputers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="history-container">
      <h1>History for User ID: {userId}</h1>
      <h2>Submitted Computers</h2>
      <ul>
        {computers.map((computer, index) => (
          <li key={index}>
            <strong>Type:</strong> {computer.computerType} <br />
            <strong>Manufacturer:</strong> {computer.manufacturer} <br />
            <strong>Model:</strong> {computer.model} <br />
            <strong>Year of Purchase:</strong> {computer.yearOfPurchase} <br />
            <strong>Condition:</strong> {computer.condition} <br />
            <strong>Is Working:</strong> {computer.isWorking ? 'Yes' : 'No'} <br />
            <strong>Accessories:</strong> {computer.accessories.join(', ')} <br />
            <strong>Pickup Address:</strong> {computer.pickupAddress} <br />
            <strong>Contact Number:</strong> {computer.contactNumber} <br />
            <strong>Recycling Preference:</strong> {computer.recyclingPreference} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
