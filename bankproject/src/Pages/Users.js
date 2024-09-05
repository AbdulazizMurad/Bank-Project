//work here on getting all users
import React from "react";
import { getAllUsers } from "../API/features";
import { useState } from "react";
import NavBar from "../Components/NavBar";
import UserCard from "../Components/UserCard";
import { useQuery } from "@tanstack/react-query";
import listUsers from "./ListUsers";

const Users = () => {
  // const [users, setusers] = useState([]);
  // const getUsers = async () => {
  //   const response = await getAllUsers();
  //   setusers(response);
  // console.log(users);
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  // const usersDisplay = listUsers.map((user) => {
  //   return (
  //     <UserCard
  //       username={user.username}
  //       _id={user._id}
  //       balance={user.balance}
  //     />
  //   );
  // });
  const baseURL = "https://react-bank-project.eapi.joincoded.com/";
  return (
    <div>
      <NavBar />

      <div className="flex">
        {users?.map((user) => (
          <div
            key={user._id}
            className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-lg text-white font-semibold mb-2">
                {user.username}
              </h3>
            </div>
            <img
              src={baseURL + user.image}
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="text-center">
              <p className="text-gray-300">{`Balance: ${user.balance}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

//--- Previous Code --->
//work here on getting all users
// import React from "react";
// import { getAllUsers } from "../API/features";
// import { useState } from "react";
// import NavBar from "../Components/NavBar";
// import UserCard from "../Components/UserCard";
// import { useQuery } from "@tanstack/react-query";
// import listUsers from "./ListUsers";

// const Users = () => {
//   // const [users, setusers] = useState([]);
//   // const getUsers = async () => {
//   //   const response = await getAllUsers();
//   //   setusers(response);
//   // console.log(users);
//   const { data: users } = useQuery({
//     queryKey: ["users"],
//     queryFn: getAllUsers,
//   });

//   const usersDisplay = listUsers.map((user) => {
//     return (
//       <UserCard
//         username={user.username}
//         _id={user._id}
//         balance={user.balance}
//       />
//     );
//   });
//   return (
//     <div>
//       <NavBar />
//       <button onClick={getAllUsers}>Get users</button>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {usersDisplay}
//       </div>
//     </div>
//   );
// };

// export default Users;
