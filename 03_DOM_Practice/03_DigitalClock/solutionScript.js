const clock = document.querySelector("#clock")

setInterval(() => {
    const time = new Date().toLocaleTimeString()
    clock.innerHTML = `<span>${time}</span>`
}, 1000);
