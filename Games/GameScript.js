// DOM Elements
const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const shopButton = document.getElementById('shop-button');
const shopPopup = document.getElementById('shop');
const closeShop = document.getElementById('close-shop');
const settingsButton = document.getElementById('settings-button');
const settingsPanel = document.getElementById('settings');
const closeSettings = document.getElementById('close-settings');
const disableBGsounds = document.getElementById('bg-music-off');
const disableCsounds = document.getElementById('click-sound-off');
const enableBGsound1 = document.getElementById('bg-music-on');
const enableBGsound2 = document.getElementById('bg-music-on2');
const enableCsound0 = document.getElementById('click-sound-on0');
const enableCsound1 = document.getElementById('click-sound-on1');
const enableCsound2 = document.getElementById('click-sound-on2');
// Audio
const bgMusicSlider = document.getElementById('bg-music-slider');
const clickSoundSlider = document.getElementById('click-sound-slider');
const bgMusicVolumeSpan = document.getElementById('bg-music-volume');
const clickSoundVolumeSpan = document.getElementById('click-sound-volume');
// Upgrade Tree
const upgrade1 = document.getElementById('upgrade1');
const upgrade2 = document.getElementById('upgrade2');
const upgrade3 = document.getElementById('upgrade3');
const upgrade4 = document.getElementById('upgrade4');
// Auto Upgrade Tree
const autoClick1 = document.getElementById('auto-click1');
const autoClick2 = document.getElementById('auto-click2');
const autoClick3 = document.getElementById('auto-click3');
// Music And Sound Buttons
const clickS1 = document.getElementById('sound-pack1');
const clickS2 = document.getElementById('sound-pack2');
const bgMusic1 = document.getElementById('bg-music1');
const bgMusic2 = document.getElementById('bg-music2');
// Click Sounds
const clickSound1 = new Audio('Audio/click1.mp3');
const clickSound2 = new Audio('Audio/click2.wav');
const clickSound3 = new Audio('Audio/click3.mp3');
//const clickSound4 = new Audio('Audio/click4.wav');
// Background Music
const backgroundMusic1 = new Audio('Audio/background-music1.mp3');
const backgroundMusic2 = new Audio('Audio/background-music2.mp3');
// MISC
const notificationSound = new Audio('Audio/notification-sound.mp3');
const buySound = new Audio('Audio/buy-sound.mp3');

// Game Variables
let score = 1000;
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
let currentClickSound = clickSound1;
let selectedClickSound = clickSound1;

