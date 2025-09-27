import axios from "axios";

// For Vite or modern frontend build tools, use import.meta.env
const url = import.meta.env.VITE_NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3001/api";
// console.log("url", url)
const axiosClient = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosClient;