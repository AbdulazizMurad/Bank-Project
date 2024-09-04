const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else return false;
};
const deleteToken = () => {
  localStorage.removeItem("token");
};
export { storeToken, checkToken, deleteToken };
