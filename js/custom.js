// import projectData from "../data/data.js";
// console.log(projectData);

console.log("hello");

const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

// document.getElementsByClassName(".burger i").addEventListener("click", showHamburger());

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
};


console.log(projectData);

const container = document.getElementById("projectCards");

function createCards () {
    for (let item of projectData) {
        let cardContainer = document.createElement("div");
        cardContainer.className = "card";
        cardContainer.innerHTML= `<div class="card" id="projectCards">
     <h4 class="project-title">${item.title}</h4>
     <img class="card-image" src=${item.image} alt="${item.image}">
     <p class="card-description">${item.description}</p>
     <a class="card-link" href="${item.link}">View the Site</a>`
    
     container.appendChild(cardContainer);
    }
}

createCards ()

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