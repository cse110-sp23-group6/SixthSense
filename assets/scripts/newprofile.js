// Document Selectors
const yearBox = document.getElementById('year')
const dateBox = document.getElementById('date')
const monthBox = document.getElementById('month')
const nameBox = document.getElementById('name')
const statusBox = document.getElementById('status')
const submitButton = document.getElementById('submit')
const homeButton = document.getElementById('home')
// Start off disabled to not allow empty input
submitButton.disabled = true

/**
 * Function that checks if the user correctly typed the right input. If not the
 * submit button will remain disabled. When all 5 input types are satisfied,
 * the submit button gets enabled.
 *
 * @param {event} e - the event that triggered the function call
 */
function validateInput (event) {
  const months = /^(0*([1-9]|1[0-2]))$/
  const days = /^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/
  const years = /^[0-9]/
  const letters = /^[a-zA-Z\s]+$/
  const id = event.target.getAttribute('id')
  const input = event.target.value

  // Checks validity of each input
  const yearValid = yearBox.value.match(years)
  const dateValid = dateBox.value.match(days)
  const monthValid = monthBox.value.match(months)
  const nameValid = nameBox.value.match(letters)

  const statusValue = statusBox.value

  // Check if Name input is not valid
  if (id === 'name' && !nameValid) {
    submitButton.disabled = true
  }

  // Check if Month input is not valid
  if (id === 'month' && !monthValid) {
    submitButton.disabled = true
  }
  
  // Check if Date input is not valid
  if (id === 'date' && !dateValid) {
    submitButton.disabled = true
  }

  // Check if Year input is not valid
  if (id === 'year' && !yearValid) {
    submitButton.disabled = true
  }

  // If everything is inputed correctly, allow for submitting
  if (yearValid && dateValid && monthValid && nameValid && statusValue !== '') {
    submitButton.disabled = false
  }
}

/**
 * Function that stores the create profile information into JSON format to save.
 * Also redirects the user to the welcome page.
 */
function handleSubmit () {
  // Get input values
  const name = nameBox.value
  const year = yearBox.value
  const date = dateBox.value
  const month = monthBox.value
  const status = statusBox.value

  // Create an object to store the form data
  const formData = {
    name,
    year,
    date,
    month,
    status
  }

  // Store the form data in local storage
  localStorage.setItem('formData', JSON.stringify(formData))
  location.href = 'index.html'
}

// Attach event listener to the buttons
yearBox.addEventListener('change', validateInput)
dateBox.addEventListener('change', validateInput)
monthBox.addEventListener('change', validateInput)
nameBox.addEventListener('change', validateInput)
statusBox.addEventListener('change', validateInput)
submitButton.addEventListener('click', handleSubmit)

// Go back to welcome page if user clicks home
homeButton.addEventListener('click', function () {
  location.href = 'index.html'
})
