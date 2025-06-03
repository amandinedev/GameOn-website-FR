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
const indexTopnav = document.getElementById("myTopnav");
const indexHeroSection = document.querySelector(".hero-section");
const indexFooter = document.querySelector("footer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // turn off index content when modal launch
  indexHeroSection.style.display = "none"
  indexFooter.style.display = "none";
  // turn off Topnav only on larger screens
  if (window.innerWidth >= 768){
  indexTopnav.style.display = "none";
  }
}


