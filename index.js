const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".minute-hand");
const hoursHand = document.querySelector(".hour-hand");

function somethingDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hour / 12) * 360 + 90;
  minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(somethingDate, 1000);
