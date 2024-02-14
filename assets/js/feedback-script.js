// Funzione per gestire il click su una stella
function handleClick(event) {
  const clickedStar = event.target;
  const stars = document.querySelectorAll(".star path");
  const clickedStarIndex = Array.from(stars).findIndex((s) => s == clickedStar);

  stars.forEach((star, i) => {
    let color = i <= clickedStarIndex ? "#00FFFF" : "#3a2c7a";
    star.setAttribute("fill", color);
  });
}

const starPaths = document.querySelectorAll(".star path");
for (const path of starPaths) {
  path.addEventListener("click", handleClick);
}
