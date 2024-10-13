// src/components/UserRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserRegistration.css'; // Import the CSS file

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Set image to base64 URL
    };

    if (file) {
      reader.readAsDataURL(file); // Convert to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, socialMediaHandle, image };
    
    // Save user data to local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful!');
    navigate('/'); // Redirect to home
  };

  return (
    <div className="registration-container">
      <h2 className="registration-header">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="registration-input"
          />
        </div>
        <div>
          <label>Social Media Handle:</label>
          <input
            type="text"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            required
            className="registration-input"
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            required
            className="registration-input"
          />
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
