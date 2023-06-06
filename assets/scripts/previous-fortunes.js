/**
 * File Name: previous-fortunes.js
 * purpose: populate profile and previous fortunes, where user can view, close, delete fortunes
 */
import { EMOTIONS_TABLE, STAR_SIGNS } from './constants.js';
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
 * @param deleteButton: the delete button
 * @input listItems: the list of readings to be added into the list
 */
function createEntries (listItems) {
  let deleteButton = document.getElementById('delete');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
      if (this.classList.contains('selected')) {
        // If the item is already selected, remove the 'selected' class
        this.classList.remove('selected');
        deleteButton.innerHTML= 'Delete All';
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
 * @param closeButton: close button
 * @param expandedContent: expanded fortune
 * @return the button at the end of the reading that closes the expanded content when clicked
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
 * 
 * @param selectedItem: item that has been selected (is selected class)
 * @param text: inner text of the selected item
 * @param expandedContent: expanded fortune
 * @param closeButton: close button created at the end of the reading
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
  } else {
    console.log('No item selected.');
  }
}

/**
 * function name: deleteSelectedItem
 * purpose: Function to delete the selected list item
 * 
 * @param selectedItem: selected item that has the selected class
 * @param selectedText: inner text of selected item
 * @param selectedDate: date of selected reading
 * @param selectedReading: actual reading of selected reading
 * @param reading: looping through formatted reading to find the selected fortune
 */
function deleteSelectedItem () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Delete the selected item from the list
    selectedItem.remove();

    // Remove the corresponding entry from formattedReadings array
    const selectedText = selectedItem.innerText;
    const selectedDate = selectedText.split(': ')[0];
    console.log('date = ' + selectedDate);
    const selectedReading = selectedText.split(': ')[1];
    console.log('reading = ' + selectedReading);

    for (let i = 0; i < formattedReadings.length; i++) {
      const reading = formattedReadings[i];
      console.log('iteration reading = ' + reading.date + reading.reading);
      if (reading.date === selectedDate && reading.reading === selectedReading) {
        formattedReadings.splice(i, 1);
        break;
      }
    }

    // Update the formattedReadings in local storage
    window.localStorage.setItem('readings', JSON.stringify(formattedReadings));
    console.log('Deleted:', selectedText);
  } else {
    console.log('No item selected.');
  }
}

/**
 * function name: deleteAllItems
 * purpose: When no fortune is selected, deletes all of the stored fortunes
 * 
 * @param UL: the whole reading list
 */
function deleteAllItems () {
  // if there are no readings, nothing happens
  if (formattedReadings.length == 0) {
    console.log('nothing to delete');
    return;
  } else {
    // clear out the container of readings
    console.log('at least one item was found');
    const UL = document.getElementById('reading-list');
    UL.innerHTML = '';
    console.log('clearing out LOCAL STORAGE!');
    //window.localStorage.removeItem('readings');
  }
}
/**
 * function name: init
 * purpose: runs when page is loaded, populate profile and reading as well as buttons
 * 
 * @param overallEmotion: emotion retreived from local storage
 * @param finalemotion: finalemotion image
 * @param formData: profile data in local storage from newprofile.js
 * @param nameElement: name in profile
 * @param signElement: sign in profile (use getStarSign function)
 * @param loveElement: relationship status in profile
 * @param ulElement: list element of readings
 * @param liEleemnts: list element array to store readings
 * @param reading: going through formattedReadings to ad them to list
 * @param openButton: open btuton
 * @param deleteButton: delete button
 * @param buttonText: text inside delete button that says delete fortune
 * @param homeButton: home button
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
    console.log(formData);
  } else {
    // Handle the case where no data is stored
    console.log('No form data found.');
  }
  console.log(formData.name);

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

  /**
   * purpose: Function to add a reading to the list
   * 
   * @input reading: the individual reading to be added to the list
   * @param liElement: list element created to be added to the ul
   */
  function addReadingToList (reading) {
    const liElement = document.createElement('li');

    //add reading and date to the reading list in the correct format
    liElement.innerText = reading.date + ': ' + reading.reading;
    ulElement.appendChild(liElement); // Append to the end
    liElements.push(liElement);
  }

  //go through formattedReadings to add each entry
  for (let i = formattedReadings.length - 1; i >= 0; i--) {
    const reading = formattedReadings[i];
    addReadingToList(reading);
    console.log(reading);
  }

  createEntries(liElements); 

  //open button
  const openButton = document.getElementById('open-button');
  openButton.addEventListener('click', openSelectedItem);

  // deletebutton
  const deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', function () {
    const buttonText = deleteButton.innerHTML;
    //if something is selected, it says delete fortune and delete selected
    if (buttonText == 'Delete Fortune') {
      deleteSelectedItem();
    } 
    //if nothing is selected, it says delete all items and it deletes all fortunes
    else {
      deleteAllItems();
    }
  })

  // Go back to welcome page if user clicks home
  const homeButton = document.getElementById('home');
  homeButton.addEventListener('click', function () {
    location.href = 'index.html';
  });
}

document.addEventListener('DOMContentLoaded', init);
