import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Services.css';

function Services() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'recycle@gmail.com' && password === 'password') {
      navigate('/Recycle-dashboard'); // Navigate to the Recycle_dashboard
    } else {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <section id="login" className="login-section">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </section>
  );
}

export default Services;
