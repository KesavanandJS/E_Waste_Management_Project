import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">EcoWaste</div>
      <ul className="nav-links">
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
        <li><NavLink to="/benefits" activeClassName="active">Benefits</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
      <button className="quote-button" onClick={handleLoginClick}>Login</button>
    </nav>
  );
}

export default Navbar;
