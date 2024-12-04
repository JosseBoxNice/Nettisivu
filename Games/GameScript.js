// DOM Elements
const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const shopButton = document.getElementById('shop-button');
const shopPopup = document.getElementById('shop');
const closeShop = document.getElementById('close-shop');
const settingsButton = document.getElementById('settings-button');
const settingsPanel = document.getElementById('settings');
const closeSettings = document.getElementById('close-settings');

// Upgrade Tree
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const upgrade3 = document.getElementById('upgrade3');
const upgrade4 = document.getElementById('upgrade4');
// Auto Upgrade Tree
const autoClick1 = document.getElementById('auto-click1');
const autoClick2 = document.getElementById('auto-click2');
const autoClick3 = document.getElementById('auto-click3');
// Music And Sounds
const clickS1 = document.getElementById('sound-pack1');
const clickS2 = document.getElementById('sound-pack2');
const bgMusic1 = document.getElementById('bg-music1');
const bgMusic2 = document.getElementById('bg-music2');
const clickSoundToggle = document.getElementById('click-sound-toggle');

// const musicToggle = document.getElementById('music-toggle');

// Game Variables
let score = 0;
let clickPower = 1;
let autoClickPower = 0;
let isUpgrade1Bought = false;
let isUpgrade2Bought = false;
let isUpgrade3Bought = false;
let isUpgrade4Bought = false;
let isAutoUpgrade1Bought = false;
let isAutoUpgrade2Bought = false;
let isAutoUpgrade3Bought = false;
let isCSound1Bought = false;
let isCSound2Bought = false;
let isBGMusic1Bought = false;
let isBGMusic2Bought = false;
// Background Music
//const backgroundMusic = new Audio('background-music.mp3');
//const backgroundMusic = new Audio('background-music2.mp3');
//backgroundMusic.loop = true;
// Click Sounds
const clickSound1 = new Audio('Audio/click1.mp3');
const clickSound2 = new Audio('Audio/click2.mp3');
//const clickSound3 = new Audio('Audio/click3.mp3');
shopButton.addEventListener('click', () => {
    shopPopup.classList.remove('hide');
    shopPopup.classList.add('show');
});
settingsButton.addEventListener('click', () => {
    settingsPanel.classList.remove('hide');
    settingsPanel.classList.add('show');
});
closeSettings.addEventListener('click', () => {
    settingsPanel.classList.remove('show');
    settingsPanel.classList.add('hide');
});
function markAsPurchased(buttonId) {
    document.querySelector(`${buttonId} .checkmark-container`).classList.add('active');
}
// Update Score Display
function updateScore() {
    let formattedScore = score.toFixed(1);
    scoreDisplay.textContent = `Score: ${formattedScore}`;
}
// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Allow HTML content by using innerHTML
    notification.innerHTML = message;

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
        }, 500);
    }, 3000);
}
clickButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
    clickSound1.currentTime = 0;
    clickSound1.play();
});
// Shop Upgrade Click
upgrade1.addEventListener('click', () => {
    if (score >= 100) {
        isUpgrade1Bought = true;
        upgrade1.disabled = true;
        score -= 100;
        clickPower += 1;
        markAsPurchased('#upgrade1');
        updateScore();
        showNotification(`Click Power Upgraded!<br><span>CP: ${clickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
upgrade2.addEventListener('click', () => {
    if (score >= 500) {
        isUpgrade2Bought = true;
        upgrade2.disabled = true;
        score -= 500;
        clickPower += 2;
        markAsPurchased('#upgrade2');
        updateScore();
        showNotification(`Click Power Upgraded!<br><span>CP: ${clickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
upgrade3.addEventListener('click', () => {
    if (score >= 1000) {
        isUpgrade3Bought = true;
        upgrade3.disabled = true;
        score -= 1000;
        clickPower += 3;
        markAsPurchased('#upgrade3');
        updateScore();
        showNotification(`Click Power Upgraded!<br><span>CP: ${clickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
upgrade4.addEventListener('click', () => {
    if (score >= 3000) {
        isUpgrade4Bought = true;
        upgrade4.disabled = true;
        score -= 3000;
        clickPower += 4;
        markAsPurchased('#upgrade4');
        updateScore();
        showNotification(`Click Power Upgraded!<br><span>CP: ${clickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
// Shop Auto-Clicker
autoClick1.addEventListener('click', () => {
    if (score >= 50) {
        isAutoUpgrade1Bought = true;
        score -= 50;
        autoClickPower += 0.1;
        setInterval(() => {
            
        }, 1000);
        markAsPurchased('#auto-click1');
        updateScore();
        showNotification(`Auto-Clicker Bought!<br><span>AC: ${autoClickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
autoClick2.addEventListener('click', () => {
    if (score >= 250) {
        isAutoUpgrade2Bought = true;
        score -= 250;
        autoClickPower += 0.3;
        markAsPurchased('#auto-click2');
        updateScore();
        showNotification(`Auto-Clicker Bought!<br><span>AC: ${autoClickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
autoClick3.addEventListener('click', () => {
    if (score >= 500) {
        isAutoUpgrade3Bought = true;
        score -= 500;
        autoClickPower += 0.5;
        markAsPurchased('#auto-click3');
        updateScore();
        showNotification(`Auto-Clicker3 Bought!<br><span>AC: ${autoClickPower}</span>`, 'success');
        updateUpgradeButtons();
    }
});
// Music Toggle
// musicToggle.addEventListener('click', () => {
//     if (backgroundMusic.paused) {
//         backgroundMusic.play();
//         showNotification('Music Started!', 'success');
//     } else {
//         backgroundMusic.pause();
//         showNotification('Music Paused!', 'info');
//     }
// });
// Open and Close Shop
shopButton.addEventListener('click', () => {
    updateUpgradeButtons();
    shopPopup.classList.remove('hide');
    shopPopup.classList.add('show');
});
closeShop.addEventListener('click', () => {
    shopPopup.classList.remove('show');
    shopPopup.classList.add('hide');
});
setInterval(() => {
    {
        score += autoClickPower;
        updateScore();
    }
}, 100);
function updateUpgradeButtons()
{
    if (!isUpgrade1Bought) {
        if (score >= 100) {
            upgrade1.disabled = false;
        } else {
            upgrade1.disabled = true;
        }
    }
    if (!isUpgrade2Bought) {
        if (score >= 500) {
            upgrade2.disabled = false;
        } else {
            upgrade2.disabled = true;
        }
    }
    if (!isUpgrade3Bought) {
        if (score >= 1000) {
            upgrade3.disabled = false;
        } else {
            upgrade3.disabled = true;
        }
    }
    if (!isUpgrade4Bought) {
        if (score >= 3000) {
            upgrade4.disabled = false;
        } else {
            upgrade4.disabled = true;
        }
    }
    // Update Autoclick Button
    if (score >= 50 && !isAutoUpgrade1Bought) {
        autoClick1.disabled = false;
    } else {
        autoClick1.disabled = true;
    }
    if (score >= 250 && !isAutoUpgrade2Bought) {
        autoClick2.disabled = false;
    } else {
        autoClick2.disabled = true;
    }
    if (score >= 500 && !isAutoUpgrade3Bought) {
        autoClick3.disabled = false;
    } else {
        autoClick3.disabled = true;
    }
    // Music Buttons
    if (score >= 300 && !isCSound1Bought) {
        clickS1.disabled = false;
    } else {
        clickS1.disabled = true;
    }
    if (score >= 600 && !isCSound2Bought) {
        clickS2.disabled = false;
    } else {
        clickS2.disabled = true;
    }
    if (score >= 800 && !isBGMusic1Bought) {
        bgMusic1.disabled = false;
    } else {
        bgMusic1.disabled = true;
    }
    if (score >= 1200 && !isBGMusic2Bought) {
        bgMusic2.disabled = false;
    } else {
        bgMusic2.disabled = true;
    }
}