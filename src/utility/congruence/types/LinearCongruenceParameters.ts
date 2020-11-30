/**
 * Represents a linear congruence problem such that:
 *
 * `multiplicative * x === offset (mod modulus)`
 *
 * The underlying problem is to find x, which only exists if the gcd between the
 * multiplicative and the modulus, divided by the offset is an integer.
 *
 * There may exist multiple solutions to any given linear congruence problem.
 */
export type LinearCongruenceParameters = {
  multiplicative: number;
  offset: number;
  modulus: number;
};
