export function isAuthorized(request) {
  return request.headers.get("authorization") === "Spice&Soul2025";
}
