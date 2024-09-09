import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMyProfile } from "../API/auth";
import { updateProfile } from "../API/features";

const ProfileComponent = () => {
  const [image, setimage] = useState("");
  const { data: profile } = useQuery({
    queryKey: ["getmyprofile"],
    queryFn: () => getMyProfile(),
  });
  console.log(profile);
  const queryClient = useQueryClient();

  const handleUpdate = (e) => {
    e.preventDefault();
    document.getElementById("profileForm").reset();
    updateImage();
  };
  const handleChange = (e) => {
    setimage(e.target.files[0]);
  };
  const { mutate: updateImage } = useMutation({
    mutationKey: ["updateImage"],
    mutationFn: () => updateProfile(image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getmyprofile"] });
      setimage("");
    },
  });
  const baseURL = "https://react-bank-project.eapi.joincoded.com/";

  return (
    <form id="profileForm" onSubmit={handleUpdate}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
        <div className="bg-[#003380] w-fit border-2 p-4 rounded-lg mb-8 text-white">
          <div className="flex items-center justify-center w-40 h-40 mb-4 mx-auto">
            <img
              src={baseURL + profile?.image}
              alt="Profile image"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>

          <div>
            <ul className="text-white text-lg font-semibold">
              <li>Username: {profile?.username}</li>
              <li>Balance: {profile?.balance}$</li>
            </ul>

            <label
              htmlFor="image"
              className="block text-white text-lg font-semibold mb-2 mt-4"
            >
              Upload a Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-lg font-semibold "
              required
            />
            <button
              type="submit"
              className="bg-blue-500 m-2 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileComponent;
