const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const music = document.getElementById("music");
const timer = document.getElementById("countDown");
const audio = document.getElementById("audio");
const background = document.getElementById("video-background");

let timeLeft = 1500;
let isTimerOn = false;
let interval;

function saveValue() {
    timeLeft = parseInt((document.getElementById("workDuration").value) * 60, 10);
    return timeLeft;
}

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    countDown.innerHTML = 
    `${minutes.toString().padStart(2,"0")}
    :
    ${seconds.toString().padStart(2,"0")}`;
};