import instance from "./index.js";

const getAllUsers = async () => {
  const response = await instance.get("/mini-project/api/auth/users");
  return response.data;
};
const transfere = async (username, amount) => {
  const response = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    { amount: amount }
  );
  return response.data;
};
const updateProfile = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  console.log(formData);
  const response = await instance.put(
    "/mini-project/api/auth/profile",
    formData
  );
  return response.data;
};
const deposit = async (amount) => {
  const response = await instance.put(
    "/mini-project/api/transactions/deposit",
    { amount: amount }
  );
  return response.data;
};
const withdraw = async (amount) => {
  const response = await instance.put(
    "/mini-project/api/transactions/withdraw",
    { amount: amount }
  );
  return response.data;
};

export { getAllUsers, transfere, deposit, withdraw, updateProfile };
