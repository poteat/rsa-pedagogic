import { split, toLower } from "lodash";

/**
 * Decode a string to a lengthened decimal integer.
 *
 * @param s String to decode to a number.
 */
export function decodeStringAsNumber(s: string) {
  const beginRange = "a".charCodeAt(0);

  const trimmed = toLower(s).replace(/[^a-z]/g, "");

  const mapped = split(trimmed, "")
    .map((x) => x.charCodeAt(0) - beginRange + 1)
    .map((x) => (x < 10 ? `0${x}` : x));

  return Number(mapped.join(""));
}
