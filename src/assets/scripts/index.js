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

// event listeners for buttons to traverse pages
userButton.addEventListener('click', function () {
  location.href = 'newprofile.html';
});

todayButton.addEventListener('click', function () {
  location.href = 'choose-your-fortune.html';
});

previousButton.addEventListener('click', function () {
  location.href = 'previous-fortunes.html';
});
