import http from "./httpService";

const moviesEndpoint = "/movies";
const orderEndpoint = "/orders";

export function addMovie(moviePayload) {
  return http.post(moviesEndpoint, moviePayload);
}

export function addOrder(orderPayload) {
  return http.post(orderEndpoint, orderPayload);
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getOrders() {
  return http.get(orderEndpoint);
}
