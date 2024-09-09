import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { logout } from "../API/auth";
import UserContext from "../API/context/UserContext";
import BankProjectLogo from "../Media/BankProjectLogo.png";

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
    <nav className="bg-[#003380] text-white fixed top-0 left-0 right-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img
            src={BankProjectLogo}
            alt="Bank Logo"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mt-6"
          />
          <div className="ml-4 flex space-x-4">
            <NavLink to="/" className="px-3 py-2 rounded-md">
              Home
            </NavLink>
            <NavLink to="/Transactions" className="px-3 py-2 rounded-md">
              Transactions
            </NavLink>
            <NavLink to="/Users" className="px-3 py-2 rounded-md">
              Users
            </NavLink>
            <NavLink to="/Profile" className="px-3 py-2 rounded-md">
              Profile
            </NavLink>
            <button onClick={handleLogout} className="px-3 py-2 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
