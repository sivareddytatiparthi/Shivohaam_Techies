/* 

Two ways to integrate our JavaScript code into an HTML document:
1. Internal / Inline Scripting: Embedding JavaScript code directly within the HTML file using <script> tags.
2. External Scripting: Linking to an external JavaScript file using the <script> tag with the src attribute.    

Variables in JavaScript:

What is Variables => 
Variables are containers for storing data values. 
variables are basic unit of storage in a program.


Declaring Variables =>
In JavaScript, you can declare variables using three keywords: var, let, and const.

Types of Variables in JavaScript:

- var: Function-scoped variable. Can be re-declared and updated.
- let: Block-scoped variable. Can be updated but not re-declared within the same scope.
- const: Block-scoped constant. Cannot be updated or re-declared.

*/

// variableType variableName = variableValue
var city = "Indore"; // basic format

// Declaration & Intialization / Hoisting =>
// Hoisting = > it show the default behaviour of the variable before it's declartion and initialization

console.log(job1); // for Var =>  undefined ->  due to the global variable
//console.log(job2); // for Let =>  ReferenceError: Cannot access 'job2' before initialization
//console.log(job3); // for Const =>  ReferenceError: Cannot access 'job3' before initialization
// console.log(job4); // ReferenceError: job4 is not defined

var job1; // can be declred without initialization

console.log(job1); // undefined
job1 = "Data scientist"; // can be update and initialize after declaration

console.log(job1); // Data Scientist
job1 = "Devops Developer";

console.log(job1); // Devops Developer

let job2; // can be declred without initialization
console.log(job2); // undefined

job2 = "Frontend Developer"; // can be update and initialize after declaration
console.log(job2); // Frontend Developer

job2 = "Backend Developer";
console.log(job2); // Backend Developer

const job3 = "Software Engineer"; // can't be declred without initialization so, can't be update
console.log(job3); // Software Engineer

job3 = "Developer ";
// console.log(job3); // TypeError: Assignment to constant variable.


