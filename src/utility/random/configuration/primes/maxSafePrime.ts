/**
 * The maximum safe prime, such that the prime number could be multiplied with
 * any other prime number below its magnitude, generating a safe integer.
 */
export const maxSafePrime = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
