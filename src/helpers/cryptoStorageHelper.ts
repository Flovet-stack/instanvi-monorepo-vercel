import * as CryptoJS from 'crypto-js';

class CryptoStorageHelper {
  private static readonly secretKey = 'instanvi@123';

  static encryptAndSave(key: string, data: unknown): void {
    try {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        this.secretKey
      ).toString();
      localStorage.setItem(key, encryptedData);
    } catch (error) {
      console.error('Error encrypting and saving data:', error);
    }
  }

  static decryptAndRetrieve(key: string): unknown | null {
    try {
      const encryptedData = localStorage.getItem(key);
      if (!encryptedData) return null;

      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return decryptedData;
    } catch (error) {
      console.error('Error decrypting and retrieving data:', error);
      return null;
    }
  }
}

export default CryptoStorageHelper;
