/*
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 */

import { EMOTIONS, QUOTES } from "./constants.js";
import { shuffleArray } from "./helpers.js";

/* 
 * function eventListener when loaded
 * purpose: 
 * @param quotes - the quotes to be shown categorized by emotion
 * @param {array} emotions - the 5 emotions
 * @param buttonContainer - documentID of div where we will be adding buttons
 * @param randomQuoteIndex - index of the quote (randomized) of the category
 * @param randomQuote - the quote to be displayed
 * @param button - each button that will be added
 * 
 * @return emotions2 - name of the emotion that the person chose
 */
document.addEventListener("DOMContentLoaded", function () {
	// Randomly shuffle the array
	let emotions = shuffleArray(EMOTIONS);

  // Create buttons and append them to the container
  const buttonContainer = document.getElementById("buttonContainer");
	emotions.forEach(emotion => {
		//choose random quote from each category
		const randomQuote = randomArrayItem[QUOTES[emotion]];

		//create button
		const button = document.createElement("button");
		button.classList.add("button");
		button.textContent = randomQuote;
		// Write emotion (and timestamp) to local storage on click
		button.addEventListener("click", function () {
			localStorage.setItem("emotion2", JSON.stringify({
				emotion: emotion,
				timestamp: Date.now() / 1000.
			}));
		});
		//add it to the page
		buttonContainer.appendChild(button);
	});
});

/* 
 * function: eventListener for back
 * purpose: navigate back to emotions1.html
 */
document.getElementById("back").addEventListener("click", function () {
	document.location.href = "emotions1.html";
});
/* 
 * function: eventListener for next
 * purpose: navigate forward to readings.html
 */
document.getElementById("next").addEventListener("click", function () {
	document.location.href = "reading.html";
});

