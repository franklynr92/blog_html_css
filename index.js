let date = document.querySelector(".date");
let time = document.querySelector("#time")
console.log(date)
today = new Date()
date.innerText = today.toLocaleDateString()
date.innerText+= " "
time.innerText += today.toLocaleTimeString()