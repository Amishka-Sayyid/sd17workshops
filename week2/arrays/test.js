// Test your skills: Arrays
// Arrays 1

const myArray = ["btth", "martial universe", "percyjackson"];

myArray[0] = "bread";
myArray[1] = "milk";

myArray.unshift("hello");
console.log(myArray);

// /Arrays 2

// Add your code here

let myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";
console.log(myString);

let myArray2 = myString.split("+");
console.log(myArray2);

let arrayLength = myArray2.length;
console.log(arrayLength);

const lastItem = myArray2.pop();
console.log(lastItem);

// Arrays 3
//
let myArray3 = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray3.pop();
console.log(myArray3);

myArray3.push("amina", "fa2sh");
console.log(myArray3);

function myfunc(arr) {
  // Use forEach to loop through the array and get both the index and item
  arr.forEach((single, index) => {
    const newitem = `${single} (${index})`;
    console.log(newitem);
  });
}
console.log(myfunc(myArray3));

const finalString = myArray3.join("-");
console.log(finalString);

// Arrays 4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

console.log(birds.indexOf("Eagles"));
birds.splice(2, 1);
console.log(birds);
const eBirds = birds.filter((bird) => bird.startsWith("E"));
console.log(eBirds);
