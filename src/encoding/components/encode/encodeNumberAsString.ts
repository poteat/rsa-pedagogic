import { chain, split, toLower } from "lodash";

/**
 * Decode a string to a lengthened decimal integer.
 *
 * @param s String to decode to a number.
 */
export function encodeNumberAsString(n: number) {
  const beginRange = "a".charCodeAt(0);

  const numString = ((s) => (s.length % 2 === 0 ? s : `0${s}`))(`${n}`);

  const numArray = chain(numString)
    .split("")
    .chunk(2)
    .map((x) => x.join(""))
    .map(Number)
    .value();

  const charArray = numArray.map((x) =>
    String.fromCharCode(x + beginRange - 1)
  );

  return charArray.join("");
}
