import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import StudentInfo from './components/StudentInfo';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student-info" element={<StudentInfo />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;