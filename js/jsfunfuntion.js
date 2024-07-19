const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

// document.getElementsByClassName(".burger i").addEventListener("click", showHamburger());

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
};

const colorFormButton = document.getElementById("js-colors-btn");
const colorForm = document.getElementById("color-fun-form");
colorFormButton.addEventListener("click", toggleColorForm);


function toggleColorForm() {
    document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
  }

//colors
function changeColor(colorFromUser, type) {
    console.log(colorFromUser, type)
    if(type === "background"){
      colorForm.style.backgroundColor = colorFromUser;
    } else {
      colorForm.style.color = colorFromUser;
    }
  }
  
  
  //submit functions
  function onColorFormSubmit(event) {
    console.log("color form submitted");
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
      console.log(dataObject);
      colorForm.reset();
      //above is boiler plate code
      changeColor(dataObject.colorSelect, dataObject.typeSelect)
  }
  