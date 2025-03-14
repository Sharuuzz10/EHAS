import React from 'react';
import Navbar from './Navbar.js';
const Logout = ({ onLogout }) => {
  return (
    <div className="logout-page">
      <h1>Are you sure you want to log out?</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;