// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgeCount = 0;
  let limesUsed = 0;
  while (limes.length != 0 && wedgeCount <= wedgesNeeded) {
    let name = limes.shift();

    switch(name){
      case 'small':
        wedgeCount += 6;
        limesUsed++;
        break;
      case 'medium':
        wedgeCount += 8;
        limesUsed++;
        break;
      case 'large':
        wedgeCount += 10;
        limesUsed++;
        break;
    }
    if (wedgesNeeded == 0){
      return 0;
    }
  }
  return limesUsed;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(orders.length > 0 && timeLeft > 0){
    let drink = orders.shift();
    let time = timeToMixJuice(drink);
    if(time > 0){
      timeLeft -= time;
    }
  }
  return orders;
}
