let formattedReadings = localStorage.getItem('formattedReadings')
  ? JSON.parse(localStorage.getItem('formattedReadings'))
  : [];

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

// Function to create the close button for the expanded content
function createCloseButton() {
  let closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', closeExpandedContent);
  return closeButton;
}

// Function to close the expanded content
function closeExpandedContent() {
  let expandedContent = document.getElementById('expanded-content');
  expandedContent.classList.remove('expanded');
}

// Function to open the selected list item
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

document.addEventListener('DOMContentLoaded', function() {
  /*// Check if formatted readings exist in local storage
  var formattedReadings = localStorage.getItem('formattedReadings')
    ? JSON.parse(localStorage.getItem('formattedReadings'))
    : [];*/

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

  createEntries(liElements); // Move the function call here

  
  let openButton = document.getElementById('openButton');
  openButton.addEventListener('click', openSelectedItem);

  let deleteButton = document.getElementById('delete');
  deleteButton.addEventListener('click', deleteSelectedItem);
});