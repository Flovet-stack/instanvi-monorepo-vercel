import {
  MutationFunction,
  MutationOptions,
  useMutation,
} from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';

import { ForgotPasswordEmailDto } from '@instanvi/client/api';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

const EmailPassword: MutationFunction<AxiosResponse, ForgotPasswordEmailDto> = (
  data: ForgotPasswordEmailDto
): Promise<AxiosResponse> => {
  return AuthAPI.forgotPasswordByEmail(data);
};

type UseForgottenPasswordProps = {
  onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Email send successfully');

export const useForgottenPassword = ({
  onSuccess,
}: UseForgottenPasswordProps = {}) => {
  const options: MutationOptions<
    AxiosResponse,
    AxiosError,
    ForgotPasswordEmailDto
  > = {
    mutationFn: EmailPassword,
    onSuccess: (data) => {
      successResponse();
      console.log(data);
      onSuccess?.(data.data.data);
    },
    onError: (axiosError) => {
      errorResponse();
      console.log(axiosError);
    },
  };

  const { mutate: submit, isLoading } = useMutation(options);

  return { submit, isLoading };
};
