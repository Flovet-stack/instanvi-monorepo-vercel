import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCountriesThunk = createAsyncThunk(
  'getAllCountries',
  async (_, { dispatch }) => {
    try {
      // const res = await CountryService.getAllCountries();
      // dispatch(setCountryListState(res.data.data));
      // return res;
    } catch (error) {
      // dispatch(errorThunk(error));
      return Promise.reject(error);
    }
  }
);
