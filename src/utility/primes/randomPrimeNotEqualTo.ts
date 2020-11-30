import * as arith from "bigint-crypto-utils";

import { maxRandomSamplings } from "../random/configuration/maxRandomSamplings";

/**
 * Sample a random prime, ensuring that it is not equal to the given number.
 *
 * @param notEqual Number to exclude from resultant random prime.
 */
export function randomPrimeNotEqualTo(max: number, notEqual: bigint) {
  for (let attempt = 0; attempt < maxRandomSamplings; attempt++) {
    const prime = arith.primeSync(max);

    if (BigInt(prime) !== notEqual) {
      return prime;
    }
  }

  throw new Error(
    `Could not find unique prime in ${maxRandomSamplings} samples.`
  );
}
