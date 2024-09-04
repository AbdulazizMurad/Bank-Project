//work here on getting all users
import React from "react";
import { getAllUsers } from "../API/features";
import { useState } from "react";

const Users = () => {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const response = await getAllUsers();
    setusers(response);
    // console.log(users);
  };
  // const [pets, setpets] = useState([]);
  // const getPet = async () => {
  //   const response = await getAllPets();
  //   setpets(response);
  // };
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
    </div>
  );
};

export default Users;
