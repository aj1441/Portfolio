import projectData from "../data/data.js";
// console.log(projectData);
console.log("hello");

const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

// document.getElementsByClassName(".burger i").addEventListener("click", showHamburger());
const burgerButton= document.querySelector("button.burger");
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}
burgerButton.addEventListener("click", showHamburger);



// const container = document.getElementById("projectCards");

// function createCards () {
//     for (let item of projectData) {
//         let cardContainer = document.createElement("div");
//         cardContainer.className = "card-wrapper";
//         cardContainer.innerHTML= `<div class="card" id="card">
//      <h4 class="project-title">${item.title}</h4>
//      <img class="card-image" src=${item.image} alt="${item.image}">
//      <p class="card-description">${item.description}</p>
//      <a class="card-link" href="${item.link}">View the Site</a>`
    
//      container.appendChild(cardContainer);
//     }
// }

// createCards ()

// const colorFormButton = document.querySelector(".js-colors-btn");
// const colorForm = document.getElementById("color-fun-form");
// colorFormButton.addEventListener("click", toggleColorForm);


// function toggleColorForm() {
//     document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
//   }

//colors
// function changeColor(colorFromUser, type) {
//     console.log(colorFromUser, type)
//     if(type === "background"){
//       colorForm.style.backgroundColor = colorFromUser;
//     } else {
//       colorForm.style.color = colorFromUser;
//     }
//     // const color = document.getElementById("color").value;
//   // colorForm.style.backgroundColor = colorFromUser;
    
//   }
  
  
//   //submit functions
//   function onColorFormSubmit(event) {
//     console.log("color form submitted");
//       event.preventDefault();
//       const data = new FormData(event.target);
//       const dataObject = Object.fromEntries(data.entries());
//       console.log(dataObject);
//       colorForm.reset();
//       //above is boiler plate code
//       changeColor(dataObject.colorSelect, dataObject.typeSelect)
//   }
  

// const cardContainer = document.getElementById("projectCards");
// function createCards() {
// projectData.forEach((item)=> {

//   console.log(item.title);
// console.log(item.image);
// console.log(item.description);
// console.log(item.link);

// })
// }
// createCards()

//Pseudocode JS Page-----------------------------------------------------------
//Display time in NYC  
//ONCLICK
    //display back in DOM the current time in NYC
    //declare a global CONT variable for button
    // need to be able to toggle on and off
    //declare a global variable for getElementById
      //need to get the date and time from nyc to store in a local variable inside of the function
      //declare a Local Varible to store only the time
      //use variable in textcontent to display back to the global variable for getElementByID


//ONClICK Display form to change the colors-----------------------------
  //declare a GLOBAL CONST variable for the button
  //need to be able to toggle on and off
  //declare a GLOBAL CONST variable for getElementById
    //create a FUNCTION to change the color with 2 parameters (colorFromUser, Type)
      //IF statement for type === to color then display color back 
      //Else display back background-color
      //