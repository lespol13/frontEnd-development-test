import { handleApiFetch } from "./apiFetch";

const method = "GET";

export const getService = (url) =>
  handleApiFetch(url, {
    method,
  });
