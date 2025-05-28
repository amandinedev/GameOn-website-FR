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
const closeBtn = document.querySelector(".btn-close-signup");
const modalContent = document.querySelector(".content");
const modalContentValidation = document.querySelector(".content-validation");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// //launch modal form validation
// submitBtn.addEventListener("click", validateModal);

//function to validate the form
function validate() {
  //validation rules
  return true;
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
    }
});


// close modal form
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalContentValidation.style.display = "none";
}
