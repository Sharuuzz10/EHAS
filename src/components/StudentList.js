import React from "react";

function StudentList({ students }) {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            Name: {student.name}, ID: {student.id}, Department: {student.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;