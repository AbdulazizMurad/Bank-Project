import React from "react";
import "../Styling/user.css";
const UserCard = ({ username, _id, balance }) => {
  return (
    <div className="flex items-center flex-col border rounded-m">
      <img src={_id} alt="UserImage" className="image" />
      <h2> {username}</h2>
      <p> {balance}</p>
    </div>
  );
};

export default UserCard;
