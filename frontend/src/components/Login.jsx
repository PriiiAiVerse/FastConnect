// src/components/Login.jsx

import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Make sure this path is correct
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AuthPanel.css'; // This should point to the new CSS I provided

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  // The entire structure inside this return statement is new and designed to work with the CSS.
  return (
    <div className="auth-body">
      <div className="auth-card">
        {/* THIS TITLE SECTION WAS MISSING */}
        <h2>Welcome Back!</h2>
        <p className="auth-subheading">Please sign in to continue.</p>

        {/* The form is now the central element */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <button className="auth-btn" type="submit">Login</button>
        </form>

        {/* The "Register" link is now correctly placed outside and below the form */}
        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;