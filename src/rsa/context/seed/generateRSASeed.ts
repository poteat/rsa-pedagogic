import * as arith from "bigint-crypto-utils";

import { randomPrimeNotEqualTo } from "../../../utility/primes/randomPrimeNotEqualTo";
import { findRandomCoprime } from "../../../utility/random/coprimality/findRandomCoprime";
import { EncryptionContextSeed } from "./types/EncryptionContextSeed";

/**
 * Generate the minimal private data needed to uniquely specify an encryption
 * context.
 */
export function generateRSASeed(): EncryptionContextSeed {
  const p = BigInt(arith.primeSync(64));
  const q = BigInt(randomPrimeNotEqualTo(64, p));
  const e = findRandomCoprime((p - BigInt(1)) * (q - BigInt(1)));

  return { p, q, e };
}
