import { RE_ASK_INTERVAL_SECONDS } from "./constants.js";

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

    // Function to play the button hover sound
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

