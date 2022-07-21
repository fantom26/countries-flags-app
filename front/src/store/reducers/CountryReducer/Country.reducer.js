import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { getCountriesByPageAndLimit } from "./Country.thunks";

const initialState = {
  countries: {
    data: [],
    total: 1,
    limit: 100,
    currentPage: 1,
    isLoading: false,
    isFetchError: null
  }
};

const CountryReducer = createSlice({
  name: "country",
  initialState,
  reducers: {},
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
        ...action.payload.results
      ];
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
