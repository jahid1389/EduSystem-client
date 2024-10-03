import { useContext } from "react";
import StudentMarks from "../../Student/StudentMarks/StudentMarks";
import TeacherEvaluation from "../TeacherEvaluation/TeacherEvaluation";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";

const Evaluation = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userEmail = users.find((userE) => userE?.email == user?.email);
  return (
    <div className="w-[75%] mx-auto ml-[20%]">
      {/*  check the user role then show the output */}
      {/* //TODO here testing after all thing teacher will up student down  */}
      {userEmail?.role == "teacher" ? (
        <>
          {/*  this is teacher part */}
          <TeacherEvaluation></TeacherEvaluation>
        </>
      ) : (
        <>
          {/*  this is student part  */} <StudentMarks></StudentMarks>
        </>
      )}
    </div>
  );
};

export default Evaluation;
