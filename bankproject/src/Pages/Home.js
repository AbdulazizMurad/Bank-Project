import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Balance from "../Components/Balance";

const Home = () => {
  return (
    <div>
      <NavBar  />
      <Balance  />
      <Outlet />
    </div>
  );
};

export default Home;
