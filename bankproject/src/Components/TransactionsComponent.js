import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mytransactions } from "../API/auth";

const TransactionsComponent = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchAmount, setSearchAmount] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Function to normalize the transaction date to YYYY-MM-DD
  function toNormaldate(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
  }

  // Fetch all transactions first
  const {
    data: transactions,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myTransactions"],
    queryFn: mytransactions,
  });

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);
  const handleAmountChange = (e) => setSearchAmount(e.target.value);

  // Apply client-side filters for type, date range, and amount
  const filteredTransactions = transactions?.filter((transaction) => {
    let matchesType = filterType === "all" || transaction.type === filterType;

    // Normalize transaction date and check if it's within the date range
    let transactionDate = toNormaldate(transaction.createdAt);
    let matchesDateRange =
      (!startDate || transactionDate >= startDate) &&
      (!endDate || transactionDate <= endDate);

    let matchesAmount =
      !searchAmount || transaction.amount === parseFloat(searchAmount);

    return matchesType && matchesDateRange && matchesAmount;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-7 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-7">
        <h1 className="text-2xl  mb-6 text-white bg-[#003380]  ">
          Transactions
        </h1>

        {/* Date Range Search */}
        <div className="flex space-x-4 mb-4">
          <div className="flex flex-col">
            <label className="text-[#003380] mb-1 ">From Date</label>
            <input
              type="date"
              className="border-2 border-[#003380] form-control rounded px-4 py-2 text-[#003380]"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003380] mb-1">To Date</label>
            <input
              type="date"
              className="border-2 border-[#003380] form-control rounded px-4 py-2 text-[#003380]"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        {/* Search by Amount */}
        <div className="mb-4">
          <input
            type="number"
            className="border-2 border-[#003380] form-control rounded w-full px-4 py-2 text-[#003380]"
            value={searchAmount}
            onChange={handleAmountChange}
            placeholder="Search by Amount"
          />
        </div>

        <div className="mb-4">
          <button
            onClick={refetch}
            className="bg-[#003380] text-white py-2 px-4 rounded-md w-full hover:bg-blue-500 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilterType("all")}
            className={` hover:bg-blue-500 py-2 px-4 rounded-md ${
              filterType === "all"
                ? "bg-[#003380] text-white"
                : "bg-gray-200 text-[#003380]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("deposit")}
            className={` hover:bg-blue-500 py-2 px-4 rounded-md ${
              filterType === "deposit"
                ? "bg-[#003380] text-white"
                : "bg-gray-200 text-[#003380]"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setFilterType("withdraw")}
            className={` hover:bg-blue-500 py-2 px-4 rounded-md ${
              filterType === "withdraw"
                ? "bg-[#003380] text-white"
                : "bg-gray-200 text-[#003380]"
            }`}
          >
            Withdraw
          </button>
          <button
            onClick={() => setFilterType("transfer")}
            className={` hover:bg-blue-500 py-2 px-4 rounded-md ${
              filterType === "transfer"
                ? "bg-[#003380] text-white"
                : "bg-gray-200 text-[#003380]"
            }`}
          >
            Transfer
          </button>
        </div>

        {/* Display Transactions */}
        {isPending ? (
          <p className="mt-6 text-center text-gray-500">Loading...</p>
        ) : (
          <div className="mt-6 space-y-4">
            {filteredTransactions?.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
              >
                <p className="text-gray-800 text-lg font-semibold">
                  Date: {toNormaldate(transaction.createdAt)}
                </p>
                <p className="text-lg font-semibold">
                  Amount:{" "}
                  <span
                    className={`${
                      transaction.type === "withdraw"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {transaction.type === "withdraw"
                      ? `-${Math.abs(transaction.amount)}`
                      : `+${transaction.amount}`}
                    $
                  </span>
                </p>
                <p className="text-gray-800 text-lg">
                  Type:{" "}
                  {transaction.type.charAt(0).toUpperCase() +
                    transaction.type.slice(1)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsComponent;
