import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const TopNavbar = () => {
  return (
    <div className=" bg-[#F8D692]">
      <div className="ml-[5%] mr-[5%]">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <p>
            <Link to="/dashboard">deshbord</Link>
          </p>
          <div>
            <button className=" loginBtn  text-white bg-[#5B40FF] rounded-md pt-3 pb-3 pl-5 pr-5 font-medium">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
