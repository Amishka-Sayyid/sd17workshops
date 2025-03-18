let x = createHelloWorld();

function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}

createHelloWorld([1, 2, 3]);
console.log(x);

// -----------------------
// Counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n) {
  return function () {
    return n++;
  };
}

let counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());

// -----------------------------
// To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
  function toBe(i) {
    if (val === i) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }

  function notToBe(x) {
    if (val !== x) {
      return true;
    } else {
      throw new Error("Equal");
    }
  }

  return {
    toBe,
    notToBe,
  };
}
