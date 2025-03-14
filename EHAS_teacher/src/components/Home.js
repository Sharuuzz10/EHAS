import React from 'react';
import Navbar from './Navbar.js';

const Home = ({ teacher, setCurrentPage }) => {
  return (
    <div className="home-page">
      <h1>Welcome, {teacher.name}!</h1>
      <div className="teacher-details">
        <div className="detail-card">
          <i className="fas fa-id-card"></i> {/* Teacher ID icon */}
          <h3>Teacher ID</h3>
          <p>{teacher.id}</p>
        </div>
        <div className="detail-card">
          <i className="fas fa-building"></i> {/* Assigned Hall icon */}
          <h3>Assigned Hall</h3>
          <p>{teacher.hall}</p>
        </div>
      </div>
      
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;