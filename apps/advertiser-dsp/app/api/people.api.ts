import { AxiosResponse } from 'axios';
import { PeopleAPI } from '../config/api.config';

export const getAllPeople = (projectUUID: string): Promise<AxiosResponse> => {
  //   const config: RawAxiosRequestConfig = {
  //     headers: {
  //       Authorization: 'Bearer ' + accessToken,
  //     },
  //   };

  try {
    return PeopleAPI.getAllPeople(projectUUID);
  } catch (error) {
    return Promise.reject(error);
  }
};
