let numbers = [1,2,3,4,5,6,7,8,9,10]

// let something = numbers.map((num)=>{
//     return num+10
// })
// console.log(something);


// numbers.forEach((num)=>{
//     console.log(num+10)
// })

let something = numbers.map((num)=>{                //chaining
    return num*10
}).map((num)=>{
    return num+1
}).filter((num)=>{
    return num>20
})

console.log(something);

