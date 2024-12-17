// script.js

// Function to animate cards when they come into view
function animateCards(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class to trigger animation
            observer.unobserve(entry.target); // Stop observing once animation has started
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(animateCards, {
    threshold: 0.1 // Trigger when 20% of the card is visible
});

document.querySelectorAll('.slogan').forEach(slogan => {
    observer.observe(slogan);
});

// Observe each card
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

document.body.addEventListener("scroll", () => {
    const section1 = document.querySelector(".section1");
    const scrollPosition = document.body.scrollTop;
    console.log("Scroll Position:", scrollPosition);

    section1.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    section1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});


document.getElementById('devsbtn').addEventListener('click', () => {
    window.location.href = 'DeveloperTab/Developers.html';
});
document.querySelector('.developersBox').addEventListener('click', () => {
    window.location.href = 'DeveloperTab/Developers.html';
});

// const container = document.querySelector('.particle-container');

// function createParticle() {
//     const particle = document.createElement('div');
//     particle.classList.add('particle');
//     particle.textContent = Math.random() < 0.5 ? '1' : '0';

//     const size = Math.random() * 10 + 10;
//     const left = Math.random() * window.innerWidth;
//     const duration = Math.random() * 5 + 2;
//     particle.style.fontSize = `${size}px`;
//     particle.style.left = `${left}px`;
//     particle.style.animationDuration = `${duration}s`;

//     container.appendChild(particle);

//     setTimeout(() => {
//         particle.remove();
//     }, duration * 1000);
// }
// setInterval(createParticle, 10);