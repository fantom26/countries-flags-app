import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkThemeEnabled: false,
  view: "grid"
};

const AppReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    },
    toggleView(state, action) {
      if (
        action.payload.target.closest("button").getAttribute("tag") === "list"
      ) {
        state.view = "list";
      } else {
        state.view = "grid";
      }
    }
  }
});

export const AppReducerActions = {
  ...AppReducer.actions
};

export default AppReducer.reducer;
