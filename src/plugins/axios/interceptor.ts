import axios from "axios";

const mainApi = process.env.NEXT_PUBLIC_DUMMY_API;
const appId = process.env.NEXT_PUBLIC_DUMMY_API_APP_ID;

const http = axios.create({
  baseURL: mainApi ? `${mainApi}` : "/api",
});

http.interceptors.request.use(
  (config) => {
    config.headers["app-id"] = appId;
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
