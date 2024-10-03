import { useForm } from "react-hook-form";
import student from "../../assets/student.jpg";
import teacher from "../../assets/teacher.jpg";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  // * THis is the part of the send data to the DB and the firebase
  const { createUser, UpdateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    if (role == "student") {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        //  this is for update the user Data
        UpdateUserProfile(data.name, data.email)
          .then(() => {
            const studentInfo = {
              schoolId: data.schoolId,
              firstName: data.firstName,
              parentNumber: data.parentNumber,
              userName: data.userName,
              password: data.password,
              email: data.email,
              role: role,
            };
            fetch("https://edusystemserver-1.onrender.com/users", {
              method: "POST",
              headers: {
                "COntent-Type": "application/json",
              },
              body: JSON.stringify(studentInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire("User Created Successfully");
                  navigate("/dashboard");
                }
              });
          })
          //  this is for catch the error of user
          .catch((error) => console.log(error));
      });

      //  this is for catch the error of user
    } else {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        //  this is for update the user Data
        UpdateUserProfile(data.name, data.email)
          .then(() => {
            const teacherInfo = {
              teacherId: data.teacherId,
              fullName: data.fullName,
              email: data.email,
              phoneNumber: data.phoneNumber,
              userName: data.userName,
              password: data.password,
              role: role,
            };
            console.log(teacherInfo);
            fetch("https://edusystemserver-1.onrender.com/users", {
              method: "POST",
              headers: {
                "COntent-Type": "application/json",
              },
              body: JSON.stringify(teacherInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire("User Created Successfully");
                  navigate("/dashboard");
                }
              });
          })
          //  this is for catch the error of user
          .catch((error) => console.log(error));
        //  this is for catch the error of user
        // .catch((error) => console.log(error));
      });
    }
  };
  return (
    <div>
      <div>
        <div className="hero bg-base-200 h-auto">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              {role === "student" && <img src={student} alt="" />}
              {role === "teacher" && <img src={teacher} alt="" />}
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-5xl font-bold text-center">SignUp</h1>{" "}
                <select name="role" value={role} onChange={handleRoleChange}>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>{" "}
                {role === "student" && (
                  <>
                    {/* //* this part is for student */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">School ID</span>
                      </label>
                      <input
                        type="number"
                        {...register("schoolId")}
                        required={true}
                        name="schoolId"
                        placeholder="School ID"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">FullName</span>
                      </label>
                      <input
                        type="text"
                        {...register("firstName")}
                        required={true}
                        name="firstName"
                        placeholder="FullName"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Parent's Number</span>
                      </label>
                      <input
                        type="number"
                        {...register("parentNumber")}
                        required={true}
                        name="parentNumber"
                        placeholder="Parent's Number"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">UserName</span>
                      </label>
                      <input
                        type="text"
                        {...register("userName")}
                        required={true}
                        name="userName"
                        placeholder="UserName"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: {
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        type="email"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Create Password</span>
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: true,
                        })}
                        name="password"
                        placeholder="Create Password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </>
                )}
                {role === "teacher" && (
                  <>
                    {/* this is teacher part */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">ID</span>
                      </label>
                      <input
                        type="number"
                        {...register("teacherId")}
                        required={true}
                        name="teacherId"
                        placeholder="Teacher ID"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">FullName</span>
                      </label>
                      <input
                        type="text"
                        {...register("fullName")}
                        required={true}
                        name="fullName"
                        placeholder="FullName"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: {
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        type="email"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone number</span>
                      </label>
                      <input
                        type="number"
                        {...register("phoneNumber")}
                        required={true}
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="input input-bordered"
                      />
                    </div>{" "}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">UserName</span>
                      </label>
                      <input
                        type="text"
                        {...register("userName")}
                        required={true}
                        name="userName"
                        placeholder="UserName"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text"> Password</span>
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: true,
                        })}
                        name="password"
                        placeholder="Enter Your Password"
                        className="input input-bordered"
                      />
                    </div>
                  </>
                )}
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white text-xl">
                    SignUp
                  </button>
                </div>
                <p>
                  <span className="underline">Already have an account</span>{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-blue-500 underline font-bold">
                      Login
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
