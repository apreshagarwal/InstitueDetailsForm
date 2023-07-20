// Validation function
function validateForm() {
    var errors = []; // Array to hold validation error messages
  
    var instituteName = document.getElementById('instituteName').value;
    var instituteType = document.getElementById('instituteType').value;
    var registeredWithGovt = document.getElementById('registeredWithGovt').value;
    var panNumber = document.getElementById('panNumber').value;
    var tanNumber = document.getElementById('tanNumber').value;
  
    // Validation for Institute Name
    var instituteNamePattern = /^[A-Za-z\s]+$/; // Alphabets and spaces only
    var instituteNameError = document.getElementById('instituteNameError');
    if (!instituteNamePattern.test(instituteName)) {
      instituteNameError.textContent = "Only alphabets and spaces are allowed for Institute Name.";
      errors.push("Institute Name: Only alphabets and spaces are allowed.");
    } else {
      instituteNameError.textContent = ""; // Clear error message
    }
    
    // Validation for Institute Type
    var allowedInstituteTypes = ["Central Government", "State Government", "Private", "Joint Venture"];
    var instituteTypeError = document.getElementById('instituteTypeError');
    if (!allowedInstituteTypes.includes(instituteType)) {
      instituteTypeError.textContent = "Please select a valid Institute Type.";
      errors.push("Institute Type: Please select a valid option.");
    } else {
      instituteTypeError.textContent = ""; // Clear error message
    }
    
    // Validation for Registered with Govt
    var allowedRegisteredOptions = ["YES", "NO"];
    var registeredWithGovtError = document.getElementById('registeredWithGovtError');
    if (!allowedRegisteredOptions.includes(registeredWithGovt)) {
      registeredWithGovtError.textContent = "Please select a valid option.";
      errors.push("Registered with Govt: Please select a valid option.");
    } else {
      registeredWithGovtError.textContent = ""; // Clear error message
    }

  
    // Validation for PAN Number (if provided)
    var panPattern = /^[A-Z]{5}\d{4}[A-Z]$/;
    var panNumberError = document.getElementById('panNumberError');
    if (panNumber && !panPattern.test(panNumber)) {
      panNumberError.textContent = "Please enter a valid PAN No.";
      errors.push("PAN No.: Please enter a valid PAN No.");
    } else {
      panNumberError.textContent = ""; // Clear error message
    }
  
    // Validation for TAN Number (if provided)
    var tanPattern = /^[A-Z]{4}\d{5}[A-Z]$/;
    var tanNumberError = document.getElementById('tanNumberError');
    if (tanNumber && !tanPattern.test(tanNumber)) {
      tanNumberError.textContent = "Please enter a valid TAN No.";
      errors.push("TAN No.: Please enter a valid TAN No.");
    } else {
      tanNumberError.textContent = ""; // Clear error message
    }
  
    // Display the error messages below the respective input fields
    errors.forEach(function(errorMessage) {
      var errorField = errorMessage.split(":")[0];
      var errorElement = document.getElementById(errorField.toLowerCase() + "Error");
      if (errorElement) {
        errorElement.textContent = errorMessage.split(":")[1];
      }
    });
  
    // Prevent form submission if there are errors
    if (errors.length > 0) {
      return false;
    }
  
    return true; // Allow form submission
  }
  
  // Uppercase conversion on keyup for PAN and TAN inputs
  var panNumberInput = document.getElementById('panNumber');
  panNumberInput.addEventListener('keyup', function () {
    this.value = this.value.toUpperCase();
  });
  
  var tanNumberInput = document.getElementById('tanNumber');
  tanNumberInput.addEventListener('keyup', function () {
    this.value = this.value.toUpperCase();
  });
  