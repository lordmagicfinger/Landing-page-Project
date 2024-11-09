const toggleBtn = document.querySelector('.toggleBtn');
const header = document.querySelector('.header');
const testimonies = document.querySelector('.testimonial-row');
const slider = document.querySelector('.testimonies');

toggleBtn.addEventListener('click', () =>{
    header.classList.toggle('showNav');
})

testimonies.addEventListener('click', (event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('bx-caret-right')){
        slider.append(slider.querySelector('.testimonial-card:first-child'));
    }
    else if(positionClick.classList.contains('bx-caret-left')){
        slider.prepend(slider.querySelector('.testimonial-card:last-child'));
    }
})