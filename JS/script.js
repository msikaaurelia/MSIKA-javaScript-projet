const body = document.querySelector("body");
const cont = document.querySelector(".main-container");
//const h1 = document.querySelector("h1"); //variable avec const --> un variant qui ne peut pas être modifié par la suite
const button = document.querySelector("#button");

console.log(body)


//const h1 = document.querySelector('h1');
//console.log(document)

//body.classList.add("dark");

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
    
})

const goodvisit = document.querySelector(".good-visit");

button.addEventListener("click", function() {

    if (goodvisit.classList.contains(".a_class")) {
        goodvisit.classList.remove(".a_class");
        goodvisit.classList.add(".a_js");
    } else {
        goodvisit.classList.add(".a_class");
        goodvisit.classList.remove(".a_js");
    }
    
})


const h3 = document.querySelector(".photographie");

button.addEventListener("click", function() {

    if (document.getElementsByClassName("photographie").style.color === "black") {
        document.getElementsByClassName("photographie").style.color = "pink";
    } else {
        document.getElementsByClassName("photographie").style.color = "black";
    }
    
})