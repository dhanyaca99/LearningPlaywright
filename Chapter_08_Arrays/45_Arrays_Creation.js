// let fruits = [];   //Empty array
// let arr = [0,1,2,3,4];


let test = Array.of(10,20,30,40,50);
console.log(test[0]);

let chars = Array.from("hello");  //["h", "e", "l", "l", "o"]
console.log(chars);

//Accessing & modifying
let statuses = ["pass", "Fail", "skip"];
console.log(statuses.at(-1));  //last element

//Modify
statuses[1] = "blocked";
console.log(statuses);

//length
console.log(statuses.length);


