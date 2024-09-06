import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMyProfile } from "../API/auth";

const ProfileComponent = () => {
  const { data: profile } = useQuery({
    queryKey: ["getmyprofile"],
    queryFn: () => getMyProfile(),
  });
  console.log(profile);
  //{"username":"AddedNew","balance":0}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 rounded-r text-center">
      <div className="bg-customBlue flex-col w-fit border-2 p-4 rounded-lg">
        <div className="flex items-center justify-center w-40 h-40 mb-4 mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="Profile-img"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        <div>
          <ul>
            <ul>
              <li>Username: {profile?.username}</li>
              <li>Balance: {profile?.balance}$</li>
            </ul>
          </ul>

          <label
            htmlFor="image"
            className="block text-white text-sm font-medium mb-2"
          >
            Upload a Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            // onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
