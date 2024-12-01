// DOM Elements
const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const shopButton = document.getElementById('shop-button');
const shopPopup = document.getElementById('shop');
const closeShop = document.getElementById('close-shop');
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const clickDoubler = document.getElementById('click-doubler');
const superClicker = document.getElementById('super-clicker');
const musicToggle = document.getElementById('music-toggle');

// Game Variables
let score = 0;
let clickPower = 1;
let autoClickerActive = false;
let autoClickPower = 0;
let autoClickers = 0;


// Background Music
const backgroundMusic = new Audio('background-music.mp3');
backgroundMusic.loop = true;

// Click Sound
const clickSound = new Audio('Audio/click1.mp3');

// Update Score Display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Append to body
    document.body.appendChild(notification);

    // Slide in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Slide out and remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500); // Wait for the hide animation to finish
    }, 3000);
}

// Handle Clicks
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
    clickSound.currentTime = 0; // Reset sound to allow rapid clicks
    clickSound.play();
});

// Shop: Upgrade Click
upgrade1.addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        clickPower += 1;
        updateScore();
        showNotification('Click Power Upgraded!', 'success');
    } else {
        showNotification('Not enough points!', 'error');
    }
});

// Shop: Auto-Clicker
upgrade2.addEventListener('click', () => {
    if (score >= 50 && !autoClickerActive) {
        score -= 50;
        autoClickerActive = true;
        autoClickPower = 1;
        setInterval(() => {
            score += autoClickPower;
            updateScore();
        }, 1000); // Adds points every second
        updateScore();
        showNotification('Auto-Clicker Activated!', 'success');
    } else {
        showNotification('Not enough points or Auto-Clicker already active!', 'error');
    }
});

// Upgrade Tree: Double Click Power
clickDoubler.addEventListener('click', () => {
    if (score >= 100) {
        score -= 100;
        clickPower *= 2;
        updateScore();
        showNotification('Click Power Doubled!', 'success');
    } else {
        showNotification('Not enough points!', 'error');
    }
});

// Upgrade Tree: Super Auto-Clicker
superClicker.addEventListener('click', () => {
    if (score >= 250) {
        score -= 250;
        autoClickPower += 2;
        updateScore();
        showNotification('Super Auto-Clicker Purchased!', 'success');
    } else {
        showNotification('Not enough points!', 'error');
    }
});

// Music Toggle
musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        showNotification('Music Started!', 'success');
    } else {
        backgroundMusic.pause();
        showNotification('Music Paused!', 'info');
    }
});

// Open and Close Shop with Super Animations
shopButton.addEventListener('click', () => {
    shopPopup.classList.remove('hide');
    shopPopup.classList.add('show');
});

closeShop.addEventListener('click', () => {
    shopPopup.classList.remove('show');
    shopPopup.classList.add('hide');
});
function buyAutoClicker() {
    if (score >= 50) {
        score -= 50;
        autoClickers++;
        showNotification("Auto Clicker Purchased!", "success");
    } else {
        showNotification("Not enough points for Auto Clicker!", "error");
    }
    updateScore();
}
function buyDoubleClick() {
    if (score >= 100) {
        score -= 100;
        clickPower *= 2;
        showNotification("Double Click Power Purchased!", "success");
    } else {
        showNotification("Not enough points for Double Click Power!", "error");
    }
    updateScore();
}
function buySoundPack() {
    if (score >= 150) {
        score -= 150;
        showNotification("Cool Click Sounds Pack Purchased!", "success");
        // Add your logic for sound packs
    } else {
        showNotification("Not enough points for Sound Pack!", "error");
    }
    updateScore();
}
setInterval(() => {
    if (autoClickers > 0) {
        score += autoClickers;
        updateScore();
    }
}, 1000);