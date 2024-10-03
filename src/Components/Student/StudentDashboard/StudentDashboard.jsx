import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useUsers from "../../../hook/useUsers";
import { FaUser } from "react-icons/fa";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
  const userinfo = users.find((userEmail) => userEmail?.email === user?.email);
  return (
    <div>
      <p className="text-center mb-5">{userinfo?.firstName}</p>
      <div className="flex ">
        <div className="bg-yellow-200 w-[30%] mr-5 p-5 rounded-xl">
          <FaUser className="text-orange-600 text-2xl" />
          <div>
            <p>
              Total <br /> Assignment
            </p>
          </div>
        </div>
        <div className="bg-blue-200 w-[30%] mr-5 p-5 rounded-xl">
          <PiMicrosoftTeamsLogoBold className="text-orange-600 text-2xl" />
          <div>
            <p>Team Work </p>
          </div>
        </div>
        <div className="bg-green-200 w-[30%] p-5 rounded-xl">
          <GoQuestion className="text-orange-600 text-2xl" />
          <div>
            <p>
              Total <br /> Presentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
