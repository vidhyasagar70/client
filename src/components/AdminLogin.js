// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Admin login logic
    if (password === '3wassigment') {
      navigate('/admin-dashboard'); // Redirect to admin dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-header">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
