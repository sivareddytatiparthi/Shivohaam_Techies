// writing a polodrama progam //Write a program to check whether a given string is a palindrome or not.//

let vv ="madam"
let mm=""

for(let i =vv.length -1; i>=0 ; i--){
    mm +=vv[i];
}
if (vv===mm){
    console.log("poli");
}
else{
    console.log("not poli");
}



//poli number  

let rr = 121;
let str = rr.toString();
let ss = "";

for (let i = str.length - 1; i >= 0; i--) {
    ss += str[i];
}

if (str === ss) {
    console.log("poli");
} else {
    console.log("not poli");
}


//  for loop

const men = { name: "shiva",age: 22, city: "palnadu"};  

for(let key in men){
    console.log(key + ": " + men[key]);
}


const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});


const fruitt = ["apple", "banana", "cherry"];

fruits.forEach((fruitt, index) => {
    console.log(index + 3, fruitt);
});





let ravi="level"
let mani=""
for (let i=ravi.length -1;i>=0;i--){
    mani +=ravi[i];
}
if(ravi===mani){
    console.log("poli succesfull");
}
else {
    console.log("poli not successfull");
}

