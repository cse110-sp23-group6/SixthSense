// Document Selectors
let yearBox = document.getElementById('year');
let dateBox = document.getElementById('date');
let monthBox = document.getElementById('month');
let nameBox = document.getElementById('name');
let statusBox = document.getElementById('status');
let submitButton = document.getElementById('submit');
let homeButton = document.getElementById('home');
// Start off disabled to not allow empty input
submitButton.disabled = true;

/**
 * Function that checks if the user correctly typed the right input. If not the
 * submit button will remain disabled. When all 5 input types are satisfied,
 * the submit button gets enabled. 
 * 
 * @param {event} e - the event that triggered the function call
 */
function validateInput(event) {
  let numbers = /^[0-9]/;
  let letters = /^[a-zA-Z\s]+$/;
  let id = event.target.getAttribute('id');
  let input = event.target.value;

  // Check if Name input is not valid
  if (id == 'name' && !input.match(letters)) {
    submitButton.disabled = true;
  }
  
  // Check if Birthday inputs are not valid
  if (id != 'name' && id != 'status' && !input.match(numbers)) {
    submitButton.disabled = true;
  }

  let yearValid = yearBox.value.match(numbers);
  let dateValid = dateBox.value.match(numbers);
  let monthValid = monthBox.value.match(numbers);
  let nameValid = nameBox.value.match(letters);
  let statusValue = statusBox.value;

  // If everything is inputed correctly, allow for submitting
  if (yearValid && dateValid && monthValid && nameValid && statusValue != "") {
    submitButton.disabled = false;
  }
}

/**
 * Function that stores the create profile information into JSON format to save.
 * Also redirects the user to the welcome page.
 */
function handleSubmit() {
  // Get input values
  let name = nameBox.value;
  let year = yearBox.value;
  let date = dateBox.value;
  let month = monthBox.value;
  let status = statusBox.value;

  // Create an object to store the form data
  let formData = {
    name: name,
    year: year,
    date: date,
    month: month,
    status: status
  };

  // Store the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));
  location.href = 'welcome-1.html';
}

// Attach event listener to the buttons
yearBox.addEventListener('change', validateInput);
dateBox.addEventListener('change', validateInput);
monthBox.addEventListener('change', validateInput);
nameBox.addEventListener('change', validateInput);
statusBox.addEventListener('change', validateInput);
submitButton.addEventListener('click', handleSubmit);

// Go back to welcome page if user clicks home
homeButton.addEventListener('click', function () {
  location.href = 'welcome-1.html';
})
  