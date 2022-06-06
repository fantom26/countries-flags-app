import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AppReducer from "./reducers/AppReducer/App.reducer";
import CountryReducer from "./reducers/CountryReducer/Country.reducer";

const rootReducer = combineReducers({
  country: CountryReducer,
  app: AppReducer
});

export const store = () =>
  configureStore({
    reducer: rootReducer
  });
