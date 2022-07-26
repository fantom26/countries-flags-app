import axios from "axios";
import { axiosInstance } from "config";

const { REACT_APP_BASE_URL } = process.env;

export class CountryService {
  static getCountriesByPageAndLimit(page, limit) {
    return axiosInstance.get("/countries", {
      params: { page, limit }
    });
  }

  static searchByCountry(name) {
    return axios.get(`${REACT_APP_BASE_URL}name/${name}`);
  }

  static filterByCode(codes) {
    return axiosInstance.get(`${REACT_APP_BASE_URL}alpha?codes=/${codes}`);
  }
}
