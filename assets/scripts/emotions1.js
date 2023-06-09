/**
 * file name: emotions1
 * Randomly generate one set of images to show for each emotion.
 * The order of images within each set is randomized as well.
 */

import { randomInt, shuffleArray } from './helpers.js';
import { RAW_EMOTIONS, READING_TYPES } from './constants.js';
import { playButtonHoverSound } from './VolumeControl.js';

// Set 1: Abstract Paints
const set1 = {
  joy: 'assets/images/selectionpics/joy1.png',
  sadness: 'assets/images/selectionpics/sadness1.png',
  disgust: 'assets/images/selectionpics/disgust1.png',
  fear: 'assets/images/selectionpics/fear1.png',
  anger: 'assets/images/selectionpics/anger1.png'
};

// Set 2: Fantasy Scapes
const set2 = {
  joy: 'assets/images/selectionpics/joy2.png',
  sadness: 'assets/images/selectionpics/sadness2.png',
  disgust: 'assets/images/selectionpics/disgust2.png',
  fear: 'assets/images/selectionpics/fear2.png',
  anger: 'assets/images/selectionpics/anger2.png'
};

// Set 3: Landscapes
const set3 = {
  joy: 'assets/images/selectionpics/joy3.png',
  sadness: 'assets/images/selectionpics/sadness3.png',
  disgust: 'assets/images/selectionpics/disgust3.png',
  fear: 'assets/images/selectionpics/fear3.png',
  anger: 'assets/images/selectionpics/anger3.png'
};

const sets = [
  set1,
  set2,
  set3
];

let next;
let selectedEmotion;

/**
 * function name: handleNextButtonClick
 * Moves to next page in flow (emotions2), and passes along desired fortune type
 */
function handleNextButtonClick () {
  window.localStorage.setItem('emotion1', JSON.stringify({
    emotion: selectedEmotion,
    timestamp: Date.now() / 1000.0
  }));
  window.location.href = 'emotions2.html' + window.location.search;
}

/**
 * function name: handleBackButtonClick
 * removes emotion1 in local storage
 * moves to next page in flow (emotions2), resets desired fortune type
 */
function handleBackButtonClick () {
  window.localStorage.removeItem('emotion1');
  window.location.href = 'choose-your-fortune.html';
}

/**
 * function name: init
 * purpose: Generate a new set of images on page load.
 * user cannot click next until a picture is selected
 */
function init () {
  const urlParams = new URLSearchParams(window.location.search);

  const readingType = urlParams.get('reading');
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html';
  }

  // disable next button till someone selects a button
  next = document.getElementById('button-right');
  next.disabled = true;

  // Grab all the circular buttons
  const buttons = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five')
  ];

  // Select random set
  const randomSet = sets[randomInt(0, 2)];

  // Generate shuffled list to randomize order within the set
  const shuffledEmotions = shuffleArray(RAW_EMOTIONS);

  // loop through the shuffled Array list to display pics on the buttons
  for (let i = 0; i < buttons.length; i++) {
    const emotion = shuffledEmotions[i];
    buttons[i].setAttribute('src', randomSet[emotion]);

    // when you click and select a button, it highlights and you can now click next
    buttons[i].addEventListener('click', function () {
      selectedEmotion = emotion;
      const selected = buttons[i];
      if (selected.classList.contains('selected')) {
        next.disabled = true;
        selected.classList.remove('selected');
      } else {
        next.disabled = false;
        buttons.forEach(button => {
          button.classList.remove('selected');
        });
        selected.classList.add('selected');
      }
    });
  }

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);

  next.addEventListener('click', handleNextButtonClick);
  // hover sound for next when enabled
  next.addEventListener('mouseenter', playButtonHoverSound);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', playButtonHoverSound);
  }
}

window.addEventListener('DOMContentLoaded', init);

// back navigation button
const backButton = document.getElementById('button-left');

backButton.addEventListener('click', handleBackButtonClick);

backButton.addEventListener('mouseenter', playButtonHoverSound);
