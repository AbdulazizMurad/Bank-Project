import React, { useContext, useState } from "react";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../API/context/UserContext";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    handleRegister();
  };
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  if (user) {
    return <Navigate to={"/Home"} />;
  }
  return (
    <div className="container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/944/628/original/bank-logo-or-icon-design-on-white-background-illustration-vector.jpg"
        alt="Bank Logo"
        className="image"
      />

      <div className="inputModal">
        <h1>Register your account</h1>
        <p>
          Already have an account, <NavLink to="/">Login here</NavLink>.
        </p>
        <label>UserName</label>
        <input
          name="username"
          placeholder="UserName"
          onChange={handleChange}
          className="text-[#003380]"
        ></input>
        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="text-[#003380]"
        ></input>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-white text-sm font-medium mb-2"
          >
            Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>
        <button // submit button for register
          onClick={handleFormSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
