const form = document.querySelector("form")
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const resultDisplay = document.querySelector("#results")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const h = height.value
    const w = weight.value
    if(h <= 0 || isNaN(h) || h === ""){
        resultDisplay.innerHTML= `<span>Input Correct Height</span>`
    } else if(w <= 0 || isNaN(w) || w === ""){
        resultDisplay.innerHTML= `<span>Input Correct Weight</span>`
    } else {
        const BMI = (w / ((h * h) / 10000)).toFixed(2);
        if(BMI < 18.6){
            resultDisplay.innerHTML= `<span>Under Weight, BMI: ${BMI}</span>`
        } else if(BMI > 18.6 && BMI < 24.9){
            resultDisplay.innerHTML= `<span>Normal Range, BMI: ${BMI}</span>`
        } else if(BMI > 24.9){
            resultDisplay.innerHTML= `<span>OverWeight, BMI: ${BMI}</span>`
        }    
    }    
})
