// Game Variables
let score = 50;
let multiplier = 1;
let passiveIncome = 0; // Track passive income from the second upgrade
let passiveIncome2 = 0; // Track income from upgrade 2

// DOM Elements
const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const shopButton = document.getElementById('shopButton');
const shopPopup = document.getElementById('shopPopup');
const closePopup = document.getElementById('closePopup');
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const notification = document.getElementById('notification');

// Function to display notifications
function showNotification(message) {
    notification.textContent = message; // Set the message text
    notification.style.display = 'block'; // Show the notification
    setTimeout(() => {
        notification.style.display = 'none'; // Hide it after 3 seconds
    }, 3000); // 3000ms = 3 seconds
}

// Click Button Functionality
clickButton.addEventListener('click', () => {
    score += multiplier; // Increase score by multiplier
    scoreDisplay.textContent = `Score: ${score.toFixed(2)}`; // Update display
});

// Open Shop Pop-Up
shopButton.addEventListener('click', () => {
    shopPopup.style.display = 'flex'; // Show the shop pop-up
});

// Close Shop Pop-Up
closePopup.addEventListener('click', () => {
    shopPopup.style.display = 'none'; // Hide the shop pop-up
});

// Close Shop When Clicking Outside Content
shopPopup.addEventListener('click', (e) => {
    if (e.target === shopPopup) {
        shopPopup.style.display = 'none';
    }
});

// Upgrade 1: Cost 10 Points (click-based)
upgrade1.addEventListener('click', () => {
    if (score >= 10) {
        score -= 10; // Deduct cost
        multiplier += 1; // Increase multiplier for clicks
        scoreDisplay.textContent = `Score: ${score.toFixed(2)}`; // Update display
        showNotification(`Upgrade purchased! Multiplier is now ${multiplier}`);
    } else {
        showNotification('Not enough points!');
    }
});

// Upgrade 2: Cost 50 Points (passive income-based)
upgrade2.addEventListener('click', () => {
    if (score >= 50) {
        score -= 50; // Deduct cost
        passiveIncome += 0.01; // Increase passive income by 1 point per second
        scoreDisplay.textContent = `Score: ${score.toFixed(2)}`; // Update display
        showNotification(`Passive income increased to ${passiveIncome} points per second`);

        // Start generating passive income (if it's not already happening)
        if (!this.passiveIncomeInterval) {
            this.passiveIncomeInterval = setInterval(() => {
                score += passiveIncome; // Add passive income to the score
                scoreDisplay.textContent = `Score: ${score.toFixed(2)}`; // Update display
            }, 1000);
        }
    } else {
        showNotification('Not enough points!');
    }
});