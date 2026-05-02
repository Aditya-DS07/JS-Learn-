let a = 20      // global scope
if (true) {
    let a = 1       // Block scope
    const b = 2    
    console.log(a)
}
console.log(a);
