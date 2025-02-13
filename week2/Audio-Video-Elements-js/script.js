const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

audio.addEventListener("pause", (event) => {
  console.log("paused", event);
});

const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

video.addEventListener("pause", function (event) {
  console.log("paused", event);
});

// const audio = document.querySelector("audio");
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  audio.play();
});

const pause = document.getElementById("pause");
pause.addEventListener("click", function (event) {
  audio.pause();
});

// const audio = document.querySelector("audio");
const slider = document.querySelector("input");
slider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
