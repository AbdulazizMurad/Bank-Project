import React from "react";

const Register = () => {
  return (
    <div className="container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/944/628/original/bank-logo-or-icon-design-on-white-background-illustration-vector.jpg"
        alt="Bank Logo"
        className="image"
      />

      <div className="inputModal">
        <h1>Register your account</h1>
        <p>Already have an account? Login here</p>
        <label>UserName</label>
        <input placeholder="UserName"></input>
        <label>Password</label>
        <input placeholder="Password"></input>
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
            // onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
