/**
 * A seed of minimal private data from which to generate a full encryption
 * context.
 */
export type EncryptionContextSeed = {
  p: number | bigint;
  q: number | bigint;
  e: number | bigint;
};
