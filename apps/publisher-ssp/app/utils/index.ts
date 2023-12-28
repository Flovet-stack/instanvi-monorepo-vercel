import { Access } from '@instanvi/client';
import CryptoStorageHelper from '../helpers/cryptoStorageHelper';
import { INSTANVI_STORAGE_ACCESS } from '../constants';

export class Utils {
  static getToken(): string {
    const access: Access = CryptoStorageHelper.decryptAndRetrieve(
      INSTANVI_STORAGE_ACCESS
    ) as Access;
    // return queryClient.getQueryData<Access>(['auth-access']);
    return access ? access.accessToken : '';
  }
}
