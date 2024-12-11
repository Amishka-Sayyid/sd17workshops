//define 2 functions

function function1() {
  console.log("the 1st function to be called back");
}
function function2(call1stback) {
  console.log(
    "this is the 2nd one if u could add here what u want and later call the previous one"
  );
  call1stback();
}
// function2(function1);
//either this way
function2(function1);
//or this way but this way the the 1st function i dont need line 3-5 as ive written inside the curly brackets.
function2(function () {
  console.log("the 1st function to be called back");
});

//
function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
function result(x, y, callback) {
  console.log("Doing a calculation using the numbers: ", x, y);
  return callback(x, y);
}
const addition = result(5, 9, add);
console.log(result);

/// call back using event listeners

const myBox = document.getElementById("box");

myBox.addEventListener("mouseover", function () {
  myBox.style.backgroundColor = "lightgreen";
});

function backToNormal() {
  myBox.style.backgroundColor = "bisque";
}
myBox.addEventListener("mouseout", backToNormal);
