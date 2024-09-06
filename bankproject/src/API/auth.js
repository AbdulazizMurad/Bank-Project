import instance from ".";
import { storeToken } from "./storage";

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};
const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getMyProfile = async () => {
  try {
    const { data } = await instance.get("/mini-project/api/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const logout = () => {
  localStorage.removeItem("token");
};

const mytransactions = async () => {
  try {
    const { data } = await instance.get("/mini-project/api/transactions/my");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register, login, getMyProfile, logout, mytransactions };
