import { expect } from '@jest/globals';

/**
 * Jest extension to allow us to test whether number
 * is within range [low, high] (both inclusive).
 * @param {number} value
 * @param {number} low
 * @param {number} high
 */
function toBeWithinRangeInclusive (value, low, high) {
  if (typeof value !== 'number') {
    throw new Error('Value must be of type number!');
  } else if (typeof low !== 'number') {
    throw new Error('Low must be of type number!');
  } else if (typeof high !== 'number') {
    throw new Error('High must be of type number!');
  }

  const pass = value >= low && value <= high;
  if (pass) {
    return {
      // Note: This message is display if
      // -not- option is given in Jest
      message: () =>
        `expected ${this.utils.printReceived(
          value
        )} not to be within range ${this.utils.printExpected(
          `${low} - ${high}`
        )}`,
      pass: true
    };
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          value
        )} to be within range ${this.utils.printExpected(
          `${low} - ${high}`
        )}`,
      pass: false
    };
  }
}

/**
 * Counts elements in an array
 * @param {Array} array array to count items in
 * @returns {Object} object of counts
 */
function countItemsInsideArray (array) {
  const arrayCounts = {};

  for (const item of array) {
    if (arrayCounts[item]) {
      arrayCounts[item]++;
    } else {
      arrayCounts[item] = 1;
    }
  }

  return arrayCounts;
}

expect.extend({
  toBeWithinRangeInclusive
});

module.exports = {
  countItemsInsideArray
};
