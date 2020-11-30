import { randomPrime } from "random-prime";

import { maxRandomSamplings } from "../random/configuration/maxRandomSamplings";

/**
 * Sample a random prime, ensuring that it is not equal to the given number.
 *
 * @param notEqual Number to exclude from resultant random prime.
 */
export function randomPrimeNotEqualTo(max: number, notEqual: number) {
  for (let attempt = 0; attempt < maxRandomSamplings; attempt++) {
    const prime = randomPrime(max);

    if (prime !== notEqual) {
      return prime;
    }
  }

  throw new Error(
    `Could not find unique prime in ${maxRandomSamplings} samples.`
  );
}
