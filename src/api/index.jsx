import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "1efc9f745fmsh71ff1ec50ab9738p1ab034jsnbef54d42b566",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
