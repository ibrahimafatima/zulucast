import http from "./httpService";

const moviesEndpoint = "/movies";

export function addMovie(moviePayload) {
  return http.post(moviesEndpoint, moviePayload);
}

export function getMovies() {
  return http.get(moviesEndpoint);
}
