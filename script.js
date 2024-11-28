// script.js

console.log("moi");

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

// Observe each card
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// document.body.addEventListener("scroll", () => {
//     const section1 = document.querySelector(".section1");
//     const scrollPosition = document.body.scrollTop;
//     section1.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
// });

document.body.addEventListener("scroll", () => {
    const section1 = document.querySelector(".section1");
    const scrollPosition = document.body.scrollTop;

    console.log("Scroll Position:", scrollPosition);

    // Apply dynamic styles to test
    section1.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    section1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});