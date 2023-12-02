import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';
import { queryClient } from '@/libs/react-query';

import { AuthDto, SuccessLoginDto } from '@instanvi/client/api';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

export const login = (data: AuthDto): Promise<AxiosResponse> => {
  return AuthAPI.login(data) as any;
};

type UseLoginOptions = {
  onSuccess?: (data: SuccessLoginDto) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Login Successfully');


export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data: AxiosResponse) => {
      successResponse();
      queryClient.setQueryData(['auth-user'], data.data.data.user);
      // localStorage.setItem("user", JSON.stringify(data.data.data.user))
      queryClient.setQueryData(['auth-access'], data.data.data.access);
      onSuccess?.(data.data.data);
    },
    onError: (axiosError: AxiosError) => {
      errorResponse()
      // @ts-ignore~
      console.log(axiosError);
    },
  });

  return { submit, isLoading };
};
