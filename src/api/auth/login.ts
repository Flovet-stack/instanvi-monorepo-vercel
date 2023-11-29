import { AuthDto, SuccessLoginDto } from '@instanvi/client/api';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { AuthAPI } from '@/libs/instanvi-service';

const login = (data: AuthDto): Promise<AxiosResponse> => {
  return AuthAPI.login(data);
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occurred !!!');
const successResponse = () => toast.success('Login Successfully');

export const useLogin = () => {
  const { mutate: submit } = useMutation(login, {
    onSuccess: (data: AxiosResponse): SuccessLoginDto => {
      const responseData: SuccessLoginDto = data.data.data;
      successResponse();
      return responseData;
    },
    onError: (axiosError: AxiosError): AxiosError => {
      errorResponse();
      console.log(axiosError);
      return axiosError;
    },
  });

  return { submit };
};
