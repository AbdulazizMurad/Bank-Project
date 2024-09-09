import React, { useState } from "react";
import { deposit } from "../API/features";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const Deposit = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleDeposit();
  };
  const queryClient = useQueryClient();

  const { mutate: handleDeposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => deposit(amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getmyprofile"] });
      setAmount("");
    },
  });
  return (
    <div className="flex gap-4">
      <div className="bg-[#003380] text-white p-4 rounded-lg border border-gray-600 w-64">
        <h1 className="text-lg font-semibold mb-2">Deposit Here</h1>
        <input
          placeholder="Deposit amount"
          className="w-full px-3 py-2 mb-4 rounded-md text-black"
          onChange={handleChange}
          required
          value={amount}
        />
        <button
          className="bg-blue-500 w-full py-2 rounded-md font-semibold  hover:bg-blue-600 p-2"
          onClick={handleFormSubmit}
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export default Deposit;
