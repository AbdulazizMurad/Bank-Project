import React from "react";

const Profile = ({ Profile }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-r text-center">
      <div className="bg-[#4E598C] flex-col w-fit border-2 p-4 rounded-lg">
        <div className="flex items-center justify-center w-40 h-40 mb-4 mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="Profile-img"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        <div>
          <h4>PROFILE NAME</h4>
          <p>Balance</p>
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

// <div className="bg-[4E598C] flex-col w-fit  border-2 justify-items-center	">
//   <div className="w-40">
//     <img
//       src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
//       alt="Profile-img"
//     />
//   </div>

//   <div className="">
//     <h1>UserName</h1>
//     <p1>Balance:</p1>
//   </div>
//   <div />
// </div>

export default Profile;
