// Dates 

// let myDate = new Date()
// console.log(typeof(myDate))

// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


// let somedate = new Date(2023, 1, 21)
// console.log(somedate.toDateString());


let newdate = new Date("10-20-2007")
// console.log(newdate.toLocaleString())


// let mytime = Date.now()
// console.log(mytime)
console.log(Math.floor(Date.now()/1000))


console.log(new Date().toLocaleString('default',{
    weekday: "long",
    // timeZone: "GMT(5:30)"
}))