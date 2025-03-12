import React, { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent({ name, id, department });
    setName("");
    setId("");
    setDepartment("");
  };

  return (
    <div className="add-student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Name:</label>
        <input
          type="text"
          id="studentName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="studentId">ID:</label>
        <input
          type="text"
          id="studentId"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

        <label htmlFor="studentDepartment">Department:</label>
        <input
          type="text"
          id="studentDepartment"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;