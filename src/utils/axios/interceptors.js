export function onRequest(config) {
  return config;
}
export function onRequestError(error) {
  return Promise.reject(error);
}
export function onResponse(response) {
  return response;
}
export function onResponseError(error) {
  return Promise.reject(error);
}
