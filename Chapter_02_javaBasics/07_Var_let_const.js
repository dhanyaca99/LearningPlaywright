//var - Function scoped
var a=10; //Global scope
console.log(a);

//Definition of function
function test()
{
    console.log("Welcome to JavaScript");
    var a=20; //Local scope
    console.log(a);
    if(true)
    {
        var a=30; //Local scope
        console.log(a);
    }
    console.log(a);
 }
  //calling the function
test();



//let - Block scoped
let b=20; //Global scope
console.log(b);

//Definition of function
function test1()
{
    console.log("Welcome to JavaScript11");
    let b=40; //Local scope
    console.log(b);
    if(true)
    {
        let b=50; //Local scope
        console.log(b);
    }
    console.log(b);
 }
//calling the function
test1();