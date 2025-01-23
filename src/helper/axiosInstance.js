import axios from "axios";

// https://website-content-management-system.onrender.com

const BASE_URL = "http://localhost:3000/api/v1";

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = false;

export default axiosInstance;