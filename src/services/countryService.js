import http from "./httpService";

const countryEndpoint = "/languages";

export function getCountry(id) {
  return http.get(countryEndpoint + "/country/" + id);
}

export function getLanguage(id) {
  return http.get(countryEndpoint + "/language/" + id);
}
export function getLanguageByCountry(country) {
  return http.get(countryEndpoint + "/languagebycountry/" + country);
}

export function getCountries() {
  return http.get(countryEndpoint + "/country");
}

export function getLanguages() {
  return http.get(countryEndpoint + "/language");
}

export function postCountry(payload) {
  if (payload._id) {
    const body = { ...payload };
    delete body._id;
    return http.put(countryEndpoint + "/country/" + payload._id, body);
  }
  return http.post(countryEndpoint + "/country", payload);
}

export function postLanguage(payload) {
  if (payload._id) {
    const body = { ...payload };
    delete body._id;
    return http.put(countryEndpoint + "/language/" + payload._id, body);
  }
  return http.post(countryEndpoint + "/language", payload);
}

export function deleteCountry(id) {
  return http.delete(countryEndpoint + "/country/" + id);
}

export function deleteLanguage(id) {
  return http.delete(countryEndpoint + "/language/" + id);
}
