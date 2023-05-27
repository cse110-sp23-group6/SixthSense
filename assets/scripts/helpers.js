/**
 * Returns a random shuffle of an array using Fisher-Yates. 
 * Does not modify array in-place.
 * @param {Array} originalArray - array to shuffle
 * @returns {Array} shuffled array
 */
export function shuffleArray (originalArray) {
  // Copy array
  const array = originalArray.slice(0)

  // Shuffle array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

/**
 * Randomly generate a integer number between minimum and maximum (inclusive).
 * @param {number} minimum smallest value of range (inclusive)
 * @param {number} maximum largest value of range (inclusive)
 * @returns {number} integer value inside of array.
 */
export function randomInt (minimum, maximum) {
  return Math.floor(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
}

/**
 * Randomly select an item from an array
 * @param {Array} array array to select from
 * @returns item inside of array
 */
export function randomArrayItem (array) {
  return array[randomInt(0, array.length - 1)];
}
