// Quand on clique sur un Bouton :
// Des rectangles sont animés
// L'animation fonctionne dans les deux sens

// I Créer les blocs en HTML
// II Créer les styles CSS (couleur sur nos blocs, transition CSS)
// III JS : 
// 1. Selectionner le bouton + cartes/rectangles
// 2. Implémenter l'ecoute d'un évènement clique
// 3. Action qui s'applique / Fonction

/*const button = document.querySelector("#other_pics");
// const container = document.querySelector(".container");
const cards = document.querySelectorAll(".cards");

  console.log(button);
  console.log(document.querySelector(".cards"));
  console.log(document.querySelectorAll(".cards"));

button.addEventListener("click", function () {
    
    cards[0].classList.toggle("active");
    cards[1].classList.toggle("active");
    cards[2].classList.toggle("active");
    cards[3].classList.toggle("active");
    cards[4].classList.toggle("active");

    /*for (i = 0; i < 6; i++) {
      cards[i].classList.toggle("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }*/
//});




//Je comprends pas pourquoi ça ne marche pas


/*const body = document.querySelector("body");
const button = document.querySelector("#other_pics");

button.addEventListener("click", function() {

    if (body.classList.contains(".pics_appearing")) {
        body.classList.remove(".pics_appearing");
        body.classList.add(".pics_disappearing");
    } else {
        body.classList.add(".pics_appearing");
        body.classList.remove(".pics_disappearing");
    }
    
});*/