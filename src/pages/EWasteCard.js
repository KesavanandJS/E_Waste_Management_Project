// EWasteCard.js

import React from 'react';
import './EWasteCard.css'; // Create a CSS file for styling

function EWasteCard({ item, onSelect, isSelected }) {
  const handleClick = () => {
    onSelect(item);
  };

  return (
    <div 
      className={`ewaste-card ${isSelected ? 'highlight' : ''}`} 
      onClick={handleClick}
    >
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default EWasteCard;
