import isCoprime from "is-coprime";
import { isSafeInteger } from "lodash";

import { maxRandomSamplings } from "../configuration/maxRandomSamplings";
import { maxSafePrime } from "../configuration/primes/maxSafePrime";
import { chance } from "../general/chance";

/**
 * Find a random safe integer that is coprime with respect to x. The probability
 * that any given number is coprime with another is around 60%, so the easiest
 * method is to generate successive random numbers until a coprime is found.
 *
 * @param x Number that the generated number must be coprime to.
 */
export function findRandomCoprime(x: number) {
  if (!isSafeInteger(x)) {
    throw new Error(
      `Coprime parameter must be a safe integer, received: ${x}.`
    );
  }

  for (let attempt = 0; attempt < maxRandomSamplings; attempt++) {
    const randomNumber = chance.integer({ min: 1, max: maxSafePrime });

    if (isCoprime(randomNumber, x)) {
      return randomNumber;
    }
  }

  throw new Error(
    `Could not find coprime in configured max sample attempts: ${maxRandomSamplings}.`
  );
}
