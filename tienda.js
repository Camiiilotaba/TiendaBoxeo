let currentSlide = 0;
const slides = document.querySelectorAll('.slide-item');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 36; // Desplazamiento en porcentaje
    document.querySelector('.slides-container').style.transform = `translateX(${offset}%)`;
}

function plusSlides(step) {
    showSlide(currentSlide + step);
}


showSlide(currentSlide);
