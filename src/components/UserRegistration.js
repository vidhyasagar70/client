import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserRegistration.css'; // Import the CSS file

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [branchName, setBranchName] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [users, setUsers] = useState([]); // State to hold user data
    const navigate = useNavigate();

    useEffect(() => {
        // Load user data from local storage
        const loadedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(loadedUsers);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, socialMediaHandle, ifscCode, branchName, bankName, accountNumber, accountHolderName };
        
        // Save user data to local storage
        const updatedUsers = [...users, userData];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        alert('Registration successful!');
        navigate('/'); // Redirect to home
    };

    const handleEdit = (index) => {
        const user = users[index];
        setName(user.name);
        setSocialMediaHandle(user.socialMediaHandle);
        setIfscCode(user.ifscCode);
        setBranchName(user.branchName);
        setBankName(user.bankName);
        setAccountNumber(user.accountNumber);
        setAccountHolderName(user.accountHolderName);
        
        // Remove user from local storage for editing
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleRemove = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <div className="registration-container">
            <h2 className="registration-header">User Registration</h2>
            {users.length > 0 && (
                <div className="user-list">
                    <h3>Registered Users:</h3>
                    {users.map((user, index) => (
                        <div key={index} className="user-details">
                            <p>Name: {user.name}</p>
                            <p>Social Media Handle: {user.socialMediaHandle}</p>
                            <p>IFSC Code: {user.ifscCode}</p>
                            <p>Branch Name: {user.branchName}</p>
                            <p>Bank Name: {user.bankName}</p>
                            <p>Account Number: {user.accountNumber}</p>
                            <p>Account Holder Name: {user.accountHolderName}</p>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
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
                    <label>IFSC Code:</label>
                    <input
                        type="text"
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value)}
                        required
                        className="registration-input"
                    />
                </div>
                <div>
                    <label>Branch Name:</label>
                    <input
                        type="text"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                        className="registration-input"
                    />
                </div>
                <div>
                    <label>Bank Name:</label>
                    <input
                        type="text"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        required
                        className="registration-input"
                    />
                </div>
                <div>
                    <label>Account Number:</label>
                    <input
                        type="text"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                        className="registration-input"
                    />
                </div>
                <div>
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
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
