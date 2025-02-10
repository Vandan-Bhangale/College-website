let content = document.querySelector(".content");
let more = document.querySelector(".more");

function loadContent(cardNumber) {
    document.querySelectorAll("body > *:not(.content)").forEach(el => el.style.display = "none");
    content.innerHTML = cardDetail[cardNumber] || "<p>Content not found</p>";
    window.scrollTo(0,0);
}
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
setInterval(nextSlide, 5000);
