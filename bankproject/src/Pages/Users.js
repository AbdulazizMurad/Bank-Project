import React, { useState } from "react";
import { getAllUsers, transfere } from "../API/features";
import NavBar from "../Components/NavBar";
import { useMutation, useQuery } from "@tanstack/react-query";

const Users = () => {
  const [amount, setAmount] = useState(0);
  const [username, setUsername] = useState("");
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const { mutate: handleTransfere } = useMutation({
    mutationKey: ["transfere"],
    mutationFn: () => transfere(username, amount),
  });
  const handleClick = (e) => {
    e.preventDefault();
    handleTransfere();
  };

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
            className="p-6 rounded-xl flex flex-col items-center border-4 border-[#003380]"
          >
            <img
              src={baseURL + user.image}
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#003380]">
                {user.username}
              </h3>
              <p className="text-[#003380] text-lg font-semibold ">{`Balance: $${user.balance}`}</p>
            </div>
            <div>
              <input
                placeholder="Transfer amount"
                className="border-2 border-[#003380] rounded-md p-1 m-2"
                onChange={handleChange}
              />
              <button
                className="bg-[#003380] w-full py-2 rounded-md hover:bg-blue-600 m-2 text-white  font-semibold  p-2"
                onClick={(e) => {
                  setUsername(user.username);
                  handleClick(e);
                }}
              >
                Transfer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
