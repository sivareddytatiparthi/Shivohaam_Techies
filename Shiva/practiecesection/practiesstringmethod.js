/*let myName ="sivareddy"
let phoneNembur="9642740991"
let myData=`myname is ${myName} my phone number ${phoneNembur}`;//string using badticks
console.log(myData);

let myNameUpper=myName.toUpperCase(); //uppercase using string
console.log("myname to upper;",myNameUpper);

let myNameLower=myName.toLowerCase();
console.log("myname to lower;",myNameLower); //using string to lower case

let myNameLength =myName.length;
console.log("cheking length os my name;",myNameLength);// knowing the length of string using legth method


// Accessing characters in a string
// -> Indexing (using square brackets)
// -> charAt() method


let myNameindex=myName[3];
console.log("index charector;",myNameindex);// knowing the index charector using index method 


let myNameChar=myName.charAt(2);
console.log("index;",myNameChar);// this one all so same but we using charAt method


// Extracting part of the string:-
// -> Slice Method (accepts negative indices)
// -> Substring Method (does not accept negative indices)
// -> Substr Method (deprecated) // Not recommended to use Avoid using this method


let myNameslice=myName.slice(3);
console.log("slice 1,2;",myNameslice); //sivareddy

let myNameSubstring = myName.substring(2, 7); // Using substring() method to extract a part of the string
console.log("Substring (2,7):", myNameSubstring);


// Removing parts of a string/Replace operations:-
// -> replace() method (replaces only first occurrence)
// -> replaceAll() method (replaces all occurrences)

// let replacedString = yourString.replace(searchValue, newValue);




let myNameReplace=myName.replace("va","si"); //replace method it replaces
console.log("replace method ;",myNameReplace);

let myNameReplaceAll=myName.replaceAll("d","s");// replace all method it replacess all words
console.log("replaceall method",myNameReplaceAll);



let ss="siva"
let mm="mani"
let concatString = ss+mm;
console.log("++ two names;",concatString); // using concotstring mix both





// Splitting and Joining strings:-
// -> split() method
// -> join() method (used with arrays)



let myDataa = "Shivohaam,25,Developer,India"; // Comma-separated values
let splitData = myDataa.split(","); // Using split() method to split string into an array
console.log("Split data array:", splitData);

let sivaJoin = splitData.join(" "); // Using join() method to join array elements into a string
*?console.log("Joined data string:", sivaJoin);  






let str = "javascript";

let reversed = str.split("").reverse().join("");

console.log("Reversed String:", reversed);


*/

let str = "javascript";

let reversed = str.split("").reverse().join("");

console.log("Reversed String:", reversed);



