/**
 * file name: reading.js
 * purpose: show emotion and reading based off of the category and emotions they chose
 */

import { playButtonHoverSound } from './VolumeControl.js';
import { EMOTIONS_TABLE, RE_ASK_INTERVAL_SECONDS, READING_TYPES, READINGS } from './constants.js';
import { copyStringToClipboard, encodeSearchParams, randomInt } from './helpers.js';

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
 * @const shareBtn: share button
 */
async function init () {
  const profilebutton = document.getElementById('create-profile');
  const formData = window.localStorage.getItem('formData');
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
  const currentUnixTimestamp = Date.now() / 1000.0;

  const readingType = urlParams.get('reading');
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html';
  }

  const auraImage = document.getElementById('aura-image');
  const readingBox = document.getElementById('reading');

  const emotion1Obj = JSON.parse(window.localStorage.getItem('emotion1'));
  const emotion2Obj = JSON.parse(window.localStorage.getItem('emotion2'));

  // If no emotion1 is set or emotion1 was set > RE_ASK_INTERVAL_SECONDS, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = 'emotions1.html' + window.location.search;
  }

  // If no emotion2 is set or emotion2 was set > RE_ASK_INTERVAL_SECONDS, redirect to emotion2
  if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = 'emotions2.html' + window.location.search;
  }

  // Calculate overall emotion based on emotion1 and emotion2
  const emotion1 = emotion1Obj.emotion;
  const emotion2 = emotion2Obj.emotion;
  const overallEmotion = EMOTIONS_TABLE[emotion1][emotion2];
  // Upload overall emotions to local storage
  window.localStorage.setItem('overallEmotion', JSON.stringify(overallEmotion));

  // Generate a random reading from readings list
  let readingInd = randomInt(0, READINGS[readingType][overallEmotion].length - 1);
  let reading = READINGS[readingType][overallEmotion][readingInd];
  auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`;
  readingBox.textContent = reading;
  readingBox.setAttribute('index', readingInd.toString());

  // Update localstorage
  let currentReadings = JSON.parse(window.localStorage.getItem('readings'));
  if (currentReadings == null) {
    currentReadings = [];
  }

  // set date into the correct format
  const ogdate = (new Date()).toISOString();
  const separatedDate = ogdate.split('T'); // separate date from time first
  const withoutTime = separatedDate[0].split('-');
  const date = withoutTime[1] + '/' + withoutTime[2] + '/' + withoutTime[0];

  // add the reading to currentReadings
  currentReadings.push({
    date,
    reading
  });

  // update local storage
  window.localStorage.setItem('readings', JSON.stringify(currentReadings));

  /**
   * purpose: Event listener for home button click. Navigates back to index.html
   */
  document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';
  });

  /**
   * purpose: Event listener for new button click. gets you new fortune
   */
  document.getElementById('new-fortune').addEventListener('click', function () {
    readingInd = randomInt(0, READINGS[readingType][overallEmotion].length - 1);
    reading = READINGS[readingType][overallEmotion][readingInd];
    readingBox.textContent = reading;
    readingBox.setAttribute('index', readingInd.toString());

    // Update localstorage
    currentReadings.pop();

    currentReadings.push({
      date,
      reading
    });

    localStorage.setItem('readings', JSON.stringify(currentReadings));
  });

  // Attach click event listener to the share button
  const shareBtn = document.getElementById('share');
  shareBtn.addEventListener('click', async function () {
    await copyStringToClipboard(
      // Note: We separately get window.location.origin + window.location.pathname
      // to make it work with both local testing and Github Pages deployment (which adds the repo
      // name to the pathname).
      `${window.location.origin}${window.location.pathname.replace('reading.html', 'share.html')}?${
        encodeSearchParams({
          readingType,
          name: window.localStorage.getItem('formData') === null ||
                  JSON.parse(window.localStorage.getItem('formData')).name.length > 15
? ''
                    : JSON.parse(window.localStorage.getItem('formData')).name,
          readingNum: readingBox.getAttribute('index'),
          overallEmotion
        })
      }`
    );
    alert('Share link copied to clipboard!');
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
