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
export { register, login };

//   const register = async (userInfo) => {
//     try {
//       const { data } = await instance.post(
//         "/mini-project/api/auth/register",
//         userInfo
//       );
//       // storeToken(data.token); // <--- This
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
