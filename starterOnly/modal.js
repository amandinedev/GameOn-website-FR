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
const modalContent = document.querySelector(".content");
const modalContentValidation = document.querySelector(".content-validation");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
submitBtn.addEventListener("click", validateModal);

// validate modal event
function validateModal() {
  modalContent.style.display = "none";
  modalContentValidation.style.display = "block";
}

