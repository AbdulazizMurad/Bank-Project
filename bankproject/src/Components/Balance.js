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
    <div className="bg-[#003380] text-white p-4 rounded-lg border border-gray-600 w-64 text-center w-fit">
      <h1 className="text-lg font-semibold mb-2">Your Available Balance is:</h1>
      <p className="text-xl font-bold">Balance: {profile?.balance}$</p>
    </div>
  );
};

export default Balance;
