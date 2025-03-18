// 1. Variables & Data Types
const myname = "amina";
console.log(myname.length);
const age = 26;
console.log(`I am ${age} years old`);
const isStudent = function (bool) {
  /*You don't need == true in the condition; if (bool) is enough because the value of bool will automatically evaluate to true or false.*/
  if (bool) {
    console.log("I am a student");
  } else {
    console.log("I am not a student");
  }
};
console.log(isStudent(false));
// 2. Conditionals (If-Else)
/*Write a program that checks if a number is even or odd. The program should log either "Even" or "Odd" based on the number.*/
const evenOdd = function (num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

console.log(evenOdd(28));

/*Create a function that accepts a grade (as a number). If the grade is above or equal to 90, log "A". If it’s above or equal to 80 but less than 90, log "B". For anything else, log "C".
 */
const grade = function (mark) {
  if (mark >= 90) {
    console.log("A");
  } else if (mark >= 80 && mark < 90) {
    console.log("B");
  } else {
    console.log("C");
  }
};
console.log(grade(84));

// 3. Functions & Function Scope
/*Write a function called greet that takes a name as a parameter and logs "Hello, [name]!".*/
function greet(namevar) {
  // Avoid extra console.log inside functions:
  return `Hello, ${namevar}`;
}
const scopename = "hafsa";
console.log(greet(scopename));

/*Write a function sum that takes two parameters, adds them together, and returns the result.*/

const sum = function (a, b) {
  return a + b;
};

console.log(sum(4, 9));

/*Inside a function myFunction(), declare a variable message and set it to "Inside Function". Log message inside and outside the function and explain the output.*/

function myFunction() {
  const message = "Inside Function";
  console.log(message); //output : Inside Function
  //   this log will only be available inside this function.
  return message;
  //   by saying return now this variable can be accesed outside through this console.log(myFunction());.
}
console.log(myFunction()); //output : Inside Function
// console.log(message); // doing this u will receive error as the variable name is only available inside the function myFunction

// 4. Events
/*Create a button that, when clicked, changes the text of a paragraph to say "Button Clicked!".*/
// here i created html file and checked everything is working
const body = document.querySelector("body");
const text = document.createElement("p");
text.textContent = "need to be changed";
body.appendChild(text);
const button = document.createElement("button");
button.textContent = "click to change paragraph";
body.appendChild(button);

button.addEventListener("click", () => {
  text.textContent = "button clicked";
});

/*Write a function that changes the background color of a webpage when a button is clicked.*/

const colorbtn = document.createElement("button");
colorbtn.textContent = "click to change color";
body.appendChild(colorbtn);

function random(colornum) {
  return Math.floor(Math.random() * (colornum + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  document.body.style.backgroundColor = rndCol;
}
colorbtn.addEventListener("click", changeBackground);
/*Write a program that logs the mouse position when the user clicks anywhere on the page.*/
// Explanation:

// The event.clientX and event.clientY properties give you the mouse position (X and Y coordinates) relative to the viewport when the click event occurs.
document.addEventListener("click", function (event) {
  console.log(`Mouse clicked at: (${event.clientX}, ${event.clientY})`);
});

// 5. Arrays
/*Create an array of your favorite fruits. Then, log the first and last fruit from the array.*/
const fruits = ["mango", "banana", "apple", "guava"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // last item

/*Write a function that takes an array of numbers and returns the sum of all the numbers.*/
function allSum(num) {
  let total = 0;
  for (const single of num) {
    total += single;
  }
  return total;
}
const numArray = [5, 8, 9, 7, 6, 4, 5, 4];
console.log(allSum(numArray));

/*Write a program that checks if a given name is present in an array of names. If the name exists, log "Name found!", otherwise log "Name not found!".*/

function check(names) {
  for (const singleName of names) {
    if (singleName === "faiza") {
      return "name found";
    }
  }
  return "name not found"; // If not found after the loop
}

const namesArray = ["amina", "faiza", "rayan", "ibadho"];
console.log(check(namesArray)); // output: name found

/*Sort the array of your favorite fruits in alphabetical order and log the result.*/

const Myfruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Myfruits.sort());

/*Bonus Challenge:
Array & Function Combo: Write a function that accepts an array of numbers, filters out the even numbers, and returns the sum of the remaining odd numbers.*/

function filterNum(all) {
  let sum = 0;
  let even = [];
  let odd = [];

  for (let i = 0; i < all.length; i++) {
    if (all[i] % 2 == 0) {
      even.push(all[i]);
    } else {
      odd.push(all[i]);
    }
  }

  for (let oneOdd of odd) {
    sum += oneOdd;
  }
  return sum;
}

const myNum = [2, 4, 5, 8, 7, 3, 9, 1];
console.log(filterNum(myNum));

// simplified version
/*function filterNum(all) {
  let sum = 0;

  for (let i = 0; i < all.length; i++) {
    if (all[i] % 2 !== 0) {  // Directly checking for odd numbers
      sum += all[i];
    }
  }

  return sum;
}

const myNum = [2, 4, 5, 8, 7, 3, 9, 1];
console.log(filterNum(myNum)); // Output: 25 (5 + 7 + 3 + 9 + 1)
*/
// --------------------------

// 1. Manipulating Strings & Arrays
/*Task: Write a function that accepts a string, splits it into an array of words (separated by spaces), and returns the longest word in the array.*/

function checkLong(words) {
  const allword = words.split(" "); // Convert the string to an array of words
  console.log(allword);

  let longest = ""; // Variable to store the longest word

  for (let word of allword) {
    if (word.length > longest.length) {
      longest = word; // Assign the longest word to the variable 'longest'
    }
  }
  return longest; // Return the longest word
}

let longestWord = "JavaScript is awesome and fun";
console.log(checkLong(longestWord)); // Output should be 'JavaScript'

// 2. Looping & Functions
/*Task: Create a function that accepts an array of numbers and returns a new array where each number is squared (multiplied by itself).*/
function array(f, a) {
  // Create a new array to store the squared numbers
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(f(a[i])); // Apply the function to each element and store it in the result array
  }
  return result; // Return the new array with squared numbers
}

const arraynumbers = [2, 4, 3];
const double = array((x) => {
  return x * x; // Function to square each number
}, arraynumbers);

console.log(double); // Output: [4, 16, 9]

// 3. Working with Objects & Arrays
/*Task: Write a function that accepts an array of objects, each representing a person with a name and age. The function should return the name of the oldest person in the array.*/
const people = [
  { name: "John", age: 28 },
  { name: "Jane", age: 34 },
  { name: "Mark", age: 42 },
];

function oldestPerson(all) {
  let oldest = all[0]; // Start by assuming the first person is the oldest

  all.forEach((person) => {
    if (person.age > oldest.age) {
      oldest = person; // Update the oldest if we find a person with a higher age
    }
  });

  return oldest.name; // Return the name of the oldest person
}

console.log(oldestPerson(people)); // Output: "Mark"
