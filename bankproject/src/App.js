// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import UserContext from "./API/context/UserContext";
import "./App.css";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";

import { checkToken } from "./API/storage";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = checkToken();
    if (token) {
      setUser(true); //if we have token, the user will be true.
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <h1 className="color">the user state is {`${user}`}</h1>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
