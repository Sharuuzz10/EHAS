import React from "react";

function Navbar({ onAddStudentClick }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={onAddStudentClick}>Add Student</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;