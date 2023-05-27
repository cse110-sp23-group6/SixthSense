/**
 * Randomly generate one set of images to show for each emotion.
 * The order of images within each set is randomized as well.
 */

import { shuffleArray, randomInt } from './helpers.js'
import { RAW_EMOTIONS, READING_TYPES } from './constants.js'


// Set 1: Abstract Paints
const set1 = {
  joy: 'assets/images/selectionpics/joy1.png',
  sadness: 'assets/images/selectionpics/sadness1.png',
  disgust: 'assets/images/selectionpics/disgust1.png',
  fear: 'assets/images/selectionpics/fear1.png',
  anger: 'assets/images/selectionpics/anger1.png'
}

// Set 2: Fantasy Scapes
const set2 = {
  joy: 'assets/images/selectionpics/joy2.png',
  sadness: 'assets/images/selectionpics/sadness2.png',
  disgust: 'assets/images/selectionpics/disgust2.png',
  fear: 'assets/images/selectionpics/fear2.png',
  anger: 'assets/images/selectionpics/anger2.png'
}

// Set 3: Landscapes
const set3 = {
  joy: 'assets/images/selectionpics/joy3.png',
  sadness: 'assets/images/selectionpics/sadness3.png',
  disgust: 'assets/images/selectionpics/disgust3.png',
  fear: 'assets/images/selectionpics/fear3.png',
  anger: 'assets/images/selectionpics/anger3.png'
}

const sets = [
  set1,
  set2,
  set3
]

// To save the id of the selected button
let buttonId;
let next;
let selectedEmotion;

/**
 * Moves to next page in flow (emotions2), and passes along desired fortune type
 */
function handleNextButtonClick () {
  localStorage.setItem('emotion1', JSON.stringify({
    emotion: selectedEmotion, 
    timestamp: Date.now() / 1000.0
  }))
  window.location.href = 'emotions2.html' + window.location.search
}

/**
 * Moves to next page in flow (emotions2), resets desired fortune type
 */
function handleBackButtonClick () {
  window.location.href = 'choose-your-fortune.html'
}

// Generate a new set of images on page load.
function init() {
  const urlParams = new URLSearchParams(window.location.search)

  const readingType = urlParams.get('reading')
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html'
  }
  
  next = document.getElementById('button-right')
  next.disabled = true

  // Grab all the circular buttons
  const buttons = [
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five')
  ];

  // Select random set
  let randomSet = sets[randomInt(0, 2)];

  // Generate shuffled list to randomize order within the set
  const shuffledEmotions = shuffleArray(RAW_EMOTIONS)

  for (let i = 0; i < buttons.length; i++) {
    let emotion = shuffledEmotions[i];
    buttons[i].setAttribute('src', randomSet[emotion]);

    buttons[i].addEventListener("click", function() {
      selectedEmotion = emotion;
      let selected = buttons[i]
      buttonId = selected.getAttribute('id')
      if (selected.classList.contains('selected')) {
        next.disabled = true
        selected.classList.remove('selected')
      } else {
        next.disabled = false
        buttons.forEach(button => {
          button.classList.remove('selected')
        })
        selected.classList.add('selected')
      }
    });
  }
  next.addEventListener('click', handleNextButtonClick)
}

window.addEventListener('DOMContentLoaded', init)

// Navigation buttons
const backButton = document.getElementById('button-left')

backButton.addEventListener('click', handleBackButtonClick)

