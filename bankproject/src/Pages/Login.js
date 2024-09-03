import React from "react";
import "../Styling/user.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/944/628/original/bank-logo-or-icon-design-on-white-background-illustration-vector.jpg"
        alt="Bank Logo"
        className="image"
      />

      <div className="inputModal">
        <h1>Log in to your account</h1>
        <p>If you do not have an account, register here </p>

        <label>UserName</label>
        <input placeholder="UserName"></input>
        <label>Password</label>
        <input placeholder="Password"></input>
      </div>
    </div>
  );
};

export default Login;
