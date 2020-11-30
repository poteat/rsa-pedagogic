import { chain, cloneDeep, every, find, some } from "lodash";

import { removeElementInstance } from "./component/removeElementInstance";

/**
 * Given a set of arrays, sequentially remove elements if that element instance
 * is in every array:
 *
 * e.g. ([2, 2, 3], [2, 5]) => ([2, 3], [5])
 *
 * @param arrays Set of arrays to reduce on.
 */
export function removeCommonElements(...arrays: number[][]) {
  let removed = false;
  let cloned = cloneDeep(arrays);

  const existsInAllArrays = (x: number) =>
    every(cloned, (array) => array.includes(x));

  const uniqueElements = chain(cloned).flatten().uniq().value();

  do {
    const commonalityExists = some(uniqueElements, existsInAllArrays);

    if (commonalityExists) {
      const commonElement = find(uniqueElements, existsInAllArrays)!;

      cloned = cloned.map((array) =>
        removeElementInstance(array, commonElement)
      );

      removed = true;
    } else {
      removed = false;
    }
  } while (removed);

  return cloned;
}
