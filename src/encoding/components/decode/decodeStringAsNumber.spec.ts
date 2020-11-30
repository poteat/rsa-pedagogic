import { decodeStringAsNumber } from "./decodeStringAsNumber";

it("can decode string to number", () => {
  expect(decodeStringAsNumber("cat")).toBe(30120);
});
