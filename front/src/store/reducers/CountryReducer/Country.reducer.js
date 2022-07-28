import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { getCountriesByPageAndLimit } from "./Country.thunks";

const initialState = {
  countries: {
    data: [],
    total: 1,
    limit: 16,
    currentPage: 1,
    regions: [],
    isLoading: false,
    isFetchError: null
  },
  search: "",
  region: null
};

const CountryReducer = createSlice({
  name: "country",
  initialState,
  reducers: {
    clearCountries(state) {
      state.countries.data = [];
    },
    defaultCurrentPage(state) {
      state.countries.currentPage = 1;
    },
    searchHandler(state, action) {
      state.search = action.payload;
    },
    regionToggler(state, action) {
      state.region = action.payload;
    }
  },
  extraReducers: {
    [getCountriesByPageAndLimit.pending]: (state) => {
      state.countries.isLoading = true;
    },
    [getCountriesByPageAndLimit.rejected]: (state, action) => {
      state.countries.isFetchError = action.payload || true;
      state.countries.isLoading = false;
    },
    [getCountriesByPageAndLimit.fulfilled]: (state, action) => {
      state.countries.data = [
        ...state.countries.data,
        ...action.payload.countries
      ];
      state.countries.regions = [...action.payload.regions];
      state.countries.currentPage += 1;
      if (state.countries.total === 1) {
        state.countries.total = action.payload.total;
      }
      state.countries.isLoading = false;
    }
  }
});

export const CountryReducerActions = {
  ...CountryReducer.actions,
  getCountriesByPageAndLimit
};

export default CountryReducer.reducer;
