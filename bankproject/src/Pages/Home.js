import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Balance from "../Components/Balance";

import Withdraw from "../Components/Withdraw";
import Deposit from "../Components/Deposit";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        <Balance />
        <div className="flex space-x-8">
          <Deposit />
          <Withdraw />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
