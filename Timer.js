
const departMinutes = 59
let temps = departMinutes * 60
const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `Promo de toujours jusqu'à +69% : ${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)