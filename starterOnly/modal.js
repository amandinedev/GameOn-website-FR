function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".btn-close-signup");
const closeBtnTop1 = document.querySelector(".btn-close-top1");
const closeBtnTop2 = document.querySelector(".btn-close-top2");
const modalContent = document.querySelector(".content");
const modalContentValidation = document.querySelector(".content-validation");
const indexTopnav = document.querySelector(".topnav");
const indexHeroSection = document.querySelector(".hero-section");
const indexFooter = document.querySelector("footer");

/********* LAUNCH MODAL *************/
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalContent.style.display = "block";
  // turn off index content when modal launch
  indexHeroSection.style.display = "none";
  indexFooter.style.display = "none";
  // turn off Topnav only on larger screens
  if (modalbg.offsetWidth >= 500) {
    indexTopnav.style.display = "none";
  }
}

/********* VALIDATION MODAL *************/
// show error message on invalid input
function showErrorMessage(element, message) {
  // add attribute to switch to error style
  element.parentElement.setAttribute("data-error", message);
  element.parentElement.setAttribute("data-error-visible", "true");
}
// clear error message on input change
function clearError(element) {
  if (element.parentElement.hasAttribute("data-error")) {
    element.parentElement.removeAttribute("data-error");
    element.parentElement.removeAttribute("data-error-visible");
  }
}
// validate firstname
function validateFirstName() {
  // get firstname entry
  const firstName = document.getElementById("first");
  // Clear any previous error messages
  clearError(firstName);
  // First name validation
  if (firstName.value.trim().length < 2) {
    showErrorMessage(
      firstName,
      "Le prénom doit contenir au moins deux caractères"
    );
    return false;
  }
  return true;
}
// validate lastname
function validateLastName() {
  // get lastname entry
  const lastName = document.getElementById("last");
  // Clear any previous error messages
  clearError(lastName);
  // First name validation
  if (lastName.value.trim().length < 2) {
    showErrorMessage(lastName, 
      "Le nom doit contenir au moins deux caractères");
    return false;
  }
  return true;
}
// validate email
function validateEmail() {
  // get email entry
  const email = document.getElementById("email");
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
  // Clear any previous error messages
  clearError(email);
  // email validation
  if (!emailRegex.test(email.value)) {
    showErrorMessage(email, "Veuillez entrer une adresse email valide");
    return false;
  }
  return true;
}
//check age minimum
function validateAge() {
  let birthdate = document.getElementById("birthdate");
    // Get birthdate in milliseconds(UTC)
  let birthdateValue = Date.parse(birthdate.value.trim());
  // Get current time in milliseconds (UTC)
  let currentDateMs = Date.now();
  // Calculate the number of milliseconds in a year
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25; 
  // minimum age set to 13 years, update if needed
  const ageMinYears = 13; 
  const ageMinMs = ageMinYears * msPerYear;
  console.log(ageMinMs);
  // Calculate age in milliseconds
  let diffMs = currentDateMs - birthdateValue;
  console.log(diffMs);
  // Calculate the minimum age in milliseconds
  if (diffMs < ageMinMs) {
    return false;
  }
  return true;
}
// validate birthdate
function validateBirthdate() {
  let birthdate = document.getElementById("birthdate");
  let birthdateValue = Date.parse(birthdate.value.trim());
  // Clear any previous error messages
  clearError(birthdate);
  // birthdate validation
  if (isNaN(birthdateValue)) {
    showErrorMessage(
      birthdate,
      "Veuillez entrer une date de naissance valide."
    );
    return false;
  }
  // minimum age validation
  if (!validateAge()) {
    showErrorMessage(birthdate, "Vous devez avoir plus de 13 ans.");
    return false;
  }
  return true;
}
// validate tournament participations
function validateQuantity() {
  // get quantity input
  const quantity = document.getElementById("quantity");
  // Clear any previous error messages
  clearError(quantity);
  // quantity validation
  if (!quantity.value.match(/^[0-9]+$/)) {
    showErrorMessage(quantity, "Veuillez entrer un chiffre entre 0 et 99");
    return false;
  }
  return true;
}
// validate location
function validateLocation() {
  const location = document.getElementById("location1");
  // get all location radios checked
  const locationChecked = document.querySelectorAll(
    'input[name="location"]:checked'
  );
  // Clear any previous error messages
  clearError(location);
  // if no radio is checked, show error message
  if (locationChecked.length === 0) {
    showErrorMessage(location, "Veuillez sélectionner une ville.");
    return false;
  }
  return true;
}
// validate Terms
function validateTerms() {
  const termsCheckbox = document.getElementById("checkbox1");
  // Clear any previous error messages
  clearError(termsCheckbox);
  // if no checkbox is checked, show error message
  if (termsCheckbox.checked === false) {
    showErrorMessage(
      termsCheckbox,
      "Veuillez accepter les conditions d'utilisation."
    );
    return false;
  }
  return true;
}
//function to validate the form
function validate() {
  let firsNameValid = validateFirstName();
  let lastNameValid = validateLastName();
  let emailValid = validateEmail();
  let birthdateValid = validateBirthdate();
  let quantityValid = validateQuantity();
  let locationValid = validateLocation();
  let termsValid = validateTerms();
  //validation rules
  if (
    firsNameValid &&
    lastNameValid &&
    emailValid &&
    birthdateValid &&
    quantityValid &&
    locationValid &&
    termsValid
  ) {
    return true;
  }
}

/********* LAUNCH MODAL VALIDATED MESSAGE*************/
// launch validate layout
function validateModal() {
  modalContent.style.display = "none";
  modalContentValidation.style.display = "block";
}
// Reset each input field
function resetForm() {
  // Get all form inputs
  const inputs = document.querySelectorAll(".formData input");
  // Clear the input value
  inputs.forEach(input => {
    input.value = "";
    if (input.checked = true) {
      input.checked = false;
    }
  });
}

/********* SUBMIT EVENT LISTENER *************/
// Add event listener for form submit
document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validate()) {
    // Call validation function
    validateModal(); // Show success message
    resetForm(); // Reset form values
  };
});

/********* CLOSE MODAL *************/
// close modal form
function closeModal() {
  modalContentValidation.style.display = "none";
  if (modalbg.offsetWidth >= 801) {
    indexHeroSection.style.display = "grid";
  } else {
    indexHeroSection.style.display = "block";
  }
  modalbg.style.display = "none";
  indexTopnav.style.display = "block";
  indexFooter.style.display = "block";
}
closeBtnTop1.addEventListener("click", closeModal);
closeBtnTop2.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);