import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '', phone: '' });
    setErrors({});
    setMessage('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!isLogin && !formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isLogin && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/signup';
        const response = await axios.post(url, formData);
        setMessage(response.data.message);
        setShowPopup(true);
        
        if (isLogin) {
          const userId = response.data.userId; // Get the userId from the response
          navigate(`/dashboard/${userId}`); // Redirect to the dashboard with the userId
        }
        
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);  // Hide the popup after 3 seconds
      } catch (error) {
        setMessage(error.response ? error.response.data.message : 'An error occurred');
      }
    }
  };

  return (
    <div className="login-signup-container">
      {showPopup && (
        <div className="popup">
          <p>{message}</p>
          <button onClick={() => setShowPopup(false)}>OK</button>
        </div>
      )}
      {isLogin ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <span onClick={toggleForm}>Sign up here</span>
          </p>
        </div>
      ) : (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <span onClick={toggleForm}>Login here</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
