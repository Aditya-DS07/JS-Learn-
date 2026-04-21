const accountId = 123423         // This is a const keyword, we cannot change this keyword after.
let accountEmail = "sampleemail@google.com"     // This is a let keyword , this keyword can be changed afterwards 
var accountPassword = "1092343"     // var was used in earlier days of JS,but we don't use var in modern JS because of issue in block and functional scope
accountCity = "Gurugram"    // We can declare a variable like this too, but it is not recommended as it makes the code hard to read
let accountState    // When we don't assign any value to a vairable , JS considers it as Undefined

// console.log(accountId); This will give an error 
console.log(accountId);
console.log(accountEmail);
console.log(accountCity);
console.log(accountState);


accountEmail = "sampleemail.yahoo.com"
accountPassword = "165379"
accountCity = "Delhi"
accountState = "Delhi"

console.table([accountEmail, accountId ,  accountPassword,accountCity,accountState])  // This will print all the contents in a tabluber form in the console 
