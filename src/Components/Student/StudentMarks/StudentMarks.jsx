import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";
import { NavLink } from "react-router-dom";

const StudentMarks = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userinfo = users.find((userEmail) => userEmail?.email === user?.email);
  //  TODO : find the use base on id and the show his subjects
  const [studentNumbers, setStudentNumbers] = useState([]);
  useEffect(() => {
    fetch("number.json")
      .then((res) => res.json())
      .then((data) => setStudentNumbers(data));
  }, []);
  return (
    <div>
      <p className="text-center text-2xl font-bold p-10">
        {userinfo?.firstName}
      </p>
      {studentNumbers.map((studentNumber) => (
        <table
          key={studentNumber.id}
          className="w-[100%] border-collapse	border border-slate-400"
        >
          {/* this is the title  */}

          <tr>
            <th className="border border-slate-300 p-2">Subject</th>
            <th className="border border-slate-300 p-2">Half Year</th>
            <th className="border border-slate-300 p-2">Pre Term</th>
            <th className="border border-slate-300 p-2">Yearly</th>
            <th className="border border-slate-300 p-2">Team Work</th>
            <th className="border border-slate-300 p-2">Assignment</th>
            <th className="border border-slate-300 p-2">Attendance</th>
          </tr>
          {Array.isArray(studentNumber.studentSubjects) &&
            studentNumber.studentSubjects.map((subject, index) => (
              <tr key={index}>
                <td className="border border-slate-300 text-center p-2">
                  {subject.subjectName}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.halfYear}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.preTerm}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.yearly}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.teamWork}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.assignment}
                </td>
                <td className="border border-slate-300 text-center p-2">
                  {subject.attendance}
                </td>
              </tr>
            ))}
        </table>
      ))}
      <div className=" ml-auto">
        <NavLink to={"/recommendSubject"}>
          <button className="m-6 bg-blue-400 pt-5 pb-5 pl-7 pr-7 rounded-lg font-bold text-white">
            Prediction Result
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default StudentMarks;
