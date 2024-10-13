const carousel = document.querySelector(".testimonies");
const arrowBtns = document.querySelectorAll(".testimonial-row i");
const firstCardWidth = carousel.querySelector(".testimonial-card");

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        carousel.scrollLeft += btn.id === "left"? -firstCardWidth : firstCardWidth;
    });
})

carousel.addEventListener('mousemove', event => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (event.pageX - startX);
});
carousel.addEventListener("mousedown", event =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX = event.pageX;
    startScrollLeft = carousel.scrollLeft;
});
document.addEventListener("mouseup", event =>{
    isDragging = false;
    carousel.classList.remove("dragging");
});