import React, { useEffect, useState } from 'react';
import './Review.css';

function Review() {
  const [bids, setBids] = useState([]);

  // Fetch bids from the backend
  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch('http://localhost:6002/api/bids');
        if (response.ok) {
          const data = await response.json();
          setBids(data);
        } else {
          console.error('Failed to fetch bids');
        }
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
    };

    fetchBids();
  }, []);

  return (
    <div className="review-container">
      <h1>Review Bids</h1>
      <div className="bids-list">
        {bids.map((bid) => (
          <div key={bid._id} className="bid-card">
            <h3>{bid.name}</h3>
            <p><strong>Phone:</strong> {bid.phone}</p>
            <p><strong>Bidding Price:</strong> ₹{bid.biddingPrice}</p>
            <p><strong>Product ID:</strong> {bid.productId}</p>
            <button onClick={() => alert(`Accepted bid from ${bid.name}`)}>Accept</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
