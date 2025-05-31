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
const modalContent = document.querySelector(".content");
const modalContentValidation = document.querySelector(".content-validation");
const indexTopnav = document.querySelector(".topnav");
const indexHeroSection = document.querySelector(".hero-section");
const indexFooter = document.querySelector("footer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalContent.style.display = "block";
  // turn off index content when modal launch
  indexHeroSection.style.display = 'none';
  indexFooter.style.display = 'none';
  // turn off Topnav only on larger screens
  if (modalbg.offsetWidth >= 500){
  indexTopnav.style.display = 'none';
  }
}

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
    if (validate()) {  // Call validation function 
        validateModal();  // Show success message
    }
});

// close modal form
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalContentValidation.style.display = "none";
  modalbg.style.display = "none";
  indexTopnav.style.display = 'block';
  indexHeroSection.style.display = 'grid';
  indexFooter.style.display = 'block';

}

