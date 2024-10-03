import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";
import { useParams } from "react-router-dom";

const MarkReview = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userSubjects = users.find((userId) => userId?._id == id);
  //  TODO : find the use base on id and the show his subjects
  const [studentNumbers, setStudentNumbers] = useState([]);
  useEffect(() => {
    fetch("/number.json")
      .then((res) => res.json())
      .then((data) => setStudentNumbers(data));
  }, []);
  return (
    <div className="w-[75%] mx-auto ml-[20%] ">
      <p className="text-2xl font-bold text-center p-5 mb-5">
        {userSubjects?.firstName}
      </p>
      {studentNumbers.map((studentNumber) => (
        <table
          key={studentNumber.id}
          className="w-[100%] border-collapse	border border-slate-400"
        >
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
    </div>
  );
};

export default MarkReview;
