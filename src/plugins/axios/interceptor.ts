import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOCK_POSTMAN_API
    ? `${process.env.NEXT_PUBLIC_MOCK_POSTMAN_API}`
    : "/api",
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

export default http;
