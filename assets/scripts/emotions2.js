/**
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 */

import { RAW_EMOTIONS, QUOTES, READING_TYPES } from './constants.js'
import { shuffleArray, randomArrayItem } from './helpers.js'

/**
 * Runs on window initialization
 */
function init () {
  const urlParams = new URLSearchParams(window.location.search)

  const readingType = urlParams.get('reading')
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html'
  }

  // Randomly shuffle the array
  const emotions = shuffleArray(RAW_EMOTIONS)

  // Create buttons and append them to the container
  const buttonContainer = document.getElementById('button-container')
  emotions.forEach(emotion => {
    // choose random quote from each category
    const randomQuote = randomArrayItem(QUOTES[emotion])

    // create button
    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = randomQuote
    // Write emotion (and timestamp) to local storage on click
    button.addEventListener('click', function () {
      localStorage.setItem('emotion2', JSON.stringify({
        emotion,
        timestamp: Date.now() / 1000.0
      }))
    })
    // add it to the page
    buttonContainer.appendChild(button)
  })
};

/**
 * Event listener for back button click. Navigates back to emotions1.html
 */
document.getElementById('back').addEventListener('click', function () {
  window.location.href = 'emotions1.html' + window.location.search
})

/**
 * Event listener for next button click. Navigates to readings.html
 */
document.getElementById('next').addEventListener('click', function () {
  window.location.href = 'reading.html' + window.location.search
})

window.addEventListener('DOMContentLoaded', init)
