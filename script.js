document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado por se inscrever na nossa newsletter!");
});
const track = document.querySelector('.carousel-track');
let isPaused = false;

document.querySelector('.carousel-track-container').addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused';
    isPaused = true;
});

document.querySelector('.carousel-track-container').addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running';
    isPaused = false;
});

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    if (!isPaused) {
        track.style.animationPlayState = 'paused';
    }
    track.style.transform = 'translateX(100%)';
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    if (!isPaused) {
        track.style.animationPlayState = 'paused';
    }
    track.style.transform = 'translateX(-100%)';
});
