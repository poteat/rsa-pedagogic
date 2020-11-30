/**
 * The portion of the encryption context which is publically known.
 */

export type PublicEncryptionContext = {
  /**
   * The public product of the secret prime numbers p and q.
   */
  n: bigint | number;

  /**
   * The encryption exponent which is coprime to the secret product:
   *   (p - 1) * (q - 1)
   */
  e: bigint | number;
};
