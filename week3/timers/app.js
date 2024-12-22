//setTimeout()  a method used for  countdown where an action happens when time reaches zero
//setTimeout(timeoutTask, delay);

setTimeout(handlecolorBox, 3000);
function handlecolorBox() {
  const circle = document.getElementById("colorBox");

  circle.addEventListener("click", function () {
    circle.style.backgroundColor = "orange";
    circle.style.borderRadius = "2rem";
  });
}
//
const OneInterval = setInterval(BackgroundChange, 2000);
function BackgroundChange() {
  const body = document.getElementsByTagName("body");
  console.log(body[0]);
  body[0].style.backgroundColor = "magenta";
}

function timeoutToStopTheInterval() {
  setTimeout(function () {
    clearInterval(OneInterval);
  }, 3000);
}
timeoutToStopTheInterval();
//
function changeTitle() {
  const title = document.getElementsByTagName("h1");
  title[0].innerText = "hello,how are you";
}
const stoptime = setInterval(changeTitle, 2000);
function stoppinginterval() {
  clearInterval(stoptime);
}
setTimeout(stoppinginterval, 5000);

//adding time

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  const actualtime = document.getElementById("time");
  actualtime.innerText = timeString;
}
setInterval(updateTime, 1000);
