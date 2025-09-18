// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...numbers} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
  let params = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];
  let wagonIds = [...params].filter(x => x != undefined);

  return wagonIds;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  let [wagonOne, wagonTwo, ...otherWagons] = ids;
  let firstTwo = [wagonOne, wagonTwo];
  return [...otherWagons, ...firstTwo];
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  let [first, ...restOfWagons] = ids;
  let corrected = [first, ...missingWagons, ...restOfWagons];

  return corrected;
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  let allInfo = {...information, ...additional};
  return allInfo;
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...otherThings } = information;
  let timeRemoved = [timeOfArrival, otherThings];

  return timeRemoved;
}
