import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProjectThunk = createAsyncThunk(
  'getProject',
  async (_, { dispatch }) => {
    try {
      // const res = await CountryService.getProject();
      // dispatch(setCountryListState(res.data.data));
      // return res;
    } catch (error) {
      // dispatch(errorThunk(error));
      return Promise.reject(error);
    }
  }
);
