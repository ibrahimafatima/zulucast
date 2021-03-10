import axios from "axios";
//import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }
  return Promise.reject(error);
});

const endpoints = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default endpoints;
