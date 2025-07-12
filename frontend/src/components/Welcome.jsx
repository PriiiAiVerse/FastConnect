// src/Welcome.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* --- UPDATED TEXT --- */}
        <h1>Welcome to the Platform</h1>
        <p>Please log in or create an account to continue.</p>
        {/* --- END OF UPDATED TEXT --- */}

        <div className="welcome-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/register')}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;