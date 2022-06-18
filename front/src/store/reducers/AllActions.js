import { AppReducerActions } from "./AppReducer/App.reducer";
import { CountryReducerActions } from "./CountryReducer/Country.reducer";

export const AllActions = {
  ...CountryReducerActions,
  ...AppReducerActions
};
