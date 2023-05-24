document.addEventListener('DOMContentLoaded', function() {
  // Check if readings exist in local storage
  if (localStorage.getItem('readings')) {
    // Retrieve the readings from local storage
    let readings = JSON.parse(localStorage.getItem('readings'));

    // Get the <ul> element to populate
    let ulElement = document.getElementById('readingList');

    // Create an array to store the dynamically created <li> elements
    let liElements = [];

    // Loop through the readings and create <li> elements
    readings.forEach(function(reading) {
      let liElement = document.createElement('li');
      liElement.innerText = reading.date + ' - ' + reading.reading;
      ulElement.appendChild(liElement);

      // Store the dynamically created <li> elements in the array
      liElements.push(liElement);
    });

    createEntries(liElements); // Move the function call here
  }
});

function createEntries(listItems) {
  const expandedContent = document.getElementById('expanded-content');

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      const selectedItem = this.textContent;
      expandedContent.textContent = selectedItem;
      expandedContent.style.height = '0'; // Set initial height to 0
      expandedContent.classList.add('expanded');

      // Create and append the close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');
      expandedContent.appendChild(closeButton);

      // Add event listener to the close button
      closeButton.addEventListener('click', function() {
        expandedContent.classList.remove('expanded');
        expandedContent.removeChild(closeButton); // Remove the close button
      });

      // Trigger the animation after a short delay to allow for height update
      setTimeout(() => {
        expandedContent.style.height = '65vh'; // Set the final expanded height
      }, 10);
    });
  }  
}
