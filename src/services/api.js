import axios from "axios";

const API = axios.create({
  baseURL: "https://login-backend-l90h.onrender.com/api",
});

export default API;
