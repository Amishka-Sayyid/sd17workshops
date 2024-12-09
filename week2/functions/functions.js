//declaring functions
function sayhello() {
  console.log("hello world");
}
sayhello();

//arguments
//function argumentFunction(argument1, argument2) {
//     console.log(argument1, argument2);
// }
function helloto(username) {
  console.log(`hello ` + username);
}
helloto("amina");
helloto("bob");

function fullname(firstname, lastname) {
  console.log(firstname + " " + lastname);
}
fullname("amina", "ibrahim");

//returning values
function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);

//_______________
//multiply function
function multiply(c, d) {
  return c * d;
}
let answer = multiply(10, 2);
console.log(answer);

//subtract
function subtract(e, f) {
  return f - e;
}
let answ = subtract(3, 9);
console.log(answ);

//divide
function divide(g, h) {
  return g / h;
}
let answers = divide(3, 9);
console.log(answers);

//calculate
function calculate(x, y, operator) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    return divide(x, y);
  }
}

// const results = calculate(20, 10, "/");
// console.log(results);
const results = calculate(20, 10, "*");
console.log(results);
