// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to the Home Page!</h1>
      <p className="home-paragraph">This is a simple application for user and admin login.</p>
      <a href="/login" className="home-link">User Login</a> | 
      <a href="/admin-login" className="home-link">Admin Login</a> | 
      <a href="/register" className="home-link">Register</a>
    </div>
  );
};

export default Home;
