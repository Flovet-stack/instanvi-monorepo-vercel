import { AuthDto } from '@instanvi/client';
import { AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { AuthAPI } from '../config/api.config';

export const loginUser = (data: AuthDto): Promise<AxiosResponse> => {
  try {
    return AuthAPI.login(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getLoggedUser = (accessToken: string): Promise<AxiosResponse> => {
  const config: RawAxiosRequestConfig = {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  };
  try {
    return AuthAPI.me(config);
  } catch (error) {
    return Promise.reject(error);
  }
};
