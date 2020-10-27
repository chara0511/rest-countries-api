import axios from "axios";

const API_URL = "https://restcountries.eu/rest/v2";

const axiosConfig = axios.create({
  baseURL: API_URL,
});

export default axiosConfig;
