import http from "./httpService";

const paymentEndpoint = "/payment";

export function makeCharge(obj) {
  return http.post(paymentEndpoint, obj);
}
