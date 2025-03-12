import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowForm(false);
  };

  return (
    <div className="teacher-panel">
      <Navbar onAddStudentClick={() => setShowForm(!showForm)} />
      {showForm && <AddStudentForm onAddStudent={handleAddStudent} />}
      <StudentList students={students} />
    </div>
  );
}

export default App;