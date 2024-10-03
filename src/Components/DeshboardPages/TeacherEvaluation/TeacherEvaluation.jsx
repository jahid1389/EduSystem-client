import React, { useEffect, useState } from "react";
import useUsers from "../../../hook/useUsers";
import { NavLink } from "react-router-dom";

const TeacherEvaluation = () => {
  // * here show all student then
  const [users] = useUsers();
  const [roleStudents, setRoleStudents] = useState([]);
  useEffect(() => {
    const students = users.filter((student) => student?.role == "student");
    setRoleStudents(students);
  }, [users]);
  const [pathMap, setPathMap] = useState("");
  const handleAfterMath = (id) => {
    console.log("student id", id);
    const pathOfStudent = `/afterMath/${id}`;
    setPathMap(pathOfStudent);
  };
  console.log(pathMap);
  return (
    <div>
      <p className="text-2xl font-bold">Student List</p>
      <table className="w-[100%]">
        <tr>
          <th className="text-start">Student Name</th>
          <th className="text-start">Action</th>
        </tr>
        {roleStudents.map((roleStudents, index) => (
          <tr key={index}>
            <td>{roleStudents.firstName}</td>
            <td>
              <NavLink to={pathMap}>
                <button onClick={() => handleAfterMath(roleStudents._id)}>
                  view
                </button>
              </NavLink>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TeacherEvaluation;
