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
const submitBtn = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".btn-close");
const closeBtnTop1 = document.querySelector(".btn-close-top1");
const closeBtnTop2 = document.querySelector(".btn-close-top2");
const modalContent = document.querySelector(".content");
const modalContentValidation = document.querySelector(".content-validation");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


function showErrorMessage(element) {
  // add class to switch to error style
    element.classList.add("data-error");
    //remove class hidden from span to show error message
    element.nextElementSibling.classList.remove("hidden");
  }

function clearError(element) {
  if (element.classList.contains('data-error')){
  element.classList.remove("data-error");
  element.nextElementSibling.classList.add("hidden");
  }
}

function validateFirstName(){
  // get firstname entry
  const firstName = document.getElementById("first");
  // Clear any previous error messages
  clearError(firstName);
  // First name validation
  if (firstName.value.trim().length<2){
  showErrorMessage(firstName);
  return false;
  }
  return true;
}

function validateLastName(){
  // get lastname entry
  const lastName = document.getElementById("last");
  // Clear any previous error messages
  clearError(lastName);
  // First name validation
  if (lastName.value.trim().length<2){
  showErrorMessage(lastName);
  return false;
  }
  return true;
  }

function validateEmail(){
  const email = document.getElementById("email");
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/;
  // Clear any previous error messages
  clearError(email);
  // email validation
  if (!emailRegex.test(email.value)){
  showErrorMessage(email);
  return false;
}
return true;
}

function validateBirthdate(){
  const birthdate = document.getElementById("birthdate");
  const birthdateValue = Date.parse(birthdate.value.trim());
  // Clear any previous error messages
  clearError(birthdate);
  // birthdate validation
  if (isNaN (birthdateValue)){
  showErrorMessage(birthdate);
  return false;
  }
  return true;
}

function validateQuantity(){
  const quantity = document.getElementById("quantity");
  // Clear any previous error messages
  clearError(quantity);
  // quantity validation
  if (!quantity.value.match(/^[0-9]+$/)){
  showErrorMessage(quantity);
  return false;
}
return true;
}

function validateLocation(){
   //get location span
  const locationError = document.querySelector(".location-error");
  // get all location radios checked
  const locationChecked = document.querySelectorAll('input[name="location"]:checked');
  // Clear any previous error messages
  if (locationError.classList.contains("data-error-visible")){
    locationError.classList.remove("data-error-visible");
    locationError.classList.add("hidden");
  }
  // if no radio is checked, show error message
  if (locationChecked.length === 0){
      //remove class hidden from span to show error message
      locationError.classList.add("data-error-visible");
      locationError.classList.remove("hidden");
      return false;
    };
return true;      
};

function validateTerms(){
  // get terms span
  const termsError = document.querySelector(".terms-error");
  // Clear any previous error messages*/
  if (termsError.classList.contains("data-error-visible")){
    termsError.classList.remove("data-error-visible");
    termsError.classList.add("hidden");
  }
  // if no checkbox is checked, show error message
  const checkbox1 = document.getElementById('checkbox1');
  if (checkbox1.checked === false){
    termsError.classList.add("data-error-visible");
    termsError.classList.remove("hidden");
    return false;
  };
return true;      
};

//function to validate the form
function validate() {
let firsNameValid=validateFirstName();
let lastNameValid=validateLastName();
let emailValide = validateEmail();
let birthdateValid=validateBirthdate();
let quantityValid=validateQuantity();
let locationValid=validateLocation();
let termsValid=validateTerms();

  if (firsNameValid && lastNameValid && emailValide && birthdateValid && quantityValid && locationValid && termsValid) {
    return true;  
  }
}

// launch validate layout
function validateModal() {
  modalContent.style.display = "none";
  modalContentValidation.style.display = "block";
}

// Add event listener for form submit
document.addEventListener('submit', (event) =>{
    event.preventDefault();
    if (validate()) {  // Call your actual validation function here
        validateModal();  // Show success message
};
});

// close modal form 
function closeModal() {
  modalContentValidation.style.display = "none";
  modalbg.style.display = "none";
}

closeBtnTop1.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
closeBtnTop2.addEventListener("click", closeModal);

