import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { logout } from "../API/auth";
import UserContext from "../API/context/UserContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    logout();
    setUser(false);
  };
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return (
    <nav className="bg-[#003380] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="block text-navBarText">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="px-3 py-2 rounded-md ">
                Home
              </NavLink>
              <NavLink to="/Transactions" className=" px-3 py-2 rounded-md  ">
                Transactions
              </NavLink>
              <NavLink to="/Users" className=" px-3 py-2 rounded-md  ">
                Users
              </NavLink>
              <NavLink to="/Profile" className=" px-3 py-2 rounded-md  ">
                Profile
              </NavLink>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
