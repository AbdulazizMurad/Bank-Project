import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../API/auth";
import UserContext from "../API/context/UserContext";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    logout();
    setUser(false);
  };
  return (
    <nav className="bg-customBlue ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center justify-between h-16">
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/Transactions"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transactions
              </NavLink>
              <NavLink
                to="/Users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>
              <NavLink
                to="/Profile"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
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
