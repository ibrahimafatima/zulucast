import http from "./httpService";

const usersEndpoint = "/auth";

export function getUsers() {
  return http.get(usersEndpoint);
}
