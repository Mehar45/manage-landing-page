// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navDisplay = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-close");
  navDisplay.classList.toggle("hidden");
});


// testimonial slider
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const card = document.querySelectorAll(".card");
let index = 0;
let previousNum = 0;

// Event on testimonial's next button
next.addEventListener("click", ()=> {
  if(index < 3){
    if(card[index].style.display === "block"){
      card[index].setAttribute("style","display:none");
      index++;
    }
    if(card[index].style.display === "none")
      card[index].setAttribute("style","display:block");
  }
  else {
    index = 0;
    card[3].setAttribute("style","display:none");
    card[0].setAttribute("style","display:block");
  }
});

// Event on testimonial's previous button
previous.addEventListener("click", ()=>{
  if(index < 4 && index > 0){
    if(card[index].style.display === "block"){
      card[index].setAttribute("style","display:none");
      index--;
    }
    if(card[index].style.display === "none") 
      card[index].setAttribute("style","display:block");
  }
  else {
    index = 3;
    card[3].setAttribute("style","display:block");
    card[0].setAttribute("style","display:none");
  }
});

//Event on form
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  form.useremail.value = "";
});