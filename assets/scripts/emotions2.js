/**
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 *
 */

import { QUOTES, RAW_EMOTIONS, READING_TYPES } from './constants.js';
import { randomArrayItem, shuffleArray } from './helpers.js';
import { playButtonHoverSound } from './VolumeControl.js';

/**
 * function name: init
 * Runs on window initialization
 * shuffles array, create buttons by randomizing, user cannot click next until a button is selected
 */
function init () {
  const urlParams = new URLSearchParams(window.location.search);

  const next = document.getElementById('next');
  next.disabled = true;
  const readingType = urlParams.get('reading');
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html';
  }

  // Randomly shuffle the array
  const emotions = shuffleArray(RAW_EMOTIONS);

  // Create buttons and append them to the container
  const buttonContainer = document.getElementById('button-container');
  emotions.forEach(emotion => {
    // choose random quote from each category
    const randomQuote = randomArrayItem(QUOTES[emotion]);

    const allButtons = [];

    // create button
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = randomQuote;
    allButtons.push(button);
    // Write emotion (and timestamp) to local storage on click, user cannot click next until they choose a button
    button.addEventListener('click', function () {
      if (this.classList.contains('selected')) {
        next.disabled = true;
        this.classList.remove('selected');
        buttonContainer.setAttribute("selectedEmotion", emotion);
      } else {
        next.disabled = false;
        allButtons.forEach(button => {
          button.classList.remove('selected');
        });
        this.classList.add('selected');
        buttonContainer.setAttribute("selectedEmotion", "");
      }
    });

    // button hover sound
    button.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    // add it to the page
    buttonContainer.appendChild(button);
  });

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);

  /**
   * purpose: Event listener for back button click. Navigates back to emotions1.html
   * deltes emotion2 from local storage
   */
  document.getElementById('back').addEventListener('click', function () {
    window.localStorage.removeItem('emotion2');
    window.location.href = 'emotions1.html' + window.location.search;
  });

  /**
   * purpose: Event listener for next button click. Navigates to readings.html
   */
  next.addEventListener('click', function () {
    window.localStorage.setItem('emotion2', JSON.stringify({
      emotion: buttonContainer.getAttribute("selectedEmotion"),
      timestamp: Date.now() / 1000
    }));
    window.location.href = 'reading.html' + window.location.search;
  });

  // next button hover sound
  next.addEventListener('mouseenter', playButtonHoverSound);
};

window.addEventListener('DOMContentLoaded', init);
