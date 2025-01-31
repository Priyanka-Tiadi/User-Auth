import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5003/api", // Backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically Attach JWT Token to Requests (if available)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;