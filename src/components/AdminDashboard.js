// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="admin-dashboard-container">
            <h2 className="admin-dashboard-header">Admin Dashboard</h2>

            {/* Search input field */}
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />

            {filteredUsers.length === 0 ? (
                <p className="no-users-text">No users registered.</p>
            ) : (
                <table className="admin-dashboard-table">
                    <thead>
                        <tr>
                            <th className="table-header">Name</th>
                            <th className="table-header">Social Media Handle</th>
                            <th className="table-header">IFSC Code</th>
                            <th className="table-header">Branch Name</th>
                            <th className="table-header">Bank Name</th>
                            <th className="table-header">Account Number</th>
                            <th className="table-header">Account Holder Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <td className="table-cell">{user.name}</td>
                                <td className="table-cell">{user.socialMediaHandle}</td>
                                <td className="table-cell">{user.ifscCode}</td>
                                <td className="table-cell">{user.branchName}</td>
                                <td className="table-cell">{user.bankName}</td>
                                <td className="table-cell">{user.accountNumber}</td>
                                <td className="table-cell">{user.accountHolderName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminDashboard;
