import http from "./httpService";

const paymentEndpoint = "/payment";

export function makeCharge(chargePayload) {
  return http.post(paymentEndpoint, chargePayload);
}
