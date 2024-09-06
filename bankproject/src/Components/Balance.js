import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../API/auth";

const Balance = () => {
  const { data: profile } = useQuery({
    queryKey: ["getmyprofile"],
    queryFn: () => getMyProfile(),
  });
  console.log(profile);
  return (
    <div className="  ">
      <ul className="bg-slate-600 h-200px w-100px align-center justify-center">
        <ul />
        <h1>Your Available Balance is :</h1>
        <li>Balance: {profile?.balance}$</li>
      </ul>
    </div>
  );
};

export default Balance;
