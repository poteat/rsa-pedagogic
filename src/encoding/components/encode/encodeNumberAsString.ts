import anyBase from "any-base";

import { permissibleEncodingCharacters } from "../../literals/permissibleEncodingCharacters";

/**
 * Encode an integer number as a shortened string of visible characters.
 *
 * @param x Number to encode.
 */
export function encodeNumberAsString(x: number) {
  const shorten = anyBase(anyBase.DEC, permissibleEncodingCharacters);
  return shorten(`${x}`);
}
