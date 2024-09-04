import instance from "./index.js";

const getAllUsers = async () => {
  const response = await instance.get("/mini-project/api/auth/users");
  return response.data;
};
export { getAllUsers };
