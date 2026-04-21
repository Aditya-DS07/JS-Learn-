"use strict";   //By using this , all the JS code in this file will be treated strictly as a newer version of JS by the engine , however we don't need to write this as the engine by default uses strict mode

// alert("Hello")   // THis will throw an error when we try to run this in console, but if we run this in browser/linking index file , it will run perfectly 

/*
Types of Datatypes in JS
1. Strings : "abcd"
2. integer : 12  (has a limit of 2^(53) )
3. bigint : Used for larger numbers
4. Boolean : true/false
5. Null : Standalone value (A representation of an Empty value)
6. Undefined : When Value is not defined 
7. symbol : used to define something unique (Eg components in React / Figma etc )

*/


let name = "Aditya"  //String
let age  = 18  // integer 
let isLoggedIn = false   //Boolean 
let something = null
let nothing 

console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof age);
console.log(typeof something);
console.log(typeof nothing);

