import { SuccessLoginDto } from '@instanvi/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginFormData } from '@/@types';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from '@/configs/constants';
import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';
import { AuthAPI } from '@/libs/instanvi-service';

interface LoginThunkResponse {
  user: SuccessLoginDto['user'];
  access: SuccessLoginDto['access'];
}

// const errorResponse = () => toast.error('An error has occurred !!!');
// const successResponse = () => toast.success('Login Successfully');

export const loginThunk = createAsyncThunk<LoginThunkResponse, ILoginFormData>(
  'login',
  async (data: ILoginFormData) => {
    try {
      const response = await AuthAPI.login(data);
      const responseData: SuccessLoginDto = response.data.data;
      const { user, access } = responseData;

      // save user and access to local storage
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_USER, user);
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_ACCESS, access);

      return { user, access };
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAuthUserThunk = createAsyncThunk('getAuthUser', async () => {
  try {
    const response = await AuthAPI.me();
    const responseData = response.data.data;
    console.log('🚀 ~ file: authActions.ts:45 ~ responseData:', responseData);
    return 'test';
  } catch (error) {
    return Promise.reject(error);
  }
});
