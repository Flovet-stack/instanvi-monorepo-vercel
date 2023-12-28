import { AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { AuthAPI } from '../config/api.config';

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
