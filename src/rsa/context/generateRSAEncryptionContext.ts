import * as arith from "bigint-crypto-utils";

import { generateRSASeed } from "./seed/generateRSASeed";
import { EncryptionContextSeed } from "./seed/types/EncryptionContextSeed";
import { EncryptionContext } from "./types/EncryptionContext";

/**
 * Generate a new encryption context, i.e. the public and private numbers used
 * to encrypt and decrypt data in the RSA algorithm.
 */
export function generateRSAEncryptionContext(
  seed?: EncryptionContextSeed
): EncryptionContext {
  const { p, q, e } = seed ?? generateRSASeed();

  const n = BigInt(p) * BigInt(q);

  const d = arith.modInv(e, (BigInt(p) - BigInt(1)) * (BigInt(q) - BigInt(1)));

  if (!d) {
    throw new Error("Resultant linear congruence did not have solution.");
  }

  return { public: { n, e }, private: { p, q, d } };
}
