/**
 * Randomly generate one set of images to show for each emotion. 
 * The order of images within each set is randomized as well. 
 */

//Set 1: Abstract Paints 
let set1 = {
 
    0: "assets/selectionpics/anger1.png",
    1: "assets/selectionpics/disgust1.png",
    2: "assets/selectionpics/fear1.png",
    3: "assets/selectionpics/joy1.png",
    4: "assets/selectionpics/sadness1.png"
    
};
//Set 2: Fantasy Scapes 
let set2 = {
 
    0: "assets/selectionpics/anger2.png",
    1: "assets/selectionpics/disgust2.png",
    2: "assets/selectionpics/fear2.png",
    3: "assets/selectionpics/joy2.png",
    4: "assets/selectionpics/sadness2.png"

};
//Set 3: Landscapes 
let set3 = {
 
    0: "assets/selectionpics/anger3.png" ,
    1: "assets/selectionpics/disgust3.png" ,
    2: "assets/selectionpics/fear3.png",
    3: "assets/selectionpics/joy3.png",
    4: "assets/selectionpics/sadness3.png"

};

// Generate a new set of images on page load. 
window.onload = function() {

    // Access the element
    let angerButton = document.getElementById("anger");
    let disgustButton = document.getElementById("disgust");
    let fearButton = document.getElementById("fear");
    let joyButton = document.getElementById("joy");
    let sadnessButton = document.getElementById("sadness");

    
    // Select random set 
    let randSet; 
    randSet = randomInt(3); 

    // Generate shuffled list to randomize order within the set 
    let nums = [0, 1, 2, 3, 4]; 
    let shuffled = shuffle(nums);

    // Make all images from that set, without repeats 
    imageSet(randSet, joyButton, shuffled[0]);
    imageSet(randSet, angerButton, shuffled[1]);
    imageSet(randSet, disgustButton, shuffled[2]);
    imageSet(randSet, fearButton, shuffled[3]);
    imageSet(randSet, sadnessButton, shuffled[4]);

};

/**
 * Given an integer input, outputs a random integer value between 
 * 0 and the inputted integer. 
 *  @param {*} val - upper bound on the range of integers. 
 * @returns integer within 0 and val. 
 */
 function randomInt(val) {
    return Math.floor(Math.random() * val);
 } 

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

/**
 * Provides a random shuffling of the passed in integer array. 
 * @param {*} arr - the passed in integer array to be shuffled. 
 * @returns shuffled array that is the same size as the original. 
 */
function shuffle(arr){
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}


// Function to handle the button click event
function handleButtonClick(index) {
    // Store the selected emotion in local storage
    localStorage.setItem('selectedEmotion', index);
  }
  
  // Function to handle the back button click event
  function handleBackButtonClick() {
    // Perform the necessary action for going back
    console.log('Going back');
  }
  
  // Function to handle the next button click event
  function handleNextButtonClick() {
    // Perform the necessary action for going next
    console.log('Going next');
  }
  
  // Retrieve the buttons and images
  const buttons = document.querySelectorAll('.round-button');
  const images = document.querySelectorAll('.leftvector');
  
  // Add event listeners to the buttons
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      handleButtonClick(index);
    });
  });
  
  // Retrieve the stored emotion on page load
  const storedEmotion = localStorage.getItem('selectedEmotion');
  if (storedEmotion !== null) {
    // add logic here to handle the previously selected emotion
  }
  
  // Navigation buttons
  const backButton = document.querySelector('.button-left');
  const nextButton = document.querySelector('.button-right');
  
  backButton.addEventListener('click', handleBackButtonClick);
  nextButton.addEventListener('click', handleNextButtonClick);









