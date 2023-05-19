/* show what they chose on the select box */
function showSelectedOption(selectedOption) {
    var selectBox = document.getElementById("status");
    var selectedText = selectBox.options[selectBox.selectedIndex].text;
    selectBox.options[selectBox.selectedIndex].innerHTML = selectedText + " (selected)";
  }

  function validateNumberInput(input) {
    var value = input.value;
    
    // Remove any non-digit characters from the input value
    var cleanedValue = value.replace(/\D/g, '');
    
    // Update the input value with the cleaned value
    input.value = cleanedValue;
  }
  