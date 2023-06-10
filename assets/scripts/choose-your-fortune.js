/**
 * file name: choose-your-fortune
 * choose your fortunes javascript doc
 * purpose: for populating the page at start and multiple functions
 */
import { RE_ASK_INTERVAL_SECONDS } from './constants.js';
import { encodeSearchParams } from './helpers.js';
import { playButtonHoverSound } from './VolumeControl.js';

function init () {
  const headerText = document.getElementById('header-text');
  const typingSound = document.getElementById('typing-sound');
  const text = headerText.textContent;
  let html = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      html += '<span class="header-hidden">&nbsp;</span>';
    } else {
      html += `<span class="header-hidden">${text[i]}</span>`;
    }
  }

  headerText.innerHTML = html;

  let delay = 100; // time in milliseconds between each character
  document.querySelectorAll('.header-hidden').forEach(function (elem) {
    setTimeout(function () {
      elem.style.opacity = 1;
    }, delay);
    delay += 70;
  });
  typingSound.currentTime = 0;

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);

  setTimeout(function () {
    const loveDiv = document.getElementById('love-div');
    loveDiv.addEventListener('click', function () {
      handleNavigation('love');
    });

    loveDiv.addEventListener('mouseenter', playButtonHoverSound);

    const careerDiv = document.getElementById('career-div');
    careerDiv.addEventListener('click', function () {
      handleNavigation('career');
    });
    careerDiv.addEventListener('mouseenter', playButtonHoverSound);

    const healthDiv = document.getElementById('health-div');
    healthDiv.addEventListener('click', function () {
      handleNavigation('health');
    });
    healthDiv.addEventListener('mouseenter', playButtonHoverSound);

    const friendsAndFamilyDiv = document.getElementById('friends-and-family-div');
    friendsAndFamilyDiv.addEventListener('click', function () {
      handleNavigation('friends_and_family');
    });
    friendsAndFamilyDiv.addEventListener('mouseenter', playButtonHoverSound);

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
    backButton.addEventListener('mouseenter', playButtonHoverSound);
  }, 2000); // Delay in milliseconds matching the fade-in animation duration
}

document.addEventListener('DOMContentLoaded', init);

function handleNavigation (type) {
  const emotion1Obj = JSON.parse(window.localStorage.getItem('emotion1'));
  const emotion2Obj = JSON.parse(window.localStorage.getItem('emotion2'));
  const currentUnixTimestamp = Date.now() / 1000.0;

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = `emotions1.html?${encodeSearchParams({ reading: type })}`;
    // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  } else if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = `emotions2.html?${encodeSearchParams({ reading: type })}`;
  } else {
    window.location.href = `reading.html?${encodeSearchParams({ reading: type })}`;
  }
}
