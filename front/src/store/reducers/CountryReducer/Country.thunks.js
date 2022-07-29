import { createAsyncThunk } from "@reduxjs/toolkit";

import { CountryService } from "services/CountryService";

export const getCountriesByPageAndLimit = createAsyncThunk(
  "country/getCountriesByPageAndLimit",
  async ({ currentPage, limit, region, search }, { rejectWithValue }) => {
    try {
      if (region !== null) {
        const response = await CountryService.getCountriesByPageAndLimit(
          currentPage,
          limit,
          region.value,
          search
        );

        if (response.response && response.response.status !== 200) {
          throw response;
        }

        return response.data;
      } else {
        const response = await CountryService.getCountriesByPageAndLimit(
          currentPage,
          limit,
          null,
          search
        );

        if (response.response && response.response.status !== 200) {
          throw response;
        }

        return response.data;
      }
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);
