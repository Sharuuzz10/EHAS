import React, { useState } from 'react';

const AddStudent = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [excelFile, setExcelFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Name:', studentName);
    console.log('Student ID:', studentId);
    console.log('Department:', department);
    console.log('Excel File:', excelFile);
    alert('Student added successfully!');
  };

  return (
    <div className="content">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <label>Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />

        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <label>Upload Excel Sheet:</label>
        <input
          type="file"
          onChange={(e) => setExcelFile(e.target.files[0])}
          accept=".xlsx, .xls"
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;