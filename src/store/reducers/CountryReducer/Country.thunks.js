import { createAsyncThunk } from "@reduxjs/toolkit";

import { CountryService } from "services/CountryService";

export const getAllCountries = createAsyncThunk(
  "country/getAllCountries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CountryService.getAllCountries();

      if (response.response && response.response.status !== 200) {
        throw response;
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);
