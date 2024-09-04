import React from "react";
import NavBar from "../Components/NavBar";
// import { getAllUsers } from "../API/endpoints";
// import { useState } from "react";

const Users = () => {
  //   const [users, setusers] = useState([]);
  //   const getUsers = async () => {
  //     const response = await getAllUsers();
  //     setusers(response);
  //   };

  return (
    <div>
      <NavBar />
      <button>Get users</button>
    </div>
  );
};

export default Users;
