import { decodeStringAsNumber } from "../decode/decodeStringAsNumber";
import { encodeNumberAsString } from "./encodeNumberAsString";

it("can encode numbers to string", () => {
  const num = 7777;

  const s = encodeNumberAsString(num);

  expect(decodeStringAsNumber(s)).toStrictEqual(num);
});
