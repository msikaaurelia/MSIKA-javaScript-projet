// Quand on clique sur un Bouton :
// Des rectangles sont animés
// L'animation fonctionne dans les deux sens

// I Créer les blocs en HTML
// II Créer les styles CSS (couleur sur nos blocs, transition CSS)
// III JS : 
// 1. Selectionner le bouton + cartes/rectangles
// 2. Implémenter l'ecoute d'un évènement clique
// 3. Action qui s'applique / Fonction

const button = document.querySelector("#other_pics");
// const container = document.querySelector(".container");
const cards = document.querySelectorAll('.cards');

  console.log(button);
  console.log(document.querySelector('.cards'));
  console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {
  
    for (i = 0; i < 6; i++) {
      cards[i].classList.toggle("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
});