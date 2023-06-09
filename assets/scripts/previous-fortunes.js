/**
 * File Name: previous-fortunes.js
 * purpose: populate profile and previous fortunes, where user can view, close, delete fortunes
 */
import { STAR_SIGNS } from './constants.js';
import { playButtonHoverSound } from './VolumeControl.js';

// create variable formattedReadings which pulls from local storage. used throughout the page
const formattedReadings = window.localStorage.getItem('readings')
  ? JSON.parse(window.localStorage.getItem('readings'))
  : [];

/**
 * function name: getStarSign
 * purpose: Takes in month and date and return the starsign
 *
 * @param {string} month: month of the birthday
 * @param {string} date: date of the birthday
 * @return {string} name of the star sign and null if none match
 */
export function getStarSign (month, date) {
  // Convert the month and date strings to numbers
  const monthNum = parseInt(month);
  const dateNum = parseInt(date);

  // Find the corresponding star sign
  for (const starSign of STAR_SIGNS) {
    if (
      (monthNum === starSign.start.month && dateNum >= starSign.start.day) ||
      (monthNum === starSign.end.month && dateNum <= starSign.end.day)
    ) {
      return starSign.name;
    }
  }

  return null;
}

/**
 * function name: createEntries
 * purpose: create list entries(previous readings) and allows it to be selected
 *
 * @type {Element} deleteButton: the delete button
 * @param listItems: the list of readings to be added into the list
 */
function createEntries (listItems) {
  const deleteButton = document.getElementById('delete');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
      if (this.classList.contains('selected')) {
        // If the item is already selected, remove the 'selected' class
        this.classList.remove('selected');
        deleteButton.innerHTML = 'Delete All';
      } else {
        // Remove 'selected' class from all items
        for (let j = 0; j < listItems.length; j++) {
          listItems[j].classList.remove('selected');
        }

        // Add 'selected' class to the clicked item
        this.classList.add('selected');
        console.log('selected:' + this.innerText);
        deleteButton.innerHTML = 'Delete Fortune';
      }
    });
  }
}

/**
 * function name: createCloseButton
 * purpose: Function to create the close button for the expanded content
 *
 * @return {HTMLButtonElement} the button at the end of the reading that closes the expanded content when clicked
 */
function createCloseButton () {
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    const expandedContent = document.getElementById('expanded-content');
    expandedContent.classList.remove('expanded');
  });
  return closeButton;
}

/**
 * function name: openSelectedItem
 * purpose: Function to open the selected list item
 */
function openSelectedItem () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Open the selected item (perform the desired action)
    // For example:
    console.log('Opening:', selectedItem.innerText);
    const text = selectedItem.innerText;

    // Get the expanded content element
    const expandedContent = document.getElementById('expanded-content');

    // Clear the content
    expandedContent.innerHTML = text;

    // Add the close button to the expanded content
    const closeButton = createCloseButton();
    expandedContent.appendChild(closeButton);

    // Add the expanded class to show the expanded content
    expandedContent.classList.add('expanded');
  }
}

/**
 * function name: deleteSelectedItem
 * purpose: Function to delete the selected list item
 */
function deleteSelectedItem () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Delete the selected item from the list
    selectedItem.remove();

    // Remove the corresponding entry from formattedReadings array
    const selectedText = selectedItem.innerText;
    const selectedDate = selectedText.split(': ')[0];
    const selectedReading = selectedText.split(': ')[1];

    for (let i = 0; i < formattedReadings.length; i++) {
      const reading = formattedReadings[i];
      if (reading.date === selectedDate && reading.reading === selectedReading) {
        formattedReadings.splice(i, 1);
        break;
      }
    }

    // Update the formattedReadings in local storage
    window.localStorage.setItem('readings', JSON.stringify(formattedReadings));
  }
}

/**
 * function name: deleteAllItems
 * purpose: When no fortune is selected, deletes all of the stored fortunes
 *
 */
function deleteAllItems () {
  // if there are no readings, nothing happens
  if (formattedReadings.length == 0) {

  } else {
    // clear out the container of readings
    const UL = document.getElementById('reading-list');
    UL.innerHTML = '';
    window.localStorage.removeItem('readings');
  }
}

/**
 * function name: init
 * purpose: runs when page is loaded, populate profile and reading as well as buttons
 */
function init () {
  // profile emotion -- finalemotion from local storage
  const overallEmotion = JSON.parse(window.localStorage.getItem('overallEmotion'));
  const finalemotion = document.getElementById('finalemotion');
  finalemotion.alt = overallEmotion;
  finalemotion.src = overallEmotion !== '' ? `assets/emotion_auras/${overallEmotion}.gif` : '';

  // profile text -- Retrieve the form data from local storage
  let formData = window.localStorage.getItem('formData');

  // Check if data exists in local storage
  if (formData) {
    // Parse the JSON string back into an object
    formData = JSON.parse(formData);
  }

  // set up name, star-sign, and relationship
  const nameElement = document.getElementById('name');
  nameElement.textContent = formData.name;
  const signElement = document.getElementById('star-sign');
  signElement.textContent = getStarSign(formData.month, formData.date);
  const loveElement = document.getElementById('relationship');
  loveElement.textContent = formData.status;

  // Get the <ul> element to populate
  const ulElement = document.getElementById('reading-list');

  // Create an array to store the dynamically created <li> elements
  const liElements = [];

  // go through formattedReadings to add each entry
  for (let i = formattedReadings.length - 1; i >= 0; i--) {
    const reading = formattedReadings[i];
    const liElement = document.createElement('li');

    // add reading and date to the reading list in the correct format
    liElement.innerText = reading.date + ': ' + reading.reading;
    ulElement.appendChild(liElement); // Append to the end
    liElements.push(liElement);
    console.log(reading);
  }

  createEntries(liElements);

  // open button
  const openButton = document.getElementById('open-button');
  openButton.addEventListener('click', openSelectedItem);

  // deletebutton
  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', function () {
    const buttonText = deleteButton.innerHTML;
    // if something is selected, it says delete fortune and delete selected
    if (buttonText == 'Delete Fortune') {
      deleteSelectedItem();
    }
    // if nothing is selected, it says delete all items and it deletes all fortunes
    else {
      deleteAllItems();
    }
  });

  // Go back to welcome page if user clicks home
  const homeButton = document.getElementById('home');
  homeButton.addEventListener('click', function () {
    location.href = 'index.html';
  });

  const volumeControl = document.createElement('volume-control');
  const soundButtonContainer = document.getElementById('sound-button-container');
  soundButtonContainer.appendChild(volumeControl);

  // open button hover sounds
  openButton.addEventListener('mouseenter', playButtonHoverSound);
  // gome button hover sounds
  homeButton.addEventListener('mouseenter', playButtonHoverSound);
  // delete button hover sounds
  deleteButton.addEventListener('mouseenter', playButtonHoverSound);
}

document.addEventListener('DOMContentLoaded', init);
