const stars = document.querySelectorAll(".stars span");
const rating = document.getElementById("rating");
const reset = document.getElementById("reset");

let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener("mouseenter", () => {
        const value = Number(star.dataset.value);
        highlightStars(value);
    });

    star.addEventListener("mouseleave", () => {
        highlightStars(selectedRating);
    });

    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);
        rating.textContent = selectedRating;
        highlightStars(selectedRating);
    });
});

function highlightStars(value) {
    stars.forEach((star) => {
        const starValue = Number(star.dataset.value);
        star.classList.toggle("active", starValue <= value);
    });
}

reset.addEventListener("click", () => {
    selectedRating = 0;
    rating.textContent = 0;
    highlightStars(0);
});