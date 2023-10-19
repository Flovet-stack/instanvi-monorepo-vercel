import { queryClient } from '@/libs/react-query';
import { Access } from '@instanvi/client';

export class Utils {
  static getToken(): Access | undefined {
    return queryClient.getQueryData<Access>(['auth-access'])
  }
}
