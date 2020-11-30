import * as arith from "bigint-mod-arith";
import { isSafeInteger } from "lodash";

import { LinearCongruenceParameters } from "../types/LinearCongruenceParameters";

/**
 * Given a linear congruence:
 *
 * `multiplicative * x === offset (mod modulus)`
 *
 * Find an integer x that obeys the above congruence.
 *
 * @param problem The linear congruence to solve.
 */
export function solveLinearCongruence(
  problem: LinearCongruenceParameters
): bigint {
  const dividend = arith.gcd(problem.multiplicative, problem.modulus);
  const scalar = BigInt(problem.offset) / dividend;

  if (!isSafeInteger(scalar)) {
    throw new Error("Cannot find linear congruence.");
  }

  return (
    (arith.eGcd(problem.multiplicative, problem.modulus).x * scalar) %
    BigInt(problem.modulus)
  );
}
