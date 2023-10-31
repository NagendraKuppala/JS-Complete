const docBody = document.querySelector("body")
const buttonsSelector = document.querySelectorAll(".button")

buttonsSelector.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", (event)=>{
        const selectedColor = event.target.id
        docBody.style.backgroundColor = selectedColor
    })
});
