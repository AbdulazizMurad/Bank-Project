import React, { useContext, useState } from "react";
import { login } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../API/context/UserContext";
import BankProjectLogo from "../Media/BankProjectLogo.png";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" // Adjust size to match register page
        />
      </div>

      <div className="flex flex-col items-start bg-[#003380] text-white rounded-[30px] p-5 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Log in to your account</h1>
        <p className="mb-4">
          If you do not have an account,{" "}
          <NavLink to="/Register" className="text-blue-300 underline">
            register here
          </NavLink>
          .
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col items-center"
        >
          {" "}
          {/* Center form items */}
          <div className="mb-4 w-full">
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
          <div className="mb-4 w-full">
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
          <div className="w-full flex justify-center">
            {" "}
            {/* Center the button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
