import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import EWasteCard from './EWasteCard'; 
import './EWasteSubmission.css'; 

const ewasteItems = [
  { id: 1, name: 'Old Computers', description: 'Desktops, laptops, and other computing devices.' },
  { id: 2, name: 'Mobile Phones', description: 'Old or damaged smartphones and feature phones.' },
  { id: 3, name: 'Televisions', description: 'CRT, LED, and LCD TVs that are no longer in use.' },
  { id: 4, name: 'Batteries', description: 'Rechargeable and non-rechargeable batteries.' },
  { id: 5, name: 'Printers', description: 'Old printers and associated accessories.' },
  { id: 6, name: 'Monitors', description: 'Old CRT or flat-screen monitors.' },
  { id: 7, name: 'Game Consoles', description: 'Old or broken gaming consoles.' },
  { id: 8, name: 'Cables and Chargers', description: 'Old or unused charging cables and adapters.' },
  { id: 9, name: 'Scanners', description: 'Old document scanners and accessories.' },
  { id: 10, name: 'Smartwatches', description: 'Old or non-functional smartwatches.' },
  { id: 11, name: 'DVD Players', description: 'Old DVD and Blu-ray players.' },
  { id: 12, name: 'Home Appliances', description: 'Small appliances like microwaves and coffee makers.' },
];

function EWasteSubmission() {
  const { userId } = useParams();
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Use navigate to programmatically change routes

  const handleSelectItem = (item) => {
    switch (item.name) {
      case 'Old Computers':
        navigate(`/old-computers`);
        break;
      case 'Mobile Phones':
        navigate(`/mobile-phones`);
        break;
      case 'Televisions':
        navigate(`/televisions`);
        break;
      case 'Batteries':
        navigate(`/batteries`);
        break;
      default:
        // Handle other item selections
        if (!selectedItems.includes(item)) {
          setSelectedItems([...selectedItems, item]);
        } else {
          setSelectedItems(selectedItems.filter(i => i !== item));
        }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitting items:', selectedItems);
    // API call to submit selected items could go here
  };

  return (
    <div className="ewaste-submission-container">
      <div className="header">
        <h1>E-Waste Submission</h1>
        <input
          type="text"
          placeholder="Search e-waste items..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <p>User ID: {userId}</p>
      <div className="ewaste-cards">
        {ewasteItems
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => (
            <EWasteCard
              key={item.id}
              item={item}
              onSelect={handleSelectItem}
              isHighlighted={selectedItems.includes(item)}
            />
          ))}
      </div>
      <button onClick={handleSubmit} disabled={selectedItems.length === 0}>
        Submit Selected Items
      </button>
    </div>
  );
}

export default EWasteSubmission;
