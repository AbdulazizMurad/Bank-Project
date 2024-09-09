import instance from ".";
import { storeToken } from "./storage";

// Register user function
const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    storeToken(data.token); // Store token after registration
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Login user function
const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    storeToken(data.token); // Store token after login
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get the current user's profile
const getMyProfile = async () => {
  try {
    const { data } = await instance.get("/mini-project/api/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Logout user by removing token from local storage
const logout = () => {
  localStorage.removeItem("token");
};

// Fetch the user's transactions with filters for date, amount, and type
const mytransactions = async ({ searchDate, searchAmount, filterType }) => {
  try {
    const params = {};
    if (searchDate) params.date = searchDate; // Filter by date
    if (searchAmount) params.amount = searchAmount; // Filter by amount
    if (filterType !== "all") params.type = filterType; // Filter by transaction type

    const { data } = await instance.get("/mini-project/api/transactions/my", {
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register, login, getMyProfile, logout, mytransactions };
