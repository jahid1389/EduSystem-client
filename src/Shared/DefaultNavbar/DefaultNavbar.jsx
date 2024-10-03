import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/logo.png";
import "./DefaultNavbar.css";
const DefaultNavbar = () => {
  //  TODO : this is navbar after login the user

  return (
    <div className="flex items-center justify-between bg-[#F8D692]">
      <img className="w-[10%]" src={logo} alt="" />
      <div>
        <input type="text" placeholder="Search..." className="search-field" />
      </div>
      <IoIosNotificationsOutline className="text-3xl" />
    </div>
  );
};

export default DefaultNavbar;
