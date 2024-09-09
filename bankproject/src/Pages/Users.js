import React from "react";
import { getAllUsers } from "../API/features";
import NavBar from "../Components/NavBar";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const baseURL = "https://react-bank-project.eapi.joincoded.com/";
  return (
    <div>
      <div className="mb-12">
        <NavBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 7 p-8 justify-center gap-5">
        {users?.map((user) => (
          <div
            key={user._id}
            className=" p-6 rounded-xl flex flex-col items-center border-4 border-[#003380]"
          >
            <img
              src={baseURL + user.image}
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-customBlue">
                {user.username}
              </h3>
              <p className="text-customBlue">{`Balance: $${user.balance}`}</p>
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
//------>
// const usersDisplay = listUsers.map((user) => {
//   return (
//     <UserCard
//       username={user.username}
//       _id={user._id}
//       balance={user.balance}
//     />
//   );
// });
//--------->
// const [users, setusers] = useState([]);
// const getUsers = async () => {
//   const response = await getAllUsers();
//   setusers(response);
// console.log(users);
