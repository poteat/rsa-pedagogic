import { encodeNumberAsString } from "./encodeNumberAsString";

it("can encode numbers as strings", () => {
  const number = 30120;

  expect(encodeNumberAsString(number)).toStrictEqual("cat");
});

it("can decode strange case", () => {
  const number = 14152019010605;

  expect(encodeNumberAsString(number)).toStrictEqual("notsafe");
});
