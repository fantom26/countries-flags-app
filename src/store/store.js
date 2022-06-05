import { combineReducers, configureStore } from "@reduxjs/toolkit";

import CountryReducer from "./reducers/CountryReducer/Country.reducer";

const rootReducer = combineReducers({
  country: CountryReducer
});

export const store = () =>
  configureStore({
    reducer: rootReducer
  });
