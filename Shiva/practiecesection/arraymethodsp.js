  //const arr =[1,2,"shiva","reddy",5,6,true,null,undefined];





  //let s= arr.push(53); 

  //console.log("array push",arr,s);  //it add the aliment at last 

  //let s1 = arr.pop();// it removing the last alement 
  //console.log("array pop",arr,s1);                


  //let s2=arr.shift();
  //console.log("shift method",arr,s2);  //it removes the first aliment of the array

  //let s3 =arr.unshift("jagan");
  //console.log("unshift",arr,s3); // it adds the eliment at start of the array and increeses the lenth


  //let s4=arr.splice(3,2,"ggg","jjjj");                                
  //console.log("splice method array",arr,s4); // let varName = array.splice(startIndex , deleteCount , newItems) third param is optional


  //let s5 = arr.slice(2,5);
  //console.log("slice method in array",arr,s5); //varType varName = arrayName.slice(startIndex, endIndex)





  let newArr =[1,2,4,5,7,8,9,12,13,15,50,70,90,];

  let s6 = newArr.find((num) => num < 5);  // this is the find method in arrays  it checks one by one is any <5 it fist one not print others only prints only first conditions 

  console.log("find method in array",newArr,s6);




  let s7 = newArr.findIndex((num) => num < 4);    // this also checks one by one by conditions if conditions true it prints the fisrst index of the trued condition  

  console.log("findIndex method in array",newArr,s7);



  let s8 = newArr.some((num) => num <4); //Checks each element Returns true if at least one element matches the condition  Returns false if none match Stops after first match It does NOT return value It does NOT return value It does NOT return index It only returns true or false

  console.log("some method in arrray",newArr,s8);   




  let s9 = newArr.every((num) =>  num < 4); //Checks all elements one by one Returns true only if ALL elements match the condition  If even one element fails → returns false Stops immediately when it finds first failure / Returns only true / false

  console.log("every method in array",newArr,s9);


  let s10= newArr.fill(50,1,2);
  console.log("fill method",newArr,s10);



  //   higher order function.  { map , filter , reduce }

  // map 

  //fisrst
  let number =[1,2,3,4,5,6,];              // i take an other function as a argiment 

  let nweUpdate =number.map((number) => number *3); // here maltiplai array elements it create new array withod modifieng the current array 

  console.log("update numbers",number,nweUpdate) // dont need to write any loop or complex code we can we map function 



  // second 
  let age = [18,21,22,35,56,];

  let updatedAge = age.map((age) => age + 2); // here we updated age +2

  console.log("we updated age 2 :",age,updatedAge);       

  //third one 

  let name =["devanshish","mani","shiva","venky", "mahesh"];            

  let updatedNames= name.map((name) => name.toUpperCase()); 
  console.log("names updated",name,updatedNames);  


  //forth one 

  let money =[1000,300,6000,2500,];
  let tax =money.map((money) => money *10 / 100); // here is the cutyting the tax
  console.log("increese tax 10%",money,tax);

   



 //here i incresed the marks     
  let students = [
  { name: "siva", marks: 70 },
  { name: "ram", marks: 80 },
  { name: "krishna", marks: 90 }     
];

let marks =students.map((students) => students.marks + 6);
console.log("only marks updated",students,marks);


// sixth one

let users = [
  { name: "siva", age: 22 },
  { name: "ram", age: 17 },    
  { name:"dev", age:16},
  { name: "mani" ,age: 25},
  { name:"venky",age:30}

];

let siva = users.map((user) => ({ user,status: user.age >= 18 ? "Adult" : "Minor"}));
console.log("it prints minour or adult ",users,siva);    



let sivaArr = [1,3,4,9,20,40,50,30];

let arrsiva= sivaArr.filter((sivaArr)=> sivaArr > 9).map((sivaArr )=> sivaArr *2)

console.log("i used both filter and map",sivaArr,arrsiva);


// reduce method 

let reduceArr =[20,30,40,50,60];

let arrreduce=reduceArr.reduce((acc , curr) => acc + curr); // here we get total result 
console.log("reduce total",reduceArr,arrreduce);



//we finding the largest number 
let numbers =[20,30,55,67,85];

let large =numbers.reduce((acc ,curr)=> acc > curr ? acc : curr);
console.log("we get large number",numbers,large) 


// we get minimum number in the array 
let dev =[6,5,7,2,20,55,78,98,20,33,4,];
let devArr=dev.reduce((acc,curr)=>acc < curr ? acc:curr);
console.log("we get minimum value",dev,devArr);
