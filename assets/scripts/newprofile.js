import { playButtonHoverSound } from './VolumeControl.js';

/**
 * file name: newprofile.js
 * purpose: newprofile page to get input and send it to local storage as new user info
 *
 * @const yearBox: input box for year
 * @const dateBox: input box for date
 * @const monthBox: input box for month
 * @const nameBox: input box for name
 * @const statusBox: input box for relationship status
 * @const submitButton: button to submit info, disabled until info is complete and validated
 * @const homeButton: home button
 */

// Document Selectors
const yearBox = document.getElementById('year');
const dateBox = document.getElementById('date');
const monthBox = document.getElementById('month');
const nameBox = document.getElementById('name');
const statusBox = document.getElementById('status');
const submitButton = document.getElementById('submit');
const homeButton = document.getElementById('home');
// Start off disabled to not allow empty input
submitButton.disabled = true;

/**
 * function name: validateInput
 * purpose: Function that checks if the user correctly typed the right input. If not the
 * submit button will remain disabled. When all 5 input types are satisfied,
 * the submit button gets enabled.
 *
 * @const months: month values for validation
 * @const days: day values for validation
 * @const years: year value for validation
 * @const letters: letter values for validation
 * @const id: id attribute
 * @const yearValid: check validity of year
 * @const dateValid: check validity of date
 * @const monthValid: check validity of month
 * @const namevalid: check validity of name
 * @const statusValue: value of the statusBox
 * @param {event} e - the event that triggered the function call
 */
function validateInput (event) {
  const months = /^(0*([1-9]|1[0-2]))$/;
  const days = /^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;
  const years = /^[0-9]/;
  const letters = /^[a-zA-Z\s]+$/;
  const id = event.target.getAttribute('id');

  // Checks validity of each input
  const yearValid = yearBox.value.match(years);
  const dateValid = dateBox.value.match(days);
  const monthValid = monthBox.value.match(months);
  const nameValid = nameBox.value.match(letters);

  const statusValue = statusBox.value;

  // Check if Name input is not valid
  if (id === 'name' && !nameValid) {
    submitButton.disabled = true;
  }

  // Check if Month input is not valid
  if (id === 'month' && !monthValid) {
    submitButton.disabled = true;
  }

  // Check if Date input is not valid
  if (id === 'date' && !dateValid) {
    submitButton.disabled = true;
  }

  // Check if Year input is not valid
  if (id === 'year' && !yearValid) {
    submitButton.disabled = true;
  }

  // If everything is inputed correctly, allow for submitting
  if (yearValid && dateValid && monthValid && nameValid && statusValue !== '') {
    submitButton.disabled = false;
  }
}

/**
 * function name: handleSubmit
 * purpose: Function that stores the create profile information into JSON format to save.
 * Also redirects the user to the welcome page.
 *
 * @const name: input value in name box
 * @const year: input value in year box
 * @const date: input value in date box
 * @const month: input value in month box
 * @const status: input value in status box (selection dropdown)
 * @const formData: all of the input data combined to be updated on localstorage
 */
function handleSubmit () {
  // Get input values
  const name = nameBox.value;
  const year = yearBox.value;
  const date = dateBox.value;
  const month = monthBox.value;
  const status = statusBox.options[statusBox.selectedIndex].text;

  // Create an object to store the form data
  const formData = {
    name,
    year,
    date,
    month,
    status
  };

  // Store the form data in local storage
  window.localStorage.setItem('formData', JSON.stringify(formData));
  location.href = 'index.html';
}

// Attach event listener to the buttons
yearBox.addEventListener('change', validateInput);
dateBox.addEventListener('change', validateInput);
monthBox.addEventListener('change', validateInput);
nameBox.addEventListener('change', validateInput);
statusBox.addEventListener('change', validateInput);
submitButton.addEventListener('click', handleSubmit);

const volumeControl = document.createElement('volume-control');
const soundButtonContainer = document.getElementById('sound-button-container');
soundButtonContainer.appendChild(volumeControl);

// Go back to welcome page if user clicks home
homeButton.addEventListener('click', function () {
  location.href = 'index.html';
});

// hover sound for home button
homeButton.addEventListener('mouseenter', playButtonHoverSound);

// hover sound for submit button
submitButton.addEventListener('mouseenter', playButtonHoverSound);
