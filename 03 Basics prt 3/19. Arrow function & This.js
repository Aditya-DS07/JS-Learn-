const user = {
    username: "aditya",
    age: 18,
    welcome: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this);
        
    }
}

// user.welcome()
// user.username = "rohan"
// user.welcome()


// console.log(this);



// function learn(){
//     let name = "adi"
//     console.log(this.name);
    
// }
// learn()

// const learn =  () => {
//     let name = "adi"
//     console.log(this.name);
    
// }
// learn()


// const add = (num1,num2)=> {
//     return num1+num2
// }
// console.log(add(1,2));


// const addnum = (num1,num2) => (num1+num2)

// const addname = (num1,num2) => ({username: "aditya"})

// console.log(addname());

 