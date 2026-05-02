// function myname(){
//     console.log("a");
//     console.log("d");
//     console.log("i");
//     console.log("t");
//     console.log("y");
//     console.log("a");
// }


// myname() 

function addnum(num1,num2){
    return num1+num2
}

const answer = addnum(1,2)

// console.log(answer);


// function loginmsg(username){
//     return `${username} just logged in`
// }
// console.log(loginmsg("adityav "))


function loginmsg(usrname){
    if(!usrname){
        console.log("PLease Enter a Username: ")
        return 
    }
    return `${usrname} just logged in`
}


console.log(loginmsg())