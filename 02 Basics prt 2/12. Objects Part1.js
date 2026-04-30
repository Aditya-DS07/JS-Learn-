
//Object Literals
const mysym = Symbol("key1")

const user= {
    name: "aditya",
    "something": "Something",
    age: 18,
    isLoggedIn: false,
    [mysym]: "mykey1",
    lastLoginDay : ["Monday"]
}

// console.log(user.name)
// console.log(user["name"])
// console.log(user["something"])
// console.log(user.something) 
// console.log(user[mysym])


user.name = "rohan"
console.log(user)


// Object.freeze(user)

user.name= "aditya"
console.log(user)


user.greeting = function(){
console.log("hello, user")
}
console.log(user.greeting);
user.greetingto = function(){
console.log(`hello,${this.name}`);
}
console.log(user.greetingto());

