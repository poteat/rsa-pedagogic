import anyBase from "any-base";

import { maxStringDecodingLength } from "../../configuration/maxStringDecodingLength";
import { permissibleEncodingCharacters } from "../../literals/permissibleEncodingCharacters";

/**
 * Decode a string to a lengthened decimal integer.
 *
 * @param s String to decode to a number.
 */
export function decodeStringAsNumber(s: string) {
  if (s.length > maxStringDecodingLength) {
    throw new Error(`String too large to decode as a single number.`);
  }

  const lengthen = anyBase(permissibleEncodingCharacters, anyBase.DEC);
  return Number(`${lengthen(s)}`);
}
