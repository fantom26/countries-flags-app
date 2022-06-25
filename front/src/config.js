import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sheltered-dusk-00106.herokuapp.com/"
});
