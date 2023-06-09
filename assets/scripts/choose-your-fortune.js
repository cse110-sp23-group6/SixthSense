/**
 * file name: choose-your-fortune
 * choose your fortunes javascript doc
 * purpose: for populating the page at start and multiple functions
 */
import { RE_ASK_INTERVAL_SECONDS } from "./constants.js";
import { encodeSearchParams } from "./helpers.js";

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

  const volumeSlider = document.getElementById('volume-slider');
  const volumeIcon = document.getElementById('volume-icon');

  // function to retrieve volumn from previous accessed page
  function retrieveVolume() {
    let storedVolume = localStorage.getItem('lastVolume');

    // If there's no stored volume level or it's 0, set the default to 1
    if (storedVolume === null) {
      return 1;
    } else {
      return Number(storedVolume); // Convert the stored string value to a number before returning
    }
  }

  let lastVolume = retrieveVolume(); // Retrieve volume value from local storage
  backgroundSound.volume = lastVolume; // Set the initial volume
  // Set the volume slider to reflect the initial volume
  volumeSlider.value = lastVolume;

  typingSound.currentTime = 0; // Reset the sound to start
  typingSound.playbackRate = 1.5;
  typingSound.volume = volumeSlider.value / 5; // Lower volume
  typingSound.play(); // Play the typing sound
  // for volume control

  updateVolume();
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
    localStorage.setItem('lastVolume', volumeSlider.value); // Store the volume level in local storage
    updateVolume();
  });

  volumeSlider.addEventListener('change', updateVolume);
  volumeSlider.addEventListener('mousemove', updateVolume);

  function updateVolume() {
    console.log(volumeSlider.value);
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

    // Store the volume level in local storage
    localStorage.setItem('lastVolume', volumeSlider.value);
  }

  setTimeout(function () {

    const buttonHoverSound = new Audio('assets/sounds/button-hover.mp3');
    buttonHoverSound.volume = 0.2; // Lower volume

    const loveDiv = document.getElementById('love-div');
    loveDiv.addEventListener('click', function () {
      handleNavigation('love');
    });
    loveDiv.addEventListener('mouseenter', function () {
      playButtonHoverSound('assets/sounds/button-hover.mp3');
    });

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

    function playButtonHoverSound(soundSrc) {
      const buttonHoverSound = new Audio(soundSrc);
      buttonHoverSound.volume = (volumeSlider.value) / 20; // change volume according sound bar
      buttonHoverSound.currentTime = 0; // Reset the sound to start
      buttonHoverSound.play();
    }
  }, 2000); // Delay in milliseconds matching the fade-in animation duration
});

function handleNavigation(type) {
  const emotion1Obj = JSON.parse(window.localStorage.getItem('emotion1'));
  const emotion2Obj = JSON.parse(window.localStorage.getItem('emotion2'));
  const currentUnixTimestamp = Date.now() / 1000.0;

  // If no emotion1 is set or emotion1 was set > 12 hours ago, redirect to emotion1
  if (emotion1Obj == null ||
    emotion1Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = `emotions1.html?${encodeSearchParams({reading: type})}`; 
    // If no emotion2 is set or emotion2 was set > 12 hours ago, redirect to emotion1
  } else if (emotion2Obj == null ||
    emotion2Obj.emotion == null ||
    currentUnixTimestamp - emotion1Obj.timestamp > RE_ASK_INTERVAL_SECONDS) {
    window.location.href = `emotions2.html?${encodeSearchParams({reading: type})}`; 
  } else {
    window.location.href = `reading.html?${encodeSearchParams({reading: type})}`; 
  }
}
