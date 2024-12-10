let mylocation = "kenya";
console.log(mylocation);

function saylocation(location) {
  console.log(`are you in the ${location}.`);
}
saylocation("uk");

//accessing a variable in the global scope
let dayofweek = "thursday";

function day() {
  console.log(` hello, hope you have a wonderful ${dayofweek}`);
}

day();

//creating variable in the function scope

function fullname() {
  let firstname = "amina";
  let lastname = "ibrahim";
  console.log(`hello my name is ${firstname} ${lastname}`);
}

fullname();

//practice1

const drink = "mango juice";

function meal() {
  let food = ["bread", "egg"];
  console.log(`for breakfast i had ${food} and ${drink}.`);
}

meal();

//practice2
let c = 10;

function multiply(m, x) {
  return m * x;
}

let y = multiply(5, 6) + c;
console.log(y);
