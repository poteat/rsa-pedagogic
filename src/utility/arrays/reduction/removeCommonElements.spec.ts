import { removeCommonElements } from "./removeCommonElements";

it("can remove common elements", () => {
  expect(removeCommonElements([3, 3, 5], [3, 5])).toStrictEqual([[3], []]);
});
