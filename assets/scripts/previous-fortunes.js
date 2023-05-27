/*
 * File Name: previous-fortunes.js
 */
import { EMOTIONS_TABLE, EMOTIONS } from "./constants.js";
//create variable formattedReadings which pulls from local storage. used throughout the page
let formattedReadings = localStorage.getItem('readings')
  ? JSON.parse(localStorage.getItem('readings'))
  : [];

/*
 * function name: getStarSign
 * purpose: take in month and date and return the starsign
 * 
 * @input month: month of the birthday
 * @input date: date of the birthday
 * @param starSigns : starsigns and their dates
 * @param monthNum, dateNum: parsed number version of month and date
 * @param sign, startMonth, startDate, endMonth, endDate: [][] array to find starsign
 * @return sign.name: name of the starsign
 * @return unknown: in case there's nothing
 */
function getStarSign(month, date) {

  // Define the date ranges for each star sign
  let starSigns = [
    { name: 'Aquarius', start: [1, 20], end: [2, 18] },
    { name: 'Pisces', start: [2, 19], end: [3, 20] },
    { name: 'Aries', start: [3, 21], end: [4, 19] },
    { name: 'Taurus', start: [4, 20], end: [5, 20] },
    { name: 'Gemini', start: [5, 21], end: [6, 20] },
    { name: 'Cancer', start: [6, 21], end: [7, 22] },
    { name: 'Leo', start: [7, 23], end: [8, 22] },
    { name: 'Virgo', start: [8, 23], end: [9, 22] },
    { name: 'Libra', start: [9, 23], end: [10, 22] },
    { name: 'Scorpio', start: [10, 23], end: [11, 21] },
    { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
    { name: 'Capricorn', start: [12, 22], end: [12, 31] },
    { name: 'Capricorn', start: [1, 1], end: [1, 19] }
  ];

  // Convert the month and date strings to numbers
  let monthNum = parseInt(month);
  let dateNum = parseInt(date);

  // Find the corresponding star sign
  for (let i = 0; i < starSigns.length; i++) {
    let sign = starSigns[i];
    let startMonth = sign.start[0];
    let startDate = sign.start[1];
    let endMonth = sign.end[0];
    let endDate = sign.end[1];

    if (
      (monthNum === startMonth && dateNum >= startDate) ||
      (monthNum === endMonth && dateNum <= endDate)
    ) {
      return sign.name;
    }
  }
  return 'Unknown';
}

/* 
 * function name: createEntries
 * create list entries(previous readings) and allows it to be selected
 * 
 * @input listItems: the list of readings to be added into the list
 */
function createEntries(listItems) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      if (this.classList.contains('selected')) {
        // If the item is already selected, remove the 'selected' class
        this.classList.remove('selected');
      } else {
        // Remove 'selected' class from all items
        for (let j = 0; j < listItems.length; j++) {
          listItems[j].classList.remove('selected');
        }

        // Add 'selected' class to the clicked item
        this.classList.add('selected');
        console.log('selected:'+ this.innerText);
      }
    });
  }
}

/*
 * function name: createCloseButton
 * Function to create the close button for the expanded content
 * 
 * @return closeButton: the button at the end of the reading that closes the expanded content when clicked
 */
function createCloseButton() {
  let closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    let expandedContent = document.getElementById('expanded-content');
    expandedContent.classList.remove('expanded');
  });
  return closeButton;
}

/*
 * function name: openSelectedItem
 * Function to open the selected list item
 * 
 * @param text: innertext of the reading 
 * @param expanded-content: the expanded box itself
 * @param closeButton: creates the cloesbutton by calling createclosebutton everytime a content is expanded
 * @return closeButton: the button at the end of the reading that closes the expanded content when clicked
 */
function openSelectedItem() {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Open the selected item (perform the desired action)
    // For example:
    console.log('Opening:', selectedItem.innerText);
    let text = selectedItem.innerText;

    // Get the expanded content element
    let expandedContent = document.getElementById('expanded-content');

    // Clear the content
    expandedContent.innerHTML = text;

    // Add the close button to the expanded content
    let closeButton = createCloseButton();
    expandedContent.appendChild(closeButton);

    // Add the expanded class to show the expanded content
    expandedContent.classList.add('expanded');
  } else {
    console.log('No item selected.');
  }
}

/*
 * function name: deleteSelectedItem
 * Function to delete the selected list item
 */
function deleteSelectedItem() {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    // Delete the selected item from the list
    selectedItem.remove();

    // Remove the corresponding entry from formattedReadings array
    let selectedText = selectedItem.innerText;
    let selectedDate = selectedText.split(' - ')[0];
    formattedReadings = formattedReadings.filter(function(reading) {
      return reading.date !== selectedDate;
    });

    // Update the formattedReadings in local storage
    localStorage.setItem('readings', JSON.stringify(formattedReadings));
    console.log('Deleted:', selectedText);
  } else {
    console.log('No item selected.');
  }
}

//runs when opened
document.addEventListener('DOMContentLoaded', function() {
  //profile emotion -- retrieve emotions from local storage
  let emotion1 = localStorage.getItem('emotion1');
  let emotion2 = localStorage.getItem('emotion2');
  emotion1 = JSON.parse(emotion1);
  emotion2 = JSON.parse(emotion2).emotion;
  let overallEmotion = EMOTIONS_TABLE[emotion1][emotion2];
  let finalemotion = document.getElementById('finalemotion');
  finalemotion.alt = overallEmotion;
  finalemotion.src = `assets/emotion_auras/${overallEmotion}.gif`;

  // profile text -- Retrieve the form data from local storage
  let formData = localStorage.getItem('formData');

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

  //set up name, star-sign, and relationship
  let nameElement = document.getElementById('name');
  nameElement.textContent = formData.name;
  let signElement = document.getElementById('star-sign');
  signElement.textContent = getStarSign(formData.month, formData.date);
  let loveElement = document.getElementById('relationship');
  loveElement.textContent = formData.status;

  // Get the <ul> element to populate
  let ulElement = document.getElementById('reading-list');

  // Create an array to store the dynamically created <li> elements
  let liElements = [];

  // Function to add a reading to the list
  function addReadingToList(reading) {
    let liElement = document.createElement('li');
    liElement.innerText = reading.date + ' - ' + reading.reading;
    ulElement.appendChild(liElement); // Append to the end
    liElements.push(liElement);
  }

  for (let reading of formattedReadings) {
    addReadingToList(reading);
    console.log(reading);
  }

  createEntries(liElements); // Move the function call here
  let openButton = document.getElementById('open-button');
  openButton.addEventListener('click', openSelectedItem);
  
  //deletebutton
  let deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', deleteSelectedItem);
});
