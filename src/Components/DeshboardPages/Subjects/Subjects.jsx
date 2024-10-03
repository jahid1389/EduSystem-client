import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";

const Subjects = () => {
  //  this is from fireBase
  const { user } = useContext(AuthContext);
  //  this is get the value from the database using the react-query
  const [users, refetch] = useUsers();
  console.log(users);
  //  in this we find the user current user email
  const userinfo = users.find((userEmail) => userEmail?.email === user?.email);
  console.log(user);
  console.log(userinfo);
  //  this is load the his Subject list
  const [subjects, setSubjects] = useState([]);
  //  we have json data to show all subjects
  useEffect(() => {
    fetch("mysubject.json")
      .then((res) => res.json())
      //   .then((data) => setSubjects(data));
      .then((data) => setSubjects(data));
  }, []);

  //  this is load all the subjectsList
  const [allSubject, setAllSubjects] = useState([]);
  useEffect(() => {
    fetch("subjectsList.json")
      .then((res) => res.json())
      .then((data) => setAllSubjects(data));
  }, []);

  const [visibleItems, setVisibleItems] = useState(6);

  const handleSeeMore = () => {
    setVisibleItems(allSubject.length);
  };

  const handelSeeLess = () => {
    setVisibleItems(6);
  };
  return (
    <div className="w-[75%] mx-auto ml-[20%] ">
      <div className="bg-white p-9">
        {userinfo?.role === "teacher" ? (
          <>
            {" "}
            <h1 className="text-title">Subject List </h1>
            <div className="grid grid-cols-4">
              {allSubject.slice(0, visibleItems).map((item) => (
                <p
                  key={item._id}
                  className="bg-[#85a4e9] p-4 m-5 text-center rounded"
                >
                  {item.subject}
                </p>
              ))}
            </div>
            {visibleItems < allSubject.length ? (
              <button
                className="text-white bg-[#5B40FF] rounded-md pt-3 pb-3 pl-5 pr-5 font-medium"
                onClick={handleSeeMore}
              >
                See More
              </button>
            ) : (
              <button
                className="text-white bg-[#5B40FF] rounded-md pt-3 pb-3 pl-5 pr-5 font-medium"
                onClick={handelSeeLess}
              >
                Show Less
              </button>
            )}{" "}
            <p className="text-title">My Subject List</p>
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
          <>
            <p className="text-title">Subject List</p>
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
        )}
      </div>
    </div>
  );
};

export default Subjects;
