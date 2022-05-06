const soundButton = document.querySelector("#click-sound");
const clickButton = document.querySelectorAll(".click-button")

function playSound() {
    soundButton.play()
}

clickButton.onclick = playSound;