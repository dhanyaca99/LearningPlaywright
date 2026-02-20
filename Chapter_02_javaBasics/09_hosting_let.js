//console.log(username);
//console.log("dhanya");
//console.log("divya");
//let username="John";
//SyntaxError: Identifier 'username' has already been declared


let x= "global";

if(true)
{
    //console.log(x);
    let x = "block";
    console.log(x);
}
console.log(x);