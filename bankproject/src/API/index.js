import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com/",
});
instance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
export default instance;
