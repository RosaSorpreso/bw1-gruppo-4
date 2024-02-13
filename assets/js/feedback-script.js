// Funzione per gestire il click su una stella
function handleClick(event) {
  const clickedStar = event.target;
  const stars = document.querySelectorAll(".star path");

  let foundClickedStar = false;
  for (const star of stars) {
    if (star === clickedStar) {
      foundClickedStar = true;
    }
    if (foundClickedStar) {
      star.setAttribute("fill", "#3a2c7a");
    } else {
      star.setAttribute("fill", "#00FFFF");
    }
  }
}

const starPaths = document.querySelectorAll(".star path");
for (const path of starPaths) {
  path.addEventListener("click", handleClick);
}
