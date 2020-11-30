/**
 * Return a new array such that the first instance equal to the given element is
 * removed.
 *
 * If no member element is equal, return the original array.
 *
 * @param array Array to attempt a single element removal of.
 * @param element An element to use in determining removal.
 */
export function removeElementInstance<T>(array: T[], element: T) {
  const elementExistsInArray = array.includes(element);

  if (elementExistsInArray) {
    const firstIndex = array.findIndex((x) => x === element);
    return array.filter((_x, i) => i !== firstIndex);
  } else {
    return array;
  }
}
