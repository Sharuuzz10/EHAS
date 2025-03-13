import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Correct path to styles.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><img src="/icons/home-icon.png" alt="Home" /></Link>
      <Link to="/add-student"><img src="/icons/add-student-icon.png" alt="Add Student" /></Link>
      <Link to="/student-info"><img src="/icons/student-info-icon.png" alt="Student Info" /></Link>
      <button onClick={() => alert('Logged out')}><img src="/icons/logout-icon.png" alt="Logout" /></button>
    </nav>
  );
};

export default Navbar;