import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error?.response?.data?.errorMessage ||
      error?.response?.data?.message ||
      "Something went wrong!";
    toast.error(errorMessage);
    return Promise.reject(error);
  },
);

export default api;
