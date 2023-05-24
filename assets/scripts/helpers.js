/**
 * Returns a random shuffle of an array. Does not modify array in-place.
 * @param {Array} originalArray - array to shuffle
 */
export function shuffleArray(originalArray) {
	// Copy array
	let array = originalArray.slice(0);

	// Shuffle array
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	return array;
}

/**
 * Randomly generate a integer number between minimum and maximum (inclusive).
 * @param {number} minimum smallest value of range (inclusive)
 * @param {number} maximum largest value of range (inclusive)
 */
export function randomInt(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

/**
 * Randomly select an item from an array
 * @param {Array} array array to select from
 */
export function randomArrayItem(array) {
	return array[randomInt(0, array.length - 1)];
}