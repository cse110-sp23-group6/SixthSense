/* show what they chose on the select box */
function showSelectedOption(selectedOption) {
  let selectBox = document.getElementById("status");
  let selectedOption = selectBox.options[selectBox.selectedIndex].text;
  selectBox.innerHTML = '<option value="' + status + '" selected>' + selectedOption + '</option>';
}

function validateNumberInput(input) {
  let value = input.value;

  // Remove any non-digit characters from the input value
  let cleanedValue = value.replace(/\D/g, '');

  // Update the input value with the cleaned value
  input.value = cleanedValue;
}

// Function to handle form submission
function handleSubmit() {
  // Get input values
  let name = document.getElementById("name").value;
  let year = document.getElementById("year").value;
  let date = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let status = document.getElementById("status").value;

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
}

// Attach event listener to the submit button
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", handleSubmit);
