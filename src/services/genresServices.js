import http from "./httpService";

const genresEndpoint = "/genre";

export function getGenres() {
  return http.get(genresEndpoint);
}
