/* show what they chose on the select box */
function showSelectedOption(selectedOption) {
  var selectBox = document.getElementById("status");
  var selectedOption = selectBox.options[selectBox.selectedIndex].text;
  selectBox.innerHTML = '<option value="' + status + '" selected>' + selectedOption + '</option>';
}

  function validateNumberInput(input) {
    var value = input.value;
    
    // Remove any non-digit characters from the input value
    var cleanedValue = value.replace(/\D/g, '');
    
    // Update the input value with the cleaned value
    input.value = cleanedValue;
  }

  // Function to handle form submission
function handleSubmit() {
  // Get input values
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var status = document.getElementById("status").value;

  // Create an object to store the form data
  var formData = {
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
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", handleSubmit);
  