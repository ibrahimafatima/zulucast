import http from "./httpService";

const moviesEndpoint = "/movies";
const orderEndpoint = "/orders";
const preOrderEndpoint = "/pre-orders";
const longevityEndpoint = "/longevity";

export function addMovie(moviePayload) {
  return http.post(moviesEndpoint, moviePayload);
}

export function addOrder(orderPayload) {
  return http.post(orderEndpoint, orderPayload);
}

export function addPreOrder(orderPayload) {
  return http.post(preOrderEndpoint, orderPayload);
}

export function updateExpiryDate(payload) {
  return http.post(orderEndpoint + "/update", payload);
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getOrders() {
  return http.get(orderEndpoint);
}

export function getPreOrders() {
  return http.get(preOrderEndpoint);
}

export function deletePreOrder() {
  return http.delete(preOrderEndpoint + "/delete");
}

export function getLongevity() {
  return http.get(longevityEndpoint);
}
