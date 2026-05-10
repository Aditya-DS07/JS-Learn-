const numbers = [1,2,3,4]
// let sums = numbers.reduce((total,current)=>{
    // console.log(`total: ${total}, current: ${current}`);
    
    // return total+current 
// },0)
// console.log(sums);


let fruits = [
{
    item: "1Kg Apple",
    price: 100
},
{
    item:"2kg Mango",
    price: 200
},
{
    item: "1kg Oranges",
    price: 70
}
]

let totalprice = fruits.reduce((sums, fruit)=>{
    return sums+fruit.price
},0)
console.log(`Your Cart Price is: $${totalprice}`);
