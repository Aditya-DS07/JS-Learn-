// const  score = 300 
// console.log(score)
 
// const balance = new Number(2000)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(1))

// const  newnumber = 23.46432345
// console.log(newnumber.toPrecision(3))   // Basically used to round off the numbers

// const number = 1000000
// console.log(number.toLocaleString())


// *****************************************************************  MATHS  *****************************************************************


console.log(Math);
console.log(Math.abs(-422));    //Changes the sign of only negative values
console.log(Math.round(332.72));    //roundes off the number using default value 
console.log(Math.ceil(3.2));      // Also Rooundes off a number but you control after how much value it should round off... ceil takes the top value
console.log(Math.floor(4.2));   //same as ceil but takes the lowest value

console.log(Math.min(23,232,21,311));  // Gives the minimum value
console.log(Math.max(23,232,21,311));  // Gives the Max value

console.log(Math.random())  //Gives Random value between 0 & 1
console.log((Math.random()*10)+1)   //gives the value between 0 & 10 cause we have multiplied with 10, +1 is used to avoid 0 


const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min)+1)+min)      // Same as before but here we are taking the numbers between min  and max, and +min is added so that we get values only above the min value,,, also the as we learned before the Math.floor functions gives the minimum value ... hence it gives whole numbers instead of integers