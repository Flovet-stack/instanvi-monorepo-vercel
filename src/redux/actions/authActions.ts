import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk(
  'login',
  async (data: any, { dispatch }) => {
    try {
      // const res = await AuthService.login(data);
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
);
