const stars = document.querySelectorAll(".star");
let currentRating = 0;
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    currentRating = index + 1;
    updateRating();
  });
});

function updateRating() {
  console.log("Rating", currentRating);
}
