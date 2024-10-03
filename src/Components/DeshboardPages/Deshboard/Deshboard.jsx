import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";
import StudentDashboard from "../../Student/StudentDashboard/StudentDashboard";

const Deshboard = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const [userID, setUserId] = useState([]);
  useEffect(() => {
    const userinfo = users.map((userEmail) => userEmail?.email == user?.email);
    setUserId(userinfo);
  }, [user?.email, users]);
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("mysubject.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  });
  //* fatch()
  //* .then(res => res.json())
  //* .then(data => console.log(data))

  return (
    <div className="w-[75%] mx-auto ml-[20%] ">
      <div className="bg-white p-6">
        <h1 className="text-title"> Dashboard Info</h1>
        {userID?.role === "teacher" ? (
          <>
            {" "}
            <div className="">
              <img src="" alt="" />
              <p className="text-title">Dr.Suman Ahmed</p>
            </div>
            <div className="flex justify-between ">
              <div className="w-[30%] p-4 bg-[#FFF5D9]">
                <img src="" alt="" />
                <p>total Assessment </p>
              </div>
              <div className="bg-[#D9EDFF] w-[30%] ">
                <img src="" alt="" />
                <p>total Assessment </p>
              </div>
              <div className="bg-[#CDFCEE] w-[30%] ">
                <img src="" alt="" />
                <p>total Assessment </p>
              </div>
            </div>
            <p className="text-title">my subject List</p>
            <div className="grid grid-cols-4">
              {subjects.map((subject) => (
                <div key={subject._id}>
                  <div>
                    <p className="bg-[#85a4e9] p-4 m-5 text-center rounded">
                      {subject.subject}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Ternary opa
          // Condition ? (<> true </>) : (<> false </>)
          <>
            <StudentDashboard></StudentDashboard>
          </>
        )}
      </div>
    </div>
  );
};

export default Deshboard;
