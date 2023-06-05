/**
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 */

import { RAW_EMOTIONS, QUOTES, READING_TYPES } from './constants.js';
import { shuffleArray, randomArrayItem } from './helpers.js';

/**
 * Runs on window initialization
 */
const allButtons = [];
let next;
let emotion2;

function init () {
  const urlParams = new URLSearchParams(window.location.search);

  next = document.getElementById('next');
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

    // create button
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = randomQuote;
    allButtons.push(button);
    // Write emotion (and timestamp) to local storage on click
    button.addEventListener('click', function () {
      if (this.classList.contains('selected')) {
        next.disabled = true;
        this.classList.remove('selected');
      } else {
        next.disabled = false;
        allButtons.forEach(button => {
          button.classList.remove('selected');
        });
        this.classList.add('selected');
      }
      emotion2 = {
        emotion,
        timestamp: Date.now() / 1000.0
      };
    });

    // add it to the page
    buttonContainer.appendChild(button);
  });

  /**
   * Event listener for back button click. Navigates back to emotions1.html
   */
  document.getElementById('back').addEventListener('click', function () {
    window.localStorage.removeItem('emotions2');
    window.location.href = 'emotions1.html' + window.location.search;
  });

  /**
   * Event listener for next button click. Navigates to readings.html
   */
  next.addEventListener('click', function () {
    window.localStorage.setItem('emotion2', JSON.stringify(emotion2));
    window.location.href = 'reading.html' + window.location.search;
  });
};

window.addEventListener('DOMContentLoaded', init);
