import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export function createBearerToken(token: string) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export default api;
