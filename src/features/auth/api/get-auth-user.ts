import { User } from '@instanvi/client/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { AuthAPI } from '@/libs/instanvi-service';

export const getAuthUser = (): Promise<AxiosResponse> => {
  return AuthAPI.me() as any;
};

export const useUser = (): {
  data: User;
  isLoading: boolean;
} => {
  const { data, isLoading } = useQuery({
    queryKey: ['auth-user'],
    queryFn: () =>
      getAuthUser().then((res: AxiosResponse) => {
        return res.data.data;
      }),
  });

  return { data, isLoading };
};
