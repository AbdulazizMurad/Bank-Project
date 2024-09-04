import React, { useContext, useState } from "react";
import "../Styling/user.css";
import { login } from "../API/auth";
import { useMutation } from "@tanstack/react-query";
import { Navigate, NavLink } from "react-router-dom";
import UserContext from "../API/context/UserContext";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("user", user);

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["Login"],
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
    // Add login logic here
    handleLogin();
  };

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
        <h1>Log in to your account</h1>
        <p>
          If you do not have an account,
          <NavLink to="/Register">register here</NavLink>.
        </p>

        <label>UserName</label>
        <input
          placeholder="UserName"
          name="username"
          onChange={handleChange}
          className="text-customBlue"
        ></input>
        <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="text-customBlue"
        ></input>
        <button onClick={handleFormSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
