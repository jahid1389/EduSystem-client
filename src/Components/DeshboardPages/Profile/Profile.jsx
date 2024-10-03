import { useState } from "react";
import jub from "../../../assets/jub.jpg";
const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-[75%] mx-auto ml-[20%]   ">
      {/*  this is for the user info  */}
      <img className="useImg ml-[40%]" src={jub} alt="" />
      <p className="text-title propertyMargin">Dr.Suman Ahmed</p>
      {/* this is for the user login info   */}
      <div className="propertyMargin">
        <div>
          <label className="label">
            <span className="label-text">Old Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
