/**
 * The portion of the encryption context which is kept private.
 */

export type PrivateEncryptionContext = {
  /**
   * The first secret prime number.
   */
  p: number;

  /**
   * The second secret prime number, not equal to p.
   */
  q: number;

  /**
   * The decryption number which is the multiplicative inverse of e, mod the
   * product of (p - 1) * (q - 1).
   */
  d: number;
};