shopButton.addEventListener('click', () => {
    shopPopup.classList.remove('hide');
    shopPopup.classList.add('show');
});
settingsButton.addEventListener('click', () => {
    updateUpgradeButtons();
    settingsPanel.classList.remove('hide');
    settingsPanel.classList.add('show');
});
closeSettings.addEventListener('click', () => {
    settingsPanel.classList.remove('show');
    settingsPanel.classList.add('hide');
});
bgMusicSlider.addEventListener('input', () => {
    const volume = bgMusicSlider.value / 100;
    backgroundMusic1.volume = volume;
    backgroundMusic2.volume = volume;
    bgMusicVolumeSpan.textContent = `${bgMusicSlider.value}%`;
});
clickSoundSlider.addEventListener('input', () => {
    const volume = clickSoundSlider.value / 100;
    clickSound1.volume = volume;
    clickSound2.volume = volume;
    clickSound3.volume = volume;
    clickSoundVolumeSpan.textContent = `${clickSoundSlider.value}%`;
});
function markAsPurchased(buttonId) {
    buySound.currentTime = 0;
    buySound.play();
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
    notificationSound.currentTime = 0;
    notificationSound.play();
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
function disableallbackgroundMusic()
{
    backgroundMusic1.loop = true;
    backgroundMusic2.loop = true;
    if (!backgroundMusic1.paused || !backgroundMusic2.paused)
    {
        backgroundMusic2.pause();
        backgroundMusic1.pause();
        showNotification('Music Disabled!', 'info');
    }
}
function updateClickSoundSelection() {
    let newClickSound = clickSound1; // Variable to store the new selection
    let notificationMessage = ''; // Variable to store the notification message

    if (enableCsound0.checked) {
        newClickSound = clickSound1;
        notificationMessage = 'Default Click Sound Enabled!';
    }
    if (enableCsound1.checked) {
        newClickSound = clickSound2;
        notificationMessage = 'Click Sound 1 Enabled!';
    }
    if (enableCsound2.checked) {
        newClickSound = clickSound3;
        notificationMessage = 'Click Sound 2 Enabled!';
    }
    if (disableCsounds.checked) {
        newClickSound = 0;
        notificationMessage = 'Click Sounds Disabled!';
    }

    // Only show the notification if the selection has changed
    if (newClickSound !== currentClickSound) {
        showNotification(notificationMessage, 'info');
        currentClickSound = newClickSound; // Update the current selection
        selectedClickSound = newClickSound; // Update the selected click sound
    }
}
function clickSounds() {
    if (selectedClickSound) {
        selectedClickSound.currentTime = 0;
        selectedClickSound.play();
    }
}
clickButton.addEventListener('click', () => {
    score += clickPower;
    clickSounds();
    updateScore();
});
disableBGsounds.addEventListener('click', () => {
    disableallbackgroundMusic();
});
disableCsounds.addEventListener('click', () => {
    updateClickSoundSelection();
});
enableCsound0.addEventListener('click', () => {
    updateClickSoundSelection();
})
enableCsound1.addEventListener('click', () => {
    updateClickSoundSelection();
})
enableCsound2.addEventListener('click', () => {
    updateClickSoundSelection();
})
enableBGsound1.addEventListener('click', () => {
    if (backgroundMusic1.paused)
        {
            backgroundMusic2.pause();
            backgroundMusic1.play();
            showNotification('Music 1 Enabled!', 'info');
        }
})
enableBGsound2.addEventListener('click', () => {
    if (backgroundMusic2.paused)
        {
            backgroundMusic1.pause();
            backgroundMusic2.play();
            showNotification('Music 2 Enabled!', 'info');
        }
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
        markAsPurchased('#auto-click1');
        updateScore();
        showNotification(`Auto-Clicker1 Bought!<br><span>AC: ${autoClickPower}</span>`, 'success');
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
        showNotification(`Auto-Clicker2 Bought!<br><span>AC: ${autoClickPower}</span>`, 'success');
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
// Music buy
bgMusic1.addEventListener('click', () => {
    if (score >= 600) {
        isBGMusic1Bought = true;
        score -= 600;
        markAsPurchased('#bg-music1');
        updateScore();
        showNotification(`BackGround Music 1 Bought!`, 'success');
        updateUpgradeButtons();
    }
});
bgMusic2.addEventListener('click', () => {
    if (score >= 600) {
        isBGMusic2Bought = true;
        score -= 600;
        markAsPurchased('#bg-music2');
        updateScore();
        showNotification(`BackGround Music 2 Bought!`, 'success');
        updateUpgradeButtons();
    }
});
clickS1.addEventListener('click', () => {
    if (score >= 300) {
        isCSound1Bought = true;
        score -= 300;
        markAsPurchased('#sound-pack1');
        updateScore();
        showNotification(`Click Sound 1 Bought!`, 'success');
        updateUpgradeButtons();
    }
});
clickS2.addEventListener('click', () => {
    if (score >= 300) {
        isCSound2Bought = true;
        score -= 300;
        markAsPurchased('#sound-pack2');
        updateScore();
        showNotification(`Click Sound 2 Bought!`, 'success');
        updateUpgradeButtons();
    }
});
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
    if (score >= 300 && !isCSound2Bought) {
        clickS2.disabled = false;
    } else {
        clickS2.disabled = true;
    }
    if (score >= 600 && !isBGMusic1Bought) {
        bgMusic1.disabled = false;
    } else {
        bgMusic1.disabled = true;
    }
    if (score >= 600 && !isBGMusic2Bought) {
        bgMusic2.disabled = false;
    } else {
        bgMusic2.disabled = true;
    }
    if (!isBGMusic1Bought) {
        enableBGsound1.disabled = true;
    }
    else {
        enableBGsound1.disabled = false;
    }
    if (!isBGMusic2Bought) {
        enableBGsound2.disabled = true;
    }
    else {
        enableBGsound2.disabled = false;
    }
    if (!isCSound1Bought) {
        enableCsound1.disabled = true;
    }
    else {
        enableCsound1.disabled = false;
    }
    if (!isCSound2Bought) {
        enableCsound2.disabled = true;
    }
    else {
        enableCsound2.disabled = false;
    }
}