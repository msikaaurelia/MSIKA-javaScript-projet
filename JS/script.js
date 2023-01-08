//Dark mode

const body = document.querySelector("body");
const cont = document.querySelector(".main-container");
const button = document.querySelector("#button");

console.log(body)

console.log(body.classList.contains("dark"))

button.addEventListener("click", function() {

    if (cont.classList.contains("light")) {
        cont.classList.remove("light");
        cont.classList.add("dark");
        button.innerText = "Mode ☀️";
    } else {
        cont.classList.add("light");
        cont.classList.remove("dark");
        button.innerText = "Mode 🌚";
    }
    
});


/*//Couleur h1

const h1 = document.querySelector("h1");
//const button = document.querySelector("button");

h1.addEventListener("click", function() {

  h1.style.color = "#47C7FF80";
});*/


const h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
  if (h1.style.color === "pink") {
    h1.style.color = "black";  
  } else {
    h1.style.color = "pink";  
  }
  
});