const marvelheros = ["thor","ironman","hulk","captain"]
const dcheros = ["superman","batman","flash"]

// marvelheros.push(dcheros)
// console.log(marvelheros);

// all = marvelheros.concat(dcheros)    
// console.log(all)


// all = [...marvelheros,...dcheros]        //spread 
// console.log(all)         

const arrayy = [1,2,3,343,[12,2323,[32323,434343,[33,3,21,2,34]]]]


const  all = arrayy.flat(Infinity)
// console.log(all);



console.log(Array.isArray("aditya"))
console.log(Array.from("aditya"))
console.log(Array.from({name:"Aditya"}))    



let score1 =200
let score2 =100
let score3 =400
let score4 =500


console.log(Array.of(score1,score2,score3,score4))