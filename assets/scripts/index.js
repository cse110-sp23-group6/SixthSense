/**
 * document name: index.js
 * purpose: main page users access the website to.
 * they can either go to new fortunes, create new users, or previous fortunes
 * if they already have a profile, the new user button will not be availabel for them.
 * Previous fortunes will tell them that they have to have at least 1 fortune or a profile
 * 
 * @const userButton: user button
 * @const mainButtons: inner buttons including today and previous
 * @const todayButton: today's fortune button
 * @const previousButton: previous forutnes button
 * @const formData: profile data from newprofile.html
 */

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
 * when clicked but doesn't have a profile, it tells you to create a profile
 * if you don't have a single fortune, it says you need at least 1 previously generated forutne
 * if user qualifies for both, it takes the user to previous-fortunes.html
 * 
 * @const readings: readings from local storage
 */
previousButton.addEventListener('click', function () {
  const readings = window.localStorage.getItem('readings');
  if(formData === null){
    alert("Please create a profile to access previous fortunes")
    return
  }
  if(readings === null){
    alert("you need at least 1 previously generated fortune to access previous fortunes")
    return
  }
  else{
    location.href = 'previous-fortunes.html';
  }
});

// sound control
const backgroundSound = new Audio('assets/sounds/background-music.mp3');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

let lastVolume = retrieveVolume(); // Retrieve volume value from local storage
backgroundSound.volume = lastVolume; // Set the initial volume
  // Set the volume slider to reflect the initial volume
volumeSlider.value = lastVolume; 
updateVolume();
backgroundSound.currentTime = 0; // Reset the background sound to start
backgroundSound.loop = true; // Enable looping
backgroundSound.play(); // Play the background sound

// mute and unmute for clicking icon

function retrieveVolume() {
  let storedVolume = localStorage.getItem('lastVolume');

  // If there's no stored volume level or it's 0, set the default to 1
  if (storedVolume === null) {
    return 1;
  } else {
    return Number(storedVolume); // Convert the stored string value to a number before returning
  }
}

// store the last volumn in record 
volumeSlider.addEventListener('input', function () {
  backgroundSound.volume = volumeSlider.value;
  lastVolume = backgroundSound.volume; // Update the lastVolume to reflect the volume of the background sound
  localStorage.setItem('lastVolume', lastVolume); // Store the volume level in local storage
  updateVolume();
});

volumeIcon.addEventListener('click', function() {
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
  updateVolume();
});

volumeSlider.addEventListener('change', updateVolume);
volumeSlider.addEventListener('mousemove', updateVolume);

/**
 * function name: updateVolume
 * purpose: update the volume of sound effects
 * 
 * @const volumelevel: level of volume ranges from 0 to 3
 */
function updateVolume() {
  backgroundSound.volume = volumeSlider.value;
  backgroundSound.volume = volumeSlider.value;
  let volumeLevel;

  window.localStorage.setItem('lastVolume', volumeSlider.value);

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

 /**
  * function name: playButtonHoverSound
  * purpose: Function to play the button hover sound
  * 
  * @const buttonHoverSound: new audio with soundSrc
  */
 function playButtonHoverSound(soundSrc) {
   const buttonHoverSound = new Audio(soundSrc);
   buttonHoverSound.volume = (volumeSlider.value) / 20; // change volume according sound bar
   buttonHoverSound.currentTime = 0; // Reset the sound to start
   buttonHoverSound.play();
 }

 todayButton.addEventListener('mouseenter', function () {
   playButtonHoverSound('assets/sounds/button-hover.mp3');
 });

 previousButton.addEventListener('mouseenter', function () {
   playButtonHoverSound('assets/sounds/button-hover.mp3');
 });

userButton.addEventListener('mouseenter', function () {
  playButtonHoverSound('assets/sounds/button-hover.mp3');
});
