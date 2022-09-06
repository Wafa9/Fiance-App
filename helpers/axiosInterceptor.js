import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let headers = {
  "Access-Control-Allow-Origin": "*",
  //Authorization: getLocalToken(),
};

async function getLocalToken() {
  const token = await AsyncStorage.getItem("token");
  return `Bearer ${token}`;
}

// Add a setToken method to the instance to dynamically add the latest token to the header after login, and save the token in the local Storage
const setNewToken = (token) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
  AsyncStorage.setItem("token", token);
};

async function refreshToken() {
  // Instance is the axios instance created in current request.js
  const token = await AsyncStorage.getItem("refresh_token");

  const res = await axiosInstance.post("/auth/token/refresh/", {
    refresh: token,
  });
  return res.data.access;
}

const axiosInstance = axios.create({
  baseURL: "http://192.168.8.150:8000/",
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      //config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      return error;
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
