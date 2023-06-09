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
  if (formData === null) {
    alert("Please create a profile to access previous fortunes")
    return
  }
  if (readings === null) {
    alert("you need at least 1 previously generated fortune to access previous fortunes")
    return
  }
  else {
    location.href = 'previous-fortunes.html';
  }
});


/**
 * function name: playButtonHoverSound
 * purpose: Function to play the button hover sound
 * 
 * @const buttonHoverSound: new audio with soundSrc
 */
function playButtonHoverSound() {
  const volumeControl = document.querySelector("volume-control");
  const buttonHoverSound = new Audio("assets/sounds/button-hover.mp3");
  buttonHoverSound.volume = (volumeControl.getAttribute("value")) / 20; // change volume according sound bar
  buttonHoverSound.currentTime = 0; // Reset the sound to start
  buttonHoverSound.play();
}

todayButton.addEventListener('mouseenter', playButtonHoverSound);
previousButton.addEventListener('mouseenter', playButtonHoverSound);
userButton.addEventListener('mouseenter', playButtonHoverSound);
