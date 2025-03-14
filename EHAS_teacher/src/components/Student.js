import React, { useState } from 'react';
import Navbar from './Navbar.js'; // Add .js extension

const Student = ({ students, addStudent, setCurrentPage }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', id: '', department: '' });

  const handleAddStudent = (e) => {
    e.preventDefault();
    addStudent(newStudent);
    setIsPopupOpen(false);
    setNewStudent({ name: '', id: '', department: '' });
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student">
      <h1>Student Page</h1>
      <button onClick={() => setIsPopupOpen(true)}>Add Student</button>
      <input
        type="text"
        placeholder="Search Student"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleAddStudent}>
            <input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="ID"
              value={newStudent.id}
              onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Department"
              value={newStudent.department}
              onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsPopupOpen(false)}>Cancel</button>
          </form>
        </div>
      )}
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <div key={index} className="student-item">
            <p>Name: {student.name}</p>
            <p>ID: {student.id}</p>
            <p>Department: {student.department}</p>
          </div>
        ))}
      </div>
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Student;