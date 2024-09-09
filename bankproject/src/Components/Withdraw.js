import React, { useState } from "react";

import { withdraw } from "../API/features";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const Withdraw = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlewithDraw();
  };
  const queryClient = useQueryClient();
  const { mutate: handlewithDraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getmyprofile"] });
      setAmount("");
    },
  });
  return (
    <div className="flex gap-4">
      <div className="bg-[#003380] text-white p-4 rounded-lg border border-gray-600 w-64">
        <h1 className="text-lg font-semibold mb-2">Withdraw Here</h1>
        <input
          placeholder="Withdraw amount"
          className="w-full px-3 py-2 mb-4 rounded-md text-black"
          onChange={handleChange}
          required
          value={amount}
        />
        <button
          className="bg-red-500 w-full py-2 rounded-md font-semibold  hover:bg-red-600 p-2 m-2"
          onClick={handleFormSubmit}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Withdraw;
