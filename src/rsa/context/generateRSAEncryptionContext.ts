import { randomPrime } from "random-prime";

import { solveLinearCongruence } from "../../utility/congruence/solve/solveLinearCongruence";
import { randomPrimeNotEqualTo } from "../../utility/primes/randomPrimeNotEqualTo";
import { maxSafePrime } from "../../utility/random/configuration/primes/maxSafePrime";
import { findRandomCoprime } from "../../utility/random/coprimality/findRandomCoprime";
import { EncryptionContext } from "./types/EncryptionContext";

/**
 * Generate a new encryption context, i.e. the public and private numbers used
 * to encrypt and decrypt data in the RSA algorithm.
 */
export function generateRSAEncryptionContext(): EncryptionContext {
  const p = randomPrime(maxSafePrime);
  const q = randomPrimeNotEqualTo(maxSafePrime, p);
  const n = p * q;
  const e = findRandomCoprime((p - 1) * (q - 1));

  const d = solveLinearCongruence({
    multiplicative: e,
    offset: 1,
    modulus: (p - 1) * (q - 1),
  });

  if (!d) {
    throw new Error("Resultant linear congruence did not have solution.");
  }

  return { public: { n, e }, private: { p, q, d } };
}
