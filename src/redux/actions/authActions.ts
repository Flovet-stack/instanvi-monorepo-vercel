import { AuthDto, SuccessLoginDto } from '@instanvi/client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { ILoginFormData } from '@/@types';
import { INSTANVI_STORAGE_ACCESS, INSTANVI_STORAGE_USER } from '@/constants';
import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';
import { AuthAPI } from '@/libs/instanvi-service';

export const loginThunk = createAsyncThunk(
  'login',
  async (data: ILoginFormData) => {
    try {
      const login = (data: AuthDto): Promise<AxiosResponse> => {
        return AuthAPI.login(data);
      };
      const res = await login(data);
      const responseData: SuccessLoginDto = res.data.data;
      const { user, access } = responseData;
      // save user and access to local storage
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_USER, user);
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_ACCESS, access);
      return responseData;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
