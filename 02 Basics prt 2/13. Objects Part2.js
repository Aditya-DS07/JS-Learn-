const user  = {}

user.id ="someid123"
user.name = "aditya"
user.isLoggedIn = false

// console.log(user);


const user2 = {
    email:"something@gmail.com",
    fullname: {
        username:{
            user:"name",
            age: 18
        }
    }

}

// console.log(user2.fullname.username.user)


const obj1 = {1:"1", 2:"2",3:"3"}
const obj2 = {4:"a", 5:"b",6:"c"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


const obj3 = {...obj1,...obj2}
// console.log(obj3);



const manyusr= [
    {
        id:"1",
        email: "example@email.com"
    }
]

console.log(user);
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))



console.log(user.hasOwnProperty("isLogged"))
