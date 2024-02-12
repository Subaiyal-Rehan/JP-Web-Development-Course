let hours = parseInt(hoursInput.value) || 0;
let minutes = parseInt(minutesInput.value) || 0;
let seconds = parseInt(secondsInput.value) || 0;
let milliseconds = 10;
let hoursDisplay = document.getElementById('hoursDisplay');
let minutesDisplay = document.getElementById('minutesDisplay');
let secondsDisplay = document.getElementById('secondsDisplay');
let millisecondsDisplay = document.getElementById('millisecondsDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');

function renderTimer() {
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;
    millisecondsDisplay.innerHTML = milliseconds;
}

var interval;
function startTimer() {
    interval = setInterval(() => {
        milliseconds--;
        if (milliseconds <= 0) {
            milliseconds = 9;
            seconds--;
            if (seconds == 0) {
                seconds = 60;
                minutes--;
                if (minutes == 0) {
                    minutes = 60;
                    hours--;
                }
            }
        }
        if (hours === 0 && minutes === 0 && seconds === 1 && milliseconds === 1) {
            seconds = 0;
            milliseconds = 0;
            clearInterval(interval)
            setTimeout(() => {
                alert("Times Up!")
            }, 50);
        }
        renderTimer()
    }, 100);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(interval)
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    renderTimer();
}