import { shuffleArray, randomInt } from "./helpers.js";
import { READING_TYPES } from "./constants.js";
/**
 * Randomly generate one set of images to show for each emotion. 
 * The order of images within each set is randomized as well. 
 */

//Set 1: Abstract Paints 
let set1 = {
 
    0: "assets/images/selectionpics/anger1.png",
    1: "assets/images/selectionpics/disgust1.png",
    2: "assets/images/selectionpics/fear1.png",
    3: "assets/images/selectionpics/joy1.png",
    4: "assets/images/selectionpics/sadness1.png"
    
};
//Set 2: Fantasy Scapes 
let set2 = {
 
    0: "assets/images/selectionpics/anger2.png",
    1: "assets/images/selectionpics/disgust2.png",
    2: "assets/images/selectionpics/fear2.png",
    3: "assets/images/selectionpics/joy2.png",
    4: "assets/images/selectionpics/sadness2.png"

};
//Set 3: Landscapes 
let set3 = { 
    0: "assets/images/selectionpics/anger3.png",
    1: "assets/images/selectionpics/disgust3.png",
    2: "assets/images/selectionpics/fear3.png",
    3: "assets/images/selectionpics/joy3.png",
    4: "assets/images/selectionpics/sadness3.png"
};

// Generate a new set of images on page load. 
function init() {
  // Kick out of the flow if reading type hasn't been set (i.e. rea)
  const urlParams = new URLSearchParams(window.location.search);

	let readingType = urlParams.get("reading");
	if (readingType == null || !READING_TYPES.includes(readingType)) {
		window.location.href = "choose-your-fortune.html";
	}

  // Move on to next page if it 

  // Access the element
  let angerButton = document.getElementById("anger");
  angerButton.addEventListener('click', () => {
    handleEmotionButtonClick("anger");
  });

  let disgustButton = document.getElementById("disgust");
  disgustButton.addEventListener('click', () => {
    handleEmotionButtonClick("disgust");
  });

  let fearButton = document.getElementById("fear");
  fearButton.addEventListener('click', () => {
    handleEmotionButtonClick("fear");
  });

  let joyButton = document.getElementById("joy");
  joyButton.addEventListener('click', () => {
    handleEmotionButtonClick("joy");
  });

  let sadnessButton = document.getElementById("sadness");
  sadnessButton.addEventListener('click', () => {
    handleEmotionButtonClick("sadness");
  });

  // Select random set 
  let randSet;
  randSet = randomInt(0, 2);

  // Generate shuffled list to randomize order within the set 
  let shuffledIndices = shuffleArray([0, 1, 2, 3, 4]);

  // Make all images from that set, without repeats 
  imageSet(randSet, joyButton, shuffledIndices[0]);
  imageSet(randSet, angerButton, shuffledIndices[1]);
  imageSet(randSet, disgustButton, shuffledIndices[2]);
  imageSet(randSet, fearButton, shuffledIndices[3]);
  imageSet(randSet, sadnessButton, shuffledIndices[4]);
};

window.addEventListener('DOMContentLoaded', init);

/**
 * Finds the set corresponding to the passed in integer, and fills the 
 * button content to display the corresponding image. 
 * @param {*} int - the randomly generated integer.
 * @param {*} button - the button to place the quote in.
 * @param {*} index - the index within the set to select. 
 */
function imageSet(int, button, index) {

  // Access the passed in set 
  let idx = int + 1;
  let selectedSet = eval(`set${idx}`);

  // Acess the corresponding button (ie: "joy")
  let attribute = button.getAttribute('id');

  // Display image in random order from the set 
  button.setAttribute("src", selectedSet[index]);

}

// Function to handle the button click event
function handleEmotionButtonClick(emotion) {
  // Store the selected emotion in local storage
  localStorage.setItem('emotion1', JSON.stringify({
    emotion: emotion,
    timestamp: Date.now() / 1000.
  }));
}

// Function to handle the back button click event
function handleNextButtonClick() {
	window.location.href = "emotions2.html" + window.location.search;
}

// Function to handle the next button click event
function handleBackButtonClick() {
  window.location.href = "choose-your-fortune.html";
}

// Navigation buttons
const backButton = document.querySelector('.button-left');
const nextButton = document.querySelector('.button-right');

backButton.addEventListener('click', handleBackButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);
