// for of loop

// for (const element of object) {

// } 

const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
    
// }

// const str = "hello"

// for (const element of str) {
//     console.log(`Values are ${element}`);
    
// }


// Maps     // ordered and hold key value pairs
const map = new Map()
map.set("one","two")
map.set("three","four")
map.set("five","six")


// for (const [key,value] of map) {
//     console.log(key, ":-" , value);
    
// }

const obj = {
    "Gta": "Action",
    "NFS": "Racing"
}

// for (const [key,value] of obj) {                                 // will give an error
//     console.log([key,":-",value]);
    
// }   
   


// for in loop
// for (const key in object) {

// }

for (const key in obj) {
    // console.log(obj[key]);
    
}

for (const key in obj) {
    // console.log(key);
    
}



for (const key in obj) {
    console.log(`${key} :- ${obj[key]}`);    
}



// for (const key in arr) {
//     console.log(arr[key]);
    
// }



// for each


// arr.forEach(function (something) {
//     console.log(something);
    
// });


// arr.forEach(something => {
//    console.log(something);
    
// });


// function meprint(something){
//     console.log(something);
    
// }

// arr.forEach(meprint)



// arr.forEach((something,index,arr)=>{
//     console.log("Value:-",something,"Index:-",index,"Full array:-",arr);
    
// })



array = [{
    one: "something",
    two: "nothing"
},
{
    one: "eveyrthing",
    two: "none"
},
{
    one: "first",
    two: "last"
}]


array.forEach((ay)=>{
    console.log(ay.one);
    
})
