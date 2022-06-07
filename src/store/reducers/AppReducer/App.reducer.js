import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: ""
};

const AppReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      if (action.payload === "light") {
        state.theme = "dark";
        localStorage.setItem("colorOfTheme", state.theme);
      } else {
        state.theme = "light";
        localStorage.setItem("colorOfTheme", state.theme);
      }
    },
    setTheme(state) {
      if (!localStorage.getItem("colorOfTheme")) {
        localStorage.setItem("colorOfTheme", "light");
        state.theme = "light";
      } else {
        state.theme = localStorage.getItem("colorOfTheme");
      }
    }
  }
});

export const AppReducerActions = {
  ...AppReducer.actions
};

export default AppReducer.reducer;
