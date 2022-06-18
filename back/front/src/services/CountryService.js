import {axiosInstance} from "../config"
const { REACT_APP_BASE_URL } = process.env;

export class CountryService {
  static getAllCountries(page, limit) {
    return axiosInstance.get("/countries", {
      params: { page, limit }
    });
  }

  static searchByCountry(name) {
    return axiosInstance.get(`${REACT_APP_BASE_URL}name/`, { params: { name } });
  }

  static filterByCode(codes) {
    return axiosInstance.get(`${REACT_APP_BASE_URL}alpha?codes=/`, {
      params: { codes }
    });
  }
}
