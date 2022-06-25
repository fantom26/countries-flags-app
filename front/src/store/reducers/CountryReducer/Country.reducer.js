import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { getAllCountries } from "./Country.thunks";

const initialState = {
  countries: {
    data: [],
    total: 0,
    limit: 12,
    isDataLoaded: false,
    isLoading: false,
    isFetchError: null
  }
};

const CountryReducer = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCountries.pending]: (state) => {
      state.countries.isLoading = true;
    },
    [getAllCountries.rejected]: (state, action) => {
      state.countries.isDataLoaded = false;
      state.countries.isFetchError = action.payload || true;
      state.countries.isLoading = false;
    },
    [getAllCountries.fulfilled]: (state, action) => {
      state.countries.isDataLoaded = true;
      state.countries.data = [
        ...state.countries.data,
        ...action.payload.results
      ];
      state.countries.total = action.payload.total;
      state.countries.isLoading = false;
    }
  }
});

export const CountryReducerActions = {
  ...CountryReducer.actions,
  getAllCountries
};

export default CountryReducer.reducer;
