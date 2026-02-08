
//normal function 

function sayHello() {
  console.log("Hii dev ");
}

sayHello();

// function with parametors

function add(a, b) {
  console.log(a + b);
}

add(10, 20);



// example of a function declaration    

function add(a, b) {
  return a + b;   
}

console.log(add(2, 3)); // returns 5
add(5, 10); // returns 15
add(0, 0); // returns 0

// example of a function expression
const subtract = function (a, b) {
  return a - b;
};

subtract(5, 2); // returns 3
subtract(10, 4); // returns 6
subtract(0, 5); // returns -5

// example of an arrow function
const multiply = (a, b) => a * b;

multiply(3, 4); // returns 12
multiply(5, 6); // returns 30
multiply(0, 10); // returns 0

// Anonymous function example
setTimeout(function () {
  console.log("This is an anonymous function!");
}, 1000);

// example of an IIFE
(function () {
  console.log("This is an IIFE!");
})();

function substract() {
  return 3 - 2;
}

substract(); // returns 1

// Recursive function example
function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case: fibonacci of 0 is 0, fibonacci of 1 is 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
}

function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
