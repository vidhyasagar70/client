// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2 className="login-header">User Login</h2>
      <p className="login-paragraph">
        If you are a new user, please register <button className="register-button" onClick={() => navigate('/register')}>here</button>.
      </p>
    </div>
  );
};

export default Login;
