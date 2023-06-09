/**
 * File Name: emotions2.js
 * Purpose: randomly show quotes and save results to local storage in "emotions2"
 * 
 * @const allButtons: array of all buttons
 */

import { RAW_EMOTIONS, QUOTES, READING_TYPES } from './constants.js';
import { shuffleArray, randomArrayItem } from './helpers.js';


const allButtons = [];
let next;
let emotion2;

/**
 * function name: init
 * Runs on window initialization
 * shuffles array, create buttons by randomizing, user cannot click next until a button is selected
 * 
 * @const urlParams: urlSearchParam
 * @const readingType: get reading from urlParams for category
 * @const emotions: randomly shuffled array of emotions for button location
 * @const buttonContainer: container of buttons (where buttons will be added)
 * @const randomQuote: quote randomly chosen from the list of quotes per emotion
 * @const button: each button created
 */
function init() {
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
    // Write emotion (and timestamp) to local storage on click, user cannot click next until they choose a button
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

    // button hover sound
    button.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });


    // add it to the page
    buttonContainer.appendChild(button);
  });

  /**
   * purpose: Event listener for back button click. Navigates back to emotions1.html
   * deltes emotion2 from local storage
   */
  document.getElementById('back').addEventListener('click', function () {
    window.localStorage.removeItem('emotion2');
    window.location.href = "emotions1.html" + window.location.search;
  });


  /**
   * purpose: Event listener for next button click. Navigates to readings.html
   */
  next.addEventListener('click', function () {
    window.localStorage.setItem('emotion2', JSON.stringify(emotion2));
    window.location.href = "reading.html" + window.location.search;
  });

  // next button hover sound
  next.addEventListener('mouseenter', function () {
    playButtonHoverSound('assets/sounds/button-hover.mp3');
  });
};

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

// back button hover sounds
const backButton = document.getElementById('back');
backButton.addEventListener('mouseenter', function () {
  playButtonHoverSound('assets/sounds/button-hover.mp3');
});
