import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_X_RAPID_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_X_RAPID_APIHOST_URL,
  },
});

export default api;
