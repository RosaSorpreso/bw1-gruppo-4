/*const stars = document.querySelectorAll(".star");
let currentRating = 0;
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    currentRating = index + 1;
    updateRating();
  });
});

function updateRating() {
  console.log("Rating", currentRating);
}*/

// Funzione per gestire il click su una stella
function handleClick(event) {
  const clickedStar = event.target;
  const stars = document.querySelectorAll(".star");

  // Imposta il colore delle stelle precedenti a quella cliccata
  let foundClickedStar = false;
  for (const star of stars) {
    if (star === clickedStar) {
      foundClickedStar = true;
    }
    if (foundClickedStar) {
      star.querySelector(".img").setAttribute("fill", "#00FFFF"); // Colore azzurro per la stella cliccata e quelle precedenti
    } else {
      star.querySelector(".img").setAttribute("fill", "#0b113b"); // Colore predefinito per le stelle successive a quella cliccata
    }
  }
}

// Aggiungi gestore di eventi a tutte le stelle
const stars = document.querySelectorAll(".star");
for (const star of stars) {
  star.addEventListener("click", handleClick);
}

/* PROBLEMI DELLE STELLE:
-->   stelle al contrario
-->   colore stelle ---> over progressivo
-->   arrivano in ritardo ---->  CSS fill 0.2s;*/

function changeColor(event) {
  // Ottieni l'elemento SVG
  const star = event.target;

  // Cambia il colore della stella cliccata in rosso
  star.style.fill = "red";

  // Seleziona tutte le stelle precedenti e cambiale anch'esse in rosso
  let previousStars = star.previousElementSibling;
  while (previousStars) {
    previousStars.style.fill = "red";
    previousStars = previousStars.previousElementSibling;
  }
}
