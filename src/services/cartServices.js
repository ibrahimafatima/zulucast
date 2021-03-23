import http from "./httpService";

const moviesEndpoint = "/logged-out-cart";

export function addToLoggedOutCart(moviePayload) {
  return http.post(moviesEndpoint, moviePayload);
}

export function getMovies(id) {
  return http.get(moviesEndpoint + "/" + id);
}
