import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setCurrentPage('home')}>
        <i className="fas fa-home"></i> {/* Home icon */}
        <span>Home</span>
      </button>
      <button onClick={() => setCurrentPage('student')}>
        <i className="fas fa-user-graduate"></i> {/* Student icon */}
        <span>Student</span>
      </button>
      <button onClick={() => setCurrentPage('logout')}>
        <i className="fas fa-sign-out-alt"></i> {/* Logout icon */}
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Navbar;