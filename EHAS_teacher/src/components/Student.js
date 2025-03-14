import React, { useState } from 'react';
import Navbar from './Navbar.js';

const Student = ({ students, addStudent, setCurrentPage }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', id: '', department: '' });

  // Department options
  const departments = ['CS', 'IT', 'Civil', 'Mechanical', 'Electrical'];

  const handleAddStudent = (e) => {
    e.preventDefault();
    addStudent(newStudent);
    setIsPopupOpen(false);
    setNewStudent({ name: '', id: '', department: '' });
  };

  const handleEditStudent = (index) => {
    // Edit functionality (to be implemented)
    alert(`Edit student at index ${index}`);
  };

  const handleDeleteStudent = (index) => {
    // Delete functionality (to be implemented)
    alert(`Delete student at index ${index}`);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-page">
      <h1>Student Management</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <i className="fas fa-search"></i> {/* Search icon */}
        <input
          type="text"
          placeholder="Search Student"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Student Button */}
      <button className="add-student-btn" onClick={() => setIsPopupOpen(true)}>
        <i className="fas fa-user-plus"></i> {/* Add Student icon */}
        <span>Add Student</span>
      </button>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Add New Student</h2>
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
              <select
                value={newStudent.department}
                onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <div className="popup-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsPopupOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Table */}
      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.id}</td>
                <td>{student.department}</td>
                <td>
                  <button className="action-btn edit-btn" onClick={() => handleEditStudent(index)}>
                    <i className="fas fa-edit"></i> {/* Edit icon */}
                  </button>
                  <button className="action-btn delete-btn" onClick={() => handleDeleteStudent(index)}>
                    <i className="fas fa-trash"></i> {/* Delete icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Student;