// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import UserContext from "./API/context/UserContext";
import "./App.css";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
import { checkToken } from "./API/storage";
import { Outlet } from "react-router-dom";
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
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
