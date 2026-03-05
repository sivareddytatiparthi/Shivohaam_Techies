
 const obj={
    name:"devrathod",        
    age:28,

    myfun:function(){  
        console.log("my function:",this.name,"access name using this keyword");    
    },
    arr:[2,3,4],

    obj2:{
        city:"panjab",   
        country:"india",  
    },

    33:"number key ",          

 };

 console.log(obj.name);
 console.log(obj);
 console.log(obj.myfun);
 console.log(obj.obj2);
 console.log(obj.obj2.country);
 console.log(obj.arr[2]);



 // ways to create a objects 

 // 1.  first one literally create must casea this one is used 

//Object literal is the most common and recommended way to create objects in JavaScript. 
// It is simple, readable, and widely used in real-world applications.
//  It automatically inherits from Object.prototype and supports methods, arrays, and nested objects.


 const obj1={
    name:"shiva",
    age:22,          //siva reddy tatiparthi@gmail.come          
 };

 // 2.secound way using constructrs 

 //The Object constructor creates an empty object using the built-in Object function.
 //  It behaves the same as object literal but is less preferred because it is longer and less readable. 
 // In modern JavaScript, object literals are recommended instead.

 let obj2=new Object();
 obj2.name="mani";
 obj2.job="frasher role";


   // 3. Using Object.create() method

//Object.create(null) creates an object without a prototype. Unlike normal objects,
//  it does not inherit from Object.prototype, so it does not have built-in methods like toString or hasOwnProperty. 
// It is mainly used when we need a pure dictionary object without prototype inheritance.

      
       let obj3 =  Object.create(null);
       obj3.name ="siva";
       obj3.salasry=200000; 


       //// 4. Using ES6 Class Syntax

   //ES6 class syntax is a modern and structured way to create objects.
   //  It acts as a blueprint for creating multiple objects with similar properties and methods.
   //  It supports object-oriented programming concepts like encapsulation and inheritance,
   //  making it suitable for large-scale applications.    

       class student{
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        }
        introduce(){
            console.log(" hi my name is "   +  this.name + " i am  " +this.age +" i am studing " +this.course);
        }
       }

       let s1 = new student("shiva",22,"BCA");
       let s2 = new student("ravi",23 ,"MCA");

       s1.introduce();   
       s2.introduce();

       obj2.name="jagan mohanreddy"; // here i modified name 

       console.log(obj2);
       console.log(obj3);    
