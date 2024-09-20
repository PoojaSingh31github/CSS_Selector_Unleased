const inputHours = document.getElementById("hours");
const inputMinutes = document.getElementById("minutes");
const inputSeconds = document.getElementById("seconds");

const hoursDisplay = document.getElementById("hours_span");
const minutesDisplay = document.getElementById("minutes_span");
const secondsDisplay = document.getElementById("seconds_span");

let timerInterval;
let hours = 0,
  minutes = 0,
  seconds = 0;

document.getElementById("start_timer").addEventListener("click", () => {
  clearInterval(timerInterval);

  hours = parseInt(inputHours.value);
  minutes = parseInt(inputMinutes.value);
  seconds = parseInt(inputSeconds.value);
  // console.log(hours,minutes,seconds)

  update();
  timerInterval = setInterval(countDown, 1000);
});

function countDown() {
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else if (hours > 0) {
    hours--;
    minutes = 59;
    seconds = 59;
  } else {
    clearInterval(timerInterval);
    alert("Time up!");
  }
  update();
}
function update() {
  hoursDisplay.textContent = String(hours).padStart(2,"0");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}
