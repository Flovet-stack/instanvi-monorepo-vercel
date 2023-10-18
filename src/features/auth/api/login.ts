import { AuthControllerLogin200Response as ResponseLogin } from '@instanvi/client/dist';
import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';
import { queryClient } from '@/libs/react-query';

import { LoginData } from '../types';
import { AuthDto } from '@instanvi/client/api';

export const login = (data: AuthDto): Promise<unknown> => {
  return AuthAPI.login(data);
};

type UseLoginOptions = {
  onSuccess?: (user: ResponseLogin) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['auth-user'], user);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
