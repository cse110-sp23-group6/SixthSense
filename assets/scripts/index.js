/**
 * document name: index.js
 * purpose: main page users access the website to.
 * they can either go to new fortunes, create new users, or previous fortunes
 * if they already have a profile, the new user button will not be availabel for them.
 * Previous fortunes will tell them that they have to have at least 1 fortune or a profile
 */

import { playButtonHoverSound } from './VolumeControl.js';

function init () {
  // Document Selectors
  const userButton = document.getElementById('user');
  const mainButtons = document.getElementsByClassName('inner-button');
  const todayButton = mainButtons[0];
  const previousButton = mainButtons[1];

  // Checks if the user has created a profile. If they have disable the button
  const formData = window.localStorage.getItem('formData');
  if (formData !== null) {
    userButton.disabled = true;
  }
  /**
   * purpose: event listener for new user button
   * traverses to newprofile.html when clicked
   */
  userButton.addEventListener('click', function () {
    location.href = 'newprofile.html';
  });
  /**
   * purpose: event listener for today's fortune button
   * traverses to choose-your-fortune.html when clicked
   */
  todayButton.addEventListener('click', function () {
    location.href = 'choose-your-fortune.html';
  });
  
  /**
   * purpose: event listener for previous fortunes button
   * Checks whether profile exists, and whether previous fortunes have been generated.
   */
  previousButton.addEventListener('click', function () {
    const readings = window.localStorage.getItem('readings');
    if (formData === null) {
      alert('Please create a profile to access previous fortunes');
      return;
    }
    if (readings === null) {
      alert('you need at least 1 previously generated fortune to access previous fortunes');
    } else {
      location.href = 'previous-fortunes.html';
    }
  });

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);

  todayButton.addEventListener('mouseenter', playButtonHoverSound);
  previousButton.addEventListener('mouseenter', playButtonHoverSound);
  userButton.addEventListener('mouseenter', playButtonHoverSound);
}

document.addEventListener('DOMContentLoaded', init);
