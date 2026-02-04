
// if and else condition 
let age = 55;

if(age >=18) {

    console.log("you are eligible to vote ");
}
else if(age < 18 && age > 0){

 console.log("your not eligible to vote");
}


// nested if-else means === if inside if 

let num=45;
if(num > 0){
    if(num % 2 === 0){
        console.log(num +"is  positive even number");

    }
    else{
        console.log(num+"is a positive odd number");
    }
}else{
    console.log(num+"number is not number");
}



//switch condition 
let month = 4;
let monthName;
switch(month){
    case 1:
        monthName = "january"; 
        break;
        case 2:
        monthName = "february"; 
        break;
        case 3:
        monthName = "march"; 
        break;
        case 4:
        monthName = "april"; 
        break;
        case 5:
        monthName = "may"; 
        break;
        case 6:
        monthName = "june"; 
        break;
        case 7:
        monthName = "july"; 
        break;
        case 8:
        monthName = "august"; 
        break;
        case 9:
        monthName = "september"; 
        break;
        case 10:
        monthName = "octomber"; 
        break;
        case 11:
        monthName = "november"; 
        break;
        case 12:
        monthName = "december"; 
        break;

        default:

console.log("not a list of the month u entered");
}
console.log(monthName);


// using ternary operatoe

let a = 23;
let b = 20;
 
 let result = a > b ? "a is bigg" : "b is biig"
 console .log(result);


 let c = 20;
let d = 11;

let results = c < d ? "FIRST" : "SECOND";
console.log(results);


//using spread operator 

let arry1 = [1,2,4, 5, ];
let arr2 =[0,...arry1,6,7,8];

console.log(arr2);


// knowing the type of varible value using {typeof} method 
let si  ={ name:"shiva",age:"22",};
console.log("instance types",typeof si);

let s1="siva"
console.log("type of s1",typeof s1);

let age1 =22;
console.log("type of age1",typeof age1);

let cgpa =79.05;
console.log("type of cgpa",typeof cgpa);

let pno =9642740991;
console.log("type of pno",typeof pno);

 g = true;
console.log("type of b",typeof g);

h = null;
console.log("type of null",typeof null);

hh = undefined;
console.log("type of hh",typeof hh);

zz=Symbol("ss");
console.log("type of zz",typeof zz);





