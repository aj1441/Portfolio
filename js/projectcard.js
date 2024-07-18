// import projectData from "../data/data.js";
// console.log(projectData);


// projectData.forEach((item)=> {
//     console.log(item.title);
// })

// const container = document.getElementById("projectCards");

// function createCards() {
//     for (let item of projectData) {
//         let projectTitle = item.title;
//         console.log(projectTitle);
//         let cardContainer = document.createElement("div");
//         cardContainer.className = "card";
//         cardContainer.textContent= `<div class="card-title" id="projectCards">
//      <h4 class="project-title">${item.title}</h4>
//      <img class="card-image">${item.image}</img>
//      <p class="card-description">${item.description}</p>
//      <button class="card-link">${item.link}</button>`

//     //  console.log(item.title)
    
//      container.appendChild(cardContainer);
//     }
// }

// createCards()

// function createCards()

// function forEachTest (){
// projectData.forEach((item) => {
//     const card = document.createElement("div");
//     card.classList.add("card-body");

//     const cardTitle = document.createElement("h4");
//     cardTitle.textContent = item.title;

//     const cardImage = document.createElement("img");
//     cardTitle.textContent = item.image;

//     const cardDescription = document.createElement("p");
//     cardTitle.textContent = item.description;

//     const cardLink = document.createElement("button");
//     cardTitle.textContent = item.link;

//     card.appenChild(cardTitle);
//     card.appenChild(cardImage);
//     card.appenChild(cardDescription);
//     card.appenChild(cardLink);
//
//      return card;
//      }

//     const content = '
//     <div class ="card">
//     <div class="card-title" id="projectCards">
//     <h4 src="${item.title}" class="project-title"></h4>
//     <img src="${item.image}" class="card-image"></img>
//     <p src="${item.description}" class="card-description"></p>
//     <button src="${item.link}" class="card-link"></button>
//     </div>';
//     containter.textContent += content;
// });
// }
// forEachTest()