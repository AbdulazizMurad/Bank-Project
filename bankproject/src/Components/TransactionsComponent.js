import React from "react";
import { useQuery } from "@tanstack/react-query";
import { mytransactions } from "../API/auth";
const TransactionsComponent = () => {
  const { data: transactions, isPending } = useQuery({
    queryKey: ["myTransactions"],
    queryFn: mytransactions,
  });
  if (!isPending) {
  }
  console.log(transactions);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="search"
          className="border form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default TransactionsComponent;
