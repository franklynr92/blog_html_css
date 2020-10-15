let date = document.querySelector(".date");
let time = document.querySelector("#time")
console.log(date)
today = new Date()
date.innerText = `DATE: ${today.toLocaleDateString()}`

time.innerText = `TIME: ${today.toLocaleTimeString()}`