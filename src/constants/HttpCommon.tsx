import axios from "axios";
import { store } from "./Store";
import { SimpleToaster } from "../components/common/Toaster";
import { BASE_URL } from "../constants/Constants";
import { Intent } from "@blueprintjs/core";

// Axios Client
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for the HTTP requests
axiosInstance.interceptors.response.use(
  // what happens on success
  function (response) {
    return response;
  },
  // what happens on error
  function (error) {
    // Unauthorized -- Session invalidation -- LOG OUT
    if (error.response.status === 401 || error.response.status === 403) {
      SimpleToaster.show({
        message: "Unauthorized. Your session has been invalidated",
        intent: Intent.DANGER,
      });
      store.dispatch({ type: "LOG_OUT" });
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
);

// Axios Client for authentication
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
