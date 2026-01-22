import { NUMEROS } from './numeros.js';

let currentSlide = 0;
let countdownTime = 6;
const totalSlides = 3;

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % totalSlides;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function updateCountdown() {
    const countdownNumber = document.getElementById('countdownNumber');
    const countdownCircle = document.getElementById('countdownCircle');

    countdownNumber.textContent = countdownTime;

    const progress = (6 - countdownTime) / 6;
    const offset = 282.7 * (1 - progress);
    countdownCircle.style.strokeDashoffset = offset;

    countdownTime--;

    if (countdownTime < 0) {
        clearInterval(slideInterval);
        clearInterval(countdownInterval);
        redirectToWhatsApp();
    }
}

function redirectToWhatsApp() {
    const randomNumber = NUMEROS[Math.floor(Math.random() * NUMEROS.length)];
    window.location.href = `https://wa.me/${randomNumber}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const slideInterval = setInterval(nextSlide, 2000);
    const countdownInterval = setInterval(updateCountdown, 1000);

    window.slideInterval = slideInterval;
    window.countdownInterval = countdownInterval;
});
