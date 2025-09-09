// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let one = array1.join('')
  one = Number(one)
  let two = array2.join('')
  two = Number(two)
  let sum = one + two
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let newValue = String(value).split('').reverse().join('')

  if (value !== Number(newValue)){
    return false;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message = '';

  switch(input){
    case '':
    case null:
    case undefined:
      message = 'Required field';
      break;
    case String(input):
      if (!Number(input) || Number(input) === 0){
        message = 'Must be a number besides 0'
      }
      break;
  }
  return message;
}
