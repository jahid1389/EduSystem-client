import React, { useEffect, useState } from "react";

const RecommendedSubjects = () => {
  const [rSubjectsList, setRSubjectsList] = useState([]);
  useEffect(() => {
    fetch("mysubject.json")
      .then((res) => res.json())
      .then((data) => setRSubjectsList(data));
  }, []);
  return (
    <div className="w-[75%] mx-auto ml-[20%] pt-9  ">
      <p className="font-bold text-2xl mb-9">Recommended Subjects</p>
      <div className="grid grid-cols-4">
        {rSubjectsList.map((rSubjectsLists) => (
          <div key={rSubjectsLists._id}>
            <p className="bg-[#85a4e9] p-4 m-5 text-center rounded">
              {rSubjectsLists.subject}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSubjects;
