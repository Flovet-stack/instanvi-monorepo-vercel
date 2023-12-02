import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';
import { queryClient } from '@/libs/react-query';

const logout = () => {
  return AuthAPI.logout();
};

type UseLogoutOptions = {
  onSuccess?: () => void;
};

export const useLogout = ({ onSuccess }: UseLogoutOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear();
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};
