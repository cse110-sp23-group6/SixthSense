/**
 * file name: choose-your-fortune
 * choose your fortunes javascript doc
 * purpose: for populating the page at start and multiple functions
 */
import { RE_ASK_INTERVAL_SECONDS } from "./constants.js";

/**
 * purpose: runs when page is loaded
 * mostly handles sounds and each button that is populated (each category)
 * 
 * @param headerText: header text
 * @param typingSound: typing-sound when you click something
 * @param backgroundsound: background Sound
 * @param text: textcontent of the header text
 * @param delay: 100 milisecond delay to use for header animation
 * @param volumeSlider: volume slider
 * @param volumeIcon: icon for volume
 * @param lastVolume: for storing the volume in local storage for remembering
 */
document.addEventListener("DOMContentLoaded", function () {
  const headerText = document.getElementById('header-text');
  const typingSound = document.getElementById('typing-sound');
  const backgroundSound = new Audio('assets/sounds/background-music.mp3');
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

  typingSound.currentTime = 0; // Reset the sound to start
  typingSound.playbackRate = 1.5;
  typingSound.volume = 0.5; // Lower volume
  typingSound.play(); // Play the typing sound

  backgroundSound.currentTime = 0; // Reset the background sound to start
  backgroundSound.loop = true; // Enable looping
  backgroundSound.play(); // Play the background sound

  let delay = 100; // time in milliseconds between each character
  document.querySelectorAll('.header-hidden').forEach(function (elem) {
    setTimeout(function () {
      elem.style.opacity = 1;
    }, delay);
    delay += 70;
  });
  typingSound.currentTime = 0;

  /**
   * purpose: create the four buttons and add sound if hovered on
   * 
   * @param buttonHoverSound: sound that plays when you hover on a button
   * @param loveDiv: button for love category
   * @param careerDiv: button for career category
   * @param healthDiv: button for health category
   * @param friendsAndFamilyDiv: button for friends and family
   */
  setTimeout(function () {

    const buttonHoverSound = new Audio('assets/sounds/button-hover.mp3');
    buttonHoverSound.volume = 0.2; // Lower volume

    const loveDiv = document.getElementById('love-div');
    loveDiv.addEventListener('click', function () {
      handleNavigation('love');
    });
        // Add event listeners for hovering over fortune boxes
    loveDiv.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    //when the category is clicked, go to function handleNavigation with input: type
    const careerDiv = document.getElementById('career-div');
    careerDiv.addEventListener('click', function () {
      handleNavigation('career');
    });
    careerDiv.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    const healthDiv = document.getElementById('health-div');
    healthDiv.addEventListener('click', function () {
      handleNavigation('health');
    });
    healthDiv.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    const friendsAndFamilyDiv = document.getElementById('friends-and-family-div');
    friendsAndFamilyDiv.addEventListener('click', function () {
      handleNavigation('friends_and_family');
    });
    friendsAndFamilyDiv.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
    backButton.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

    /**
     * function name: playButtonHoverSound
     * purpose: Function to play the button hover sound
     * 
     * @param buttonHoverSound: new audio with soundSrc
     */
    function playButtonHoverSound(soundSrc) {
      const buttonHoverSound = new Audio(soundSrc);
      buttonHoverSound.volume = (volumeSlider.value) / 10; // change volume according sound bar
      buttonHoverSound.currentTime = 0; // Reset the sound to start
      buttonHoverSound.play();
    }

    // function for volume control
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.getElementById('volume-icon');

    // mute and unmute for clicking icon

    let lastVolume = 1;
    backgroundSound.volume = lastVolume;

    // store the last volumn in record 
    volumeSlider.addEventListener('input', function () {
      lastVolume = volumeSlider.value;
      backgroundSound.volume = lastVolume;
      updateVolume();
    });

    volumeIcon.addEventListener('click', function() {
      if (backgroundSound.volume == 0) {
        backgroundSound.volume = lastVolume;
        volumeSlider.value = lastVolume;
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
     * @param volumelevel: level of volume ranges from 0 to 3
     */
    function updateVolume() {
      console.log(volumeSlider.value); 
      backgroundSound.volume = volumeSlider.value;
      backgroundSound.volume = volumeSlider.value;
      let volumeLevel;

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
  }, 2000); // Delay in milliseconds matching the fade-in animation duration
});

/**
 * function name: handleNavigation
 * purpose: handle the navigation to each one of the categories when clicked
 * checks if emotion1 or 2 was set more than 12 hours ago, if not, redirect to emotions1
 * if so, redirect to general reading with the emotion and reading type already in hand
 * 
 * @param emotion10bj: emotion1
 * @param emotion20bj: emotion2
 * @param currentUnixTimestamp: current date
 * @input type = the category of reading that the user picked
 */

function handleNavigation (type) {
  const emotion1Obj = JSON.parse(window.localStorage.getItem('emotion1'));
  const emotion2Obj = JSON.parse(window.localStorage.getItem('emotion2'));
  const currentUnixTimestamp = Date.now() / 1000.0;

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.assign('emotions1.html?reading=' + type);
    // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  } else if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.assign('emotions2.html?reading=' + type);
  } else {
    window.location.assign('reading.html?reading=' + type);
  }
}

