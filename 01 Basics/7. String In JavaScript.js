const name = "Aditya " 
const repocount = 50
console.log(name+repocount); // Not Recommended 

console.log(`Hello My name is ${name} and my total repositories are ${repocount}`);   // Better and more readable ..... this method is known as string interpolation 


const  gameName  = new String("Call Of Duty")  // this is how you declare a string
console.log(gameName)
console.log(gameName[0]);  // This will give the xharacter at index 0 

console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))

const newstring = gameName.substring(0,4)   // Cannot use Negative Value 
console.log(newstring) 


const secondstring = gameName.slice(-4);  // Can use Negative values
console.log(secondstring);

const thirdsting = "        Aditya         "
console.log(thirdsting)
console.log(thirdsting.trim())

const url = "https://aditya%20github.io.com"
console.log(url.includes("aditya"))     // Will return True is it is available
console.log(url.replace("%20","-"))

const something = "Java-Scipt-is-a-language"
console.log(something.split("-"))