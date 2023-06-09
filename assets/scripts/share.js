/**
 * file name: reading.js
 * purpose: show emotion and reading based off of the category and emotions they chose
 */

import { EMOTIONS, READING_TYPES, READINGS } from './constants.js';
import { playButtonHoverSound } from './VolumeControl.js';

/**
 * function name: init
 * purpose: Runs on page initialization.
 * Generates a reading based on emotion1 and emotion2 and records it to localstorage.
 */
async function init () {
  const profilebutton = document.getElementById('create-profile');
  const formData = window.localStorage.getItem('formData');
  const readingTitle = document.getElementById('they-were-feeling');

  // check if profile exists, if it does, then set previous reading button
  if (formData !== null) {
    profilebutton.textContent = 'Previous Readings';
    profilebutton.addEventListener('click', function () {
      window.location.href = 'previous-fortunes.html' + window.location.search;
    });
  }
  // if not, set newprofile button
  else {
    profilebutton.addEventListener('click', function () {
      window.location.href = 'newprofile.html' + window.location.search;
    });
  }

  // find reading type
  const urlParams = new URLSearchParams(window.location.search);

  const readingType = urlParams.get('readingType');
  const overallEmotion = urlParams.get('overallEmotion');
  const name = urlParams.get('name');
  const readingNum = parseInt(urlParams.get('readingNum'));

  // Validate URL params
  if (readingType == null ||
      !READING_TYPES.includes(readingType) ||
      !EMOTIONS.includes(overallEmotion) ||
      isNaN(readingNum) || !isFinite(readingNum) ||
      readingNum < 0 || readingNum >= READINGS[readingType][overallEmotion].length) {
    window.location.href = 'choose-your-fortune.html';
  }

  readingTitle.textContent = `${name === '' ? 'The Person' : name} Was Feeling:`;

  const auraImage = document.getElementById('aura-image');
  const readingBox = document.getElementById('reading');

  // Generate a random reading from readings list
  const reading = READINGS[readingType][overallEmotion][readingNum];
  auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`;
  readingBox.textContent = reading;

  /**
   * purpose: Event listener for home button click. Navigates back to index.html
   */
  document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html' + window.location.search;
  });

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);
}

window.addEventListener('DOMContentLoaded', init);

// back new fortune hover sounds
const getNewFortune = document.getElementById('new-fortune');
getNewFortune.addEventListener('mouseenter', playButtonHoverSound);

// previous fortune hover sounds
const previousButton = document.getElementById('create-profile');
previousButton.addEventListener('mouseenter', playButtonHoverSound);
