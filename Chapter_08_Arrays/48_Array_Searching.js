// Searching

let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail");
results.indexOf("skip");

//lastindex
results.lastIndexOf("fail");

//includes - returns boolean
results.includes("error"); //true
results.include("skip"); //false

//find - returns first matching element

let nums = [10, 20, 30, 40];
nums.find(x => x > 20); // 30
nums.findIndex(n => n > 20); //2

nums.findLast(n => n > 30); //40
nums.findLastIndex(n => n > 30) //3

