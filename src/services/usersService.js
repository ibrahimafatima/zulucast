import http from "./httpService";

const usersEndpoint = "/auth";

export function getUsers() {
  return http.get(usersEndpoint);
}

export function getUser(email) {
  return http.get(usersEndpoint + "/user/" + email);
}

export function updateProfilePicture(pic) {
  return http.post(usersEndpoint + "/upload", pic);
}
