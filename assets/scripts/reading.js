/**
 * file name: reading.js
 * purpose: show emotion and reading based off of the category and emotions they chose
 */

import { READINGS, EMOTIONS_TABLE, READING_TYPES } from './constants.js';
import { randomArrayItem } from './helpers.js';

const SECONDS_PER_DAY = 86400;

/**
 * function name: init
 * purpose: Runs on page initialization. 
 * Generates a reading based on emotion1 and emotion2 and records it to localstorage.
 * 
 * @param profilebutton: button that says create-profile
 * @param formData: profile data sent to local storage from newprofile page
 * @param urlParams: new urlParam for category
 * @param currentUnixTimestamp: current time
 * @param readingType: category they picked
 * @param auraImage: image space to show aura
 * @param readingbox: box to diplay reading
 * @param emotion10bj: local storage from emotion1
 * @param emotion20bj: local storage from emotion2
 * @param emotion1: emotion1
 * @param emotion2: emotion2
 * @param overallEmotion: the final emotion based on emotiosn 1 and 2
 * @param reading: reading to be displayed (randmoly picked from the readings for that category and emoton)
 * @param currentReadings: all of the readings already in localstorage
 * @param ogdate: date we get from new Date()
 * @param separatedDate: parsed date split 
 * @param withoutTime: date without time signiture
 * @param date: date to be updated in the right format
 * @param screenshotBtn: share button
 */
async function init() {
  const profilebutton = document.getElementById('create-profile');
  const formData = window.localStorage.getItem('formData');
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
  const currentUnixTimestamp = Date.now() / 1000.0;

  const readingType = urlParams.get('reading');
  if (readingType == null || !READING_TYPES.includes(readingType)) {
    window.location.href = 'choose-your-fortune.html';
  }

  const auraImage = document.getElementById('aura-image');
  const readingBox = document.getElementById('reading');

  const emotion1Obj = JSON.parse(window.localStorage.getItem('emotion1'));
  const emotion2Obj = JSON.parse(window.localStorage.getItem('emotion2'));

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.href = 'emotion1.html' + window.location.search;
  }

  // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > SECONDS_PER_DAY / 2) {
    window.location.href = 'emotions2.html' + window.location.search;
  }

  // Calculate overall emotion based on emotion1 and emotion2
  const emotion1 = emotion1Obj.emotion;
  const emotion2 = emotion2Obj.emotion;
  const overallEmotion = EMOTIONS_TABLE[emotion1][emotion2];
  // Upload overall emotions to local storage
  window.localStorage.setItem('overallEmotion', JSON.stringify(overallEmotion));

  // Generate a random reading from readings list
  let reading = randomArrayItem(READINGS[readingType][overallEmotion]);
  auraImage.src = `assets/emotion_auras/${overallEmotion}.gif`;
  readingBox.textContent = reading;

  // Update localstorage
  let currentReadings = JSON.parse(window.localStorage.getItem('readings'));
  if (currentReadings == null) {
    currentReadings = [];
  }

  //set date into the correct format
  const ogdate = (new Date()).toISOString();
  const separatedDate = ogdate.split('T'); // separate date from time first
  const withoutTime = separatedDate[0].split('-');
  const date = withoutTime[1] + '/' + withoutTime[2] + '/' + withoutTime[0];

  //add the reading to currentReadings
  currentReadings.push({
    date,
    reading
  });

  //update local storage
  window.localStorage.setItem('readings', JSON.stringify(currentReadings));

  /**
   * purpose: Event listener for home button click. Navigates back to index.html
   */
  document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html' + window.location.search;
  });

  /**
   * purpose: Event listener for new button click. gets you new fortune
   */
  document.getElementById('new-fortune').addEventListener('click', function () {
    reading = randomArrayItem(READINGS[readingType][overallEmotion]);
    readingBox.textContent = reading;

    // Update localstorage
    currentReadings.pop();

    currentReadings.push({
      date,
      reading
    });

    localStorage.setItem('readings', JSON.stringify(currentReadings))
  })

  // Attach click event listener to the screenshot button
  const screenshotBtn = document.getElementById("share");
  screenshotBtn.addEventListener("click", captureScreenshot);
  /**
   * purpose: Function to capture screenshot and save it as a download
   * 
   * @param screenshotTarget: to be screenshotted (the whole body of the document)
   * @param image: canvas converted into an image
   * @param link: link element made to be shared
   */
  function captureScreenshot() {
    const screenshotTarget = document.body;
    // Capture the current page as an image using html2canvas library
    html2canvas(screenshotTarget).then(function (canvas) {
      // Convert the canvas to a base64-encoded image
      const image = canvas.toDataURL("image/png");

      // Create a link element and set its attributes
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";

      // Trigger a click event on the link element to initiate the download
      link.click();
    });
  }
}

window.addEventListener('DOMContentLoaded', init);
