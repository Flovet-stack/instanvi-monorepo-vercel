import { Access } from '@instanvi/client';

import { INSTANVI_STORAGE_ACCESS } from '@/configs/constants';
import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';

export class Utils {
  static getToken(): string {
    const access: Access = CryptoStorageHelper.decryptAndRetrieve(
      INSTANVI_STORAGE_ACCESS
    ) as Access;
    console.log(
      '🚀 ~ file: index.ts:13 ~ Utils ~ getToken ~ access:',
      access ? access.accessToken : ''
    );
    // return queryClient.getQueryData<Access>(['auth-access']);
    return access ? access.accessToken : '';
  }
}
