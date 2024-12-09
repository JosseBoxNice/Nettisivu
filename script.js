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

document.querySelectorAll('.heading1').forEach(heading1 => {
    observer.observe(heading1);
});

document.querySelectorAll('.bio').forEach(bio => {
    observer.observe(bio);
});

document.querySelectorAll('.bio1').forEach(bio1 => {
    observer.observe(bio1);
});

document.querySelectorAll('.underline').forEach(underline => {
    observer.observe(underline);
});

document.body.addEventListener("scroll", () => {
    const section1 = document.querySelector(".section1");
    const scrollPosition = document.body.scrollTop;
    console.log("Scroll Position:", scrollPosition);

    section1.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    section1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

document.querySelector('.developersBox').addEventListener('click', () => {
    window.location.href = 'DeveloperTab/Developers.html';
});