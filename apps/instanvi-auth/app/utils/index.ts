import { Access } from '@instanvi/client';
import CryptoStorageHelper from '../helpers/cryptoStorageHelper';
import { INSTANVI_STORAGE_ACCESS } from '../constants';

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
