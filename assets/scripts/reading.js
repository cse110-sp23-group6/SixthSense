import { READINGS, EMOTIONS_TABLE, READING_TYPES } from './constants.js';
import { randomArrayItem } from './helpers.js';

const SECONDS_PER_DAY = 86400;

/**
 * Runs on page initialization. Generates a reading based on emotion1 and emotion2
 * and records it to localstorage.
 */
async function init() {
  // check if profile exists, and change the create profile button
  const profilebutton = document.getElementById('create-profile');
  const formData = window.localStorage.getItem('formData');
  if (formData !== null) {
    profilebutton.textContent = 'Previous Readings';
    profilebutton.addEventListener('click', function () {
      window.location.href = 'previous-fortunes.html' + window.location.search;
    });
  } else {
    profilebutton.addEventListener('click', function () {
      window.location.href = 'newprofile.html' + window.location.search;
    });
  }
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

  const ogdate = (new Date()).toISOString();
  const separatedDate = ogdate.split('T'); // separate date from time first
  const withoutTime = separatedDate[0].split('-');
  const date = withoutTime[1] + '/' + withoutTime[2] + '/' + withoutTime[0];

  currentReadings.push({
    date,
    reading
  });

  window.localStorage.setItem('readings', JSON.stringify(currentReadings));

  /**
   * Event listener for home button click. Navigates back to index.html
   */
  document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html' + window.location.search;
  });

  /**
   * Event listener for new button click. gets you new fortune
   */
  document.getElementById('new-fortune').addEventListener('click', function () {
    reading = randomArrayItem(READINGS[readingType][overallEmotion]);
    readingBox.textContent = reading;

    // Update localstorage
    currentReadings.pop();

    currentReadings.push({
      date: (new Date()).toISOString(),
      reading
    });

    localStorage.setItem('readings', JSON.stringify(currentReadings))
  })

  // Attach click event listener to the screenshot button
  const screenshotBtn = document.getElementById("share");
  screenshotBtn.addEventListener("click", captureScreenshot);
  // Function to capture screenshot and save it as a download
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
