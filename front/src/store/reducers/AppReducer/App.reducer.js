import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkThemeEnabled: false
};

const AppReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    }
  }
});

export const AppReducerActions = {
  ...AppReducer.actions
};

export default AppReducer.reducer;
