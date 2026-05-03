// For loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 6){
        // console.log("This is 6 ");
    }
    // console.log(element);
}


for (let i = 1; i <=10; i++) {
    // console.log(`Outer Loop ${i}`);
    
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop ${j} inner loop ${i}`);
        // console.log(i+"*"+j+ "=" + i*j);
        
    };
}

let array = ["aditya", "rohan","something"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}



// break and continue


// for (let index = 1; index <=20 ; index++) {
//     if (index == 5){
//         console.log("5 is detected");
//         break 
        
//     }
//     console.log(`Value of i is ${index}`);
    
// }
for (let index = 1; index <=20 ; index++) {
    if (index == 5){
        console.log("5 is detected");
        continue
    }
    console.log( `Value of i is ${index}`);
    
}