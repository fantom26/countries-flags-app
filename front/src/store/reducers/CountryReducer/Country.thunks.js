import { createAsyncThunk } from "@reduxjs/toolkit";

import { CountryService } from "services/CountryService";

export const getCountriesByPageAndLimit = createAsyncThunk(
  "country/getCountriesByPageAndLimit",
  async ([currentPage, limit], { rejectWithValue }) => {
    try {
      const response = await CountryService.getCountriesByPageAndLimit(
        currentPage,
        limit
      );

      if (response.response && response.response.status !== 200) {
        throw response;
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);
