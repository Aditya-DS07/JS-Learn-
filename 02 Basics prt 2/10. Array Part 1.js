//Array 

// const myarray = [0,1,2,43,2,3,2,"aditya",true]

const myarray = [0,1,3,43,2]
// const arr2 = ["aditya" , "rohan", "someone"]
// const arr = new Array(1,2,343,"aditya")

// Array Methods
// myarray.push(6);    //Adds the value at the end of the array
// myarray.pop()   //This will remove the last element 
// console.log(myarray);

// array=new Array(1,232,23,12,112)
// array.unshift(10)   //Adds a value ad the start of the array , but it is not recommended 
// array.shift()   // This removes the first element from the Array
// console.log(array)

// console.log(myarray.includes(21))    //This will check if the array included the given Number
// console.log(myarray.indexOf(3))      //This will give the index of the given number , if it is in the array   

// const newarray = myarray.join()
// console.log(typeof(myarray))
// console.log(typeof(newarray))   //Converted it to the String


console.log("a",myarray)

const myn1 = myarray.slice(1,4)
console.log(myn1)
console.log("b",myarray)

const myn2 = myarray.splice(1,4)
console.log(myn2)
console.log("m",myarray)