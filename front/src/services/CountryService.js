import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

export class CountryService {
  static getAllCountries(page, limit) {
    return axios.get("http://localhost:5000/countries", {
      params: { page, limit }
    });
  }

  static searchByCountry(name) {
    return axios.get(`${REACT_APP_BASE_URL}name/`, { params: { name } });
  }

  static filterByCode(codes) {
    return axios.get(`${REACT_APP_BASE_URL}alpha?codes=/`, {
      params: { codes }
    });
  }
}
