/**
 * file name: reading.js
 * purpose: show emotion and reading based off of the category and emotions they chose
 */

import { READINGS, EMOTIONS_TABLE, EMOTIONS, READING_TYPES } from './constants.js';
import { randomArrayItem } from './helpers.js';

const SECONDS_PER_DAY = 86400;

/**
 * function name: init
 * purpose: Runs on page initialization. 
 * Generates a reading based on emotion1 and emotion2 and records it to localstorage.
 * 
 * @const profilebutton: button that says create-profile
 * @const formData: profile data sent to local storage from newprofile page
 * @const urlParams: new urlParam for category
 * @const currentUnixTimestamp: current time
 * @const readingType: category they picked
 * @const auraImage: image space to show aura
 * @const readingbox: box to diplay reading
 * @const emotion10bj: local storage from emotion1
 * @const emotion20bj: local storage from emotion2
 * @const emotion1: emotion1
 * @const emotion2: emotion2
 * @const overallEmotion: the final emotion based on emotiosn 1 and 2
 * @type {String} reading: reading to be displayed (randmoly picked from the readings for that category and emoton)
 * @type {Array} currentReadings: all of the readings already in localstorage
 * @const ogdate: date we get from new Date()
 * @const separatedDate: parsed date split 
 * @const withoutTime: date without time signiture
 * @const date: date to be updated in the right format
 * @const screenshotBtn: share button
 */
async function init() {
  const profilebutton = document.getElementById('create-profile');
  const formData = window.localStorage.getItem('formData');
  const readingTitle = document.getElementById("they-were-feeling");

  //check if profile exists, if it does, then set previous reading button
  if (formData !== null) {
    profilebutton.textContent = 'Previous Readings';
    profilebutton.addEventListener('click', function () {
      window.location.href = 'previous-fortunes.html' + window.location.search;
    });
  }
  //if not, set newprofile button
  else {
    profilebutton.addEventListener('click', function () {
      window.location.href = 'newprofile.html' + window.location.search;
    });
  }

  //find reading type
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

  readingTitle.textContent = `${name === "" ? "The Person" : name} Was Feeling:`;

  const auraImage = document.getElementById('aura-image');
  const readingBox = document.getElementById('reading');

  // Generate a random reading from readings list
  let reading = READINGS[readingType][overallEmotion][readingNum];
  auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`;
  readingBox.textContent = reading;

  /**
   * purpose: Event listener for home button click. Navigates back to index.html
   */
  document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html' + window.location.search;
  });
}

window.addEventListener('DOMContentLoaded', init);

// sound control
const backgroundSound = new Audio('assets/sounds/background-music.mp3');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

let lastVolume = retrieveVolume(); // Retrieve volume value from local storage
backgroundSound.volume = lastVolume; // Set the initial volume
// Set the volume slider to reflect the initial volume
volumeSlider.value = lastVolume;
updateVolume();
backgroundSound.currentTime = 0; // Reset the background sound to start
backgroundSound.loop = true; // Enable looping
backgroundSound.play(); // Play the background sound

// mute and unmute for clicking icon

function retrieveVolume() {
  let storedVolume = localStorage.getItem('lastVolume');

  // If there's no stored volume level or it's 0, set the default to 1
  if (storedVolume === null) {
    return 1;
  } else {
    return Number(storedVolume); // Convert the stored string value to a number before returning
  }
}

// store the last volumn in record 
volumeSlider.addEventListener('input', function () {
  backgroundSound.volume = volumeSlider.value;
  lastVolume = backgroundSound.volume; // Update the lastVolume to reflect the volume of the background sound
  localStorage.setItem('lastVolume', lastVolume); // Store the volume level in local storage
  updateVolume();
});

volumeIcon.addEventListener('click', function () {
  if (backgroundSound.volume == 0) {
    if (lastVolume == 0) {
      backgroundSound.volume = 1;
      volumeSlider.value = 1;
    } else {
      backgroundSound.volume = lastVolume;
      volumeSlider.value = lastVolume;
    }
  } else {
    lastVolume = backgroundSound.volume;
    backgroundSound.volume = 0;
    volumeSlider.value = 0;
  }
  updateVolume();
});

volumeSlider.addEventListener('change', updateVolume);
volumeSlider.addEventListener('mousemove', updateVolume);

/**
 * function name: updateVolume
 * purpose: update the volume of sound effects
 * 
 * @const volumelevel: level of volume ranges from 0 to 3
 */
function updateVolume() {
  backgroundSound.volume = volumeSlider.value;
  backgroundSound.volume = volumeSlider.value;
  let volumeLevel;

  window.localStorage.setItem('lastVolume', volumeSlider.value);

  if (backgroundSound.volume === 0) {
    volumeLevel = "0";
  } else if (backgroundSound.volume < 0.33) {
    volumeLevel = "1";
  } else if (backgroundSound.volume < 0.66) {
    volumeLevel = "2";
  } else {
    volumeLevel = "3";
  }
  volumeIcon.src = `assets/images/volume-level-${volumeLevel}.svg`;
}

/**
 * function name: playButtonHoverSound
 * purpose: Function to play the button hover sound
 * 
 * @const buttonHoverSound: new audio with soundSrc
 */
function playButtonHoverSound(soundSrc) {
  const buttonHoverSound = new Audio(soundSrc);
  buttonHoverSound.volume = (volumeSlider.value) / 20; // change volume according sound bar
  buttonHoverSound.currentTime = 0; // Reset the sound to start
  buttonHoverSound.play();
}

// back new fortune hover sounds
const getNewFortune = document.getElementById('new-fortune');
getNewFortune.addEventListener('mouseenter', function () {
  playButtonHoverSound('assets/sounds/button-hover.mp3');
});

// previous fortune hover sounds
const previousButton = document.getElementById('create-profile');
previousButton.addEventListener('mouseenter', function () {
  playButtonHoverSound('assets/sounds/button-hover.mp3');
});
