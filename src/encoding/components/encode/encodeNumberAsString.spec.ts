import { encodeNumberAsString } from "./encodeNumberAsString";

it("can encode numbers as strings", () => {
  const number = 30120;

  expect(encodeNumberAsString(number)).toStrictEqual("cat");
});
