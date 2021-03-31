import http from "../services/httpService";
import jwtDecode from "jwt-decode";

const authEndpoint = "/auth";

export function login(user) {
  return http.post(authEndpoint + "/login", user);
}

export function register(user) {
  return http.post(authEndpoint + "/register", user);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

const currentUser = {
  getCurrentUser,
};

export default currentUser;