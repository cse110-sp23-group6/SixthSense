/*
 * File Name: previous-fortunes.js
 */
//create variable formattedReadings which pulls from local storage. used throughout the page
let formattedReadings = localStorage.getItem('formattedReadings')
  ? JSON.parse(localStorage.getItem('formattedReadings'))
  : [];
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
    localStorage.setItem('formattedReadings', JSON.stringify(formattedReadings));
    console.log('Deleted:', selectedText);
  } else {
    console.log('No item selected.');
  }
}
//runs when opened
document.addEventListener('DOMContentLoaded', function() {
  //profile stuff
  // Retrieve the form data from local storage
  const storedData = localStorage.getItem('formData');
  // Check if data exists in local storage
  if (storedData) {
    // Parse the JSON string back into an object
    const formData = JSON.parse(storedData);
    // Access the individual form fields
    const name = formData.name;
    const year = formData.year;
    const date = formData.date;
    const month = formData.month;
    const status = formData.status;
  console.log(name, year, date, month, status);
  } else {
    // Handle the case where no data is stored
    console.log('No form data found.');
  }
  // Get the <ul> element to populate
  let ulElement = document.getElementById('readingList');
  // Create an array to store the dynamically created <li> elements
  let liElements = [];
  // Function to add a reading to the list
  function addReadingToList(reading) {
    let liElement = document.createElement('li');
    liElement.innerText = reading.date + ' - ' + reading.reading;
    ulElement.appendChild(liElement); // Append to the end
    liElements.push(liElement);
  }
  // Check if there is a new reading in local storage
  if (localStorage.getItem('newReading')) {
    let newReading = JSON.parse(localStorage.getItem('newReading'));
    // Check if the new reading has the correct properties
    if (newReading.hasOwnProperty('date') && newReading.hasOwnProperty('reading')) {
      // Add the new reading to the beginning of the formattedReadings array
      formattedReadings.unshift(newReading);
      // Remove the new reading from local storage
      localStorage.removeItem('newReading');
      // Update the formattedReadings in local storage
      localStorage.setItem('formattedReadings', JSON.stringify(formattedReadings));
    }
  }
  // Loop through the existing formatted readings and add them to the list in order
  for (var i = 0; i < formattedReadings.length; i++) {
    addReadingToList(formattedReadings[i]);
    console.log(formattedReadings[i]);
  }
  createEntries(liElements); 
  //openbutton
  let openButton = document.getElementById('openButton');
  openButton.addEventListener('click', openSelectedItem);
  //deletebutton
  let deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', deleteSelectedItem);
});