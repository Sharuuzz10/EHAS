import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Student from './components/Student';
import Logout from './components/Logout';
import Navbar from './components/Navbar'; // Import Navbar
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [teacher, setTeacher] = useState({ name: 'John Doe', id: 'T123', hall: 'Hall 101' });
  const [students, setStudents] = useState([]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home'); // Redirect to home after logout
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      {currentPage === 'home' && <Home teacher={teacher} setCurrentPage={setCurrentPage} />}
      {currentPage === 'student' && <Student students={students} addStudent={addStudent} setCurrentPage={setCurrentPage} />}
      {currentPage === 'logout' && <Logout onLogout={handleLogout} />}

      {/* Conditionally render Navbar */}
      {currentPage !== 'logout' && <Navbar setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;