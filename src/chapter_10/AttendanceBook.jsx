import React from "react";

const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Silly" },
  { id: 4, name: "verbose" },
  { id: 5, name: "Jeff" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}> {student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
