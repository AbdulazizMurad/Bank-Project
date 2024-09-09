import React, { useContext, useState } from "react";
import { register } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../API/context/UserContext";
import BankProjectLogo from "../Media/BankProjectLogo.png";

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

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  if (user) {
    return <Navigate to={"/Home"} />;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen px-10">
      <div className="mb-12 md:mr-16">
        <img
          src={BankProjectLogo}
          alt="Bank Logo"
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" // Match size with login page
        />
      </div>

      <div className="flex flex-col items-start bg-[#003380] text-white rounded-[30px] p-5 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Register your account</h1>
        <p className="mb-4">
          Already have an account?{" "}
          <NavLink to="/" className="text-blue-300 underline">
            Login here
          </NavLink>
          .
        </p>

        <form onSubmit={handleFormSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-left text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="block w-full px-3 py-2 text-[#003380] border border-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-left text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="block w-full px-3 py-2 text-[#003380] border border-gray-700 rounded-md"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-left text-sm font-medium mb-1"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-white text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
