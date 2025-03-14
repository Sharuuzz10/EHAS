import React from 'react';
import Navbar from './Navbar.js'; // Add .js extension

const Home = ({ teacher, setCurrentPage }) => {
  return (
    <div className="home">
      <h1></h1>
      <div className="teacher-details">
        <p>Name: {teacher.name}</p>
        <p>ID: {teacher.id}</p>
        <p>Assigned Hall: {teacher.hall}</p>
      </div>
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;