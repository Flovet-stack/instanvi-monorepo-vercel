import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { AuthAPI } from '@/libs/instanvi-service';

const getAuthUser = async (): Promise<AxiosResponse> => {
  // Get the current date as a timestamp
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  // Define the request options with the timestamp as a query parameter
  const requestOptions: AxiosRequestConfig = {
    params: {
      cacheBuster: timestamp,
    },
  };

  return AuthAPI.me(requestOptions);
};

export default getAuthUser;
