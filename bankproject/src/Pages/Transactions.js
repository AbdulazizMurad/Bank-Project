import React from "react";
import NavBar from "../Components/NavBar";
// import TransactionsComponent from "../Components/TransactionsComponent";
import { useQuery } from "@tanstack/react-query";
import { mytransactions } from "../API/auth";
import TransactionsComponent from "../Components/TransactionsComponent";

const Transactions = () => {
  return (
    <div>
      <NavBar />
      <TransactionsComponent />
    </div>
  );
};

export default Transactions;
