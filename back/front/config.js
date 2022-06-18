import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://countries-flags-app.herokuapp.com/back/"
})