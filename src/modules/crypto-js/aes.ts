import CryptoJS from 'crypto-js';

type IOptions = {
  secretKey?: string | CryptoJS.lib.WordArray;
  iv?: string | CryptoJS.lib.WordArray;
};

class Aes {
  // 十六位十六进制数密钥
  SECRET_KEY = CryptoJS.enc.Utf8.parse('4231324112ABCDEF');
  // 十六位十六进制数密钥偏移量
  SECRET_IV = CryptoJS.enc.Utf8.parse('ABCDEF4231324112');

  constructor(options: IOptions = {}) {
    if (typeof options?.secretKey === 'string' && options?.secretKey.length > 0) {
      this.SECRET_KEY = CryptoJS.enc.Utf8.parse(options?.secretKey);
    }
    if (typeof options?.iv === 'string' && options?.iv.length > 0) {
      this.SECRET_IV = CryptoJS.enc.Utf8.parse(options.iv);
    }
  }

  /** 
   * 解密方法 
   * @params ciphertext
   * @return string
   * */
  decrypt(cipherText: string) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(cipherText);
    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(str, this.SECRET_KEY, {
      iv: this.SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
  /** 加密方法 */
  encrypt(word: string) {
    const str = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(str, this.SECRET_KEY, {
      iv: this.SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString().toUpperCase();
  }
}

/** aes 加密解密, secretKey: 十六位十六进制数秘钥, iv: 十六位十六进制数偏移量  */
export function createAes(secretKey?: IOptions['secretKey'], iv?: IOptions['iv']) {
  return new Aes({ secretKey, iv });
}
