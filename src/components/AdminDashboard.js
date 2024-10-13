// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-header">Admin Dashboard</h2>
      {users.length === 0 ? (
        <p className="no-users-text">No users registered.</p>
      ) : (
        <table className="admin-dashboard-table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Social Media Handle</th>
              <th className="table-header">Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="table-cell">{user.name}</td>
                <td className="table-cell">{user.socialMediaHandle}</td>
                <td className="table-cell">
                  <img
                    src={user.image} // Directly use the base64 URL
                    alt={user.name}
                    className="image"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
