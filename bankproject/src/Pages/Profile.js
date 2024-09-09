import React from "react";
import ProfileComponent from "../Components/ProfileComponent";
import NavBar from "../Components/NavBar";
import BankProjectLogo from "../Media/BankProjectLogo.png";

const Profile = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <NavBar />
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 px-4 md:px-8 lg:px-16">
        <div className="flex-shrink-0 mr-8">
          <img
            src={BankProjectLogo}
            alt="Bank Logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>
        <div className="flex-grow">
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
