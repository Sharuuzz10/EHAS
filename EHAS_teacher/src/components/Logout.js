import React from 'react';

const Logout = ({ onLogout, onCancel }) => {
  return (
    <div className="logout-page">
      <div className="logout-box">
        <h2>Are you sure you want to log out?</h2>
        <p>We'll miss you! Come back soon.</p>
        <div className="logout-buttons">
          <button className="logout-btn confirm-btn" onClick={onLogout}>
            Yes, Logout
          </button>
          <button className="logout-btn cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;