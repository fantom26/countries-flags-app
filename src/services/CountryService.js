import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

export class CountryService {
  static getAllCountries() {
    return axios.get(`${REACT_APP_BASE_URL}all?fields=name,capital,flags,population,region`);
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
