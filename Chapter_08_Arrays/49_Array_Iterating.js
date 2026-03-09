//Iterate - Go from one to another -> traversing

let tests = ["login", "checkout", "search"];

//for...of(cleanest for values)
for (let test of tests) {
    console.log(test);
}
 
//forEach (no return value)

tests.forEach((test, index) => {
    
    console.log(`${index}: ${test}`);
});