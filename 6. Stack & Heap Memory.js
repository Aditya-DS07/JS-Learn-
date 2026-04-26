//  Stack  memory is used to store Primitive Datatypes
//  Heap memory is used to store Non-Primitive Datatypes


// Stack Memory 
    // when stack memory is used / called , it generated the copy of the original value 
    let name  = "aditya"
    let name2 = name        // here the value given to name2 is a copy of name , it means if we change the value of name2 , the orginal name value will not be altered and 
    console.log(name)
    console.log(name2)



// Heap Memory
    // when heap memory is used / called , it generates a Reference of the original value
    let aditya = {
        email: "123@gmail.com",
        password: "123223"
    }
    let adi = aditya        // here the value given to adi is a Reference of aditya , which means if we change the value of adi , the change will also be altered in aditya

    adi.email = "456@gmail.com"

    console.log(aditya.email)
    console.log(adi.email)