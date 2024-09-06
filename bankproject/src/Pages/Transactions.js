import React from "react";
import NavBar from "../Components/NavBar";
import TransactionsComponent from "../Components/TransactionsComponent";

const Transactions = () => {
  return (
    <div>
      <NavBar />
      <TransactionsComponent />

      <p>Transactions</p>
    </div>
  );
};

export default Transactions;
