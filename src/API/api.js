import axios from "axios";
import Cookie from "universal-cookie";
import { endPoint } from "./endPoints";

const cookie = new Cookie();

let token = cookie.get("storedAccessToken");

// setting the header
// if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// sending the cookie token along with the requests
const axiosInstance = axios.create({
  // withCredentials: true,
  baseURL: endPoint.BASE_URL,
});

// trying to use the token received from the server in the next requests
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

// exporting the created axios Instance
export { axiosInstance };
