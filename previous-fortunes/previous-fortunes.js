const listItems = document.getElementsByClassName('readingEntry');
const expandedContent = document.getElementById('expanded-content');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {
    const selectedItem = this.textContent;
    expandedContent.textContent = selectedItem;
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
  });
}
