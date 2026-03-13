//Basic Function
/*function greet() {
    console.log("hello");
}
greet();

//With Argument no return type
function greetbyname(name) {
    console.log("hi", name);
}
greetbyname("Dhanya");
greetbyname("Divya");*/

//without Argument with return type
function sayHello() {
    return "Hello";
}

let relative = sayHello(); {
console.log(relative);
}

//with Arguments and with return

function sum(a, b) {
    return a+b;
}

let c = sum(20, 50);
    console.log(c);


//function as a experssion
const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob"));