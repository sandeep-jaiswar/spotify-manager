import axios from "axios";

const API = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
})

export default API;