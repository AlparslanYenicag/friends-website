let countdown ;
let timeLeft;

const timeInput = document.getElementById("timeInput");
const strtBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timer");

function startCoumtdown () {
    if (countdown) clearInterval(countdown);
    timeLeft = parseInt(timeInput.value);

    if(isNaN(timeLeft) || timeLeft <= 0)
    {
        alert("Please enter a valid time!")
        return;
    }

    updateDisplay();
    timerDisplay.classList.remove("time-up");

    countdown = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if(timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Time's up!";
            timerDisplay.classList.add("time-up");
        }
    },1000);
}

function resetCountdown () {
    clearInterval(countdown);
    timeLeft = 0;
    timerDisplay.innerText = "Time left: --"
    timeInput.value = "";
    timerDisplay.classList.remove("time-up");
}

function updateDisplay(){
    timerDisplay.innerText = `Time left: ${timeLeft} sec`;
}

strtBtn.addEventListener("click", startCoumtdown);
resetBtn.addEventListener("click", resetCountdown);