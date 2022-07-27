import axios from "axios";
import { axiosInstance } from "config";

const { REACT_APP_BASE_URL } = process.env;

export class CountryService {
  static getCountriesByPageAndLimit(page, limit, region, search) {
    return axiosInstance.get("/countries", {
      params: { page, limit, region, search }
    });
    // return axios.get("http://localhost:5000/countries", {
    //   params: { page, limit, region, search }
    // });
  }

  static searchByCountry(name) {
    return axios.get(`${REACT_APP_BASE_URL}name/${name}`);
  }

  static filterByCode(codes) {
    return axiosInstance.get(`${REACT_APP_BASE_URL}alpha?codes=/${codes}`);
  }
}
