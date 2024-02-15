var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var hoursDisplay = document.getElementById('hoursDisplay');
var minutesDisplay = document.getElementById('minutesDisplay');
var secondsDisplay = document.getElementById('secondsDisplay');
var millisecondsDisplay = document.getElementById('millisecondsDisplay');
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');

function adjustInputValues() {
    if (seconds >= 60) {
        var extraMinutes = Math.floor(seconds / 60);
        seconds %= 60;
        minutes += extraMinutes;
    }
    if (minutes >= 60) {
        var extraHours = Math.floor(minutes / 60);
        minutes %= 60;
        hours += extraHours;
    }
}

function updateTimerValues() {
    hours = parseInt(hoursInput.value) || 0;
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
}

function renderTimer() {
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;
    millisecondsDisplay.innerHTML = milliseconds;
}

var interval;

function startTimer() {
    updateTimerValues();
    adjustInputValues();
    interval = setInterval(() => {
        milliseconds--;
        if (milliseconds < 0) {
            milliseconds = 9;
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) {
                        stopTimer();
                        alert("Times Up!");
                        return;
                    }
                }
            }
        }
        console.log(hours, minutes, seconds, milliseconds);
        renderTimer();
    }, 100);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
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