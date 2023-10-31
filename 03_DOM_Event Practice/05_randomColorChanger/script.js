let randomColor = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const body = document.querySelector("body");

let intervalHandler;
start.addEventListener("click",()=>{
  if(!intervalHandler){
    intervalHandler = setInterval(() => {
      body.style.backgroundColor = `#${randomColor()}`
    }, 1000);
  }
})

stop.addEventListener("click",()=>{
  clearInterval(intervalHandler)
  intervalHandler = null
})
