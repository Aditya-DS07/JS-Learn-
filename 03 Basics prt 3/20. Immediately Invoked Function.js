(function learn(){
    //  Named iife
    console.log(`DB connected`);
    
})();

( (name) => {
    console.log(`DB connected again, ${name}`);
} ) ("aditya");