//access the box and button

const myBox = document.getElementById("box");

const myButton = document.getElementById("button");

//1st create function
function changebox(event) {
  myBox.style.backgroundColor = "purple";
  myBox.textContent = "How are you?";
}

function backtonormal(event) {
  myBox.style.backgroundColor = "blueviolet";
  myBox.textContent = "hello";
}

myButton.addEventListener("click", changebox);
myButton.addEventListener("mouseout", backtonormal);

// in second button click to change image

//changing image on mouse over and back on mouse out

const image = document.querySelector("img");

image.addEventListener("mouseover", function () {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarv3K1MRXqrBinlz8cjxOmGiZdWQy3HhFKQ&s";
});
image.addEventListener("mouseout", function () {
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWP1YVKUoQSgiOhN8ZA6yqac1lEWiv8h63Q&s";
});
